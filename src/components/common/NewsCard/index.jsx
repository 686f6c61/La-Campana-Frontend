import { Link } from 'react-router'
import { IoIosArrowRoundForward } from "react-icons/io";

const NewsCard = ({ title, image, category = "Categoría", publicationDate, description }) => {
  const fecha = new Date(publicationDate);

  // Formatear la fecha
  const dia = fecha.getDate(); // Día
  const mes = fecha.getMonth() + 1; // Mes (0 = enero, por eso se suma 1)
  const año = fecha.getFullYear(); // Año

  // Mostrar en formato "DD/MM/YYYY"
  const formatedDate = `${dia.toString().padStart(2, '0')}-${mes.toString().padStart(2, '0')}-${año}`;

  return (
    <article className="bg-lacampana-white flex flex-col p-4 gap-4 rounded-tl-xl h-[500px]">
      <header className="h-3/5 rounded-tl-lg overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="news-card-image" />
      </header>
      <main className="text-start flex flex-col gap-2">
        <h4>{title}</h4>
        <span>{category} | {formatedDate}</span>
        <p className="h-20 overflow-y-auto">{description}</p>
      </main>
      <footer className="flex justify-start">
        <Link className="btn">
          Conocer más
          <IoIosArrowRoundForward className="text-2xl" />
        </Link>
      </footer>
    </article>
  )
}

export default NewsCard