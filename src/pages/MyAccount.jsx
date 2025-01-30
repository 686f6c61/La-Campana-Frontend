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

      <div className="flex max-w-screen-lg mx-auto gap-8 p-4">
        {/* Columna izquierda con Breadcrumbs y Sidebar */}
        <div className="w-1/3 flex flex-col gap-4">
          <Breadcrumbs />
          <Sidebar />
        </div>

        {/* Columna derecha con DashboardPanel */}
        <div className="w-full">
          <DashboardPanel />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
