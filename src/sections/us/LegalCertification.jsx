import React from "react";
import legalCertificationData from "../../data/legalCertificationData";
import ActionButton from "../../components/common/ActionButton";

const LegalCertification = () => {
  return (
    <div className="max-w-screen-desktop min-h-[600px] pt-20 pr-5">
    {/* Contenedor del fondo decorativo */}
    <div className="relative w-full h-[600px] flex justify-end items-center">
      <div
        className="absolute inset-0 h-full w-[1000px] rounded-tr-full rounded-br-full hidden md:block"
        style={{
          backgroundImage: `url('${legalCertificationData.backgroundImage}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>


      {/* Tarjeta */}
      <div
        className="z-10 bg-white shadow-xl md:max-w-xl max-w-lg md:h-[400px] h-[550px] p-6 rounded-tl-lg text-left"
        style={{
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h4 className="text-3xl font-bold mb-4 text-left">
          {legalCertificationData.title}{" "}
          <span className="text-lacampana-red2">{legalCertificationData.highlight}</span>
        </h4>


        {legalCertificationData.paragraphs.map((text, idx) => (
          <p key={`legal-p-${idx}`} className="text-gray-700 text-sm mb-4 text-left">
            {text}
          </p>
        ))}


        <div className="mt-6">
          <button className="btn bg-lacampana-gray1 text-white font-montserrat text-sm px-8 py-2 rounded-tl-full rounded-bl-full rounded-tr-full border border-transparent hover:bg-white hover:text-lacampana-gray1 hover:border-lacampana-gray1 transition duration-300 ease-in-out hover:scale-90">
            {legalCertificationData.buttonText}
          </button>
        </div>
      </div>
    </div>
  </div>
);
};

export default LegalCertification;
