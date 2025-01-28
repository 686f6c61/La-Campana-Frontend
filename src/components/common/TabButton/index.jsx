import React from "react";

const TabButton = ({ tabName, activeTab, setActiveTab }) => {
    return (
        <div className="relative">
        <button
          onClick={() => setActiveTab(tabName)}
          className={`text-left px-10 py-8 w-[184px] h-[94px] rounded-b-[15px] ${
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
          <div className="absolute top-0 left-0 w-full">
            <div
              className="absolute"
              style={{
                width: "184px",
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
                className="absolute top-1/2 left-full -translate-y-1/2"
                width="11px"
                height="17px"
                viewBox="0 0 10 10"
                style={{
                  top: "calc(50%)",
                  left: "100%",
                }}
              >
                <polygon points="10,5 0,0 0,10" fill="transparent" stroke="#f70025" />
              </svg>
              {/* Capa blanca en la intersección */}
              <div
                className="absolute"
                style={{
                  width: "1px",
                  height: "10px",
                  top: "40px",
                  left: "100%",
                  backgroundColor: "white",
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