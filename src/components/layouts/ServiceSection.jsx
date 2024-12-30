import React from "react";

const ServiceSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between p-6 md:p-12 pt-20 md:pt-40">
      {/* Red Box */}
      <div className="absolute bottom-0 left-20 w-full h-full bg-lacampana-red2 -z-10 rounded-tl-3xl md:h-[70%] md:w-[90%]"></div>

      {/* Content Section */}
      <div className="max-w-3xl z-20 md:mt-20 md:ml-20">
        <h2 className="text-2xl text-left md:text-4xl font-bold font-antonio text-white mb-4">
          Contacta un asesor especializado
        </h2>
        <p className="text-lg text-white text-left mb-6 font-open-sans">
          ¡No te preocupes! En <strong>[Nombre de la empresa]</strong>, queremos
          que tengas una experiencia de compra cómoda y segura. Por eso, ponemos
          a tu disposición un equipo de expertos asesores que te guiarán en todo
          el proceso de compra.
        </p>
        <div className="text-left">
          <button className="btn bg-lacampana-gray1 text-white border-none font-montserrat text-sm md:text-lg px-6 py-3 rounded-full hover:bg-gray-700">
            Hablar con un asesor
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="absolute bottom-0 right-20 z-20">
        <img
          src="/images/girl.png"
          alt="Asesor especializado"
          className="w-[400px] lg:w-[450px] h-auto"
        />
      </div>
    </section>
  );
};

export default ServiceSection;
