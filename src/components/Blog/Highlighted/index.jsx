import Dot from "./components/Dot";
import Slide from "./components/Slide";

const Highlighted = ({ highlightedNews }) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="carousel w-full h-full rounded-tl-3xl overflow-hidden">
        {highlightedNews.map(news =>
          <Slide
            key={`news-slide-${news._id}`}
            id={news._id}
            title={news.name}
            description={news.body}
            imgURL={news.image}
          />
        )}
      </div>
      <div className="flex w-full justify-center items-center gap-2 py-2">
        {highlightedNews.map((news, index) =>
          <Dot
            key={`news-dot-slide-${news._id}`}
            id={news._id}
            initStatus={index === 0}
          />
        )}
      </div>
    </div>
  )
}

export default Highlighted