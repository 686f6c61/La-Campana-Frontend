import { useRef } from "react";

const Carousel = ({ sucursalData }) => {
  const carouselRef = useRef(null);

  // Drag Scroll Functionality for Large Screens
  const handleMouseDown = (e) => {
    e.preventDefault();
    let startX = e.pageX - carouselRef.current.offsetLeft;
    let scrollLeft = carouselRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll sensitivity
      carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div>
      {/* Carrusel para todas las pantallas */}
      <div
        ref={carouselRef}
        className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full lg:w-[900px] cursor-grab"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onMouseDown={handleMouseDown}
      >
        {sucursalData.map((sucursal, index) => (
          <div
            key={index}
            className="flex-none w-40 lg:w-60 snap-center bg-gray-200 rounded-lg shadow-lg p-4"
          >
            <img
              src={sucursal.imagen}
              alt={sucursal.nombre}
              className="w-full h-20 lg:h-32 object-cover rounded-t-lg"
            />
            <h3 className="text-lg lg:text-xl font-bold text-red-500 mt-2">
              {sucursal.nombre}
            </h3>
            <p className="text-gray-700 text-sm lg:text-base">
              PBX: {sucursal.telefono}
            </p>
            <p className="text-gray-700 text-sm lg:text-base">
              {sucursal.direccion}
            </p>
          </div>
        ))}
      </div>

      {/* Puntos de navegación */}
      <div className="flex justify-center mt-4 space-x-2">
        <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
        <span className="w-4 h-4 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
      </div>
    </div>
  );
};

export default Carousel;
