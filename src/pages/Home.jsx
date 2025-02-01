import React from "react";
import TopBar from "../components/layouts/TopBar";
import Header from "../components/common/Header";
import Banner from "../components/common/Banner";
import Slider from "../components/layouts/Slider";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/common/NavBar";
import TrustSection from "../components/common/TrustSection";
import BestofLaCampana from "../components/common/BestofLaCampana";
import Categories from "../components/common/Categories";
import FloatingDrawer from "../components/common/FloatingDrawer/FloatingDrawer";
import ServiceSection from "../components/common/ServiceSection";
import News from "../components/common/News";

const Home = () => {
  return (
    <div className="font-sans">
      <Banner />
      <Slider />
      <TrustSection />
      <BestofLaCampana />
      <Categories />
      <News />
      <FloatingDrawer />
      <ServiceSection />
    </div>
  );
};

export default Home;
