import React from "react";
import {
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-lacampana-red2 text-white w-full h-32 flex items-center justify-center">
      <div className="w-full max-w-screen-2xl mx-60 flex items-center justify-between ">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="La Campana" className="h-16" />
        </div>

        <div className="flex items-center space-x-[24px]">
          <div className="relative w-[260px] h-[33px]">
            <input
              type="text"
              placeholder="Buscar producto..."
              className="w-full h-full px-4 py-2 text-xs font-medium text-gray-200 font-open-sans placeholder-gray-500 rounded-tl-full rounded-bl-full rounded-tr-full focus:outline-none"
            />
            <button className="absolute right-0 top-0 h-full w-12 bg-lacampana-red2 flex items-center justify-center rounded-tl-full rounded-bl-full rounded-tr-full border border-white hover:bg-red-300">
              <FiSearch className="text-white text-lg" />
            </button>
          </div>

          <div className="flex items-center space-x-6">
            <HiOutlineUser className="text-2xl cursor-pointer hover:text-red-300" />
            <HiOutlineHeart className="text-2xl cursor-pointer hover:text-red-300" />
            <HiOutlineShoppingCart className="text-2xl cursor-pointer hover:text-red-300" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
