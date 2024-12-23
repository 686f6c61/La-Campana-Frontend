import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuCat = [
    { id: "drywall", name: "Perfiles Drywall" },
    { id: "ornamentacion", name: "Perfiles Ornamentación" },
    { id: "tejas", name: "Tejas y Cubiertas" },
    { id: "tuberias", name: "Tuberías" },
    { id: "vigas", name: "Vigas y Perfiles" },
    { id: "entrepisos", name: "Entrepisos" },
    { id: "laminas", name: "Láminas" },
  ];

  return (
    <div>
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 lg:px-32">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-700 text-sm flex items-center space-x-2 lg:hidden"
            >
              <HiMenuAlt2 className="h-6 w-6" />
              <p>Todas las categorías</p>
            </button>

            <ul className="hidden lg:flex justify-between items-center space-x-6">

              <li>
                <button
                  onClick={toggleSidebar}
                  className="text-gray-700 text-sm flex items-center space-x-2"
                >
                  <HiMenuAlt2 className="h-5 w-5" />
                  <p>Todas las categorías</p>
                </button>
              </li>
              {menuCat.map((category) => (
                <li key={category.id}>
                  <a
                    href={`#${category.id}`}
                    className="text-gray-700 text-sm hover:text-red-500"
                  >
                    {category.name}
                  </a>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
      >
        <div className="p-4 flex justify-between items-center bg-gray-100">
          <h2 className="text-lg font-semibold">Categorías</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <li>
            <a href="#categoria1" className="text-gray-700 hover:text-blue-500">
              Perfiles Drywall
            </a>
          </li>
          <li>
            <a href="#categoria2" className="text-gray-700 hover:text-blue-500">
              Perfiles Ornamentación
            </a>
          </li>
          <li>
            <a href="#categoria3" className="text-gray-700 hover:text-blue-500">
              Tejas y Cubiertas
            </a>
          </li>
          <li>
            <a href="#categoria4" className="text-gray-700 hover:text-blue-500">
              Tuberías
            </a>
          </li>
          <li>
            <a href="#categoria5" className="text-gray-700 hover:text-blue-500">
              Vigas y Perfiles
            </a>
          </li>
          <li>
            <a href="#categoria5" className="text-gray-700 hover:text-blue-500">
              Entrepisos
            </a>
          </li>
          <li>
            <a href="#categoria5" className="text-gray-700 hover:text-blue-500">
              Láminas
            </a>
          </li>
        </ul>
      </div>

      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
