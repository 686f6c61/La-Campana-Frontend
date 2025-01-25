import React from "react";
import Form from "../common/Form";
import Map from "../common/Map";
import CircularImageEffect from "../common/CircularImgEffect/CircularImgEffect";
import Carousel from "../common/Carousel";
import IntroductoryText from "../../sections/common/IntroductoryText";

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
  return (
    <div className="font-sans">
      <IntroductoryText
        title={
          <>
            Nuestro <span className="text-lacampana-red2">Blog</span>
          </>
        }
        bgTitle="Actualidad en aceros"
        description="Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim pulvinar ut lorem pharetra. Vestibulum nulla faucibus nunc enim. Proin feugiat fames turpis sociis viverra. Viverra sit ut egestas placerat neque fames ante."
        justify="start"
      >
        <Form />
      </IntroductoryText>

      <Map />

      <CircularImageEffect imageUrl="/images/contacto.jpeg" />
      <div className="p-8">
        <Carousel sucursalData={sucursalesData} />
      </div>
    </div>
  );
};

export default ContactInfo;
