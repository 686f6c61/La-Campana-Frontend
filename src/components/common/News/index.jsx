import { Link } from "react-router"
import { IoIosArrowRoundForward } from "react-icons/io";
import { useGetBlogsQuery } from '../../../store/reducers/apiSlice';


const News = () => {
  const { data, error, isLoading } = useGetBlogsQuery();

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  console.log(data)
  return (
    <section className="flex justify-center">
      <article className="flex desktop:gap-8 px-4 sm:px-8 tablet:px-16 desktop:px-0 max-w-screen-tablet flex-col desktop:flex-row desktop:max-w-screen-desktop pt-16">
        <section className="text-start flex flex-col gap-4 desktop:w-1/4">
          <h3>Actualidad y <span className="text-lacampana-red1">recomendaciones</span></h3>
          <p className="w-full">Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit</p>
          <Link className="lacampana-btn">
            Ver más noticias
          </Link>
        </section>
        <section className="carousel rounded-box space-x-4 p-4 desktop:w-3/4">
          {data.map(news =>
            <NewsCard
              key={`news-card-${news._id}`}
              title={news.name}
              img={news.image}
              publicationDate={news.createdAt}
            />
          )}
        </section>
      </article>
    </section>
  )
}

export default News

const NewsCard = ({ title = "Título", img, publicationDate = "dd - mm - aaaa" }) => {
  return (
    <article className="carousel-item flex flex-col gap-2 w-2/3 md:w-[30%] bg-lacampana-white p-3 rounded-br-2xl text-start text-lacampana-gray1">
      <section className="flex flex-col gap-2">
        <img src={img} alt="" />
        <p className="text-p3-desktop">Actualidad la campana | {publicationDate}</p>
      </section>
      <section className="flex flex-col gap-2">
        <h5>{title}</h5>
        <Link className="text-p3-desktop flex items-center">
          Leer noticia <IoIosArrowRoundForward className="text-[24px]" />
        </Link>
      </section>
    </article>
  )
}