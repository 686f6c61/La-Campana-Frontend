import React, { useState, useRef, useEffect } from "react";
import Map from "../../common/Map";

const LocationDetails = ({ title, description, cities, branches }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedCity, setSelectedCity] = useState(cities[0] || "");
  const carouselRef = useRef(null);

  const handleSelection = (city) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].offsetWidth;
      carouselRef.current.scrollTo({
        left: carouselIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [carouselIndex]);

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-8 lg:space-y-0">
      <div className="lg:w-2/3 p-8">
        <h4 className="text-3xl font-bold mb-4 text-left">
          {title} <span className="text-lacampana-red1">nacional</span>
        </h4>
        <p className="text-gray-500 max-w-md text-left">{description}</p>

        <div className="flex flex-wrap gap-x-2 md:gap-x-3 pt-4">
          {cities.map((city) => (
            <div key={city} className="flex items-center sm:me-3 md:me-4">
              <input
                id={`${city.toLowerCase()}-radio`}
                type="radio"
                value={city}
                name="ciudad"
                checked={selectedCity === city}
                onChange={() => handleSelection(city)}
                className="w-4 h-4"
                style={{
                  appearance: "none",
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  backgroundColor: selectedCity === city ? "red" : "#d1d3d1",
                  border: "2px solid white",
                  cursor: "pointer",
                  boxShadow:
                    selectedCity === city
                      ? "0 0 0 2px rgba(255, 0, 0, 0.5)"
                      : "0 0 0 2px rgba(209, 211, 209, 0.5)",
                }}
              />
              <label
                htmlFor={`${city.toLowerCase()}-radio`}
                className="ms-0 text-xs md:text-sm font-medium md:pl-1"
                style={{ color: selectedCity === city ? "red" : "#d1d3d1" }}
              >
                {city}
              </label>
            </div>
          ))}
        </div>

        <div className="relative mt-8">
          <div className="hidden lg:flex space-x-4">
            {branches.slice(0, 3).map((branch, index) => (
              <div
                key={index}
                className="w-1/3 bg-gray-200 rounded-lg shadow-lg p-4"
              >
                <img
                  src={branch.imagen}
                  alt={branch.nombre}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="text-lg font-bold text-red-500 mt-2">
                  {branch.nombre}
                </h3>
                <p className="text-gray-700">PBX: {branch.telefono}</p>
                <p className="text-gray-700">{branch.direccion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Map />
    </div>
  );
};

export default LocationDetails;
