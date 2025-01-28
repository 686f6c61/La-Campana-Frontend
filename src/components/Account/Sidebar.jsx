import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ link, text }) => {
  return (
    <li className="border-b border-gray-300">
      <Link
        to={link}
        className="block py-3 px-4 text-gray-700 hover:text-red-500 transition"
      >
        {text}
      </Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 p-4 rounded-lg w-80 shadow-md">
      <h2 className="text-red-500 font-bold font-antonio text-lg text-left px-4 pb-2 border-b-2 border-red-500">
        Tablero
      </h2>
      <ul className="mt-2 font-antonio text-left">
        <SidebarItem link="/pedidos" text="Pedidos" />
        <SidebarItem link="/direcciones" text="Direcciones" />
        <SidebarItem link="/metodos-de-pago" text="Métodos de pago" />
        <SidebarItem
          link="/detalles-de-la-cuenta"
          text="Detalles de la cuenta"
        />
        <SidebarItem link="/lista-de-deseos" text="Lista de deseos" />
        <SidebarItem link="/cerrar-sesion" text="Cerrar sesión" />
      </ul>
    </aside>
  );
};

export default Sidebar;
