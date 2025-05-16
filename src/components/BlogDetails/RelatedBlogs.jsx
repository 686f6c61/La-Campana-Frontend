import BlogCard from "../common/BlogCard";
import CardsCarousel from "../common/CardsCarousel";

const RelatedBlogs = ({ relatedBlogs, currentBlogId }) => {
  const filteredBlogs = relatedBlogs.filter(
    (blog) => String(blog._id) !== String(currentBlogId)
  );

  return (
    <section className="text-start flex flex-col gap-4">
      <h4 className="text-lacampana-red2 text-center tablet:text-center desktop:text-left">
        Relacionados
      </h4>

      <CardsCarousel
        id="related-blog"
        cardsList={filteredBlogs}
        latestBlogs={true}
        justifyValue="center"
      >
        {filteredBlogs.map((blog, index) => (
          <article
            key={blog._id}
            className="carousel-item pb-4 h-[350px] flex justify-center w-full"
            id={`related-blog-${index}`}
          >
            <BlogCard
              id={blog._id}
              title={blog.name}
              description={blog.body}
              image={blog.image}
              category={blog.blogCategoryId?.name}
              publicationDate={blog.createdAt}
            />
          </article>
        ))}
      </CardsCarousel>
    </section>
  );
};

export default RelatedBlogs;
