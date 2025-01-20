import React from "react";

const BgText = ({ text }) => {
  return (
    <div className="absolute md:pl-5 md:inset-0 z-0 flex overflow-hidden">
      {/* Texto de fondo */}
      <div className="font-anton font-normal text-[40px] md:text-[100px] leading-[225px] whitespace-nowrap opacity-10 pointer-events-none select-none text-transparent bg-gradient-to-t from-[#f2f2f2] to-[#4A4A4A] bg-clip-text -translate-y-2">
        {text}
      </div>
    </div>
  );
};

export default BgText;
