// SLIDE
// ------------------------------------------------------------------------------------------------
export const Slide = ({ id, imgURL }) => {
  return (
    <article id={id} className="carousel-item w-full">
      <img src={imgURL} className="w-full object-cover" />
    </article>
  )
}

// CONTENT
// ------------------------------------------------------------------------------------------------
export const Content = () => {
  const handleDotClick = (slideID) => {
    const slideToGo = document.getElementById(slideID)
    if (slideToGo) {
      slideToGo.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }

  return (
    <div className="absolute bottom-0 bg-white w-2/5 p-6 text-start rounded-se-xl flex flex-col gap-4">
      <p className="font-open-sans text-sub-h1 lg:text-sub-h1-desktop text-lacampana-red1">
        SOMOS LA EMPRESA LÍDER EN
      </p>
      <div className="pl-4">
        <h1>Mercado de aceros</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nunc est fermentum dis arcu odio. Vel eu habitant sit duis amet nisl nulla vel. Blandit duis at quis amet cursus diam integer.
        </p>
      </div>
      <a href="#" className="lacampana-btn">Comprar ahora</a>
      <div className="w-full flex justify-end items-center gap-2 py-2 min-h-12">
        <input
          type="radio"
          name="radio-1"
          onClick={() => handleDotClick("item1")}
          className="radio w-3 h-3 checked:bg-lacampana-red1 checked:w-5 checked:h-5"
        />
        <input
          type="radio"
          name="radio-1"
          onClick={() => handleDotClick("item2")}
          className="radio w-3 h-3 checked:bg-lacampana-red1 checked:w-5 checked:h-5"
        />
      </div>
    </div>
  )
}