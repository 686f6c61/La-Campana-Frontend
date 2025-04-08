import React, { useEffect, useState } from "react";
import { useGetProductsByTextQuery } from "../../../store/reducers/apiSlice";

import CardGrid from "../CardGrid";
import ActionButton from "../../common/ActionButton";

const MAX_RETRIES = 3; // Límite de reintentos

const BestOfLaCampana = () => {
  const { data, error, isLoading, refetch } =
    useGetProductsByTextQuery("tuberia");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (error && retryCount < MAX_RETRIES) {
      setRetryCount((prev) => prev + 1);
      refetch();
    }
  }, [error, retryCount, refetch]);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <section className="max-w-screen-desktop w-full justify-self-center mx-auto bg-white">
      <div className="px-4 flex flex-col items-center justify-center mb-20">
        <h2 className="text-center text-3xl font-bold font-antonio mb-8">
          Lo mejor de la <span className="text-red-600">campana</span>
        </h2>
        <div className="hidden lg:block">
          <CardGrid
            products={data.slice(0, 5).map((product) => ({
              id: product.ItemsGroupCode,
              image: product.image || "images/prod4.jpg",
              name: product.ItemName,
              price: "29,99",
              discount: product.discount || "-",
            }))}
            smCol="2"
            lgCol="5"
          />
        </div>
        <div className="lg:hidden">
          <CardGrid
            products={data.slice(0, 4).map((product) => ({
              id: product.ItemsGroupCode,
              image: product.image || "images/prod4.jpg",
              name: product.ItemName,
              price: "29,99",
              discount: product.discount || "-",
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
