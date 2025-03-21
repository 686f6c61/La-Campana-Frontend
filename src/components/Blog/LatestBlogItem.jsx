import { Link } from "react-router";
import formatDate from "../../helpers/formatDate";

const LatestBlogItem = ({
  title,
  image,
  category,
  publicationDate,
  description,
  link,
}) => {
  const formatedDate = formatDate(publicationDate);
  const formatedDescription =
    description.length > 115 ? `${description.slice(0, 115)}...` : description;

  return (
    <article className="relative w-full rounded-tl-2xl overflow-hidden bg-gradient-to-t from-lacampana-gray1 to-lacampana-gray1/0">
      <img
        className="absolute object-cover w-full h-full -z-20"
        src={image}
        alt="blog-image"
      />
      <section className="flex flex-col justify-end h-full p-4 tablet:p-8 text-white text-start">
        <h3 className="text-white text-3xl">{title}</h3>
        <div>
          <span className="font-light text-sm">
            {category} | {formatedDate}
          </span>
        </div>
        <p
          className="text-white overflow-hidden pt-4 pb-4"
          dangerouslySetInnerHTML={{ __html: formatedDescription }}
        />
        <Link to={link} className="btn w-fit">
          Conoce más
        </Link>
      </section>
    </article>
  );
};

export default LatestBlogItem;
