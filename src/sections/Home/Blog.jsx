import { Link } from "react-router"
import { useGetBlogsQuery } from '../../store/reducers/apiSlice';
import BlogCard from "../../components/common/BlogCard";
import CardsCarousel from "../../components/common/CardsCarousel";


const Blog = () => {
  const { data, error, isLoading } = useGetBlogsQuery();
  const blogs = data?.slice(0, 3)

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <section className="max-w-screen-desktop w-full justify-self-center px-4 tablet:px-8 py-16">
      <article className="flex desktop:gap-8 flex-col desktop:flex-row">
        {/* TITLE SECTION */}
        <section className="text-start flex flex-col gap-4 desktop:w-1/4">
          <h3>Actualidad y <span className="text-lacampana-red1">recomendaciones</span></h3>
          <p className="w-full">Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit</p>
          <Link to="/blog" className="lacampana-btn bg-lacampana-red2 px-8 py-2 text-white text-center font-semibold">
            Ver más noticias
          </Link>
        </section>
        {/* BLOGS DESKTOP */}
        <section className="hidden tablet:grid grid-cols-3">
          {blogs.map(blog =>
            <article className="p-2 h-[500px]">
              <BlogCard
                key={`blog-home-${blog._id}`}
                id={blog._id}
                title={blog.name}
                description={blog.body}
                image={blog.image}
                publicationDate={blog.createdAt}
              />
            </article>)}
        </section>
        {/* BLOGS MOVILE */}
        <section className="tablet:hidden h-[500px]">
          <CardsCarousel id="blog-card-home-movile" cardsList={blogs}>
            {blogs.map((blog, index) =>
              <article id={`blog-card-home-movile-${index}`} className="carousel-item w-4/5 p-2">
                <BlogCard
                  key={`blog-home-${blog._id}`}
                  id={blog._id}
                  title={blog.name}
                  description={blog.body}
                  image={blog.image}
                  publicationDate={blog.createdAt}
                />
              </article>)}
          </CardsCarousel>
        </section>
      </article>
    </section>
  )
}

export default Blog