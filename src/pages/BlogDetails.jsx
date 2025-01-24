import { Link, useParams } from "react-router"
import IntroductoryText from "../sections/common/IntroductoryText"
import { useGetBlogsQuery } from "../store/reducers/apiSlice"
import SearchBar from "../components/common/SearchBar"
import newsCategories from "../utils/newsCategories"
import NewsBody from "../components/BlogDetails/NewsBody"
import Novelty from "../components/BlogDetails/Novelty"
import RelatedNews from "../components/BlogDetails/RelatedNews"

const BlogDetails = () => {
  const { data, isLoading, error } = useGetBlogsQuery()
  let { blogId } = useParams()
  let newsData = data?.find(news => news._id === blogId)
  const relatedNews = data?.slice(0, 3)

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <article className="max-w-screen-desktop w-full justify-self-center px-4 py-8 tablet:py-16 tablet:px-8">
      <IntroductoryText
        title={newsData?.name}
        bgTitle="Blog"
        justify="center"
      />
      <div className="flex flex-col gap-8">
        <header className="breadcrumbs text-sm">
          <ul className="text-lacampana-gray2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li className="text-lacampana-gray1">{newsData.name}</li>
          </ul>
        </header>
        <main className="flex gap-8 flex-col tablet:flex-row">
          <NewsBody 
            image={newsData.image}
            body={newsData.body}
          />
          <aside className="w-full tablet:w-1/3 flex flex-col gap-8">
            <section className="flex">
              <div className="drop-shadow-lg w-full max-w-64">
                <SearchBar placeholder="Buscar noticia..." />
              </div>
            </section>
            <Novelty
              noveltyItems={newsCategories}
            />
            <RelatedNews 
              relatedNews={relatedNews}
            />
          </aside>
        </main>
      </div>
    </article>
  )
}

export default BlogDetails