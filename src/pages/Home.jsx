import Slider from "../components/layouts/Slider";
import Trust from "../sections/Home/Trust";
import BestofLaCampana from "../components/common/BestofLaCampana";
import Categories from "../sections/Home/Categories";
import FloatingDrawer from "../components/common/FloatingDrawer/FloatingDrawer";
import Advisor from "../sections/Home/Advisor";
import News from "../components/common/News";
import Banner from "../sections/Home/Banner";
import BestOffers from "../sections/Home/BestOffers";

const Home = () => {
  return (
    <>
      <Banner />
      <BestOffers />
      <Trust />
      <BestofLaCampana />
      <Categories />
      <News />
      <FloatingDrawer />
      <Advisor />
    </>
  );
};

export default Home;
