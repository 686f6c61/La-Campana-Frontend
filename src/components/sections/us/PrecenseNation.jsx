import React, { useState } from "react";

const PrecenseNation = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedCity, setSelectedCity] = useState("Bogotá");

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
    setCarouselIndex(index * 2);
  };

  const handleSelection = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:justify-between space-y-8 lg:space-y-0 lg:space-x-8 md:ml-40 md:pl-5 pl-5">
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
        <div className="flex flex-wrap space-x-1 md:space-x-3 pt-4">
          {["Bogotá", "Soacha", "Villavicencio", "Mosquera", "Neiva"].map(
            (city) => (
              <div
                key={city}
                className="flex items-center me-4 "
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
                  className="ms-2 text-xs md:text-sm font-medium"
                  style={{
                    color: selectedCity === city ? "red" : "#d1d3d1",
                    cursor: "pointer",
                  }}
                >
                  {city}
                </label>
              </div>
            )
          )}
        </div>

        {/* Carousel */}
        <div className="mt-8">
          {/* Para pantallas pequeñas  */}
          <div className="flex lg:hidden overflow-hidden">
            {sucursales
              .slice(carouselIndex, carouselIndex + 2)
              .map((sucursal, index) => (
                <div
                  key={index}
                  className="flex-none mx-2"
                  style={{
                    width: "160px",
                    backgroundColor: "#d3d3d3",
                    borderTopLeftRadius: "8px",
                  }}
                >
                  <figure>
                    <img
                      src={sucursal.imagen}
                      alt={sucursal.nombre}
                      className="h-24 object-cover w-full"
                    />
                  </figure>
                  <div style={{ padding: "8px" }}>
                    <h3
                      style={{
                        color: "#ff0000",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      {sucursal.nombre}
                    </h3>
                    <p style={{ color: "#333", fontSize: "12px" }}>
                      PBX: {sucursal.telefono}
                    </p>
                    <p style={{ color: "#333", fontSize: "12px" }}>
                      {sucursal.direccion}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Para pantallas grandes  */}
          <div className="hidden lg:flex overflow-hidden">
            {sucursales
              .slice(carouselIndex, carouselIndex + 3)
              .map((sucursal, index) => (
                <div
                  key={index}
                  className="flex-none mx-2"
                  style={{
                    width: "200px",
                    backgroundColor: "#d3d3d3",
                    borderTopLeftRadius: "8px",
                  }}
                >
                  <figure>
                    <img
                      src={sucursal.imagen}
                      alt={sucursal.nombre}
                      className="h-32 object-cover w-full"
                    />
                  </figure>
                  <div style={{ padding: "8px" }}>
                    <h3
                      style={{
                        color: "#ff0000",
                        fontWeight: "bold",
                        fontSize: "16px",
                      }}
                    >
                      {sucursal.nombre}
                    </h3>
                    <p style={{ color: "#333", fontSize: "14px" }}>
                      PBX: {sucursal.telefono}
                    </p>
                    <p style={{ color: "#333", fontSize: "14px" }}>
                      {sucursal.direccion}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex justify-center space-x-2 mt-4">
            {Array.from({ length: Math.ceil(sucursales.length / 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(index)}
                  className={`w-2 h-2 rounded-full ${
                    carouselIndex === index * 2
                      ? "bg-red-500 w-3 h-3"
                      : "bg-gray-400"
                  }`}
                />
              )
            )}
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
