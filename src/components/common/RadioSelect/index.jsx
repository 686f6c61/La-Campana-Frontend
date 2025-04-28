import React from "react";

const RadioSelect = ({
  options,
  selectedOption,
  onSelectionChange,
  bgColor = "red",
  borderColor = "gray",
  textColor = "black",
  variant = "default",
  renderContent = null,
  labelClassName = "",
  bgColorSelected,
  borderColorSelected,
}) => {
  return (
    <div
      className={`flex ${
        variant === "box" ? "flex-col gap-4" : "flex-wrap gap-3 pt-4 md:pt-0"
      }`}
    >
      {options.map((option) => {
        const value = typeof option === "string" ? option : option.value;
        const label = typeof option === "string" ? option : option.label;
        const isSelected = selectedOption === value;
        const id = `${value}-radio`;

        return (
          <div key={value} className="flex items-center">
            <input
              type="radio"
              id={id}
              name="radio-option"
              value={value}
              checked={isSelected}
              onChange={() => onSelectionChange(value)}
              className="hidden"
            />
            <label
              htmlFor={id}
              className={
                variant === "box"
                  ? "border border-lacampana-gray1 rounded-lg p-4 flex items-center gap-4 cursor-pointer transition duration-200 w-full"
                  : "flex items-center gap-2 cursor-pointer text-sm"
              }
            >
              <span
                className={`w-4 h-4 inline-block rounded-full flex-shrink-0 relative border ${
                  isSelected ? borderColorSelected : "border-gray-400"
                }`}
              >
                {isSelected && (
                  <span
                    className={`absolute top-1/2 left-1/2 w-2 h-2 border rounded-full ${bgColorSelected} transform -translate-x-1/2 -translate-y-1/2`}
                  />
                )}
              </span>

              {renderContent ? (
                renderContent(option)
              ) : (
                <span
                  className={`ml-2 ${
                    isSelected ? `text-[${bgColor}]` : `text-[${textColor}]`
                  } ${labelClassName}`}
                >
                  {label}
                </span>
              )}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioSelect;
