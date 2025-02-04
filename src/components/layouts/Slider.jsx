import React from "react";
import CardGrid from "../common/CardGrid";
import Card from "../common/Card";

const Ofertas = () => {
  const products = [
    {
      id: 1,
      image: "/images/prod1.jpg",
      title: "Producto 1",
      price: "$5,795.00",
      discount: "-20%",
    },
    {
      id: 2,
      image: "/images/prod1.jpg",
      title: "Producto 2",
      price: "$5,245.00",
      discount: "-20%",
    },
    {
      id: 3,
      image: "/images/prod3.jpg",
      title: "Producto 3",
      price: "$5,995.00",
      discount: "-20%",
    },
    {
      id: 4,
      image: "/images/prod4.jpg",
      title: "Producto 4",
      price: "$5,995.00",
      discount: "-20%",
    },
    {
      id: 5,
      image: "/images/prod5.jpg",
      title: "Producto 5",
      price: "$5,995.00",
      discount: "-20%",
    },
    {
      id: 6,
      image: "/images/prod1.jpg",
      title: "Producto 6",
      price: "$5,795.00",
      discount: "-20%",
    },
    {
      id: 7,
      image: "/images/prod7.jpg",
      title: "Producto 7",
      price: "$5,245.00",
      discount: "-20%",
    },
    {
      id: 8,
      image: "/images/prod8.jpg",
      title: "Producto 8",
      price: "$5,995.00",
      discount: "-20%",
    },
    {
      id: 9,
      image: "/images/prod7.jpg",
      title: "Producto 9",
      price: "$5,995.00",
      discount: "-20%",
    },
    {
      id: 10,
      image: "/images/prod4.jpg",
      title: "Producto 10",
      price: "$5,995.00",
      discount: "-20%",
    },
  ];

  return (
    <section className="bg-white py-12">
      {/* Título */}
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl font-bold font-anton text-gray-800">
          Las mejores <span className="text-lacampana-red1">ofertas</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Descubre nuestras promociones destacadas y aprovecha grandes descuentos en productos seleccionados.
        </p>
      </div>

      {/* Productos */}
      <div className="container mx-auto px-4">
        <CardGrid products={products} />
      </div>

      {/* Botón */}
      <div className="text-center mt-10">
      <button className="bg-lacampana-red2 font-montserrat text-white md:w-[270px] w-[300px] h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-md">
          Explorar todas las ofertas
        </button>
      </div>
    </section>
  );
};

export default Ofertas;
