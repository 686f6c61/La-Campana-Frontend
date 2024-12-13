import React from "react";
import TopBar from "../../../components/layouts/TopBar";

import Header from "../../../components/common/Header";
import Banner from "../../../components/common/Banner";
import Slider from "../../../components/layouts/Slider";
import ProductSection from "../../../components/layouts/ProductSection";
import Footer from "../../../components/layouts/Footer";
import Navbar from "../../../components/common/NavBar";
import Feature from "../../../components/common/Feature";
import Sales from "../../../components/common/Sales";

const Home = () => {
  return (
    <div className="font-sans">
      <TopBar />
      <Header />
      <Navbar />
      <Banner />
      <Slider />
      <Feature />
      <Sales />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default Home;
