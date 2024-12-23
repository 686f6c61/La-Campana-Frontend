import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaRegCreditCard } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

const FloatingDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="fixed right-0 top-1/3 z-50 pr-4">
      {/* Floating Button */}
      <div
        className="bg-red-600 w-16 h-64 rounded-tl-full rounded-bl-full rounded-tr-full flex flex-col justify-around items-center text-white cursor-pointer shadow-lg pb-2"
        onClick={toggleSidebar}
      >
        <LuMapPin className="text-4xl pt-2 stroke-[1.5]" />
        <div className="flex items-center justify-center">
          <img
            src="/images/pseblack.png"
            alt="PSE"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <FaRegCreditCard className="text-3xl" />
        <PiShoppingCartLight className="text-3xl stroke-[2]" />
        <FaWhatsapp className="text-2xl" />
      </div>

      {/* Expanded Content with Underlined Text */}
      {isOpen && (
        <div className="absolute right-16 top-0 bg-red-600 text-white w-64 h-64 rounded-lg shadow-lg flex flex-col justify-around p-4">
          <div className="flex items-center space-x-4">
            <LuMapPin className="text-4xl pt-2 stroke-[1.5]" />
            <span className="">Rastrea tu pedido</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className=" flex items-center justify-center">
              <img
                src="/images/pse.png"
                alt="PSE"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <span className="">Pagos PSE</span>
          </div>
          <div className="flex items-center space-x-4 pl-1">
            <FaRegCreditCard className="text-3xl" />
            <span className="pl-1">Solicitar crédito</span>
          </div>
          <div className="flex items-center space-x-4">
            <PiShoppingCartLight className="text-3xl stroke-[2] pl-1" />
            <span className="pl-1">Ver el carrito</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaWhatsapp className="text-2xl pl-1" />
            <span className="pl-1">Hablar con un asesor</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingDrawer;
