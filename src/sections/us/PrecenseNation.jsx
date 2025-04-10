import React, { useState } from "react";
import RadioSelect from "../../components/common/RadioSelect";
import CardsCarousel from "../../components/common/CardsCarousel";
import sucursales from "../../data/sucursales";
import precenseNationData from "../../data/precenseNationData";


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
            {precenseNationData.title}{" "}
            <span className="text-lacampana-red1">{precenseNationData.highlight}</span>
          </h4>
          <p className="text-gray-500 max-w-md text-left">
            {precenseNationData.description}
          </p>


          <RadioSelect
            options={precenseNationData.cities}
            selectedOption={selectedCity}
            onSelectionChange={setSelectedCity}
            bgColor="red"
            borderColor="0 0 0 2px rgba(255, 0, 0, 0.5)"
            textColor="gray"
          />


<div className="mt-8">
  {/* Desktop ≥ 1024px */}
  <div className="hidden lg:block">
    <CardsCarousel
      cardsList={sucursalesFiltradas}
      id="sucursal-desktop"
      itemsPerSlide={3}
      latestBlogs={true}
      cardBgColor="bg-lacampana-white"
      textColor="text-lacampana-gray1"
    />
  </div>


  {/* Tablet: md = 768px to <1024px */}
  <div className="hidden md:block lg:hidden">
    <CardsCarousel
      cardsList={sucursalesFiltradas}
      id="sucursal-tablet"
      itemsPerSlide={3}
      latestBlogs={true}
      cardBgColor="bg-lacampana-white"
      textColor="text-lacampana-gray1"
    />
  </div>


  {/* Mobile <768px */}
  <div className="md:hidden">
    <CardsCarousel
      cardsList={sucursalesFiltradas}
      id="sucursal-mobile"
      itemsPerSlide={2}
      latestBlogs={true}
      cardBgColor="bg-lacampana-white"
      textColor="text-lacampana-gray1"
    />
  </div>
</div>

        </div>


        <div className="relative z-0 flex-1 flex items-end justify-end md:mr-0">
          <img
            src={precenseNationData.mapImage}
            alt="Mapa de Colombia"
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </article>
  );
};


export default PrecenseNation;
