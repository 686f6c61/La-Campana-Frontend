const BannerSlide = ({ id, imgURL }) => {
  return (
    <article id={id} className="carousel-item w-full">
      <img src={imgURL} className="w-full object-cover" />
    </article>
  )
}

export default BannerSlide