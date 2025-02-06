import React from "react";
import Card from "../Card";
import clsx from "clsx";

const CardGrid = ({ products, smCol, lgCol }) => {

  if (lgCol > 5) {
    smCol = 5
  }
  return (
    <main className="w-full pl-6">
    <div className={clsx(`columns-${smCol} p-[4px] lg:columns-${lgCol}`)}>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
    </main>

  );
};

export default CardGrid;
