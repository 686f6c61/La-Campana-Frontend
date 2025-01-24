const NewsBody = ({ image, body }) => {
  return (
    <article className="w-full tablet:w-2/3 text-start flex flex-col gap-8">
      <img className="rounded-tr-2xl" src={image} alt="news-image" />
      <p>{body}</p>
    </article>
  )
}

export default NewsBody