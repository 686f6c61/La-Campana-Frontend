import React, { useState, useRef, useEffect } from "react";

const PrecenseNation = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedCity, setSelectedCity] = useState("Bogotá");
  const carouselRef = useRef(null);

  const sucursales = [
    {
      nombre: "Paloquemado",
      telefono: "(601) 3702200",
      direccion: "Calle 17 No. 22 - 41",
      imagen: "/images/LaCampanaPaloquemado.png",
    },
    {
      nombre: "Fontibon",
      telefono: "(601) 3702200",
      direccion: "Calle 17 No. 22 - 41",
      imagen: "/images/LaCampanaFontibon.png",
    },
    {
      nombre: "Centro",
      telefono: "(601) 3702200",
      direccion: "Calle 17 No. 22 - 41",
      imagen: "/images/LaCampanaCentro.png",
    },
    {
      nombre: "Ricaurte",
      telefono: "(601) 3702200",
      direccion: "Calle 17 No. 22 - 41",
      imagen: "/images/LaCampanaCentro.png",
    },
    {
      nombre: "Soacha",
      telefono: "(601) 3702200",
      direccion: "Calle 17 No. 22 - 41",
      imagen: "/images/LaCampanaCentro.png",
    },
  ];

  const handleSelection = (city) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].offsetWidth;
      carouselRef.current.scrollTo({
        left: carouselIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [carouselIndex]);

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-8 lg:space-y-0">
      {/* Left Section */}
      <div className="lg:w-2/3 p-8">
        <h4 className="text-3xl font-bold mb-4 text-left">
          Presencia <span className="text-lacampana-red1">nacional</span>
        </h4>
        <p className="text-gray-500 max-w-md text-left">
          Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim pulvinar ut
          lorem pharetra. Vestibulum nulla faucibus nunc enim. Proin feugiat
          fames turpis sociis viverra.
        </p>

        <div className="flex flex-wrap gap-x-2 md:gap-x-3 pt-4 ">
          {["Bogotá", "Soacha", "Villavicencio", "Mosquera", "Neiva"].map(
            (city) => (
              <div
                key={city}
                className="flex items-center sm:me-3 md:me-4"
                style={{ position: "relative" }}
              >
                <input
                  id={`${city.toLowerCase()}-radio`}
                  type="radio"
                  value={city}
                  name="ciudad"
                  checked={selectedCity === city}
                  onChange={() => handleSelection(city)}
                  className="w-4 h-4"
                  style={{
                    appearance: "none",
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    backgroundColor: selectedCity === city ? "red" : "#d1d3d1",
                    position: "relative",
                    outline: "none",
                    border: "2px solid white",
                    cursor: "pointer",
                    boxShadow:
                      selectedCity === city
                        ? "0 0 0 2px rgba(255, 0, 0, 0.5)"
                        : "0 0 0 2px rgba(209, 211, 209, 0.5)",
                  }}
                />
                <label
                  htmlFor={`${city.toLowerCase()}-radio`}
                  className="ms-0 text-xs md:text-sm font-medium md:pl-1"
                  style={{ color: selectedCity === city ? "red" : "#d1d3d1" }}
                >
                  {city}
                </label>
              </div>
            )
          )}
        </div>

        {/* Carrusel */}
        <div className="relative mt-8">
          {/* Para pantallas grandes */}
          <div className="hidden lg:flex space-x-4">
            {sucursales.slice(0, 3).map((sucursal, index) => (
              <div
                key={index}
                className="w-1/3 bg-gray-200 rounded-lg shadow-lg p-4"
              >
                <img
                  src={sucursal.imagen}
                  alt={sucursal.nombre}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="text-lg font-bold text-red-500 mt-2">
                  {sucursal.nombre}
                </h3>
                <p className="text-gray-700">PBX: {sucursal.telefono}</p>
                <p className="text-gray-700">{sucursal.direccion}</p>
              </div>
            ))}
          </div>

          {/* Indicadores de posición */}
          <div className="hidden lg:flex justify-center mt-4 space-x-2">
            <span className="w-3 h-3 bg-gray-600 rounded-full mt-0.5"></span>
            <span className="w-4 h-4 bg-lacampana-red1 rounded-full "></span>
            <span className="w-3 h-3 bg-gray-600 rounded-full mt-0.5"></span>
          </div>

          {/* Para pantallas pequeñas */}
          <div className="lg:hidden">
            <div
              ref={carouselRef}
              className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {sucursales.map((sucursal, index) => (
                <div
                  key={index}
                  className="flex-none w-40 snap-center bg-gray-200 rounded-lg shadow-lg p-4"
                >
                  <img
                    src={sucursal.imagen}
                    alt={sucursal.nombre}
                    className="w-full h-20 object-cover rounded-t-lg"
                  />
                  <h3 className="text-lg font-bold text-red-500 mt-2">
                    {sucursal.nombre}
                  </h3>
                  <p className="text-gray-700">PBX: {sucursal.telefono}</p>
                  <p className="text-gray-700">{sucursal.direccion}</p>
                </div>
              ))}
            </div>

            {/* puntitos*/}
            <div className="flex justify-center mt-4 space-x-2">
              <span className="w-3 h-3 bg-gray-600 rounded-full mt-0.5"></span>
              <span className="w-4 h-4 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-600 rounded-full "></span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Mapa */}
      <div className="lg:w-1/3 p-8">
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
