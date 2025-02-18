import BlogCard from "../common/BlogCard"
import CardsCarousel from "../common/CardsCarousel"

const RelatedBlogs = ({ relatedBlogs }) => {
  return (
    <section className="text-start flex flex-col gap-4">
      <h4 className="text-lacampana-red2">Relacionados</h4>
      <CardsCarousel id="related-blog" cardsList={relatedBlogs}>
        {relatedBlogs.map((blog, index) =>
          <article className="carousel-item w-full pb-4 h-[500px]" id={`related-blog-${index}`}>
            <BlogCard
              id={blog._id}
              title={blog.name}
              description={blog.body}
              image={blog.image}
              publicationDate={blog.createdAt}
            />
          </article>
        )}
      </CardsCarousel>
    </section>
  )
}

export default RelatedBlogs