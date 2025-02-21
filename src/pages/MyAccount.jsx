import React from "react";
import Sidebar from "../components/Account/Sidebar.jsx";
import IntroductoryText from "../sections/common/IntroductoryText.jsx";
import Breadcrumbs from "../components/Account/Breadcrumbs.jsx";
import DashboardWelcome from "../components/Account/DashBoardWelcome.jsx";
import { Outlet, useLocation } from "react-router-dom";

const MyAccount = () => {
  const location = useLocation();

  return (
    <div className="font-sans">
      {/* Contenedor principal */}
      <div className="p-4 md:p-8">
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

        {/* Mostrar DashboardWelcome solo en /micuenta (DashboardPanel) y solo en pantallas pequeñas */}
        {location.pathname === "/micuenta" && (
          <div className="block md:hidden mb-4">
            <DashboardWelcome />
          </div>
        )}

        {/* Contenedor de Sidebar y Contenido */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar - Siempre visible */}
          <div className="w-full md:w-1/4 p-4">
            <Sidebar />
          </div>

          {/* Outlet - Muestra DashboardPanel o cualquier otra vista */}
          <div className="p-8 bg-white shadow-md rounded-lg flex-grow">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
