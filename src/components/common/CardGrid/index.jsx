import React from "react";
import ProductCard from "../../common/ProductCard";

const CardGrid = ({
  products,
  smCol = 2,
  lgCol = 4,
  productImage = "/images/prod1.png"
  }) => {
  // Asegurar que los valores sean válidos para Tailwind
  const safeSmCol = Math.min(smCol, 6);
  const safeLgCol = Math.min(lgCol, 6);
  const className = `grid grid-cols-${safeSmCol} lg:grid-cols-${safeLgCol} gap-4`

  return (
    <main className="w-full">
      <div className={className}>
        {products.map((product) => (
          <div key={product.id} className="h-full">
            <ProductCard
              id={product.ItemCode}
              name={product.ItemName}
              image={product.image || productImage}
              price={product.ItemPrices}
              discount={product.discount}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default CardGrid;