import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="lacampana-btn flex border overflow-hidden w-fit">
      <input className="text-p3-desktop px-4 rounded-l-3xl" type="text" placeholder={placeholder} />
      <button className="p-2 bg-lacampana-red2">
        <IoIosSearch className="text-white" />
      </button>
    </div>
  )
}

export default SearchBar