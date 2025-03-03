import React from "react";
import Sidebar from "../components/Account/Sidebar.jsx";
import IntroductoryText from "../sections/common/IntroductoryText.jsx";
import Breadcrumbs from "../components/Account/Breadcrumbs.jsx";
import DashboardGreetings from "../components/Account/DashboardGreetings.jsx";
import TitleAndParagraph from "../components/Account/TitleAndParagraph.jsx"
import { Outlet, useLocation } from "react-router-dom";

const MyAccount = () => {
  const location = useLocation();

  return (
    <div className="font-sans">
      <div className="p-4 md:p-8">
        {/* Breadcrumbs arriba del contenido */}
        <Breadcrumbs />

        {/* Mostrar DashboardGreetings solo en /micuenta */}
        {location.pathname === "/micuenta" && (
          <div className="block md:hidden mb-4 pt-4">
            <DashboardGreetings />
          </div>
        )}

        {/* Mostrar TitleAndParagraph solo en /micuenta/pedidos y /micuenta/pedidos/:pedidoId */}
        {(location.pathname.startsWith("/micuenta/pedidos")) && (
          <div className="block md:hidden mb-4">
            <TitleAndParagraph title="Mis pedidos">
              Revisa el estado de tus pedidos y los detalles de compras anteriores.
            </TitleAndParagraph>
          </div>
        )}

        {/* Contenedor de Sidebar y Contenido */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar - Siempre visible */}
          <div className="w-full md:w-1/4 p-4">
            <Sidebar />
          </div>

          {/* Outlet - Muestra Orders o cualquier otra vista */}
          <div className="p-8 bg-white shadow-md rounded-lg flex-grow">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
