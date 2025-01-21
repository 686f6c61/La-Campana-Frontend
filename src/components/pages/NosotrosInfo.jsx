import React from "react";
import TopBar from "../layouts/TopBar.jsx";
import Header from "../common/Header/index.jsx";
import SteelLeaders from "../sections/us/SteelLeaders.jsx";
import Navbar from "../common/NavBar/index.jsx";
import FloatingDrawer from "../common/FloatingDrawer/FloatingDrawer.jsx";
import ServiceSection from "../common/ServiceSection/index.jsx";
import LegalCertification from "../sections/us/LegalCertification.jsx";
import PrecenseNation from "../sections/us/PrecenseNation.jsx";
import Footer from "../layouts/Footer.jsx";

const NosotrosInfo = () => {
  return (
    <div className="font-sans">
      <FloatingDrawer />
      <SteelLeaders />
      <LegalCertification />
      <PrecenseNation />
      <ServiceSection />
    </div>
  );
};

export default NosotrosInfo;
