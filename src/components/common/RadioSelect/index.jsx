import React, { useState } from "react";

const RadioSelect = ({ options, selectedOption, onSelectionChange }) => {
  return (
    <div className="flex flex-wrap gap-x-2 md:gap-x-3 pt-4">
      {options.map((option) => (
        <div key={option} className="flex items-center sm:me-3 md:me-4">
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
              backgroundColor: selectedOption === option ? "red" : "#d1d3d1",
              border: "2px solid white",
              cursor: "pointer",
              boxShadow:
                selectedOption === option
                  ? "0 0 0 2px rgba(255, 0, 0, 0.5)"
                  : "0 0 0 2px rgba(209, 211, 209, 0.5)",
            }}
          />
          <label
            htmlFor={`${option.toLowerCase()}-radio`}
            className="ms-0 text-xs md:text-sm font-medium md:pl-1"
            style={{ color: selectedOption === option ? "red" : "#d1d3d1" }}
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioSelect;
