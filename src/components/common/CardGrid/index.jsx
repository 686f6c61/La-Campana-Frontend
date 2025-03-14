import React from "react";
import ProductCard from "../../common/ProductCard"
const CardGrid = ({ products, smCol, lgCol }) => {

  if (lgCol > 5) {
    smCol = 5
  }
  return (
    <main className="w-full">
      <div className={`columns-${smCol} p-[4px] lg:columns-${lgCol}`}>
        {products.map((product) => (
          <ProductCard
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </div>
    </main>

  );
};

export default CardGrid;
