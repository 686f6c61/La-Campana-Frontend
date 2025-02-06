import { Link } from 'react-router'
import { IoIosArrowRoundForward } from "react-icons/io";
import formatDate from '../../helpers/formatDate';

const BlogCard = ({ id, title, image, category = "Categoría", publicationDate, description }) => {
  const formatedDate = formatDate(publicationDate)

  return (
    <article className="bg-lacampana-white flex flex-col p-4 gap-4 rounded-tl-xl w-full h-full">
      <header className="h-2/5 rounded-tl-lg overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="news-card-image" />
      </header>
      <main className="text-start flex flex-col gap-2">
        <h4 className="h-20 overflow-hidden">{title}</h4>
        <span>{category} | {formatedDate}</span>
        <p className="h-20 overflow-hidden">{description}</p>
      </main>
      <footer className="flex justify-start items-end">
        <Link to={`/blog/${id}`} className="btn">
          Conocer más
          <IoIosArrowRoundForward className="text-2xl" />
        </Link>
      </footer>
    </article>
  )
}

export default BlogCard