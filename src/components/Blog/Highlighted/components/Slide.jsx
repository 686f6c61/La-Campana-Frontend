import { IoIosArrowRoundForward } from "react-icons/io";

const Slide = ({ id, title = "Título", subtitle = "Subtítulo", description = "Lorem ipsum...", imgURL }) => {
  return (
    <div id={id} className="carousel-item w-full relative">
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-t from-lacampana-gray1 to-lacampana-gray1/40 text-start flex flex-col justify-end p-8 gap-8">
        <section>
          <h3 className="text-white">{title}</h3>
          <p className="text-white/70">{subtitle}</p>
          <p className="text-white h-24 leading-7 overflow-y-auto">{description}</p>
        </section>
        <button className="text-white w-fit btn">
          Leer noticia
          <IoIosArrowRoundForward className="text-2xl" />
        </button>
      </div>
      <img
        src={imgURL}
        className="w-full object-cover"
      />
    </div>
  )
}

export default Slide