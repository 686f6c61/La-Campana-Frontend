// const CardsCarousel = ({ children, cardsList, id }) => {
//   return (
//     <article className="flex flex-col h-full">
//       <div className="carousel w-full h-full">
//         {children}
//       </div>
//       <div className="flex justify-center items-center gap-2">
//         {cardsList.map((_, index) =>
//           <input
//             key={`${id}-${index}`}
//             onClick={() => {
//               document.getElementById(`${id}-${index}`).scrollIntoView({ behavior: "smooth", block: "nearest" })
//             }}
//             type="radio"
//             name={id}
//             className="radio w-3 h-3 checked:w-5 checked:h-5 border-none bg-lacampana-gray3 checked:bg-lacampana-red2"
//             defaultChecked={index === 0}
//           />
//         )}
//       </div>
//     </article>
//   )
// }

// export default CardsCarousel

///segunda version

// import React from "react";

// const CardsCarousel = ({
//   cardsList,
//   id,
//   itemsPerSlide,
//   cardBgColor = "bg-white",
//   textColor = "text-gray-800",
//   controlBgColor = "bg-lacampana-gray3",
//   controlCheckedColor = "checked:bg-lacampana-red2",
//   customControlClass = "",
// }) => {
//   const slides = [];
//   for (let i = 0; i < cardsList.length; i += itemsPerSlide) {
//     slides.push(cardsList.slice(i, i + itemsPerSlide));
//   }

//   return (
//     <article className="flex flex-col h-full">
//       <div className="carousel w-full h-full">
//         {slides.map((slide, index) => (
//           <article
//             key={`${id}-${index}`}
//             id={`${id}-${index}`}
//             className="carousel-item w-full flex gap-4"
//           >
//             {slide.map((item, idx) => (
//               <div
//                 key={`${item.id || item.nombre}-${idx}`}
//                 className={`w-1/${itemsPerSlide} p-4 ${cardBgColor} rounded-tl-lg shadow-md`}
//               >
//                 <img
//                   src={item.imagen}
//                   alt={`Imagen de ${item.nombre}`}
//                   className="w-full aspect-[16/10] object-cover rounded-md"
//                 />
//                 <h3 className={`text-lg font-bold mt-2 ${textColor}`}>
//                   {item.nombre}
//                 </h3>
//                 <p className={`${textColor}`}>{item.direccion}</p>
//                 <p className={`${textColor}`}>{item.telefono}</p>
//               </div>
//             ))}
//           </article>
//         ))}
//       </div>

//       {/* Controles del carrusel */}
//       <div className="flex justify-center items-center gap-2 mt-4">
//         {slides.map((_, index) => (
//           <input
//             key={`${id}-radio-${index}`}
//             type="radio"
//             name={id}
//             className={`radio w-3 h-3 checked:w-5 checked:h-5 border-none ${controlBgColor} ${controlCheckedColor} ${customControlClass}`}
//             onClick={() =>
//               document
//                 .getElementById(`${id}-${index}`)
//                 .scrollIntoView({ behavior: "smooth", block: "nearest" })
//             }
//             defaultChecked={index === 0}
//           />
//         ))}
//       </div>
//     </article>
//   );
// };

// export default CardsCarousel;

///tercera version

// import React from "react";

// const CardsCarousel = ({
//   children,
//   id,
//   itemsPerSlide = 1,
//   controlBgColor = "bg-lacampana-gray3",
//   controlCheckedColor = "checked:bg-lacampana-red2",
//   customControlClass = "",
// }) => {
//   const childrenArray = React.Children.toArray(children);

//   // Dividir los children en slides de itemsPerSlide
//   const slides = [];
//   for (let i = 0; i < childrenArray.length; i += itemsPerSlide) {
//     slides.push(childrenArray.slice(i, i + itemsPerSlide));
//   }

//   return (
//     <article className="flex flex-col h-full">
//       {/* Slides */}
//       <div className="carousel w-full h-full">
//         {slides.map((slide, index) => (
//           <article
//             key={`${id}-${index}`}
//             id={`${id}-${index}`}
//             className="carousel-item w-full flex gap-4"
//           >
//             {slide}
//           </article>
//         ))}
//       </div>

//       {/* Controles del carrusel */}
//       <div className="flex justify-center items-center gap-2 mt-4">
//         {slides.map((_, index) => (
//           <input
//             key={`${id}-radio-${index}`}
//             type="radio"
//             name={id}
//             className={`radio w-3 h-3 checked:w-5 checked:h-5 border-none ${controlBgColor} ${controlCheckedColor} ${customControlClass}`}
//             onClick={() =>
//               document
//                 .getElementById(`${id}-${index}`)
//                 .scrollIntoView({ behavior: "smooth", block: "nearest" })
//             }
//             defaultChecked={index === 0}
//           />
//         ))}
//       </div>
//     </article>
//   );
// };

// export default CardsCarousel;

import React from "react";

const CardsCarousel = ({
  id,
  itemsPerSlide = 1,
  cardsList = [],
  children,
  cardBgColor = "bg-white",
  textColor = "text-gray-800",
  controlBgColor = "bg-lacampana-gray3",
  controlCheckedColor = "checked:bg-lacampana-red2",
  customControlClass = "",
  latestBlogs,
}) => {
  const slides = [];

  // Si hay children, los usamos (como en el blog)
  const content = children
    ? React.Children.toArray(children)
    : cardsList.map((item, idx) => (
        <div
          key={`${item.id || item.nombre}-${idx}`}
          className={`w-1/${itemsPerSlide} p-4 ${cardBgColor} rounded-tl-lg shadow-md`}
        >
          <img
            src={item.imagen}
            alt={`Imagen de ${item.nombre}`}
            className="w-full aspect-[16/10] object-cover rounded-md"
          />
          <h3 className={`text-lg font-bold mt-2 ${textColor}`}>
            {item.nombre}
          </h3>
          <p className={`${textColor}`}>{item.direccion}</p>
          <p className={`${textColor}`}>{item.telefono}</p>
        </div>
      ));

  for (let i = 0; i < content.length; i += itemsPerSlide) {
    slides.push(content.slice(i, i + itemsPerSlide));
  }

  return (
    <article className="flex flex-col h-full">
      <div className="carousel w-full h-full">
        {slides.map((slide, index) => (
          <article
            key={`${id}-${index}`}
            id={`${id}-${index}`}
            className={
              !latestBlogs
                ? "carousel-item flex w-[280px] mt-5"
                : "carousel-item w-full"
            }
          >
            {slide}
          </article>
        ))}
      </div>

      <div
        className={
          !latestBlogs
            ? "flex justify-start items-center gap-2 mt-4"
            : "flex justify-center items-center gap-2 mt-4"
        }
      >
        {slides.map((_, index) => (
          <input
            key={`${id}-radio-${index}`}
            type="radio"
            name={id}
            className={`radio w-2 h-2 checked:w-3 checked:h-3 border-none ${controlBgColor} ${controlCheckedColor} ${customControlClass}`}
            onClick={() =>
              document
                .getElementById(`${id}-${index}`)
                .scrollIntoView({ behavior: "smooth", block: "nearest" })
            }
            defaultChecked={index === 0}
          />
        ))}
      </div>
    </article>
  );
};

export default CardsCarousel;
