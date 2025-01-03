import React from "react";

const ServiceSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between p-6 md:p-12 pt-20 md:pt-40 bottom-0 -bottom-20 overflow-hidden">
      {/* Red Box */}
      <div className="absolute bottom-1 md:left-20 ml-10 w-full bg-lacampana-red2 -z-10 rounded-tl-3xl h-[85%] md:h-[60%] md:w-[85%]"></div>

      {/* Content Section */}
      <div className="max-w-3xl z-20  md:mt-20 md:ml-20">
        <h2 className="text-2xl text-left ml-3  md:ml-10 text-lg md:text-3xl font-normal font-antonio text-white mb-4">
          Contacta un asesor especializado
        </h2>
        <p className="text-xm md:text-lg text-white ml-3 md:ml-10 text-left mb-6 font-light font-open-sans">
          ¡No te preocupes! En <strong>[Nombre de la empresa]</strong>, queremos
          que tengas una experiencia de compra cómoda y segura. Por eso, ponemos
          a tu disposición un equipo de expertos asesores que te guiarán en todo
          el proceso de compra.
        </p>
        <div className="text-left pb-20">
          <button className="btn bg-lacampana-gray1 ml-3 md:ml-10 text-white border-none font-montserrat font-semibold text-sm md:text-lg md:px-16 py-3 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-gray-700">
            Hablar con un asesor
          </button>
        </div>
      </div>

      {/* Image Section */}

      <div className="absolute right-0 -right-6 bottom-0 -bottom-20 md:bottom-0 md:right-20 md:z-20 ">
        <img
          src="/images/girl.png"
          alt="Asesor especializado"
          className="w-[250px] sm:w-[300px] lg:w-[425px] h-auto"
        />
      </div>
    </section>
  );
};

export default ServiceSection;
