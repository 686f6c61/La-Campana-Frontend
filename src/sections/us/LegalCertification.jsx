import React, { useEffect, useRef } from "react";
import { OverlayScrollbars } from "overlayscrollbars";

const customScrollbarStyle = `
  .os-scrollbar {
    --os-size: 8px;
    --os-handle-bg: #d3d3d3;
    --os-handle-border-radius: 10px;
    --os-track-bg: gray;
  }
`;

const LegalCertification = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Inyectamos nuestro estilo personalizado
    const styleElement = document.createElement("style");
    styleElement.innerHTML = customScrollbarStyle;
    document.head.appendChild(styleElement);

    // Instanciamos OverlayScrollbars en el div que queremos que sea "scrolleable"
    const instance = OverlayScrollbars(scrollRef.current, {
      scrollbars: {
        theme: "os-theme-dark",
      },
    });

    // Limpiamos todo cuando se desmonta el componente
    return () => {
      document.head.removeChild(styleElement);
      instance.destroy();
    };
  }, []);

  return (
    <div className="relative w-full max-w-7xl h-[600px] mx-0 my-10 ml-0  ">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 bg-lacampana-red2 opacity-10 rounded-tr-full rounded-br-full hidden md:block"></div>

      <div
        className="absolute inset-0 bg-cover mix-blend-multiply rounded-tr-full rounded-br-full hidden md:block"
        style={{
          backgroundImage: "url('/images/legalCertificationRed.jpg')",
        }}
      ></div>

      {/* Tarjeta principal */}
      <div
        className="relative top-20 md:translate-x-80 md:mr-0 z-10 bg-white rounded-lg shadow-xl md:max-w-xl max-w-lg mx-auto h-72 md:h-96 md:w-100 rounded-tr-lg md:pb-0 pb-20 "
        style={{
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h4 className="text-3xl font-bold mb-4 text-left md:p-6 p-4">
          Legalidad y <span className="text-lacampana-red2">certificación</span>
        </h4>

        <div
          className="px-6 overflow-y-auto md:h-[50%] h-[55%]"
          ref={scrollRef}
        >
          <p className="text-gray-700 text-sm mb-4 text-left">
            Contamos con la legalidad y certificación de todos nuestros
            productos, y más aún con la credibilidad de nuestros clientes por
            años. Somos importadores directos de las principales siderúrgicas a
            nivel internacional. No ahorraremos esfuerzos para cumplir nuestro
            objetivo: brindarle a nuestros clientes no solo productos, sino
            beneficios para su empresa.
          </p>
          <p className="text-gray-700 text-sm mb-4 text-left">
            Actualmente, La Campana Servicios de Acero S.A. se encuentra
            desarrollando ideas para dar inicio a una nueva etapa de crecimiento
            a nivel nacional, apoyada con alianzas estratégicas. Dichas alianzas
            ampliarán la gama de productos y servicios especializados, buscando
            así una mayor satisfacción en la calidad para nuestros clientes.
          </p>
        </div>

        <div className="pt-5 pl-4 flex text-left">
          <button className="btn bg-lacampana-gray1 text-white md:text-sm border-none font-montserrat font-semibold text-sm md:text-lg px-8  rounded-tl-full rounded-bl-full rounded-tr-full">
            Conoce nuestros productos
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalCertification;
