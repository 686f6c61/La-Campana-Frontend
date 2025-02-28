import { Link, useNavigate, useParams } from "react-router"
import IntroductoryText from "../sections/common/IntroductoryText"
import { useGetBlogByIdQuery, useGetBlogCategoriesQuery, useGetBlogsQuery } from "../store/reducers/apiSlice"
import SearchBar from "../components/common/SearchBar"
import BlogBody from "../components/BlogDetails/BlogBody"
import Novelty from "../components/BlogDetails/Novelty"
import RelatedBlogs from "../components/BlogDetails/RelatedBlogs"

const BlogDetails = () => {
  let { blogId } = useParams()
  const navigate = useNavigate()
  
  const { data: blog, isLoading: isBlogLoading, error: blogError } = useGetBlogByIdQuery(blogId)
  const { data: relatedBlogs, isLoading: isBlogsLoading, error: blogsError } = useGetBlogsQuery(`?categoryId=${blog?.blogCategoryId}`)
  const { data: categories, isLoading: isCategoriesLoading, error: categoriesError } = useGetBlogCategoriesQuery()

  const handleSearchBar = (searchTerm) => navigate(`/blog`, { state: searchTerm })

  if (isBlogsLoading) return <p>Cargando...</p>;
  if (blogsError) return <p>Error al cargar los datos.</p>;
  if (isBlogLoading) return <p>Cargando...</p>;
  if (blogError) return <p>Error al cargar los datos.</p>;
  if (isCategoriesLoading) return <p>Cargando...</p>;
  if (categoriesError) return <p>Error al cargar los datos.</p>;

  return (
    <article className="max-w-screen-desktop w-full justify-self-center px-4 py-8 tablet:py-16 tablet:px-8">
      <IntroductoryText
        title={blog.name}
        bgTitle="Blog"
        justify="center"
      />
      <div className="flex flex-col gap-8">
        <header className="breadcrumbs text-sm">
          <ul className="text-lacampana-gray2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li className="text-lacampana-gray1">{blog.name}</li>
          </ul>
        </header>
        <main className="flex gap-8 flex-col tablet:flex-row">
          <BlogBody
            image={blog.image}
            body={blog.body}
          />
          <aside className="w-full tablet:w-1/3 flex flex-col gap-8">
            <section className="flex">
              <div className="drop-shadow-lg w-full max-w-64">
                <SearchBar onSubmit={handleSearchBar} placeholder="Buscar noticia..." />
              </div>
            </section>
            <Novelty
              noveltyItems={categories}
            />
            <RelatedBlogs
              relatedBlogs={relatedBlogs}
            />
          </aside>
        </main>
      </div>
    </article>
  )
}

export default BlogDetails