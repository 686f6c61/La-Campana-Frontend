import React, { useState } from "react";

const PrecenseNation = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const sucursales = [
    {
      ciudad: "Bogotá",
      nombre: "Paloquemado",
      telefono: "(601) 3702200",
      direccion: "Calle 17 No. 22 - 41",
      imagen: "/images/LaCampanaPaloquemado.png",
    },
    {
      ciudad: "Bogotá",
      nombre: "Fontibon",
      telefono: "(601) 3702200",
      direccion: "Calle 17 No. 22 - 41",
      imagen: "/images/LaCampanaFontibon.png",
    },
    {
      ciudad: "Bogotá",
      nombre: "Centro",
      telefono: "(601) 3702200",
      direccion: "Calle 17 No. 22 - 41",
      imagen: "/images/LaCampanaCentro.png",
    },
    {
      ciudad: "Bogotá",
      nombre: "Ricaurte",
      telefono: "(601) 3702200",
      direccion: "Calle 17 No. 22 - 41",
      imagen: "/images/LaCampanaCentro.png",
    },
    {
      ciudad: "Bogotá",
      nombre: "7 de Agosto",
      telefono: "(601) 3702200",
      direccion: "Calle 17 No. 22 - 41",
      imagen: "/images/LaCampanaCentro.png",
    },
    {
      ciudad: "Bogotá",
      nombre: "Soacha",
      telefono: "(601) 3702200",
      direccion: "Calle 17 No. 22 - 41",
      imagen: "/images/LaCampanaCentro.png",
    },
  ];

  const handleNavigation = (index) => {
    setCarouselIndex(index);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:justify-between space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Section */}
      <div className="lg:w-2/3">
        {/* Title */}
        <div className="text-left">
          <h4 className="text-3xl font-bold mb-4">
            Presencia <span className="text-red-500">nacional</span>
          </h4>
          <p className="text-gray-500 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim pulvinar
            ut lorem pharetra. Vestibulum nulla faucibus nunc enim. Proin
            feugiat fames turpis sociis viverra.
          </p>
        </div>

        {/* Radio buttons */}

        <div className="flex flex-wrap space-x-4">
          {["Bogotá", "Soacha", "Villavicencio", "Mosquera", "Neiva"].map(
            (color) => (
              <div key={color} className="flex items-center me-4">
                <input
                  id="red-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  class="w-4 h-4 text-lacampana-red2 "
                />
                <label
                  htmlFor={`${color.toLowerCase()}-radio`}
                  className="ms-2 text-sm font-medium text-gray-900 "
                >
                  {color}
                </label>
              </div>
            )
          )}
        </div>

        {/* Carousel */}
        <div className="mt-8">
          <div className="flex overflow-hidden">
            {sucursales
              .slice(carouselIndex, carouselIndex + 3)
              .map((sucursal, index) => (
                <div
                  key={index}
                  className="card shadow-xl bg-white flex-none w-72 mx-2"
                >
                  <figure>
                    <img
                      src={sucursal.imagen}
                      alt={sucursal.nombre}
                      className="h-40 object-cover w-full"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-red-600">
                      {sucursal.nombre}
                    </h3>
                    <p className="text-gray-700">PBX: {sucursal.telefono}</p>
                    <p className="text-gray-700">{sucursal.direccion}</p>
                  </div>
                </div>
              ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {Array.from({ length: sucursales.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(index)}
                className={`w-3 h-3 rounded-full ${
                  carouselIndex === index ? "bg-red-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3">
        <img
          src="/images/Map.png"
          alt="Mapa de Colombia"
          className="w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default PrecenseNation;
