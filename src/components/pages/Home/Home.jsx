import React from "react";
import TopBar from "../../../components/layouts/TopBar";
import Header from "../../../components/common/Header";
import Banner from "../../../components/common/Banner";
import Slider from "../../../components/layouts/Slider";
import ProductSection from "../../../components/layouts/ProductSection";
import Footer from "../../../components/layouts/Footer";
import Navbar from "../../../components/common/NavBar";
import TrustSection from "../../../components/common/TrustSection";
import BestofLaCampana from "../../../components/common/BestofLaCampana";
import Categories from "../../common/Categories";
import FloatingDrawer from "../../common/FloatingDrawer/FloatingDrawer";
import ServiceSection from "../../common/ServiceSection";
import News from "../../common/News";

const Home = () => {
  return (
    <div className="font-sans">
      <TopBar />
      <Header />
      <Navbar />
      <Banner />
      <Slider />
      <TrustSection />
      <BestofLaCampana />
      <Categories />
      <News />
      <ProductSection />
      <FloatingDrawer />
      <ServiceSection />

      <Footer />
    </div>
  );
};

export default Home;
