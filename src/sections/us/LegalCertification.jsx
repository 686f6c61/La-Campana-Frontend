import React, { useEffect, useRef } from "react";
import { OverlayScrollbars } from "overlayscrollbars";

const customScrollbarStyle = `
  .os-scrollbar {
    --os-size: 8px; 
    --os-handle-bg:  #d3d3d3;
    --os-handle-border-radius: 10px;
    --os-track-bg: gray;
  }

`;

const LegalCertification = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = customScrollbarStyle;
    document.head.appendChild(styleElement);

    const instance = OverlayScrollbars(scrollRef.current, {
      scrollbars: {
        theme: "os-theme-dark",
      },
    });

    return () => {
      document.head.removeChild(styleElement);
      instance.destroy();
    };
  }, []);

  return (
    <div className="relative w-full max-w-7xl h-[600px] mx-0 my-10 ml-0">
      <div className="absolute inset-0 bg-lacampana-red2 opacity-10 rounded-tr-full rounded-br-full hidden md:block"></div>

      <div
        className="absolute inset-0 bg-cover mix-blend-multiply rounded-tr-full rounded-br-full hidden md:block"
        style={{
          backgroundImage: "url('/images/legalCertificationRed.jpg')",
        }}
      ></div>

      {/* Tarjeta */}
      <div
        className={`relative top-20 md:translate-x-80 md:mr-10 z-10 bg-white rounded-lg shadow-xl max-w-md mx-auto h-72 sm:h-80 md:h-96 md:w-100 rounded-tr-lg pb-0 `}
        style={{
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="p-6 overflow-y-auto h-[75%]" ref={scrollRef}>
          <h4 className="text-3xl font-bold mb-4 text-left">
            Legalidad y{" "}
            <span className="text-lacampana-red2">certificación</span>
          </h4>
          <p className="text-gray-700 text-sm mb-4 text-left">
            Contamos con la legalidad y certificación de todos nuestros
            productos, y más aún con la credibilidad de nuestros clientes por
            años. Somos importadores directos de las principales siderúrgicas a
            nivel internacional. No ahorraremos esfuerzos para cumplir nuestro
            objetivo, brindarle a nuestros clientes no solo productos, mejor aún
            beneficios para su empresa.
          </p>
          <p className="text-gray-700 text-sm mb-4 text-left">
            Actualmente La Campana Servicios de Acero S.A. se encuentra
            desarrollando ideas, para dar inicio a una nueva etapa de
            crecimiento a nivel nacional apoyada de alianzas estratégicas que
            ampliarán su gama de productos y servicios especializados buscando
            una mayor satisfacción en calidad de nuestros clientes.
          </p>
        </div>

        {/* Botón fuera del scroll */}
        <div className="p-4 flex text-left">
          <button className="btn bg-lacampana-gray1 text-white md:text-sm border-none font-montserrat font-semibold text-sm md:text-lg px-8 py-3 rounded-tl-full rounded-bl-full rounded-tr-full">
            Conoce nuestros productos
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalCertification;
