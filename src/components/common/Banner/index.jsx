import { Content, Slide } from "./components";

const Banner = () => {
  return (
    <div className="h-[80svh] px-4 relative">
      <div className="carousel w-full h-full">
        <Slide id="item1" imgURL="/images/banner.jpg" />
        <Slide id="item2" imgURL="/images/banner2.jpeg" />
      </div>
      <Content />
    </div>
  );
};

export default Banner;