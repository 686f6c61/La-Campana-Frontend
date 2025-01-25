import React from "react";
import Form from "../common/Form";
import Map from "../common/Map";
import CircularImageEffect from "../common/CircularImgEffect/CircularImgEffect";
import Carousel from "../common/Carousel";

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
      <Form />
      <Map />

      <CircularImageEffect imageUrl="/images/contacto.jpeg" />
      <div className="p-8">
        <Carousel sucursalData={sucursalesData} />
      </div>
    </div>
  );
};

export default ContactInfo;
