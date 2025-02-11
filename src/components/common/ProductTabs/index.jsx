import React from "react";
import { useState, useEffect } from "react";
import TabButton from "../TabButton";

const TabBody = ({ activeTab }) => {
  return (
    <>
      {activeTab === "normas" && (
        <div className="space-y-6">
          <div>
            <h3 className="font-antonio text-lg font-bold mb-2 text-[#333333]">
              NTC 5805:
            </h3>
            <p className="font-antonio text-[#333333]">
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
    </>
  );
};

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("normas");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="flex gap-6">
        <div className="lg:w-[200px] w-full flex lg:flex-col gap-3">
          {["normas", "ventajas", "usos"].map((tab) => (
            <div className="flex-1">
              <TabButton
                key={tab}
                tabName={tab}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

            </div>
          ))}
        </div>
        {!isMobile && <div className="flex-1 bg-[#f2f2f2] p-8">
          <TabBody activeTab={activeTab} />
        </div>}
      </div>
      {isMobile && <div className="mt-4 bg-[#f2f2f2] p-8">
        <TabBody activeTab={activeTab} />
      </div>}
    </div>
  );
}
export default ProductTabs;
