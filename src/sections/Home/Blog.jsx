import { Link } from "react-router";
import { useGetBlogsQuery } from "../../store/reducers/apiSlice";
import BlogCard from "../../components/common/BlogCard";
import CardsCarousel from "../../components/common/CardsCarousel";
import ActionButton from "../../components/common/ActionButton";

const Blog = () => {
  const { data: blogs, error, isLoading } = useGetBlogsQuery("");

  console.log(blogs)

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <section className="max-w-screen-desktop w-full tablet: mx-auto mt-12 mb-12">
      <article className="flex desktop:gap-8 flex-col desktop:flex-row tablet: pl-5 justify-evenly">
        {/* TITLE SECTION */}
        <section className="text-start sm:text-center flex flex-col justify-center gap-4 desktop:w-1/4">
          <h3 className="text-start">
            Actualidad y
            <span className="text-lacampana-red1 text-start">
              {" "}
              recomendaciones
            </span>
          </h3>
          <p className="w-full text-start">
            Lorem ipsum dolor sit amet consectetur. Etiam id enim diam
            sollicitudin ut molestie velit
          </p>
          <div className="flex flex-col justify-start gap-4 ">
            <ActionButton link="/blog" text="Ver más noticias" />
          </div>
        </section>
        {/* BLOGS DESKTOP */}
        <section className="hidden tablet:mt-4 tablet:grid grid-cols-3 gap-4">
          {blogs?.slice(0, 3).map((blog) => (
            <article className=" w-full h-full">
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
