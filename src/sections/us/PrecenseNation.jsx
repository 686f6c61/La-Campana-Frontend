import React, { useState } from "react";
import CardsCarousel from "../../components/common/CardsCarousel";
import RadioSelect from "../../components/common/RadioSelect";
import sucursales from "../../data/sucursales"; 


const PrecenseNation = () => {
  const [selectedCity, setSelectedCity] = useState("Bogotá");

  
  const sucursalesFiltradas = sucursales.filter(
    (sucursal) => sucursal.ciudad === selectedCity
  );

  return (
    <article className="max-w-screen-desktop w-full justify-self-center">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-8 lg:space-y-0">
        {/* Sección Izquierda */}
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

          
          <div className="mt-8">
            <CardsCarousel id="sucursal-carousel" cardsList={sucursalesFiltradas}>
              {sucursalesFiltradas.map((sucursal, index) => (
                <div
                  key={`sucursal-carousel-${index}`}
                  id={`sucursal-carousel-${index}`}
                  className="carousel-item w-full p-4 flex flex-col items-center"
                >
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
            </CardsCarousel>
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
