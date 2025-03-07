import React, { useState } from "react";
import Form from "../common/Form";
import Carousel from "../common/Carousel";
import IntroductoryText from "../../sections/common/IntroductoryText";
import Social from "../common/Social";

import CustomSection from "../common/CustomSection";

const sucursalesData = [
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

const ContactInfo = () => {
  const [selectedBranch, setSelectedBranch] = useState("Bogotá");

  const branchOptions = [
    "Bogotá",
    "Paloquemado",
    "Fontibon",
    "Centro",
    "Ricaurte",
    "Soacha",
  ];

  return (
    <article className="max-w-screen-desktop w-full justify-self-center">
    <div className="font-sans ">
      <IntroductoryText
        title={
          <>
            Contactarnos <span className="text-lacampana-red2"></span>
            <p className="max-w-2xl font-montserrat">
              Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim
              pulvinar ut lorem pharetra. Vestibulum nulla faucibus nunc enim.
              Proin feugiat fames turpis sociis viverra. Viverra sit ut egestas
              placerat neque fames ante.
            </p>
            <Social
              question="¿Cómo podemos ayudarte?"
              phone="PBX: (601) 123.45.67"
              description=""
              questionColor="text-lacampana-red2 font-bold font-antonio md:text-left text-center"
              phoneColor="md:text-left text-center"
              iconsPadding="md:pl-0 pl-20"
              iconColors={{
                youtube: "text-lacampana-red2",
                instagram: "text-lacampana-red2",
                tiktok: "text-lacampana-red2",
                facebook: "text-lacampana-red2",
                twitter: "text-lacampana-red2",
                linkedin: "text-lacampana-red2",
                phone: "text-lacampana-red2",
              }}
            />
          </>
        }
        bgTitle="Hablemos"
        description=""
        justify="start"
        bgTitleMargin="md:ml-40 md:pl-6 md:mt-10"
        titleMargin="md:ml-40 md:mt-0"
      >
        <Form
          padding="p-12 transform md:-translate-x-40 md:-translate-y-20"
          margin="md:mr-40"
        />
      </IntroductoryText>

      <div className="relative max-w-full md:max-w-[1400px]  my-10 transform md:-translate-x-80">
        {/* Imagen de fondo semicircular */}
        <div
          className="absolute inset-0 left-0 md:w-full md:h-full h-[400px] bg-lacampana-red1 rounded-tr-full rounded-br-full mix-blend-multiply"
          style={{
            backgroundImage: "url('/images/categories/laminasBg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative flex flex-col md:flex-row items-center space-y-8 px-4 md:px-8">
          {/* Sección izquierda */}
          <div className="md:w-2/3 w-full z-10 pt-10 md:pt-20 ml-0 md:ml-40">
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

              {/* Selección de sucursal */}
              <div className="flex flex-wrap gap-x-2 md:gap-x-3 gap-x-5 md:gap-y-0 gap-y-2 pt-4">
                {["Bogotá", "Soacha", "Villavicencio", "Mosquera", "Neiva"].map(
                  (city) => (
                    <div
                      key={city}
                      className="flex items-center sm:me-3 md:me-4"
                    >
                      <input
                        id={`${city.toLowerCase()}-radio`}
                        type="radio"
                        value={city}
                        name="ciudad"
                        checked={selectedBranch === city}
                        onChange={() => setSelectedBranch(city)}
                        className="w-4 h-4"
                        style={{
                          appearance: "none",
                          width: "15px",
                          height: "15px",
                          borderRadius: "50%",
                          backgroundColor:
                            selectedBranch === city ? "red" : "white",
                          border: "2px solid white",
                          cursor: "pointer",
                          boxShadow:
                            selectedBranch === city
                              ? "0 0 0 2px rgba(255, 0, 0, 0.5)"
                              : "0 0 0 2px rgb(253, 255, 253)",
                        }}
                      />
                      <label
                        htmlFor={`${city.toLowerCase()}-radio`}
                        className="ml-2 text-white text-xs"
                      >
                        {city}
                      </label>
                    </div>
                  )
                )}
              </div>

              {/* Carrusel de sucursales */}
              <div className="mt-8">
                <Carousel sucursalData={sucursalesData} />
                <div className="flex justify-center mt-4 space-x-2">
                  <span className="w-3 h-3 md:bg-lacampana-white bg-lacampana-red1 rounded-full"></span>
                  <span className="w-4 h-4 bg-lacampana-gray1 rounded-full transform -translate-y-0.5"></span>
                  <span className="w-3 h-3 md:bg-lacampana-white bg-lacampana-red1  rounded-full"></span>
                </div>
              </div>
            </CustomSection>
          </div>

          {/* Sección derecha - Mapa */}
          <div className="md:w-1/2 w-full  md:pl-80">
            <div className="md:w-[500px] w-full p-4">
              <img
                src="/images/Map.png"
                alt="Mapa de Colombia"
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div></article>
  );
};

export default ContactInfo;
