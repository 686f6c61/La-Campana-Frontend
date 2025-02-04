import React from "react";
import SteelLeaders from "../sections/us/SteelLeaders.jsx";
import FloatingDrawer from "../components/common/FloatingDrawer/FloatingDrawer.jsx";
import ServiceSection from "../components/common/ServiceSection/index.jsx";
import LegalCertification from "../sections/us/LegalCertification.jsx";
import PrecenseNation from "../sections/us/PrecenseNation.jsx";

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
