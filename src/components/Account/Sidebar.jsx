import React, { useState } from "react";
import DashboardPanel from "./DashboardPanel";
import Orders from "./Orders";

const SidebarItem = ({ text, onClick }) => {
  return (
    <li className="border-b border-gray-300">
      <button
        onClick={onClick}
        className="block w-full text-left py-3 px-4 text-gray-700 hover:text-red-500 transition"
      >
        {text}
      </button>
    </li>
  );
};

const Sidebar = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const renderContent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <DashboardPanel />;
      case "pedidos":
        return <Orders />;
      default:
        return <DashboardPanel />;
    }
  };

  return (
    <div className="flex">
      <aside className="bg-gray-100 p-4 rounded-lg w-80 shadow-md">
        <h2 className="text-red-500 font-bold text-lg text-left px-4 pb-2 border-b-2 border-red-500">
          Tablero
        </h2>
        <ul className="mt-2">
          <SidebarItem
            text="Dashboard"
            onClick={() => setActiveComponent("dashboard")}
          />
          <SidebarItem
            text="Pedidos"
            onClick={() => setActiveComponent("pedidos")}
          />
          <SidebarItem
            text="Direcciones"
            onClick={() => setActiveComponent("direcciones")}
          />
        </ul>
      </aside>

      <div className="w-full p-8">{renderContent()}</div>
    </div>
  );
};

export default Sidebar;
