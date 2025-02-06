import BlogCard from "../../components/common/BlogCard"
import SearchBar from "../../components/common/SearchBar"

const BlogsGallery = ({ blogsData, categories }) => {
  return (
    <section className="flex flex-col gap-8 px-4 desktop:px-8">
      <header className="flex flex-col tablet:flex-row justify-between">
        <div className="flex justify-center flex-wrap">
          {categories.map(category =>
            <CategoryRadio
              key={`news-category-radio-${category.id}`}
              id={category.id}
              name={category.name}
            />
          )}
        </div>
        <div className="drop-shadow-lg flex justify-center">
          <SearchBar placeholder="Buscar noticia..." />
        </div>
      </header>
      <main>
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4">
          {blogsData.map(blog =>
            <article className="h-[500px]">
              <BlogCard
                key={`news-card-${blog._id}`}
                id={blog._id}
                title={blog.name}
                description={blog.body}
                image={blog.image}
                publicationDate={blog.createdAt}
              />
            </article>
          )}
        </div>
      </main>
      <footer>
        <button className="lacampana-btn bg-lacampana-red2 px-8 py-2 text-white">
          Cargar más
        </button>
      </footer>
    </section>
  )
}

export default BlogsGallery

const CategoryRadio = ({ id, name }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-2">
        <input type="radio" name={`radio-filter-news-${id}`} className="radio w-4 h-4 checked:bg-lacampana-red2" />
        <span className="text-p2-desktop">{name}</span>
      </label>
    </div>
  )
}