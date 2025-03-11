import React from "react";

const RadioSelect = ({ options, selectedOption, onSelectionChange, bgColor = "red", borderColor = "white", textColor = "white" }) => {
  return (
    <div className="flex flex-wrap gap-x-2 md:gap-x-3  pt-4">
      {options.map((option) => (
        <div key={option} className="flex items-center sm:me-3 md:me-4 pb-2 pt-6">
          <input
            id={`${option.toLowerCase()}-radio`}
            type="radio"
            value={option}
            name="select"
            checked={selectedOption === option}
            onChange={() => onSelectionChange(option)}
            className="w-4 h-4"
            style={{
              appearance: "none",
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: selectedOption === option ? bgColor : "#d1d3d1",
              border: `2px solid ${borderColor}`,
              cursor: "pointer",
              boxShadow:
                selectedOption === option
                  ? `0 0 0 2px ${borderColor}`
                  : "0 0 0 2px rgba(209, 211, 209, 0.5)",
            }}
          />
          <label
            htmlFor={`${option.toLowerCase()}-radio`}
            className="ms-1 text-xs md:text-sm font-medium md:pl-1"
            style={{ color: selectedOption === option ? bgColor : textColor }}
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioSelect;
