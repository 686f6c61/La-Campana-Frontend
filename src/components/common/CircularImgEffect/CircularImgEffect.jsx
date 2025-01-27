import React from "react";

const CircularImageEffect = ({ imageUrl, className = "" }) => {
  return (
    <div
      className={`relative w-full max-w-5xl h-[500px] mx-0 my-10 ml-5 ${className}`}
    >
      {/* Capa roja semi-transparente superpuesta sobre la imagen */}
      <div className="absolute inset-0 bg-lacampana-red1 rounded-tr-full rounded-br-full  z-10 hidden md:block"></div>

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover rounded-tr-full rounded-br-full z-0 hidden md:block"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Imagen para móviles */}
      <img
        src={imageUrl}
        alt="Efecto circular"
        className="md:hidden w-full h-full object-cover rounded-tr-full rounded-br-full"
      />
    </div>
  );
};

export default CircularImageEffect;
