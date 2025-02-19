import React from "react";
import { Link } from "react-router-dom";

const DashboardItems = ({ items, onItemClick }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:gap-x-3 gap-x-24 gap-y-6 sm:gap-x-5 sm:gap-y-8 w-full transform -translate-x-10">
      {items.map((item) => (
        <Link
          to={item.link}
          key={item.id}
          onClick={() => onItemClick(item.id)}
          className="flex flex-col items-center justify-center bg-lacampana-white 
                     p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all
                     min-h-[150px] sm:min-h-[180px] md:min-h-[220px]
                     min-w-[140px] sm:min-w-[180px] md:min-w-[200px] cursor-pointer"
        >
          <img
            src={item.imgSrc}
            alt={item.text}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
          <p className="text-lacampana-gray1 font-medium mt-2 sm:mt-3 md:mt-4 
                        text-lg sm:text-xl md:text-2xl font-antonio text-center">
            {item.text}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default DashboardItems;
