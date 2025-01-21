import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaRegCreditCard } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { GoPlus } from "react-icons/go";

const FloatingDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-4 top-1/3 z-50">
      {/* Comportamiento para pantallas grandes */}
      <div className="hidden lg:block">
        <div className="relative group">
          {/* Floating Button */}
          <div className="bg-lacampana-red2 w-16 h-64 rounded-tl-full rounded-bl-full rounded-tr-full flex flex-col justify-around items-center text-white cursor-pointer shadow-lg pb-2">
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

          {/* Drawer (hidden by default) */}
          <div className="absolute top-0 right-0 bg-lacampana-red2 text-white w-64 h-64 rounded-lg shadow-lg flex flex-col justify-around p-4 opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
              <LuMapPin className="text-4xl pt-2 stroke-[1.5]" />
              <span>Rastrea tu pedido</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center">
                <img
                  src="/images/pse.png"
                  alt="PSE"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <span>Pagos PSE</span>
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
        </div>
      </div>

      {/* Comportamiento para pantallas pequeñas */}
      <div className="block lg:hidden">
        <div
          className={`bg-lacampana-red2 w-16 h-16 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <GoPlus className="text-4xl" />
        </div>

        {isOpen && (
          <div className="absolute bottom-20 right-0 bg-lacampana-red2 text-white w-16 h-64 rounded-full flex flex-col justify-around items-center shadow-lg transition-opacity duration-300">
            <LuMapPin className="text-4xl stroke-[1.5]" />
            <img
              src="/images/pseblack.png"
              alt="PSE"
              className="w-10 h-10 rounded-full"
            />
            <FaRegCreditCard className="text-3xl" />
            <PiShoppingCartLight className="text-3xl stroke-[2]" />
            <FaWhatsapp className="text-2xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingDrawer;
