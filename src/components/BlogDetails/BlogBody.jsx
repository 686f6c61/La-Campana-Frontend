const BlogBody = ({ image, body }) => {
  return (
    <article className="w-full tablet:w-2/3 text-start flex flex-col gap-8">
      <img className="rounded-tr-2xl" src={image} alt="news-image" />
      <pre className="text-p1 desktop:text-p1-desktop text-wrap font-open-sans">
        {body}
      </pre>
    </article>
  )
}

export default BlogBody