import React from "react";

const CircularImageEffect = ({ imageUrl, className = "" }) => {
  return (
    <div
      className={`relative w-full max-w-5xl h-[500px] mx-0 my-10 ml-5 ${className}`}
    >
      <div className="absolute inset-0 bg-lacampana-red2 opacity-10 rounded-tr-full rounded-br-full hidden md:block"></div>

      <div
        className="absolute inset-0 bg-contain mix-blend-multiply rounded-tr-full rounded-br-full hidden md:block"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
    </div>
  );
};

export default CircularImageEffect;
