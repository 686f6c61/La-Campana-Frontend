import React, { useState } from "react";
import RadioSelect from "../../components/common/RadioSelect";
import sucursales from "../../data/sucursales";
import chunkArray from "../../helpers/chunkArray"; 

const PrecenseNation = () => {
  const [selectedCity, setSelectedCity] = useState("Bogotá");

 
  const sucursalesFiltradas = sucursales.filter(
    (sucursal) => sucursal.ciudad === selectedCity
  );


  const sucursalesDesktop = chunkArray(sucursalesFiltradas, 3);
  const sucursalesMobile = chunkArray(sucursalesFiltradas, 2);

  return (
    <article className="max-w-screen-desktop w-full justify-self-center">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-8 lg:space-y-0">
   
        <div className="lg:w-2/3 p-8">
          <h4 className="text-3xl font-bold mb-4 text-left">
            Presencia <span className="text-lacampana-red1">nacional</span>
          </h4>
          <p className="text-gray-500 max-w-md text-left">
            Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim pulvinar
            ut lorem pharetra. Vestibulum nulla faucibus nunc enim. Proin
            feugiat fames turpis sociis viverra.
          </p>

          <RadioSelect
            options={["Bogotá", "Soacha", "Villavicencio", "Mosquera", "Neiva"]}
            selectedOption={selectedCity}
            onSelectionChange={setSelectedCity}
          />

          {/* CAROUSEL */}
          <div className="mt-8">
            {/* Desktop Carousel (3 tarjetas) */}
            <div className="hidden lg:block">
              <div className="carousel w-full">
                {sucursalesDesktop.map((chunk, index) => (
                  <article
                    key={`sucursal-chunk-desktop-${index}`}
                    id={`sucursal-chunk-desktop-${index}`}
                    className="carousel-item w-full flex gap-4"
                  >
                    {chunk.map((sucursal) => (
                      <div key={sucursal.id} className="w-1/3 p-4">
                        <img
                          src={sucursal.imagen}
                          alt={`Imagen de ${sucursal.nombre}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <h3 className="text-lg font-bold mt-2">{sucursal.nombre}</h3>
                        <p className="text-gray-500">{sucursal.direccion}</p>
                        <p className="text-gray-500">{sucursal.telefono}</p>
                      </div>
                    ))}
                  </article>
                ))}
              </div>
              <div className="flex justify-center items-center gap-2 mt-4">
                {sucursalesDesktop.map((_, index) => (
                  <input
                    key={`radio-desktop-${index}`}
                    type="radio"
                    name="radio-carousel"
                    className="radio w-3 h-3 checked:w-5 checked:h-5 border-none bg-lacampana-gray3 checked:bg-lacampana-red2"
                    onClick={() => {
                      document.getElementById(`sucursal-chunk-desktop-${index}`).scrollIntoView({ behavior: "smooth", block: "nearest" });
                    }}
                    defaultChecked={index === 0}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Carousel (2 tarjetas) */}
            <div className="lg:hidden">
              <div className="carousel w-full">
                {sucursalesMobile.map((chunk, index) => (
                  <article
                    key={`sucursal-chunk-mobile-${index}`}
                    id={`sucursal-chunk-mobile-${index}`}
                    className="carousel-item w-full flex gap-4"
                  >
                    {chunk.map((sucursal) => (
                      <div key={sucursal.id} className="w-1/2 p-4">
                        <img
                          src={sucursal.imagen}
                          alt={`Imagen de ${sucursal.nombre}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <h3 className="text-lg font-bold mt-2">{sucursal.nombre}</h3>
                        <p className="text-gray-500">{sucursal.direccion}</p>
                        <p className="text-gray-500">{sucursal.telefono}</p>
                      </div>
                    ))}
                  </article>
                ))}
              </div>
              <div className="flex justify-center items-center gap-2 mt-4">
                {sucursalesMobile.map((_, index) => (
                  <input
                    key={`radio-mobile-${index}`}
                    type="radio"
                    name="radio-carousel"
                    className="radio w-3 h-3 checked:w-5 checked:h-5 border-none bg-lacampana-gray3 checked:bg-lacampana-red2"
                    onClick={() => {
                      document.getElementById(`sucursal-chunk-mobile-${index}`).scrollIntoView({ behavior: "smooth", block: "nearest" });
                    }}
                    defaultChecked={index === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

 
        <div className="relative z-0 flex-1 flex items-end justify-end md:mr-0">
          <img
            src="/images/Map.png"
            alt="Mapa de Colombia"
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </article>
  );
};

export default PrecenseNation;
