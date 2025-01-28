import React from "react";
import Card from "../Card";

const CardGrid = ({ products }) => {
  return (
    <main className="w-full pl-6">
    <div className="grid grid-cols-5 gap-2">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
    </main>

  );
};

export default CardGrid;
