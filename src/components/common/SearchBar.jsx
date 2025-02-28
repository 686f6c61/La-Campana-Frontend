import { useRef } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ placeholder, className, onSubmit, defaultValue }) => {
  let inputRef = useRef("")

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(inputRef.current.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`lacampana-btn flex border overflow-hidden w-full ${className}`}
    >
      <input
        className="text-p3-desktop px-4 rounded-l-3xl w-full"
        type="text"
        placeholder={placeholder}
        ref={inputRef}
        defaultValue={defaultValue}
      />
      <button className="p-2 bg-lacampana-red2">
        <IoIosSearch className="text-white" />
      </button>
    </form>
  );
};

export default SearchBar;
