import { Link } from "react-router"
import formatDate from "../../helpers/formatDate"

const LatestBlogItem = ({ title, image, category, publicationDate, description, link }) => {
  const formatedDate = formatDate(publicationDate)
  const formatedDescription = description.length > 115 ? `${description.slice(0, 115)}...` : description

  return (
    <article className="relative w-full rounded-tl-2xl overflow-hidden bg-gradient-to-t from-lacampana-gray1 to-lacampana-gray1/0">
      <img className="absolute object-cover w-full h-full -z-20" src={image} alt="blog-image" />
      <section className="flex flex-col gap-2 justify-end h-full p-4 tablet:p-8 text-white text-start">
        <h3 className="text-white">{title}</h3>
        <span>{category} | {formatedDate}</span>
        <p className="text-white h-24 overflow-hidden">{formatedDescription}</p>
        <Link to={link} className="btn w-fit">
          Conoce más
        </Link>
      </section>
    </article>
  )
}

export default LatestBlogItem