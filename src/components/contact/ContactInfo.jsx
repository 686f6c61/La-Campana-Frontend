import React, { useState } from "react";
import Form from "../common/Form";
import Map from "../common/Map";
import CircularImageEffect from "../common/CircularImgEffect/CircularImgEffect";
import Carousel from "../common/Carousel";
import IntroductoryText from "../../sections/common/IntroductoryText";
import Social from "../common/Social";
import MultiSelect from "../common/Multiselect";
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
    <div className="font-sans">
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
              questionColor="text-lacampana-red2 font-bold font-antonio"
              iconColors={{
                youtube: "text-lacampana-red1",
                instagram: "text-lacampana-red1",
                tiktok: "text-lacampana-red1",
                facebook: "text-lacampana-red1",
                twitter: "text-lacampana-red1",
                linkedin: "text-lacampana-red1",
                phone: "text-lacampana-red1",
              }}
            />
          </>
        }
        bgTitle="Hablemos"
        description=""
        justify="start"
        bgTitleMargin="md:ml-40 md:mt-10"
        titleMargin="md:ml-40"
      >
        <Form padding="p-12" margin="md:mr-40" />
      </IntroductoryText>

      <div className="relative w-full max-w-7xl mx-auto my-10">
        {/* Imagen de fondo semicircular */}
        <div
          className="absolute inset-0 left-0 w-3/4 h-full bg-lacampana-red1 rounded-tr-full rounded-br-full opacity-10 mix-blend-multiply hidden md:block"
          style={{
            backgroundImage: "url('/images/contacto.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 px-8">
          {/* Sección izquierda */}
          <div className="md:w-2/3 w-full z-10">
            <CustomSection
              title="Presencia"
              highlight="nacional"
              padding="p-6"
              margin="mb-6"
              textColor="text-white"
              highlightColor="text-lacampana-red1"
            >
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim
                pulvinar ut lorem pharetra. Vestibulum nulla faucibus nunc enim.
                Proin feugiat fames turpis sociis viverra. Viverra sit ut
                egestas placerat neque fames ante.
              </p>

              {/* Selección de sucursal */}
              <div className="flex flex-wrap gap-x-2 md:gap-x-3 pt-4">
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
                            selectedBranch === city ? "red" : "#d1d3d1",
                          border: "2px solid white",
                          cursor: "pointer",
                          boxShadow:
                            selectedBranch === city
                              ? "0 0 0 2px rgba(255, 0, 0, 0.5)"
                              : "0 0 0 2px rgba(209, 211, 209, 0.5)",
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
              </div>
            </CustomSection>
          </div>

          {/* Sección derecha - Mapa */}
          <div className="md:w-1/3 w-full md:translate-x-12 md:-translate-y-12 z-10">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
