import React from "react";
import BgText from "../../components/common/BgText";
import IntroductoryText from "../../sections/common/IntroductoryText";

const SteelLeaders = () => {
  return (
    // <div className="relative flex flex-col md:flex-row items-center md:text-left md:ml-40 md:pt-10 justify-between p-6 overflow-visible ">

    //   <div className="hidden md:block">
    //     <BgText text="Líderes en Aceros " />
    //   </div>

    //   <div className="relative z-10 flex-1 md:pr-6 sm:pt-10">

    //     <div className="absolute -z-10 top-2 left-20 ml-4 text-gray-200 text-4xl font-bold font-anton font-normal md:hidden">
    //       Líderes de Acero
    //     </div>

    //     <h3 className="md:text-4xl text-3xl font-bold text-black pt-5 md:pt-1">
    //       Líderes en <span className="text-lacampana-red2">Aceros</span>
    //     </h3>
    //     <p className="md:text-base text-sm text-gray-600 mt-4 md:w-[480px] w-[420px] pl-10 md:pl-0">
    //       La Campana Servicios de Acero S.A. contribuye al crecimiento del
    //       sector metalmecánico y de la construcción en Colombia con el
    //       suministro de materias primas al brindar productos y servicios que
    //       aseguren un óptimo control de calidad.
    //     </p>
    //     <p className="md:text-base text-sm text-gray-600 mt-4 md:w-[480px] w-[420px] pl-10 md:pl-0">
    //       La Campana Servicios de Acero S.A. es líder en el mercado de los
    //       aceros a nivel local (Bogotá) gracias a su disponibilidad y variedad
    //       de material, agilidad en sus entregas y experiencia en nuestros
    //       productos. Somos una empresa con más de 40 años de experiencia en el
    //       mercado, conocidos como una empresa seria, con un equipo de trabajo
    //       honesto y dispuesto a brindar el mejor servicio.
    //     </p>
    //   </div>
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
      <div className="relative z-10 flex-1 flex items-center justify-center pt-10 md:pt-40 ">
        <div className="relative flex items-center justify-center w-[380px] sm:w-[500px] h-[290px] bg-opacity-75 md:mr-40 md:pl-0 pl-10">
          <img
            src="/images/play.png"
            alt="Icono representativo"
            className="absolute z-20 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] cursor-pointer "
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
    </IntroductoryText>
  );
};

export default SteelLeaders;
