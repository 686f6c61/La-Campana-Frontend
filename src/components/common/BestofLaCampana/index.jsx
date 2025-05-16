import React, { useEffect, useState } from "react";
import { useGetProductsByTextQuery } from "../../../store/reducers/apiSlice";
import categories from "../../../utils/categories";
import CardsCarousel from "../CardsCarousel";
import chunkArray from "../../../helpers/chunkArray";
import ProductCard from "../ProductCard";

import CardGrid from "../CardGrid";
import ActionButton from "../../common/ActionButton";

const MAX_RETRIES = 3; // Límite de reintentos

const BestOfLaCampana = () => {
  const { data: products, error, isLoading, refetch } =
    useGetProductsByTextQuery("tuberia");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (error && retryCount < MAX_RETRIES) {
      setRetryCount((prev) => prev + 1);
      refetch();
    }
  }, [error, retryCount, refetch]);

  const category = categories.find(cat => cat.id === "tuberia");
  const [categoryImage, setCategoryImage] = useState(category?.image || "")

  const filteredProductLg = products && products?.slice(0, 5)
  const filteredProductSm = products && products?.slice(0, 4)

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;
  const chunkedProducts = chunkArray(products, 2);

  return (
    <section className="relative overflow-hidden py-20 px-4 tablet:px-6">
      <div className="relative z-10 max-w-screen-desktop mx-auto flex flex-col gap-8">
        <header className="text-center">
          <h2 className="text-3xl font-bold">
            Lo mejor de  <span className="text-lacampana-red2">La Campana</span>
          </h2>
        </header>

        <section className="flex flex-col gap-8 items-center">
          {/* Carrusel mobile */}
          <div className="tablet:hidden w-full">
            <CardsCarousel
              id="best-offer-carousel-item"
              cardsList={chunkedProducts}
              justifyValue="center"
              latestBlogs={true}
            >
              {chunkedProducts.map((chunk, index) => (
                <ul
                  key={`carousel-slide-${index}`}
                  id={`best-offer-carousel-item-${index}`}
                  className="carousel-item w-full h-[350px] tablet:h-[420px]"
                >
                  {chunk.map((product) => (
                    <li key={product.ItemCode} className="w-1/2 p-2">
                      <ProductCard
                        id={product.ItemCode}
                        name={product.ItemName}
                        image={categoryImage || "images/prod4.jpg"}
                        price={product.ItemPrices}
                        discount={product.discount}
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </CardsCarousel>
          </div>

          {/* Vista en grilla desktop */}
          <ul className="hidden tablet:grid grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-5 gap-4">
            {products.slice(0, 5).map((product) => (
              <li key={product.ItemCode}>
                <ProductCard
                  id={product.ItemCode}
                  name={product.ItemName}
                  image={categoryImage}
                  price={product.ItemPrices}
                  discount={product.discount}
                />
              </li>
            ))}
          </ul>

          <ActionButton
            text="Ver más productos"
            styles="text-center mt-5"
            link="/tienda"
          />
        </section>
      </div>
    </section>
  );
};

export default BestOfLaCampana;
