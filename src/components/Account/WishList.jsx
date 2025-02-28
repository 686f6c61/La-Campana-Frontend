import React, { useState } from "react";
import wishlistProducts from "../../data/wishlistData";

const WishList = () => {
  const [products, setProducts] = useState(wishlistProducts);

  const handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold text-lacampana-gray1 mb-4 sm:mb-6 font-antonio text-left">
        Lista de deseos
      </h2>

   
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 p-2 sm:p-4 rounded-lg shadow-md relative max-w-xs sm:max-w-sm mx-auto"
          >
            <h1 className="text-xs sm:text-sm font-montserrat font-semibold">Remover</h1>
            <button
              onClick={() => handleRemoveProduct(product.id)}
              className="absolute top-2 right-2 text-red-500 text-xs sm:text-sm font-bold"
            >
              X
            </button>

          
            <div className="absolute top-8 left-2 bg-gray-200 text-gray-700 text-xs sm:text-sm font-bold py-1 px-2 rounded">
              {product.discount}
            </div>

           
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-28 sm:h-36 object-contain rounded-lg mb-2 sm:mb-4"
            />

            
            <h3 className="text-gray-800 font-semibold text-sm sm:text-lg mb-1 sm:mb-2">
              {product.name}
            </h3>

           
            <p className="text-gray-600 text-xs sm:text-sm">Desde</p>
            <p className="text-black font-bold text-sm sm:text-lg font-Montserrat">
              {product.price}
            </p>
            <p className="text-gray-500 text-xs">IVA incluido</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
