import { Link } from 'react-router'
import { IoIosArrowRoundForward } from "react-icons/io";
import formatDate from '../../helpers/formatDate';

const BlogCard = ({ id, title, image, category = "Categoría", publicationDate, description }) => {
  const formatedDate = formatDate(publicationDate)
  const formatedDescription = description.length > 115 ? `${description.slice(0, 115)}...` : description

  return (
    <article className="bg-lacampana-white flex flex-col justify-between p-4 rounded-tl-xl w-full h-full">
      <div className="flex flex-col gap-2">
        <img className="rounded-tl-lg overflow-hidden w-full h-48 object-cover" src={image} alt="news-card-image" />
        <div className="text-start">
          <h4 className="overflow-hidden">{title}</h4>
          <span>{category} | {formatedDate}</span>
          <p className="max-h-20 overflow-hidden">{formatedDescription}</p>
        </div>
      </div>
      <Link to={`/blog/${id}`} className="btn w-fit">
        Conoce más
        <IoIosArrowRoundForward className="text-2xl" />
      </Link>
    </article>
  )
}

export default BlogCard