const CardsCarousel = ({ children, cardsList, id }) => {
  return (
    <article className="flex flex-col h-full">
      <div className="carousel w-full">
        {children}
      </div>
      <div className="flex justify-center items-center gap-2">
        {cardsList.map((_, index) =>
          <input
            key={`${id}-${index}`}
            onClick={() => {
              document.getElementById(`${id}-${index}`).scrollIntoView({ behavior: "smooth", block: "nearest" })
            }}
            type="radio"
            name={id}
            className="radio w-3 h-3 checked:w-5 checked:h-5 border-none bg-lacampana-gray3 checked:bg-lacampana-red2"
            defaultChecked={index === 0}
          />
        )}
      </div>
    </article>
  )
}

export default CardsCarousel