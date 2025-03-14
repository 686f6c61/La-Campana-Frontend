import React, { useState } from "react";
import CustomSection from "../common/CustomSection";
import RadioSelect from "../common/RadioSelect";
import CardsCarousel from "../common/CardsCarousel";
import sucursales from "../../data/sucursales";

const ContactBranches = () => {
  const [selectedBranch, setSelectedBranch] = useState("Bogotá");

  const sucursalesFiltradas = sucursales.filter(
    (sucursal) => sucursal.ciudad === selectedBranch
  );

  return (
    <div className="relative max-w-screen-desktop w-full my-10 overflow-hidden">
      {/* Fondo decorativo pegado a la izquierda */}
      <div
        className="absolute top-0 left-0 h-full w-2/3 md:w-[80%] md:h-full h-[390px] w-[100%] rounded-tr-full rounded-br-full z-0"
        style={{
          backgroundImage: "url('/images/categories/laminasBg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between ">
        {/* Contenido a la izquierda */}
        <div className="w-full md:w-2/3 pt-12 md:pt-20 md:pl-20">
          <CustomSection
            highlight="Presencia nacional"
            padding="p-6"
            margin="mb-6"
            textColor="text-white"
            highlightColor="text-white"
          >
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim
              pulvinar ut lorem pharetra. Vestibulum nulla faucibus nunc enim.
              Proin feugiat fames turpis sociis viverra. Viverra sit ut
              egestas placerat neque fames ante.
            </p>

            <RadioSelect
              options={["Bogotá", "Soacha", "Villavicencio", "Mosquera", "Neiva"]}
              selectedOption={selectedBranch}
              onSelectionChange={setSelectedBranch}
              bgColor="black"
              borderColor="white"
              textColor="white"
            />

            <div className="mt-8">
              <div className="hidden lg:block">
                <CardsCarousel
                  cardsList={sucursalesFiltradas}
                  id="sucursal-desktop"
                  itemsPerSlide={3}
                  controlBgColor="bg-gray-200"
  controlCheckedColor="checked:bg-gray-800"

                />
              </div>
              <div className="lg:hidden">
                <CardsCarousel
                  cardsList={sucursalesFiltradas}
                  id="sucursal-mobile"
                  itemsPerSlide={2}
                />
              </div>
            </div>
          </CustomSection>
        </div>

        {/* Mapa alineado a la derecha */}
        <div className="w-full md:w-1/3 pt-10 md:pt-20 px-4 md:px-0 flex justify-end">
          <div className="w-full max-w-[400px]">
            <img
              src="/images/Map.png"
              alt="Mapa de Colombia"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBranches;
