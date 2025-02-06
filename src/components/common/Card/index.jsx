import React from "react";

const Card = ({ product }) => {
    return (
      <div className="relative w-full  rounded-b-[25px] bg-gray-100">
      <div className="relative">
        <img src={product.image} alt={product.name} className="p-[6px] w-full h-[227px]" />
        <span className="absolute top-2 left-2 bg-gray-200 font-open-sans text-black text-sm px-2 py-1 rounded">
          {product.discount}
        </span>
      </div>
      <h2 className="text-sm font-bold mt-2">{product.name}</h2>
      <p className="text-lg text-gray-700 mt-1">{product.price}</p>
      <p className="text-xs text-gray-500">IVA incluido</p>
    </div>
      );
    };


export default Card;
