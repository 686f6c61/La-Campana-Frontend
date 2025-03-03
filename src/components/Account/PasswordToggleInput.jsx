import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";

const PasswordToggleInput = ({ name, value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full max-w-[400px]">
      <input
        type={showPassword ? "text" : "password"}
        name={name} 
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
        className="w-full p-3 pr-12 text-lg bg-lacampana-white border border-lacampana-gray3 rounded-lg font-open-sans focus:outline-none focus:border-black"
        required
      />
    
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
      >
        {showPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
      </button>
    </div>
  );
};

export default PasswordToggleInput;
