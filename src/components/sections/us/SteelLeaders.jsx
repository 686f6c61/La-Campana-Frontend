import React from "react";
import BgText from "../../common/BgText";
import { PiPlayCircleDuotone } from "react-icons/pi";

const SteelLeaders = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-start justify-between p-6 md:p-12">
      {/* Texto de fondo y contenido */}
      <BgText text="Líderes en Aceros">
        <div className="md:w-full relative z-10">
          <h3 className="text-4xl font-bold text-black">
            Líderes en <span className="text-lacampana-red2">Aceros</span>
          </h3>
          <p className="text-base text-gray-600 mt-4">
            La Campana Servicios de Acero S.A. contribuye al crecimiento del
            sector metalmecánico y de la construcción en Colombia con el
            suministro de materias primas al brindar productos y servicios que
            aseguren un óptimo control de calidad.
          </p>
          <p className="text-base text-gray-600 mt-4">
            La Campana Servicios de Acero S.A. es líder en el mercado de los
            aceros a nivel local (Bogotá) gracias a su disponibilidad y variedad
            de material, agilidad en sus entregas y experiencia en nuestros
            productos. Somos una empresa con más de 40 años de experiencia en el
            mercado, conocidos como una empresa seria, con un equipo de trabajo
            honesto y dispuesto a brindar el mejor servicio.
          </p>
        </div>
      </BgText>

      {/* Sección de la imagen con el ícono */}
      <div className="relative w-full flex items-center justify-center md:mt-20 z-20">
        <div className="relative w-[600px]">
          {/* Icono Play */}
          <PiPlayCircleDuotone className="text-lacampana-red2 text-6xl absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
          {/* Imagen reemplazo temporal de video */}
          <img
            src="/images/video.jpeg"
            alt="Video Representativo"
            className="rounded-lg w-full h-auto object-cover z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default SteelLeaders;
