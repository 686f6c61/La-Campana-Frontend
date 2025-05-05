import LatestBlogItem from "../components/Blog/LatestBlogItem";
import CardsCarousel from "../components/common/CardsCarousel";
import BlogsGallery from "../sections/Blog/BlogsGallery";
import IntroductoryText from "../sections/common/IntroductoryText";
import { useGetBlogsQuery } from "../store/reducers/apiSlice";

const Blog = () => {
  const {
    data: blogs,
    error: errorBlogs,
    isLoading: isLoadingBlogs,
  } = useGetBlogsQuery("");

  const latestBlogs = blogs
    ?.slice(blogs.length - 3, blogs.length)
    .sort((a, b) => {
      const fechaA = new Date(a.createdAt);
      const fechaB = new Date(b.createdAt);

      // Comparar las fechas de forma descendente
      return fechaB.getTime() - fechaA.getTime();
    });

  if (isLoadingBlogs) return <p>Cargando...</p>;
  if (errorBlogs) return <p>Error al cargar los datos.</p>;

  return (
    <article className="pl-5 pr-5 flex justify-center">
      <div className="max-w-screen-desktop w-full justify-self-center flex flex-col gap-16 py-18">
        <IntroductoryText
          title={
            <>
              Nuestro <span className="text-lacampana-red2">Blog</span>
            </>
          }
          bgTitle="Actualidad en aceros"
          description="Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim pulvinar ut lorem pharetra. Vestibulum nulla faucibus nunc enim. Proin feugiat fames turpis sociis viverra. Viverra sit ut egestas placerat neque fames ante."
          sizeTitle="tablet:text-[5rem] lg:text-[7rem] xl:text-[9rem]"
          mt="mt-0 tablet:mt-[-35px] lg:mt-[5px] xl:mt-[-10px]"
          sizeTitleMobile="text-[45px]"
          flexJustify="justify-center"
          bgTitlePaddingMobile="pt-6"
          justify="start"
          zIndex="-z-20"
        >
          {/* LATEST BLOGS */}
          <div className="w-full tablet:w-3/5 flex-none h-[500px] pt-2 pb-6 ml-0 tablet:ml-10">
            <CardsCarousel
              id="hl-blog-card"
              cardsList={latestBlogs}
              latestBlogs={true}
              justifyValue="end"
            >
              {latestBlogs.map((blog, index) => (
                <article
                  key={`blog-carousel-item-${index}`}
                  className="carousel-item w-full py-2"
                  id={`hl-blog-card-${index}`}
                >
                  {
                    <LatestBlogItem
                      title={blog.name}
                      description={blog.body}
                      category={blog.blogCategoryId.name}
                      image={blog.image}
                      publicationDate={blog.createdAt}
                      link={`/blog/${blog._id}`}
                    />
                  }
                </article>
              ))}
            </CardsCarousel>
          </div>
        </IntroductoryText>
        <BlogsGallery />
      </div>
    </article>
  );
};

export default Blog;
