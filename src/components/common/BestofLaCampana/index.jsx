import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../../store/reducers/apiSlice";
import CardGrid from "../CardGrid";

const MAX_RETRIES = 3; // Límite de reintentos

const BestOfLaCampana = () => {
  const { data, error, isLoading, refetch } = useGetProductsQuery();
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (error && retryCount < MAX_RETRIES) {
      setRetryCount(prev => prev + 1);
      refetch();
    }
  }, [error, retryCount, refetch]);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold font-antonio mb-8">
          Lo mejor de la <span className="text-red-600">campana</span>
        </h2>
        <CardGrid
          products={data.slice(0, 5).map((product) => ({
            id: product.TreeCode,
            image: product.image || "images/notfound.jpg",
            title: product.ProductDescription,
            price: `$${product.ProductPrice}`,
            discount: product.discount || "-",
          }))}
        />
        <div className="text-center mt-8">
          <button className="my-bg-primary text-white font-bold px-6 py-3 rounded-full">
            Ver más productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestOfLaCampana;
