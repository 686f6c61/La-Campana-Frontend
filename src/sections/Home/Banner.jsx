import BannerCallToAction from "../../components/Home/BannerCallToAction";
import BannerSlide from "../../components/Home/BannerSlide";

const Banner = () => {
  return (
    <div className="h-[85svh] tablet:h-[65svh] desktop:h-[75svh] px-4 relative">
      <div className="carousel w-full h-full">
        <BannerSlide id="item1" imgURL="/images/home/banner/banner.jpg" />
        <BannerSlide id="item2" imgURL="/images/home/banner/banner2.jpeg" />
        <BannerSlide id="item3" imgURL="/images/home/banner/banner.jpg" />
      </div>
      <BannerCallToAction />
    </div>
  );
};

export default Banner;