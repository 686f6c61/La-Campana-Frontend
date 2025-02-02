import React, { useState } from "react";

const WishList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Tubo Mueble Cuadrado Esp 1.10 un 3/4 Primera - Norma Ntc 1986",
      price: "$19.693",
      discount: "-20%",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
      price: "$2.386.483",
      discount: "-20%",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Marco Ventana Corriente Esp 1.00 un 6.00 mt Primera",
      price: "$32.516",
      discount: "-20%",
      image: "https://via.placeholder.com/150",
    },
  ]);

  const handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-lacampana-gray1 mb-6 font-antonio">
        Lista de deseos
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md relative"
          >
            {/* Botón para eliminar */}
            <button
              onClick={() => handleRemoveProduct(product.id)}
              className="absolute top-2 right-2 text-red-500 text-sm font-bold"
            >
              X
            </button>

            {/* Descuento */}
            <div className="absolute top-2 left-2 bg-gray-200 text-gray-700 text-xs font-bold py-1 px-2 rounded">
              {product.discount}
            </div>

            {/* Imagen del producto */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />

            {/* Nombre del producto */}
            <h3 className="text-gray-800 font-semibold text-sm mb-2">
              {product.name}
            </h3>

            {/* Precio */}
            <p className="text-gray-600 text-sm">Desde</p>
            <p className="text-red-500 font-bold text-lg">{product.price}</p>
            <p className="text-gray-500 text-xs">IVA incluido</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
