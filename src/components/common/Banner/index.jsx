const Banner = () => {
  return (
    <div className="h-[80svh] px-4">
      <div className="carousel w-full h-full">
        <Slide id="item1" imgURL="src/assets/images/banner.jpg" />
        <Slide id="item2" imgURL="src/assets/images/banner2.jpeg" />
        <Slide id="item3" imgURL="src/assets/images/banner.jpg" />
      </div>
    </div>
  );
};

export default Banner;

const Slide = ({ id, imgURL }) => {

  const handleDotClick = (url) => {
    // link to URL
  }

  return (
    <article id={id} className="carousel-item w-full relative">
      <img src={imgURL} className="w-full object-cover" />
      <div className="absolute bg-white w-2/5 bottom-0 p-2 text-start rounded-se-xl">
        <p>Somos empresa líder en</p>
        <div className="pl-4">
          <h1>Mercado de aceros</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Nunc est fermentum dis arcu odio. Vel eu habitant sit duis amet nisl nulla vel. Blandit duis at quis amet cursus diam integer.</p>
        </div>
        <a href="#" className="btn">Comprar ahora</a>
        <div className="flex w-full justify-center gap-2 py-2">
          <input type="radio" name="radio-1" onClick={() => handleDotClick("#item1")} className="radio" defaultChecked />
          <input type="radio" name="radio-1" onClick={() => handleDotClick("#item2")} className="radio" />
          <input type="radio" name="radio-1" onClick={() => handleDotClick("#item3")} className="radio" />
        </div>
      </div>
    </article>
  )
}
