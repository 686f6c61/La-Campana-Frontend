import { Link } from "react-router";
import { useGetBlogsQuery } from "../../store/reducers/apiSlice";
import BlogCard from "../../components/common/BlogCard";
import CardsCarousel from "../../components/common/CardsCarousel";
import ActionButton from "../../components/common/ActionButton";

const Blog = () => {
  const { data: blogs, error, isLoading } = useGetBlogsQuery("");

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <section className="w-full max-w-7xl w-full tablet: mx-auto">
      <article className="mb-20 w-full flex justify-beetwen desktop:gap-8 flex-col desktop:flex-row">
        {/* TITLE SECTION */}
        <section className="text-start sm:text-center flex flex-col justify-center gap-4 desktop:w-1/2">
          <h3 className="text-start w-[300px]">
            Actualidad y
            <span className="text-lacampana-red1 text-start">
              {" "}
              recomendaciones
            </span>
          </h3>
          <p className="w-[350px] text-start">
            Lorem ipsum dolor sit amet consectetur. Etiam id enim diam
            sollicitudin ut molestie velit
          </p>
          <div className="flex flex-col justify-start">
            <ActionButton link="/blog" text="Ver más noticias" />
          </div>
        </section>
        {/* BLOGS DESKTOP */}
        <section className="flex w-2/2 justify-end hidden tablet:flex justify-end">
          {blogs?.slice(0, 3).map((blog) => (
            <article className="flex h-full md:justify-center w-[260px] mr-2 ml-2">
              <BlogCard
                key={`blog-home-${blog._id}`}
                id={blog._id}
                title={blog.name}
                category={blog.category}
                image={blog.image}
                publicationDate={blog.createdAt}
                blogsGallery={false}
              />
            </article>
          ))}
        </section>

        {/* BLOGS MOVILE */}
        <section className="tablet:hidden">
          <CardsCarousel id="blog-card-home-movile" cardsList={blogs}>
            {blogs?.slice(0, 3).map((blog, index) => (
              <article
                id={`blog-card-home-movile-${index}`}
                className="carousel-item"
              >
                <BlogCard
                  key={`blog-home-${blog._id}`}
                  id={blog._id}
                  title={blog.name}
                  category={blog.category}
                  image={blog.image}
                  publicationDate={blog.createdAt}
                />
              </article>
            ))}
          </CardsCarousel>
        </section>
      </article>
    </section>
  );
};

export default Blog;
