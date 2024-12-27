import React, { useState } from 'react';
import SidebarItems from '../SidebarItems';

const Sidebar = ({ onClose }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: "drywall",
      name: "Perfiles Drywall",
      subcategories: ['Sub 1.1', 'Sub 1.2', 'Sub 1.3'],
    },
    {
      id: "ornamentacion",
      name: "Perfiles Ornamentación",
      subcategories: ['Sub 2.1', 'Sub 2.2', 'Sub 2.3'],
    },
    {
      id: "tejas",
      name: "Tejas y Cubiertas",
      subcategories: ['Sub 3.1', 'Sub 3.2', 'Sub 3.3'],
    },
    {
      id: "tuberias",
      name: "Tuberías",
      subcategories: ['Sub 3.1', 'Sub 3.2', 'Sub 3.3'],
    },
    {
      id: "vigas",
      name: "Vigas y Perfiles",
      subcategories: ['Sub 3.1', 'Sub 3.2', 'Sub 3.3'],
    },
    {
      id: "entrepisos",
      name: "Entrepisos",
      subcategories: ['Sub 3.1', 'Sub 3.2', 'Sub 3.3'],
    },
    {
      id: "laminas",
      name: "Láminas",
      subcategories: ['Sub 3.1', 'Sub 3.2', 'Sub 3.3'],
    },
  ];

  return (
    <div className="w-64 h-screen bg-white flex flex-col">
      <div className="flex justify-between items-center p-4 bg-white">
        <h2 className="text-xl text-gray-700 font-bold">Categorías</h2>
        <button
          onClick={onClose}
          className="text-gray-300 hover:text-gray-700 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex-grow mt-5">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative"
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
              {category.name}
              <svg
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            {hoveredCategory && <SidebarItems category={hoveredCategory} />}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;