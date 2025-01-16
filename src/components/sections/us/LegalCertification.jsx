import React from "react";
import styles from "./LegalCertification.module.css";

const LegalCertification = () => {
  return (
    <div className="relative w-full max-w-5xl h-[500px] mx-0 my-10">
      {/* Imagen de fondo 1 (sólo para pantallas medianas o más grandes) */}
      <div className="absolute inset-0 bg-lacampana-red2 opacity-10 rounded-tr-full rounded-br-full hidden md:block"></div>

      {/* Imagen de fondo 2 (sólo para pantallas medianas o más grandes) */}
      <div
        className="absolute inset-0 bg-contain mix-blend-multiply rounded-tr-full rounded-br-full hidden md:block"
        style={{
          backgroundImage: "url('/images/legalCertificationRed.jpg')",
        }}
      ></div>

      {/* Tarjeta */}
      <div
        className={`relative top-20 md:translate-x-80 md:mr-30 z-10 bg-white rounded-lg shadow-xl max-w-md mx-auto h-60 sm:h-72 md:h-80 rounded-tr-lg pb-10`}
        style={{
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)", // Sombra más grande personalizada
        }}
      >
        {/* Contenido desplazable */}
        <div className={`p-6 overflow-y-auto h-[75%] ${styles.scrollbar}`}>
          <h4 className="text-3xl font-bold mb-4">
            Legalidad y{" "}
            <span className="text-lacampana-red2">certificación</span>
          </h4>
          <p className="text-gray-700 text-xs mb-4">
            Contamos con la legalidad y certificación de todos nuestros
            productos, y más aún con la credibilidad de nuestros clientes por
            años. Somos importadores directos de las principales siderúrgicas a
            nivel internacional. No ahorraremos esfuerzos para cumplir nuestro
            objetivo, brindarle a nuestros clientes no solo productos, mejor aun
            beneficios para su empresa.
          </p>
          <p className="text-gray-700 text-xs mb-4">
            Actualmente La Campana Servicios de Acero S.A. se encuentra
            desarrollando ideas, para dar inicio a una nueva etapa de
            crecimiento a nivel nacional apoyada de alianzas estratégicas que
            ampliaran su gama de productos y servicios especializados buscando
            una mayor satisfacción en calidad de nuestros clientes.
          </p>
        </div>

        {/* Botón fuera del scroll */}
        <div className="p-4 flex justify-center">
          <button className="btn bg-lacampana-gray1 text-white md:text-sm border-none font-montserrat font-semibold text-sm md:text-lg px-8 py-3 rounded-tl-full rounded-bl-full rounded-tr-full">
            Conoce nuestros productos
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalCertification;
