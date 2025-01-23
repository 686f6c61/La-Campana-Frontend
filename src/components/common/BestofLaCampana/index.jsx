import React from "react";
import { useGetProductsQuery } from '../../../store/reducers/apiSlice';



const BestOfLaCampana = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  console.log(data)
  

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold font-antonio mb-8">
          Lo mejor de la <span className="text-red-600">campana</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {data.slice(0, 5).map((product) => (
            <div
              key={product.TreeCode}
              className="bg-white border rounded-lg shadow-md overflow-hidden"
            >
              {/* Discount */}
              <div className="bg-gray-200 text-gray-800 text-xs px-2 py-1 absolute">
                {product.discount}
              </div>
              {/* Image */}
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src="images/notfound.jpg"
                  alt={product.ProductDescription}
                  className="object-contain h-full"
                />
              </div>
              {/* Details */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-800 mb-2">
                  {product.ProductDescription}
                </h3>
                <p className="text-lg font-bold text-red-600">{product.ProductPrice}</p>
                <p className="text-sm text-gray-500">{product.ProductDescription}</p>
              </div>
            </div>
          ))}
        </div>
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
