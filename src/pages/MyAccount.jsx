import React from "react";
import DashboardPanel from "../components/Account/DashboardPanel.jsx";
import Sidebar from "../components/Account/Sidebar.jsx";
import IntroductoryText from "../sections/common/IntroductoryText.jsx";
import Breadcrumbs from "../components/Account/Breadcrumbs.jsx";

const MyAccount = () => {
  return (
    <div className="font-sans">
      {/* IntroductoryText centrado arriba */}
      <div className="text-center my-6">
        <IntroductoryText
          title={
            <>
              Mi <span className="text-lacampana-red2">cuenta</span>
            </>
          }
          bgTitle="Mi cuenta"
          justify="center"
          description=""
        />
      </div>

      {/* Columna izquierda con Breadcrumbs y Sidebar */}
      <div className="md:ml-80 w-1/2 flex flex-col gap-4">
        <Breadcrumbs />
        <Sidebar />
      </div>
    </div>
  );
};

export default MyAccount;
