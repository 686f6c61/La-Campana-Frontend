import React from "react";
import TopBar from "../layouts/TopBar";
import Header from "../common/Header";
import Banner from "../common/Banner";
import Slider from "../layouts/Slider";
// import ProductSection from "../layouts/ProductSection";
import Footer from "../layouts/Footer";
import Navbar from "../common/NavBar";
import TrustSection from "../common/TrustSection";
import BestofLaCampana from "../common/BestofLaCampana";
import Categories from "../common/Categories";
import FloatingDrawer from "../common/FloatingDrawer/FloatingDrawer";
import ServiceSection from "../common/ServiceSection";
import News from "../common/News";

const Home = () => {
  return (
    <div className="font-sans">
      {/* <TopBar />
      <Header />
      <Navbar /> */}
      <Banner />
      <Slider />
      <TrustSection />
      <BestofLaCampana />
      <Categories />
      <News />
      {/* <ProductSection /> */}
      <FloatingDrawer />
      <ServiceSection />

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
