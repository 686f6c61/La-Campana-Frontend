import Highlighted from "../components/Blog/Highlighted"
import BlogsGallery from "../sections/Blog/BlogsGallery";
import IntroductoryText from "../sections/common/IntroductoryText"
import { useGetBlogsQuery } from "../store/reducers/apiSlice"
import newsCategories from "../utils/newsCategories";

const Blog = () => {
  const { data, error, isLoading } = useGetBlogsQuery();
  const highlightedNews = data?.filter((news, index) => index <= 2)

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  return (
    <article className="max-w-screen-desktop w-full justify-self-center flex flex-col gap-16">
      <IntroductoryText
        title={<>Nuestro <span className="text-lacampana-red2">Blog</span></>}
        bgTitle="Actualidad en aceros"
        description="Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim pulvinar ut lorem pharetra. Vestibulum nulla faucibus nunc enim. Proin feugiat fames turpis sociis viverra. Viverra sit ut egestas placerat neque fames ante."
        justify="start"
      >
        <div className="w-full tablet:w-3/5 flex-none h-[400px] tablet:h-[600px]">
          <Highlighted highlightedNews={highlightedNews} />
        </div>
      </IntroductoryText>
      <BlogsGallery categories={newsCategories} newsData={data} />
    </article>
  )
}

export default Blog