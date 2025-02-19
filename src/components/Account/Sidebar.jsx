import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ onNavigate }) => {
  const location = useLocation();

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md font-antonio text-xl">
      <ul className="space-y-4">
        {[
          { name: "Panel", path: "/micuenta" },
          { name: "Pedidos", path: "/micuenta/pedidos" },
          { name: "Direcciones", path: "/micuenta/direcciones" },
          { name: "Métodos de pago", path: "/micuenta/metodos" },
          { name: "Detalles de la cuenta", path: "/micuenta/detalles" },
          { name: "Lista de deseos", path: "/micuenta/deseos" },
        ].map((item) => {
          const isActive = 
            location.pathname === item.path || 
            (item.path !== "/micuenta" && location.pathname.startsWith(item.path));

          return (
            <li
              key={item.path}
              className={`border-b ${
                isActive ? "border-lacampana-red1" : "border-gray-300"
              }`}
            >
              <Link
                to={item.path}
                onClick={onNavigate}
                className={`block py-3 px-4 w-full text-left ${
                  isActive ? "text-lacampana-red1 font-semibold" : "text-lacampana-gray1"
                } hover:text-lacampana-red1 transition`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}

        {/* Cerrar sesión */}
        <li className="border-b border-gray-300">
          <button
            onClick={() => {
              localStorage.removeItem("token");
              alert("Sesión cerrada exitosamente.");
              window.location.href = "/";
            }}
            className="block w-full text-left py-3 px-4 text-lacampana-gray1 hover:text-lacampana-red1 transition"
          >
            Cerrar sesión
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
