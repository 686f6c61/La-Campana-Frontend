import React from "react";

const BgText = ({ text, children }) => {
  return (
    <div className="relative flex flex-col justify-center items-center text-left p-6 overflow-visible">
      {/* Texto de fondo */}
      <div className="absolute inset-0 flex justify-center items-center text-gray-400 text-[8rem] md:text-[10rem] font-bold whitespace-nowrap opacity-10 pointer-events-none select-none z-0">
        {text}
      </div>
      {/* Contenido principal */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BgText;
