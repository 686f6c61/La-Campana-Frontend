import React, { useState } from 'react';
import { HiMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow">
        <div className="container mx-auto px-32">
          <ul className="flex justify-between items-center space-x-6 py-4">
            <li>
              <button
                onClick={toggleSidebar}
                className="text-gray-700  text-sm"
              >
                <div className='flex items-center'>
                  <HiMenuAlt2 />
                  <p>
                    Todas las categorías
                  </p>
                </div>

              </button>
            </li>
            <li>
              <a href="#drywall" className="text-gray-700  text-sm">
                Perfiles Drywall
              </a>
            </li>
            <li>
              <a href="#ornamentacion" className="text-gray-700 text-sm">
                Perfiles Ornamentación
              </a>
            </li>
            <li>
              <a href="#tejas" className="text-gray-700 text-sm">
                Tejas y Cubiertas
              </a>
            </li>
            <li>
              <a href="#tuberias" className="text-gray-700 text-sm">
                Tuberías
              </a>
            </li>
            <li>
              <a href="#vigas" className="text-gray-700 text-sm">
                Vigas y Perfiles
              </a>
            </li>
            <li>
              <a href="#entrepisos" className="text-gray-700 text-sm">
                Entrepisos
              </a>
            </li>
            <li>
              <a href="#laminas" className="text-gray-700 text-sm">
                Láminas
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300`}
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
              Categoría 1
            </a>
          </li>
          <li>
            <a href="#categoria2" className="text-gray-700 hover:text-blue-500">
              Categoría 2
            </a>
          </li>
          <li>
            <a href="#categoria3" className="text-gray-700 hover:text-blue-500">
              Categoría 3
            </a>
          </li>
          <li>
            <a href="#categoria4" className="text-gray-700 hover:text-blue-500">
              Categoría 4
            </a>
          </li>
          <li>
            <a href="#categoria5" className="text-gray-700 hover:text-blue-500">
              Categoría 5
            </a>
          </li>
        </ul>
      </div>
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50"
        ></div>
      )}
    </div>
  );
};

export default Navbar;


