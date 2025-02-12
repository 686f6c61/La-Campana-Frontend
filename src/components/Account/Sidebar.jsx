import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SidebarItem = ({ text, route, isActive, onClick }) => {
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
  const navigate = useNavigate();
  const location = useLocation();

  const routes = [
    { text: "Tablero", route: "/micuenta" },
    { text: "Pedidos", route: "/micuenta/pedidos" },
    { text: "Direcciones", route: "/micuenta/direcciones" },
    { text: "Métodos de pago", route: "/micuenta/metodos" },
    { text: "Detalles de la cuenta", route: "/micuenta/detalles" },
    { text: "Lista de deseos", route: "/micuenta/deseos" },
  ];

  return (
    <aside className="bg-lacampana-white p-4 rounded-lg shadow-md mt-60">
      <ul className="font-antonio text-xl">
        {routes.map((item) => (
          <SidebarItem
            key={item.route}
            text={item.text}
            route={item.route}
            isActive={item.route === location.pathname}
            onClick={() => navigate(item.route)}
          />
        ))}
        <li className="border-b border-gray-300">
          <button
            onClick={() => {
              localStorage.removeItem("token");
              alert("Sesión cerrada exitosamente.");
              navigate("/");
            }}
            className="block w-full text-left py-3 px-4 text-lacampana-gray1 hover:text-lacampana-red1 transition"
          >
            Cerrar sesión
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
