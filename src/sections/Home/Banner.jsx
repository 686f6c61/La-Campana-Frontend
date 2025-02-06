import BannerCallToAction from "../../components/Home/BannerCallToAction";
import BannerSlide from "../../components/Home/BannerSlide";

const Banner = () => {
  return (
    <div className="h-svh px-4 relative">
      <div className="carousel w-full h-full">
        <BannerSlide id="item1" imgURL="/images/home/banner/banner.jpg" />
        <BannerSlide id="item2" imgURL="/images/home/banner/banner2.jpeg" />
      </div>
      <BannerCallToAction />
    </div>
  );
};

export default Banner;