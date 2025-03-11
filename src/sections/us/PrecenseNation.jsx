import React, { useState } from "react";
import RadioSelect from "../../components/common/RadioSelect";
import sucursales from "../../data/sucursales";
import CardsCarousel from "../../components/common/CardsCarousel";

const PrecenseNation = () => {
  const [selectedCity, setSelectedCity] = useState("Bogotá");

  const sucursalesFiltradas = sucursales.filter(
    (sucursal) => sucursal.ciudad === selectedCity
  );

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
            bgColor="red"
            borderColor="0 0 0 2px rgba(255, 0, 0, 0.5)"
            textColor="gray"
          />

          {/* CAROUSEL usando CardsCarousel */}
          <div className="mt-8">
            {/* Desktop - 3 columnas */}
            <div className="hidden lg:block">
              <CardsCarousel
                cardsList={sucursalesFiltradas}
                id="sucursal-desktop"
                itemsPerSlide={3}
              />
            </div>

            {/* Mobile - 2 columnas */}
            <div className="lg:hidden">
              <CardsCarousel
                cardsList={sucursalesFiltradas}
                id="sucursal-mobile"
                itemsPerSlide={2}
              />
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
