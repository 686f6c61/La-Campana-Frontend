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
    <div className="pr-5 relative w-full my-10 pb-10 tablet:pb-52 flex flex-col xl:flex-row items-start gap-8">
      {/* Fondo decorativo envuelve todo el contenido */}
      <div
        className="w-full xl:w-[76%] h-[300px] lg:h-[600px] xl:min-h-[600px] xl:pb-[180px] rounded-tr-full tablet:rounded-tr-full rounded-br-full tablet:rounded-br-full"
        style={{
          backgroundImage: "url('/images/categories/laminasBg.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="z-10 flex flex-col md:flex-row items-start justify-between pl-0 pt-0 pb-0 tablet:pl-20 tablet:pt-8 tablet:pb-5">
          {/* Contenido a la izquierda */}
          <div className="w-full md:w-2/3">
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
                options={[
                  "Bogotá",
                  "Soacha",
                  "Villavicencio",
                  "Mosquera",
                  "Neiva",
                ]}
                selectedOption={selectedBranch}
                onSelectionChange={setSelectedBranch}
                bgColor="black"
                borderColor="white"
                textColor="white"
              />

              <div className="mt-8">
                {/* Carrusel Desktop */}
                <div className="hidden lg:block">
                  <CardsCarousel
                    cardsList={sucursalesFiltradas}
                    id="sucursal-desktop"
                    itemsPerSlide={3}
                    controlBgColor="bg-gray-200"
                    controlCheckedColor="checked:bg-gray-800"
                    latestBlogs={true}
                  />
                </div>

                {/* Carrusel Mobile */}
                <div className="block lg:hidden">
                  <CardsCarousel
                    cardsList={sucursalesFiltradas}
                    justifyValue="start"
                    id="sucursal-mobile"
                    itemsPerSlide={2}
                    latestBlogs={true}
                  />
                </div>
              </div>
            </CustomSection>
          </div>
        </div>
      </div>

      {/* Mapa alineado a la derecha */}
      <div className="pl-5 w-full mt-72 xl:w-auto flex justify-center xl:justify-end xl:px-0 relative xl:static mt-6 xl:mt-0">
        <img
          src="/images/Map.png"
          alt="Mapa de Colombia"
          className="
          relative xl:absolute xl:top-[-40px] xl:right-0 xl:translate-x-[-80px] w-[100%] max-w-[550px] xl:w-[550px] lg:w-[100%] object-cover rounded-lg xl:z-0"
        />
      </div>
    </div>
  );
};

export default ContactBranches;
