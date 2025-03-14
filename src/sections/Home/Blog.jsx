import { Link } from "react-router"
import { useGetBlogsQuery } from '../../store/reducers/apiSlice';
import BlogCard from "../../components/common/BlogCard";
import CardsCarousel from "../../components/common/CardsCarousel";
import ActionButton from "../../components/common/ActionButton";


const Blog = () => {
  const { data: blogs, error, isLoading } = useGetBlogsQuery("");

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <section className="max-w-screen-desktop w-full justify-self-center px-4 tablet:px-8 py-16">
      <article className="flex desktop:gap-8 flex-col desktop:flex-row">
        {/* TITLE SECTION */}
        <section className="text-start sm:text-center flex flex-col items-center gap-4 desktop:w-1/4">
          <h3>Actualidad y <span className="text-lacampana-red1">recomendaciones</span></h3>
          <p className="w-full">Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit</p>
          <div className="flex flex-col justify-center gap-4 ">
            <ActionButton 
              link="/blog"
              text="Ver más noticias"
            />
          </div>
        </section>
        {/* BLOGS DESKTOP */}
        <section className="hidden tablet:mt-4 tablet:grid grid-cols-3">
          {blogs?.slice(0, 3).map(blog =>
            <article className="p-2 h-[400px]">
              <BlogCard
                key={`blog-home-${blog._id}`}
                id={blog._id}
                title={blog.name}
                //category={blog.blogCategory.name}
                image={blog.image}
                publicationDate={blog.createdAt}
              />
            </article>)}
        </section>
        {/* BLOGS MOVILE */}
        <section className="tablet:hidden h-[500px] mt-4">
          <CardsCarousel id="blog-card-home-movile" cardsList={blogs}>
            {blogs?.slice(0, 3).map((blog, index) =>
              <article id={`blog-card-home-movile-${index}`} className="carousel-item w-full p-2">
                <BlogCard
                  key={`blog-home-${blog._id}`}
                  id={blog._id}
                  title={blog.name}
                  //category={blog.blogCategory.name}
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