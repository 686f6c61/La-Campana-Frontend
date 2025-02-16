import React from "react";
import Sidebar from "../components/Account/Sidebar.jsx";
import IntroductoryText from "../sections/common/IntroductoryText.jsx";
import Breadcrumbs from "../components/Account/Breadcrumbs.jsx";
import { Outlet } from "react-router-dom";

const MyAccount = () => {
  return (
    <div className="font-sans ">
      {/* Contenedor principal */}
      <div className="p-8">
        {/* Título */}
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

        {/* Breadcrumbs arriba del contenido */}
        <Breadcrumbs />

        {/* Contenedor de Sidebar y Contenido */}
        <div className="flex ">
          {/* Sidebar */}
          <div className="w-1/4 p-4 transform -translate-y-60">
            <Sidebar />
          </div>

          {/* Contenido principal */}
          <div className="flex-grow p-8 bg-white shadow-md rounded-lg">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
