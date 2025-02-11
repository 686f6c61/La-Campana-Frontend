import React from "react";
import SteelLeaders from "../sections/us/SteelLeaders.jsx";
import Advisor from "../sections/Home/Advisor.jsx";
import LegalCertification from "../sections/us/LegalCertification.jsx";
import PrecenseNation from "../sections/us/PrecenseNation.jsx";

const NosotrosInfo = () => {
  return (
    <div className="font-sans">
      <SteelLeaders />
      <LegalCertification />
      <PrecenseNation />
      <Advisor />
    </div>
  );
};

export default NosotrosInfo;
