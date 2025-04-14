import { useRef, useState, useEffect } from "react";
import BannerDot from "../../Home/BannerDot";


const Carousel = ({ sucursalData }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);


  const handleMouseDown = (e) => {
    e.preventDefault();
    let startX = e.pageX - carouselRef.current.offsetLeft;
    let scrollLeft = carouselRef.current.scrollLeft;


    const handleMouseMove = (e) => {
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      carouselRef.current.scrollLeft = scrollLeft - walk;
    };


    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };


    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };


 
  const handleDotClick = (index) => {
    setActiveIndex(index);
    const container = carouselRef.current;
    const item = container.children[index];
    if (item) {
      item.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };


  
  useEffect(() => {
    const observerOptions = {
      root: carouselRef.current,
      threshold: 0.6, 
    };


    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveIndex(index);
        }
      });
    }, observerOptions);


    const children = carouselRef.current?.children;
    if (children) {
      Array.from(children).forEach((child, index) => {
        child.dataset.index = index;
        observer.observe(child);
      });
    }


    return () => {
      if (children) {
        Array.from(children).forEach((child) => observer.unobserve(child));
      }
    };
  }, [sucursalData]);


  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={carouselRef}
        className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full lg:w-[750px] cursor-grab"
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
            className="flex-none w-40 lg:w-60 snap-center bg-gray-200 rounded-tl-lg shadow-lg p-4"
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


      <div className="flex gap-2 justify-center pt-2">
        {sucursalData.map((_, index) => (
          <BannerDot
            key={index}
            id={`sucursal-${index}`}
            isChecked={activeIndex === index}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};


export default Carousel;
