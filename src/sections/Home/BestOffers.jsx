import React, { useEffect, useState } from "react";
import ActionButton from "../../components/common/ActionButton";
import CardsCarousel from "../../components/common/CardsCarousel";
import ProductCard from "../../components/common/ProductCard";
import chunkArray from "../../helpers/chunkArray";
import { useGetProductsByTextQuery } from "../../store/reducers/apiSlice";
import categories from "../../utils/categories";

const MAX_RETRIES = 3;

const BestOffers = () => {
  const { data: products, error, isLoading, refetch } =
    useGetProductsByTextQuery("perfil");

  const [retryCount, setRetryCount] = useState(0);

  const category = categories.find((cat) => cat.id === "perfil");
  const [categoryImage, setCategoryImage] = useState(category?.image || "");

  useEffect(() => {
    if (error && retryCount < MAX_RETRIES) {
      setRetryCount((prev) => prev + 1);
      refetch();
    }
  }, [error, retryCount, refetch]);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  const chunkedProducts = chunkArray(products, 2);

  return (
    <section className="relative overflow-hidden py-20 px-4 tablet:px-6">
      <div className="relative z-10 max-w-screen-desktop mx-auto flex flex-col gap-8">
        <header className="text-center">
          <h2 className="text-3xl font-bold">
            Las mejores <span className="text-lacampana-red2">ofertas</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit
          </p>
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
            text="Explorar todas las ofertas"
            styles="text-center mt-5"
            link="/tienda"
          />
        </section>
      </div>
    </section>
  );
};

export default BestOffers;
