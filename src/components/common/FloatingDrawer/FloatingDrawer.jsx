import React, { useState } from "react";
import {
  HiLocationMarker,
  HiCreditCard,
  HiShoppingCart,
  HiChatAlt2,
} from "react-icons/hi";

const FloatingDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="fixed right-0 top-1/3 z-50">
      {/* Floating Button */}
      <div
        className="bg-red-600 w-16 h-64 rounded-tl-full rounded-bl-full rounded-tr-full flex flex-col justify-around items-center text-white cursor-pointer shadow-lg"
        onClick={toggleSidebar}
      >
        <HiLocationMarker className="text-2xl" />
        <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
          <span className="text-red-600 font-bold text-sm">PSE</span>
        </div>
        <HiCreditCard className="text-2xl" />
        <HiShoppingCart className="text-2xl" />
        <HiChatAlt2 className="text-2xl" />
      </div>

      {/* Expanded Content with Underlined Text */}
      {isOpen && (
        <div className="absolute right-16 top-0 bg-red-600 text-white w-64 h-64 rounded-lg shadow-lg flex flex-col justify-around p-4">
          <div className="flex items-center space-x-4">
            <HiLocationMarker className="text-2xl" />
            <span className="underline">Rastrea tu pedido</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-red-600 font-bold text-sm">PSE</span>
            </div>
            <span className="underline">Pagos PSE</span>
          </div>
          <div className="flex items-center space-x-4">
            <HiCreditCard className="text-2xl" />
            <span className="underline">Solicitar crédito</span>
          </div>
          <div className="flex items-center space-x-4">
            <HiShoppingCart className="text-2xl" />
            <span className="underline">Ver el carrito</span>
          </div>
          <div className="flex items-center space-x-4">
            <HiChatAlt2 className="text-2xl" />
            <span className="underline">Hablar con un asesor</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingDrawer;
