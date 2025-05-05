import { useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder = "Buscar producto", className, onSubmit, defaultValue = "" }) => {
  let inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = inputRef.current.value.trim();
    
    if (onSubmit) {
      // If onSubmit is passed, use that (for specific component use cases)
      onSubmit(searchValue);
    } else {
      // Default behavior: Navigate to tienda with search params
      if (searchValue) {
        navigate(`/tienda?search=${encodeURIComponent(searchValue)}`);
      } else {
        // If search is empty, just go to the store page
        navigate('/tienda');
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`lacampana-btn flex border-2 overflow-hidden w-[280px] ${className}`}
    >
      <input
        className="text-p3-desktop px-4 rounded-l-3xl w-full"
        type="text"
        placeholder={placeholder}
        ref={inputRef}
        defaultValue={defaultValue}
      />
      <button className="p-2 bg-lacampana-red2" type="submit">
        <IoIosSearch className="text-white w-[20px] h-[20px]" />
      </button>
    </form>
  );
};

export default SearchBar;