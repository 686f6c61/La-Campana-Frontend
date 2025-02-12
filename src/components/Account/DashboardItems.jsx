import React from "react";
import { Link } from "react-router-dom";

const DashboardItems = ({ items, onItemClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8">
      {items.map((item) => (
        <Link
          to={item.link}
          key={item.id}
          onClick={() => onItemClick(item.id)}
          className="flex flex-col items-center justify-center bg-lacampana-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all min-h-[220px] min-w-[240px] cursor-pointer"
        >
          <img
            src={item.imgSrc}
            alt={item.text}
            className="w-16 h-16 object-contain"
          />
          <p className="text-lacampana-gray1 font-medium mt-4 text-2xl font-antonio text-center">
            {item.text}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default DashboardItems;
