const Banner = () => {
    return (
      <div className="carousel carousel-end w-full">
        <div className="carousel-item w-full">
          <img
            src="/images/banner.jpg"
            alt="Banner"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="/images/banner2.jpeg"
            alt="Banner2"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    );
  };
  
  export default Banner;
  