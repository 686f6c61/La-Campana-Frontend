import React from "react";

const LegalCertification = () => {
  return (
    <div className=" max-w-screen-desktop min-h-[600px] pt-20 pr-5">
      {/* Contenedor del fondo decorativo */}
      <div className="relative w-full h-[600px] flex justify-end items-center">
        <div
          className="absolute inset-0 h-full w-full rounded-tr-full rounded-br-full hidden md:block"
          style={{
            backgroundImage: "url('/images/legalCertificationRed.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      

      {/* Tarjeta principal encima del fondo */}
      <div
        className="   z-10 bg-white  shadow-xl md:max-w-xl max-w-lg md:h-[400px] h-[550px] p-6 rounded-tl-lg text-left "
        style={{
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h4 className="text-3xl font-bold mb-4 text-left">
          Legalidad y{" "}
          <span className="text-lacampana-red2">certificación</span>
        </h4>

        <p className="text-gray-700 text-sm mb-4 text-left">
          Contamos con la legalidad y certificación de todos nuestros productos,
          y más aún con la credibilidad de nuestros clientes por años. Somos
          importadores directos de las principales siderúrgicas a nivel
          internacional. No ahorraremos esfuerzos para cumplir nuestro objetivo:
          brindarle a nuestros clientes no solo productos, sino beneficios para
          su empresa.
        </p>
        <p className="text-gray-700 text-sm text-left">
          Actualmente, La Campana Servicios de Acero S.A. se encuentra
          desarrollando ideas para dar inicio a una nueva etapa de crecimiento a
          nivel nacional, apoyada con alianzas estratégicas. Dichas alianzas
          ampliarán la gama de productos y servicios especializados, buscando
          así una mayor satisfacción en la calidad para nuestros clientes.
        </p>

        <div className="mt-6">
          <button className="btn bg-lacampana-gray1 text-white font-montserrat  text-sm px-8 py-2 rounded-tl-full rounded-bl-full rounded-tr-full">
            Conoce nuestros productos
          </button>
        </div>
      </div></div>
    </div>
  );
};

export default LegalCertification;
