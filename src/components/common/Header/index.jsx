import React from "react";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa"; // Importación de íconos

const Header = () => {
  return (
    <header className="my-bg-primary text-white w-full h-32 flex items-center justify-center">
      {/* Contenedor principal */}
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./src/assets/images/logo.png"
            alt="La Campana"
            className="h-16"
          />
        </div>

        {/* Barra de búsqueda */}
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Buscar producto..."
            className="w-full px-4 py-2 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none"
          />
          <button className="absolute right-2 top-2 bg-white text-red-600 p-2 rounded-full hover:bg-red-100">
            <FaSearch />
          </button>
        </div>

        {/* Íconos */}
        <div className="flex items-center space-x-6">
          <FaUser className="text-xl cursor-pointer hover:text-red-300" />
          <FaHeart className="text-xl cursor-pointer hover:text-red-300" />
          <FaShoppingCart className="text-xl cursor-pointer hover:text-red-300" />
        </div>
      </div>
    </header>
  );
};

export default Header;
