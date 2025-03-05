import { IoIosArrowDown } from "react-icons/io";

const CitySelector = ({ citySelected = "City", citiesList = [], onCityChange }) => {
  return (
    <div className="dropdown dropdown-end">
      <button tabIndex={0} role="button" className="font-open-sans border-box h-8 w-fit rounded-2xl rounded-br-none hover:scale-90 hover:bg-lacampana-gray1 hover:text-white transition duration-300 ease-in-out flex items-center gap-2 bg-lacampana-gray4 px-4 py-1 text-lacampana-gray1">
        {citySelected}<IoIosArrowDown />
      </button>
      <ul tabIndex={0} className="dropdown-content menu bg-lacampana-white rounded-tr-none rounded-box z-1 w-52 p-2 shadow-sm z-10">
        {citiesList.map(city =>
          <li key={`city-option-${city.id}`} onClick={() => onCityChange(city.name)} className="hover:text-lacampana-red2 hover:font-bold hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer text-start p-2 text-p2 desktop:text-p2-desktop text-lacampana-gray1">
            {city.name}
          </li>
        )}
      </ul>
    </div>
  )
}

export default CitySelector