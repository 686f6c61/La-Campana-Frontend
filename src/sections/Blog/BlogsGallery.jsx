import { useEffect, useState } from "react"
import BlogCard from "../../components/common/BlogCard"
import SearchBar from "../../components/common/SearchBar"
import { useGetBlogCategoriesQuery, useGetBlogsByCategoryIdQuery } from "../../store/reducers/apiSlice"

const MAX_NUM_RENDERS = 9

const BlogsGallery = () => {
  const [query, setQuery] = useState([]) // Query que se enviará al back para traer los blogs filtrados por categoría
  const [numRenders, setNumRenders] = useState(1) // Número de veces que se a clickeado el boton "Cargar más"
  const [blogsGallery, setBlogsGallery] = useState() // Los datos de los Blogs de la galería 

  const { data: categories, error: errorCategories, isLoading: isLoadingCategories } = useGetBlogCategoriesQuery()
  // Datos blogs filtrados por categoría (DEFAULT: TODOS)
  const {
    data: blogs,
    error: errorBlogs,
    isLoading: isLoadingBlogs
  } = useGetBlogsByCategoryIdQuery(`${query.length ? "?" : ""}${query.join("&")}`)

  useEffect(() => {
    if (blogs) {
      setBlogsGallery(blogs.slice(0, MAX_NUM_RENDERS * numRenders))
    }
    console.log(blogs)
  }, [numRenders, blogs])

  const increaseNumRenders = () => setNumRenders(numRenders + 1)

  if (isLoadingBlogs) return <p>Cargando...</p>;
  if (errorBlogs) return <p>Error al cargar los datos.</p>;
  if (isLoadingCategories) return <p>Cargando...</p>;
  if (errorCategories) return <p>Error al cargar los datos.</p>;

  return (
    <section className="flex flex-col gap-8 px-4 desktop:px-8">
      <header className="flex flex-col tablet:flex-row justify-between">
        <div className="flex justify-center flex-wrap">
          {categories?.map(category =>
            <CategoryRadio
              key={`blogs-category-filter-${category._id}`}
              id={category._id}
              name={category.name}
              onClick={(event) => {
                if (event.target.checked) {
                  setQuery([...query, `categoryId=${category._id}`])
                } else {
                  setQuery(query.filter(value => !value.includes(category._id)))
                }
              }}
            />
          )}
        </div>
        <div className="drop-shadow-lg flex justify-center">
          <SearchBar placeholder="Buscar noticia..." />
        </div>
      </header>
      <main>
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4">
          {blogsGallery?.map(blog =>
            <article key={`blog-card-${blog._id}`} className="h-[500px]">
              <BlogCard
                id={blog._id}
                title={blog.name}
                description={blog.body}
                category={blog.blogCategoryId.name}
                image={blog.image}
                publicationDate={blog.createdAt}
              />
            </article>
          )}
        </div>
      </main>
      <footer>
        <button
          disabled={MAX_NUM_RENDERS * numRenders >= blogs?.length}
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

const CategoryRadio = ({ id, name, onClick }) => {

  return (
    <div className="form-control">
      <label className="label cursor-pointer gap-2">
        <input onClick={onClick} type="checkbox" name={`radio-filter-news-${id}`} className="radio w-4 h-4 checked:bg-lacampana-red2" />
        <span className="text-p2-desktop">{name}</span>
      </label>
    </div>
  )
}