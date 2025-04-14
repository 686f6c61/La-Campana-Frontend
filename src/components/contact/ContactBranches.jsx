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
    <div className="overflow-hidden w-full my-10 mb-24">
      {/* Fondo decorativo envuelve todo el contenido */}
      <div
        className="relative w-[100%] lg:w-[80%] min-h-[620px] rounded-tr-[0%] tablet:rounded-tr-full rounded-br-[0%] tablet:rounded-br-full"
        style={{
          backgroundImage: "url('/images/categories/laminasBg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-between pl-0 pt-0 pb-0 tablet:pl-20 tablet:pt-8 tablet:pb-5">
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
                <div className="lg:hidden">
                  <CardsCarousel
                    cardsList={sucursalesFiltradas}
                    id="sucursal-mobile"
                    itemsPerSlide={2}
                    latestBlogs={true}
                  />
                </div>
              </div>
            </CustomSection>
          </div>

          {/* Mapa alineado a la derecha */}
          <div className="hidden pr-5 lg:block">
            <div>
              <img
                src="/images/Map.png"
                alt="Mapa de Colombia"
                className="absolute top-0 bottom-0 right-0 translate-x-[250px] w-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBranches;
