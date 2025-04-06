const BlogBody = ({ image, body }) => {
  return (
    <article className="lg:w-9/12 text-start flex flex-col gap-8 ">
      <img className="rounded-tr-2xl" src={image} alt="news-image" />
      <div
        className="text-p1 desktop:text-p1-desktop text-wrap font-open-sans break-words"
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      />
    </article>
  );
};

export default BlogBody;
