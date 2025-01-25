import React, { useState } from "react";
import BgText from "../common/BgText";
import SearchBar from "../common/SearchBar.jsx";
import MultiSelect from "../common/Multiselect/index.jsx";
import additionalDocuments from "../../../src/data/documentsData.jsx";
import IntroductoryText from "../../sections/common/IntroductoryText.jsx";

const DocumentsItem = () => {
  const [selectedOption, setSelectedOption] = useState("Formularios");

  const selectDocuments = ["Formularios", "Normas técnicas", "Todos"];

  // Estado para manejar los documentos adicionales
  const [loadedDocs, setLoadedDocs] = useState([]);

  // Función para cargar más documentos
  const loadMoreDocuments = () => {
    setLoadedDocs((prevDocs) => [...prevDocs, ...additionalDocuments]);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center bg-white ">
      <div className="relative z-10 text-center w-full max-w-screen-xl">
        {/* <div className="absolute inset-0 flex  z-0 transform translate-x-[300px] translate-y-[0px] hidden md:block">
          <BgText
            text="Documentación"
            className="md:justify-center md:items-center  md:pl-0"
          />
        </div>

        <h1 className="md:text-5xl text-3xl font-semibold text-lacampana-gray1 pt-5 md:pt-20 md:mt-10 font-anton">
          Repositorio en <span className="text-lacampana-red2">documentos</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto relative z-10">
          Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim pulvinar ut
          lorem pharetra. Vestibulum nulla faucibus nunc enim. Proin feugiat
          fames turpis sociis viverra. Viverra sit ut egestas placerat neque
          fames ante.
        </p> */}

        <IntroductoryText
          title={
            <>
              Nuestro <span className="text-lacampana-red2">Blog</span>
            </>
          }
          bgTitle="Actualidad en aceros"
          description="Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim pulvinar ut lorem pharetra. Vestibulum nulla faucibus nunc enim. Proin feugiat fames turpis sociis viverra. Viverra sit ut egestas placerat neque fames ante."
          justify="center"
        />

        <div className="mt-6 flex flex-col md:flex-row justify-between  w-full relative z-10 space-y-4 md:space-y-0">
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <MultiSelect
              options={selectDocuments}
              selectedOption={selectedOption}
              onSelectionChange={setSelectedOption}
            />
          </div>

          <div className="drop-shadow-lg flex justify-center">
            <SearchBar placeholder="Buscar archivo..." />
          </div>
        </div>

        {/* Lista de documentos iniciales */}
        <div className="mt-10 space-y-4 relative z-10">
          <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-left font-open-sans">
                Solicitud de crédito covinoc
              </h3>
              <p className="text-gray-500 text-sm font-open-sans">
                Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim
                pulvinar ut lorem pharetra.
              </p>
            </div>
            <button className="bg-lacampana-gray1 text-lacampana-white py-2 px-8 font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full">
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
              className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold text-left font-open-sans">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm font-open-sans">
                  Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim
                  pulvinar ut lorem pharetra.
                </p>
              </div>
              <button className="border border-lacampana-gray1 px-8 text-lacampana-gray1 py-2 px-4 font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full">
                Descargar
              </button>
            </div>
          ))}

          {/* Documentos adicionales desde el archivo data */}
          {loadedDocs.map((doc, index) => (
            <div
              key={index + 5}
              className="p-4 bg-gray-100 rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold text-left font-open-sans">
                  {doc.title}
                </h3>
                <p className="text-gray-500 text-sm font-open-sans">
                  {doc.description}
                </p>
              </div>
              <button className="border border-black text-black py-2 px-4 font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full">
                Descargar
              </button>
            </div>
          ))}
        </div>

        {/* Botón de cargar más */}
        <button
          className="mt-8 bg-lacampana-red1 text-lacampana-white px-8 py-3 px-6 font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full relative z-10"
          onClick={loadMoreDocuments}
        >
          Cargar más documentos
        </button>
      </div>
    </div>
  );
};

export default DocumentsItem;
