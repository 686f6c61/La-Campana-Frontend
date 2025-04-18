import BannerCallToAction from "../../components/Home/BannerCallToAction";
import BannerSlide from "../../components/Home/BannerSlide";
import { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState("item1");

  const handleSlideChange = (slideID) => {
    setCurrentSlide(slideID);

    const slideToGo = document.getElementById(slideID);
    if (slideToGo) {
      slideToGo.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div className="h-[85svh] tablet:h-[65svh] desktop:h-[75svh] p-3 tablet:p-0 relative">
      <div className="carousel w-full h-full">
        <BannerSlide id="item1" imgURL="/images/home/banner/banner.jpg" alt="banner" />
        <BannerSlide id="item2" imgURL="/images/home/banner/banner2.jpeg" alt="banner" />
        <BannerSlide id="item3" imgURL="/images/home/banner/banner.jpg" alt="banner"/>
      </div>
      <BannerCallToAction
        currentSlide={currentSlide}
        onSlideChange={handleSlideChange}
      />
    </div>
  );
};

export default Banner;
