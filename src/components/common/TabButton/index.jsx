import React, { useEffect, useState } from "react";
import "./index.css"

const TabButton = ({ tabName, activeTab, setActiveTab }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setActiveTab(tabName)}
        className={`text-left w-full px-10 py-8 lg:w-[184px] lg:h-[94px] rounded-b-[15px] ${
          activeTab === tabName ? "bg-[#ffffff] border-none" : "bg-[#f2f2f2]"
        }`}
      >
        <span
          className={`font-antonio text-base ${
            activeTab === tabName ? "text-[#f70025] font-medium" : "text-[#333333]"
          }`}
        >
          {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
        </span>
      </button>

      {activeTab === tabName && (
        <div className="absolute top-0 left-0 w-full lg:w-[184px] lg:h-[94px]">
          <div
            className="absolute"
            style={{
              width: isMobile ? "100%" : "184px",
              height: "94px",
              top: "0",
              left: "0",
              borderRadius: "0px 0px 15px 0px",
              border: "1px solid #f70025",
              opacity: 1,
            }}
          >
            {/* Triángulo con borde rojo */}
            <svg
              className={`absolute ${
                isMobile ? "top-98 left-1/2 -translate-x-1/2" : "top-1/2 left-full -translate-y-1/2"
              }`}
              width="11px"
              height="17px"
              viewBox="0 0 10 10"
            >
              <polygon
                points={isMobile ? "5,10 0,0 10,0" : "10,5 0,0 0,10"}
                fill="transparent"
                stroke="#f70025"
              />
            </svg>

            {/* Capa blanca en la intersección */}
            <div
              className="absolute bg-white"
              style={{
                width: isMobile ? "10px" : "1px",
                height: isMobile ? "2px" : "10px",
                top: isMobile ? "100%" : "40px",
                left: isMobile ? "50%" : "100%",
                transform: isMobile ? "translateX(-50%)" : "none",
                zIndex: 2,
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};


export default TabButton;