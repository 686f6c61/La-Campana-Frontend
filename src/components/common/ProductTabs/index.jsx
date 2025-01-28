import { useState } from "react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("normas");

  return (
    <div className="flex gap-6">
      {/* Left side tabs */}
      <div className="w-[200px] flex flex-col gap-3"> {/* Ajuste de gap */}
        {/* Normas Tab */}
        <div className="relative">
          <button
            onClick={() => setActiveTab("normas")}
            className={`text-left px-10 py-8 w-[184px] h-[94px] rounded-b-[15px] ${ // Ajuste de padding
              activeTab === "normas"
                ? "bg-[#ffffff] border-none"
                : "bg-[#f2f2f2]"
              }`}
          >
            <span
              className={`font-antonio text-base ${activeTab === "normas"
                ? "text-[#f70025] font-medium"
                : "text-[#333333]"
                }`}
            >
              Normas
            </span>
          </button>
          {activeTab === "normas" && (
            <div className="absolute top-0 left-0 w-full">
              {/* Rectángulo */}
              <div
                className="absolute"
                style={{
                  width: "184px",  // Apliqué el width de 184px
                  height: "94px",  // Apliqué el height de 94px
                  top: "0",  // Alineación del rectángulo con el tab
                  left: "0",  // Alineación del rectángulo con el tab
                  borderRadius: "0px 0px 15px 0px",  // Borde redondeado en la parte inferior
                  border: "1px solid #f70025",  // Borde rojo
                  opacity: 1,  // Opacidad visible
                }}
              >
                {/* Triángulo con borde rojo */}
                <svg
                  className="absolute top-1/2 left-full -translate-y-1/2"
                  width="11px"  // Establecemos un ancho explícito
                  height="17px" // Establecemos una altura explícita
                  viewBox="0 0 10 10" // Ajustamos el viewBox para que el triángulo se ajuste mejor
                  style={{
                    top: "calc(50%)",  // Centrado verticalmente
                    left: "100%",  // Posicionado al lado derecho
                  }}
                >
                  <polygon points="10,5 0,0 0,10" fill="transparent" stroke="#f70025" />
                </svg>
                {/* Agregar una capa blanca en la intersección */}
                <div
                  className="absolute"
                  style={{
                    width: "1px",  // Ajustamos el ancho de la capa
                    height: "10px", // Igual a la altura del rectángulo
                    top: "40px", // Posicionamos para cubrir la intersección
                    left: "100%", // Alineación con el triángulo
                    backgroundColor: "white",  // Capa blanca
                    zIndex: 2,  // Aseguramos que la capa esté detrás del triángulo
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Ventajas Tab */}
        <div className="relative">
          <button
            onClick={() => setActiveTab("ventajas")}
            className={`w-[184px] h-[94px] text-left px-8 py-8 rounded-b-[15px] ${ // Ajuste de padding
              activeTab === "ventajas"
                ? "bg-[#ffffff] border-none"
                : "bg-[#f2f2f2]"
              }`}
          >
            <span
              className={`font-antonio text-base ${activeTab === "ventajas"
                ? "text-[#f70025] font-medium"
                : "text-[#333333]"
                }`}
            >
              Ventajas
            </span>
          </button>
          {activeTab === "ventajas" && (
            <div className="absolute top-0 left-0 w-full">
              {/* Rectángulo */}
              <div
                className="absolute"
                style={{
                  width: "184px",  // Apliqué el width de 184px
                  height: "94px",  // Apliqué el height de 94px
                  top: "0",  // Alineación del rectángulo con el tab
                  left: "0",  // Alineación del rectángulo con el tab
                  borderRadius: "0px 0px 15px 0px",  // Borde redondeado en la parte inferior
                  border: "1px solid #f70025",  // Borde rojo
                  opacity: 1,  // Opacidad visible
                }}
              >
                {/* Triángulo con borde rojo */}
                <div
                  className="absolute"
                  style={{
                    width: "0",
                    height: "0",
                    borderTop: "8.5px solid transparent",  // Sin color arriba
                    borderBottom: "8.5px solid transparent",  // Sin color abajo
                    borderLeft: "10px solid #f70025",  // Borde izquierdo rojo
                    top: "47%",  // Alineación vertical del triángulo
                    left: "100%", // Colocamos el triángulo en la esquina derecha
                    opacity: 1,
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Usos Tab */}
        <div className="relative">
          <button
            onClick={() => setActiveTab("usos")}
            className={`w-[184px] h-[94px] text-left px-10 py-8 rounded-b-[15px] ${activeTab === "usos"
              ? "bg-[#ffffff] border-none"
              : "bg-[#f2f2f2]"
              }`}
          >
            <span
              className={`font-antonio text-base ${activeTab === "usos"
                ? "text-[#f70025] font-medium"
                : "text-[#333333]"
                }`}
            >
              Usos
            </span>
          </button>
          {activeTab === "usos" && (
            <div className="absolute top-0 left-0 w-full">
              {/* Rectángulo */}
              <div
                className="absolute"
                style={{
                  width: "184px",  // Apliqué el width de 184px
                  height: "94px",  // Apliqué el height de 94px
                  top: "0",  // Alineación del rectángulo con el tab
                  left: "0",  // Alineación del rectángulo con el tab
                  borderRadius: "0px 0px 15px 0px",  // Borde redondeado en la parte inferior
                  border: "1px solid #f70025",  // Borde rojo
                  opacity: 1,  // Opacidad visible
                }}
              >
                <div
                  className="absolute"
                  style={{
                    width: "0",
                    height: "0",
                    borderTop: "8.5px solid transparent",
                    borderBottom: "8.5px solid transparent",
                    borderLeft: "10px solid #f70025 ",
                    top: "47%",
                    left: "100%",
                    opacity: 1,
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 bg-[#f2f2f2] p-8">
        {activeTab === "normas" && (
          <div className="space-y-6">
            <div>
              <h3 className="font-antonio text-lg font-bold mb-2 text-[#333333]">
                NTC 5805:
              </h3>
              <p className="font-antionio text-[#333333]">
                Lámina colaborante de acero conformada en frío.
              </p>
            </div>

            <div>
              <h3 className="font-antonio text-lg font-bold mb-2 text-[#333333]">
                ASTM A653 = NTC 4011:
              </h3>
              <p className="font-antonio text-[#333333]">
                Láminas de acero recubiertas con zinc (galvanizadas) o recubiertas
                con aleación hierro y zinc mediante procesos de inmersión en
                caliente.
              </p>
            </div>
          </div>
        )}

        {activeTab === "ventajas" && (
          <div>
            <p className="font-antonio text-[#333333]">Contenido de ventajas...</p>
          </div>
        )}

        {activeTab === "usos" && (
          <div>
            <p className="font-antonio text-[#333333]">Contenido de usos...</p>
          </div>
        )}
      </div>
    </div>
  );
}
