import React, { useState } from "react";
import SearchBar from "../common/SearchBar.jsx";
import RadioSelect from "../common/RadioSelect/index.jsx";
import additionalDocuments from "../../../src/data/documentsData.jsx";
import IntroductoryText from "../../sections/common/IntroductoryText.jsx";

const DocumentsItem = () => {
  const [selectedOption, setSelectedOption] = useState("Formularios");

  const selectDocuments = ["Formularios", "Normas técnicas", "Todos"];


  const [loadedDocs, setLoadedDocs] = useState([]);

  
  const loadMoreDocuments = () => {
    setLoadedDocs((prevDocs) => [...prevDocs, ...additionalDocuments]);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-white pb-20">
      <div className="relative z-10 text-center w-full max-w-screen-xl">
        <IntroductoryText
          title={
            <>
              Repositorio de{" "}
              <span className="text-lacampana-red2">documentos</span>
            </>
          }
          bgTitle="Documentación"
          titleMargin="mt-24"
          justify="center"
          description="Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim
                pulvinar ut lorem pharetra. Vestibulum nulla faucibus nunc enim.
                Proin feugiat fames turpis sociis viverra. Viverra sit ut
                egestas placerat neque fames ante."
        />

        <div className="mt-6 flex flex-col md:flex-row justify-between  w-full relative z-10 space-y-4 md:space-y-0">
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <RadioSelect
              options={selectDocuments}
              selectedOption={selectedOption}
              onSelectionChange={setSelectedOption}
              bgColor="red"
            borderColor="0 0 0 2px rgba(255, 0, 0, 0.5)"
            textColor="gray"
            />
          </div>

          <div className="drop-shadow-lg flex justify-center w-full md:w-[300px] md:h-[40px] md:p-0 p-8">
            <SearchBar placeholder="Buscar archivo..." />
          </div>
        </div>

       
        <div className="mt-10 space-y-4 relative z-10">
          <div className="p-4 bg-lacampana-white rounded-tl-lg rounded-bl-lg rounded-tr-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="w-full md:w-auto">
              <h3 className="text-lg font-bold font-open-sans text-left">
                Solicitud de crédito covinoc
              </h3>
              <p className="text-gray-500 text-sm font-open-sans text-left">
                Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim
                pulvinar ut lorem pharetra.
              </p>
            </div>
            <button className="border border-lacampana-gray1 text-lacampana-gray1 inline-flex self-start py-2 px-4 sm:py-2 sm:px-8 font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-lacampana-gray1 hover:text-white hover:border-lacampana-gray1 transition hover:scale-90 transition duration-300 ease-in-out">
  Descargar
</button>

          </div>

          {[
            "Formulario de crédito persona natural",
            "Formulario de crédito persona juridica",
            "Pesos y espesores de láminas de acero",
            "Láminas de acero por atados",
          ].map((title, index) => (
            <div
              key={index}
              className="p-4 bg-lacampana-white rounded-tl-lg rounded-bl-lg rounded-tr-lg flex flex-col md:flex-row justify-between items-start md:items-center items-start gap-4"
            >
              <div className="w-full md:w-auto">
                <h3 className="text-lg font-bold font-open-sans text-left">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm font-open-sans text-left">
                  Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim
                  pulvinar ut lorem pharetra.
                </p>
              </div>
              <button className="border border-lacampana-gray1 text-lacampana-gray1 inline-flex self-start py-2 px-4 sm:py-2 sm:px-8 font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-lacampana-gray1 hover:text-white hover:border-lacampana-gray1 transition hover:scale-90 transition duration-300 ease-in-out">
                Descargar
              </button>
            </div>
          ))}

       
          {loadedDocs.map((doc, index) => (
            <div
              key={index + 5}
              className="p-4 bg-gray-100 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div className="w-full md:w-auto">
                <h3 className="text-lg font-bold font-open-sans text-left">
                  {doc.title}
                </h3>
                <p className="text-gray-500 text-sm font-open-sans text-left">
                  {doc.description}
                </p>
              </div>
              <button className="border border-lacampana-gray1 text-lacampana-gray1 inline-flex self-start py-2 px-4 sm:py-2 sm:px-8 font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-lacampana-gray1 hover:text-white hover:border-lacampana-gray1 transition hover:scale-90 transition duration-300 ease-in-out">
                Descargar
              </button>
            </div>
          ))}
        </div>

       
        <button
  className="mt-8 bg-lacampana-red1 text-lacampana-white px-8 py-2 text-sm sm:text-base font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full w-auto md:w-auto relative z-10 border border-lacampana-red1 hover:bg-white hover:text-lacampana-red1 hover:border-lacampana-red1 transition hover:scale-90 transition duration-300 ease-in-out"
  onClick={loadMoreDocuments}
>
  Cargar más documentos
</button>

      </div>
    </div>
  );
};

export default DocumentsItem;
