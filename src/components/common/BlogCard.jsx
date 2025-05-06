import { Link } from "react-router";
import { IoIosArrowRoundForward } from "react-icons/io";
import formatDate from "../../helpers/formatDate";

const BlogCard = ({
  id,
  title,
  image,
  category,
  publicationDate,
  description = "",
  blogsGallery,
}) => {
  const formatedDate = formatDate(publicationDate);
  const formatedDescription =
    description.length > 115 ? `${description.slice(0, 115)}...` : description;

  return blogsGallery ? (
    <article className="bg-lacampana-white flex flex-col justify-between p-2 rounded-tl-xl w-[370px] h-[400px] hover:scale-90 transition duration-300 ease-in-out">
      <Link to={`/blog/${id}`} className="">
        <div className="flex flex-col gap-2">
          <img
            className="rounded-tl-lg overflow-hidden w-full h-48 object-cover"
            src={image}
            alt="news-card-image"
          />
          <div className="text-start">
            <h4 className="overflow-hidden text-2xl font-light mt-2">
              {title}
            </h4>
            <div>
              <span className="font-light text-sm">
                {category} | {formatedDate}
              </span>
            </div>

            <p
              className="font-light pt-2 pb-2 text-justify"
              dangerouslySetInnerHTML={{ __html: formatedDescription }}
            />
          </div>
        </div>
      </Link>
      <Link
        to={`/blog/${id}`}
        className="w-fit text-lacampana-red2 mb-2 text-3x1 font-semibold flex items-center hover:scale-90 transition duration-300 ease-in-out"
      >
        Conoce más
        <IoIosArrowRoundForward className="text-2xl" />
      </Link>
    </article>
  ) : (
    <article className="bg-lacampana-white flex flex-col p-3 rounded-br-xl w-[260px] m-h-[325px] border border-lacampana-gray1/0border border-lacampana-gray1/0 hover:shadow-xl hover:shadow-lacampana-gray3/25 hover:scale-95 transition duration-300 ease-in-out">
      <Link to={`/blog/${id}`}>
        <div className="flex flex-col">
          <img
            className="overflow-hidden w-full h-[175px] object-cover"
            src={image}
            alt="news-card-image"
          />
          <div className="text-start">
            <div className="mt-2">
              <span className="font-light text-sm">
                {category} | {formatedDate}
              </span>
            </div>
            <h4 className="overflow-hidden text-xl font-light mt-2 ">
              {title}
            </h4>
          </div>
          <Link
            to={`/blog/${id}`}
            className="w-fit mb-2 mt-2 font-light text-2x1 flex items-center hover:text-lacampana-red2 hover:scale-90 transition duration-300 ease-in-out"
          >
            Leer más
            <IoIosArrowRoundForward className="text-2xl" />
          </Link>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
