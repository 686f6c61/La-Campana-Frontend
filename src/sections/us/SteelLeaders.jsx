import React from "react";
import IntroductoryText from "../../sections/common/IntroductoryText";

const SteelLeaders = () => {
  return (
    <article className="max-w-screen-desktop w-full justify-self-center">
    <IntroductoryText
      title={
        <>
          
            Líderes en <span className="text-lacampana-red2 ">acero</span>
            <p className="md:text-base text-sm text-gray-600 mt-4 md:w-[480px] w-[360px] pl-0 md:pl-0">
              La Campana Servicios de Acero S.A. contribuye al crecimiento del
              sector metalmecánico y de la construcción en Colombia con el
              suministro de materias primas al brindar productos y servicios que
              aseguren un óptimo control de calidad.
            </p>
            <p className="md:text-base text-sm text-gray-600 mt-4 md:w-[480px] w-[360px] pl-0 md:pl-0">
              La Campana Servicios de Acero S.A. es líder en el mercado de los
              aceros a nivel local (Bogotá) gracias a su disponibilidad y
              variedad de material, agilidad en sus entregas y experiencia en
              nuestros productos. Somos una empresa con más de 40 años de
              experiencia en el mercado, conocidos como una empresa seria, con
              un equipo de trabajo honesto y dispuesto a brindar el mejor
              servicio.
            </p>
          
        </>
      }
      bgTitle="Lideres en aceros"
      bgTitleMargin="md:pl-6 md:pt-6"
      bgTitlePadding=""
    >
      <div className=" flex items-end justify-end md:transform -translate-x-[80px] transform -translate-x-[-6px] md:transform -translate-y-[30px] transform -translate-y-[0px]">
  <div className=" flex items-center justify-center w-[790px] sm:w-[500px] h-[290px] bg-opacity-75 ">
    <img
      src="/images/play.png"
      alt="Icono representativo"
      className="absolute z-20 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] cursor-pointer"
    />
    {/* Imagen reemplazo temporal de video */}
    <img
      src="/images/video.jpeg"
      alt="Video Representativo"
      className="rounded-tl-lg w-full h-full object-cover"
      style={{ opacity: 0.9 }}
    />
  </div>
</div>

    </IntroductoryText></article>
  );
};

export default SteelLeaders;
