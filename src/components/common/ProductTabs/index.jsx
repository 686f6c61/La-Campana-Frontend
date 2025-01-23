import { useState } from "react"

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("normas")

  return (
    <div className="flex gap-6">
      {/* Left side tabs */}
      <div className="w-[200px] flex flex-col gap-2">
        <div className="relative">
          <button
            onClick={() => setActiveTab("normas")}
            className={`w-full text-left px-6 py-4 rounded-l-lg ${
              activeTab === "normas" ? "bg-[#ffffff] border-2 border-[#f70025] border-r-0" : "bg-[#f2f2f2]"
            }`}
          >
            <span
              className={`font-gothic text-base ${
                activeTab === "normas" ? "text-[#f70025] font-medium" : "text-[#333333]"
              }`}
            >
              Normas
            </span>
          </button>
          {activeTab === "normas" && (
            <div className="w-[184px] h-[94px] absolute top-[854px] left-[137px] gap-0 rounded-bl-[15px] border-t border-opacity-0 opacity-0">
              <svg
               
                width="184px"
                height="94px" 
                top="854px"
                left="137px"
             
              >
                <path d="M0 0 C0 20 8 20 8 50 C8 80 0 80 0 100" stroke="#f70025" strokeWidth="2" fill="none" />
              </svg>
            </div>
          )}
        </div>

        <button
          onClick={() => setActiveTab("ventajas")}
          className={`w-full text-left px-6 py-4 rounded-l-lg ${
            activeTab === "ventajas" ? "bg-[#ffffff] border-2 border-[#f70025] border-r-0" : "bg-[#f2f2f2]"
          }`}
        >
          <span
            className={`font-gothic text-base ${
              activeTab === "ventajas" ? "text-[#f70025] font-medium" : "text-[#333333]"
            }`}
          >
            Ventajas
          </span>
        </button>

        <button
          onClick={() => setActiveTab("usos")}
          className={`w-full text-left px-6 py-4 rounded-l-lg ${
            activeTab === "usos" ? "bg-[#ffffff] border-2 border-[#f70025] border-r-0" : "bg-[#f2f2f2]"
          }`}
        >
          <span
            className={`font-gothic text-base ${
              activeTab === "usos" ? "text-[#f70025] font-medium" : "text-[#333333]"
            }`}
          >
            Usos
          </span>
        </button>
      </div>

      {/* Right side content */}
      <div className="flex-1 bg-[#f2f2f2] p-8">
        {activeTab === "normas" && (
          <div className="space-y-6">
            <div>
              <h3 className="font-gothic text-lg font-bold mb-2 text-[#333333]">NTC 5805:</h3>
              <p className="font-gothic text-[#333333]">Lámina colaborante de acero conformada en frío.</p>
            </div>

            <div>
              <h3 className="font-gothic text-lg font-bold mb-2 text-[#333333]">ASTM A653 = NTC 4011:</h3>
              <p className="font-gothic text-[#333333]">
                Láminas de acero recubiertas con zinc (galvanizadas) o recubiertas con aleación hierro y zinc mediante
                procesos de inmersión en caliente.
              </p>
            </div>
          </div>
        )}

        {activeTab === "ventajas" && (
          <div>
            <p className="font-gothic text-[#333333]">Contenido de ventajas...</p>
          </div>
        )}

        {activeTab === "usos" && (
          <div>
            <p className="font-gothic text-[#333333]">Contenido de usos...</p>
          </div>
        )}
      </div>
    </div>
  )
}

