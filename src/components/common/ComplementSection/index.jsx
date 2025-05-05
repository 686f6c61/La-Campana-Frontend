import { useState } from "react";

const ComplementSection = () => {
  const [selectedOption, setSelectedOption] = useState("Complementa tu compra");

  const options = ["Complementa tu compra", "Productos similares"];

  return (
    <div className="mt-16 text-left">
      <div className="flex justify-left gap-6">
        {options.map((text, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="productFilter"
              value={text}
              checked={selectedOption === text}
              onChange={() => setSelectedOption(text)}
              className="hidden peer"
            />
            <div className="w-3 h-3 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-red-500">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full opacity-0 peer-checked:opacity-100"></div>
            </div>
            <span
              className={`text-xl font-antonio ${
                selectedOption === text ? "text-red-500" : "text-black"
              }`}
            >
              {text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ComplementSection;
