import { useEffect, useState } from "react"
import BlogCard from "../../components/common/BlogCard"
import SearchBar from "../../components/common/SearchBar"

const MAX_NUM_RENDERS = 9

const BlogsGallery = ({ blogsData, categories }) => {
  const [numRenders, setNumRenders] = useState(1)
  const [blogsGallery, setBlogsGallery] = useState(blogsData.slice(0, MAX_NUM_RENDERS))
  const increaseNumRenders = () => setNumRenders(numRenders + 1)

  useEffect(() => {
    setBlogsGallery(blogsData.slice(0, MAX_NUM_RENDERS * numRenders))
  }, [numRenders])

  return (
    <section className="flex flex-col gap-8 px-4 desktop:px-8">
      <header className="flex flex-col tablet:flex-row justify-between">
        <div className="flex justify-center flex-wrap">
          {categories.map(category =>
            <CategoryRadio
              key={`blogs-category-filter-${category._id}`}
              id={category._id}
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
          {blogsGallery.map(blog =>
            <article key={`blog-card-${blog._id}`} className="h-[500px]">
              <BlogCard
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
        <button
          disabled={MAX_NUM_RENDERS * numRenders >= blogsData.length}
          onClick={increaseNumRenders}
          className="lacampana-btn bg-lacampana-red2 px-8 py-2 text-white disabled:bg-lacampana-gray2"
        >
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
        <input type="checkbox" name={`radio-filter-news-${id}`} className="radio w-4 h-4 checked:bg-lacampana-red2" />
        <span className="text-p2-desktop">{name}</span>
      </label>
    </div>
  )
}