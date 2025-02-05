import Slider from "../components/layouts/Slider";
import TrustSection from "../components/common/TrustSection";
import BestofLaCampana from "../components/common/BestofLaCampana";
import Categories from "../components/common/Categories";
import FloatingDrawer from "../components/common/FloatingDrawer/FloatingDrawer";
import ServiceSection from "../components/common/ServiceSection";
import News from "../components/common/News";
import Banner from "../sections/Home/Banner";
import BestOffers from "../sections/Home/BestOffers";

const Home = () => {
  return (
    <>
      <Banner />
      <BestOffers />
      <TrustSection />
      <BestofLaCampana />
      <Categories />
      <News />
      <FloatingDrawer />
      <ServiceSection />
    </>
  );
};

export default Home;
