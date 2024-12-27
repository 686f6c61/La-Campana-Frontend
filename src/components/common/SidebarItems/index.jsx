import React from 'react';

const SidebarItems = ({ category }) => {
  return (
    <div className="absolute left-full top-0 w-64 bg-white shadow-lg z-10">
      <nav>
        {category.subcategories.map((subcategory, index) => (
          <div
            key={index}
            className="px-4 py-2 text-gray-700 hover:bg-grey-300 cursor-pointer"
          >
            {subcategory}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SidebarItems;