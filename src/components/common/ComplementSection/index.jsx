import { useState } from "react";

const ComplementSection = () => {
  const [selectedOption, setSelectedOption] = useState("Complementa tu compra");

  return (
    <div className="mt-16 text-left">
      <div className="flex justify-let gap-6">
        {[{text:"Complementa tu compra", className:"text-xl font-antonio text-red-500"}, {text:"Productos similares", className: "text-xl font-antonio text-black"}].map((option, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="productFilter"
              value={option.text}
              checked={selectedOption === option.text}
              onChange={() => setSelectedOption(option.text)}
              className="hidden peer"
            />
            <div className="w-3 h-3 border-2 border-gray-400 rounded-full flex items-center justify-center text-left peer-checked:border-red-500">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full opacity-0 peer-checked:opacity-100"></div>
            </div>
            <span className={`${option.className}`}>{option.text}</span>
          </label>
        ))}

      </div>
    </div>
  );
};

export default ComplementSection;
