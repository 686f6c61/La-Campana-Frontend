import React, { useState } from "react";
import DashboardPanel from "./DashboardPanel";
import Orders from "./Orders";
import Addresses from "./Addresses";
import PaymentMethod from "./PaymentMethod";
import AccountDetails from "./AccountDetails";
import WishList from "./WishList";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ text, isActive, onClick }) => {
  return (
    <li
      className={`border-b border-gray-300 ${
        isActive ? "text-lacampana-red1" : ""
      }`}
    >
      <button
        onClick={onClick}
        className={`block w-full text-left py-3 px-4 ${
          isActive
            ? "text-lacampana-red1 font-semibold"
            : "text-lacampana-gray1"
        } hover:text-lacampana-red1 transition`}
      >
        {text}
      </button>
      {isActive && <div className="border-t-2 border-lacampana-red1 mt-0" />}
    </li>
  );
};

const Sidebar = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token
    navigate("/"); // Redirige a la página de inicio
  };

  const renderContent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <DashboardPanel />;
      case "pedidos":
        return <Orders />;
      case "direcciones":
        return <Addresses />;
      case "metodos":
        return <PaymentMethod />;
      case "detalles":
        return <AccountDetails />;
      case "deseos":
        return <WishList />;
      default:
        return <DashboardPanel />;
    }
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="bg-lacampana-white p-4 rounded-lg min-w-[250px] max-w-[300px] shadow-md">
        <ul className="font-antonio text-xl">
          <SidebarItem
            text="Tablero"
            isActive={activeComponent === "dashboard"}
            onClick={() => setActiveComponent("dashboard")}
          />
          <SidebarItem
            text="Pedidos"
            isActive={activeComponent === "pedidos"}
            onClick={() => setActiveComponent("pedidos")}
          />
          <SidebarItem
            text="Direcciones"
            isActive={activeComponent === "direcciones"}
            onClick={() => setActiveComponent("direcciones")}
          />
          <SidebarItem
            text="Métodos de pago"
            isActive={activeComponent === "metodos"}
            onClick={() => setActiveComponent("metodos")}
          />
          <SidebarItem
            text="Detalles de la cuenta"
            isActive={activeComponent === "detalles"}
            onClick={() => setActiveComponent("detalles")}
          />
          <SidebarItem
            text="Lista de deseos"
            isActive={activeComponent === "deseos"}
            onClick={() => setActiveComponent("deseos")}
          />
          <li className="border-b border-gray-300">
            <button
              onClick={handleLogout}
              className="block w-full text-left py-3 px-4 text-lacampana-gray1 hover:text-lacampana-red1 transition"
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      </aside>

      {/* Contenido principal */}
      <div className="flex-grow p-8">{renderContent()}</div>
    </div>
  );
};

export default Sidebar;
