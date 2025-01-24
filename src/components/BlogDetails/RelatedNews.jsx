import NewsCard from "../common/NewsCard"

const RelatedNews = ({ relatedNews }) => {
  return (
    <section className="text-start flex flex-col gap-4">
      <h4>Relacionados</h4>
      <div className="carousel w-full">
        {relatedNews.map(news =>
          <article
            key={`news-card-${news._id}`}
            id={news._id}
            className="carousel-item w-full"
          >
            <NewsCard
              id={news._id}
              title={news.name}
              description={news.body}
              image={news.image}
              publicationDate={news.createdAt}
            />
          </article>
        )}
      </div>
      <div className="flex justify-center items-center gap-2">
        {relatedNews.map((news, index) =>
          <input
            key={`related-news-radio-${news._id}`}
            onClick={() => {
              document.getElementById(news._id).scrollIntoView({ behavior: "smooth", block: "nearest" })
            }}
            type="radio"
            name="radio-blog-details"
            className="radio w-3 h-3 checked:w-5 checked:h-5 border-none bg-lacampana-gray3 checked:bg-lacampana-red2"
            defaultChecked={index === 0}
          />
        )}
      </div>
    </section>
  )
}

export default RelatedNews