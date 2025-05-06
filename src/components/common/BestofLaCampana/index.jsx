import React, { useEffect, useState } from "react";
import { useGetProductsByTextQuery } from "../../../store/reducers/apiSlice";
import categories from "../../../utils/categories";

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

  
  return (
    <section className="max-w-screen-desktop w-full justify-self-center mx-auto bg-white "> 
      <div className="px-4 flex flex-col items-center justify-center mb-20">
      <div className="fixed top-0 right-0 h-full w-[20vw] bg-gradient-to-l from-[#ff0000]/10 via-[#ff0000]/5 to-transparent z-0 pointer-events-none" />
        <h2 className="text-center text-3xl font-bold font-antonio mb-8">
          Lo mejor de la <span className="text-red-600">campana</span>
        </h2>
        <div className="hidden lg:block">
          <CardGrid
            products={filteredProductLg.map((product) => ({
              ItemCode: product.ItemCode,
              image: categoryImage || "images/prod4.jpg",
              ItemName: product.ItemName,
              ItemPrices: product.ItemPrices,
              discount: product.discount,
            }))}
            smCol="2"
            lgCol="5"
          />
        </div>
        <div className="lg:hidden">
          <CardGrid
            products={filteredProductSm.map((product) => ({
              id: product.ItemCode,
              image: categoryImage || "images/prod4.jpg",
              name: product.ItemName,
              price: product.ItemPrices,
              discount: product.discount,
            }))}
            smCol="2"
            lgCol="5"
          />
        </div>
        <ActionButton
          styles="text-center mt-10"
          text="Ver más productos"
          link="/tienda"
        />
      </div>
    </section>
  );
};

export default BestOfLaCampana;
