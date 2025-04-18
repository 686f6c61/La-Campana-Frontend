import React from "react";
import { useState, useEffect } from "react";
import TabButton from "../TabButton";

const TabBody = ({ activeTab, productDescription }) => {
  const renderList = (items) => {
    if (!Array.isArray(items)) return null;

    const itemsPerColumn = 5;
    const columnCount = Math.ceil(items.length / itemsPerColumn);

    // Generar columnas dividiendo el array original
    const columns = Array.from({ length: columnCount }, (_, i) =>
      items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
    );

    return (
      <div className="flex flex-wrap gap-8">
        {columns.map((col, colIndex) => (
          <div key={colIndex} className="flex-1 min-w-[150px] space-y-4">
            {col.map((item, index) => (
              <p key={index} className="font-antonio text-[#333333]">{item}</p>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {activeTab === "normas" && renderList(productDescription.normas)}
      {activeTab === "ventajas" && renderList(productDescription.ventajas)}
      {activeTab === "usos" && renderList(productDescription.usos)}
    </>
  );
};

const ProductTabs = ({productDescription}) => {
  const [activeTab, setActiveTab] = useState("normas");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="flex gap-5">
        <div className="lg:w-[200px] w-full flex lg:flex-col gap-1">
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
        {!isMobile && <div className="flex-1 bg-[#f2f2f2] p-8 text-left">
          <TabBody activeTab={activeTab} productDescription={productDescription}/>
        </div>}
      </div>
      {isMobile && <div className="mt-4 bg-[#f2f2f2] p-8 text-left">
        <TabBody activeTab={activeTab} productDescription={productDescription}/>
      </div>}
    </div>
  );
}
export default ProductTabs;
