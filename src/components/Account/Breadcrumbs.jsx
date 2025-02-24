import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <nav className="text-gray-500 text-sm text-center md:text-left">
      <ul className="flex flex-wrap justify-center md:justify-start md:pl-10 space-x-2">
        <li>
          <Link to="/" className="hover:text-gray-700">
            Inicio
          </Link>
          <span className="mx-1">/</span>
        </li>
        <li>
          <Link to="/tienda" className="hover:text-gray-700">
            Tienda
          </Link>
          <span className="mx-1">/</span>
        </li>
        <li className="text-gray-900 font-medium">
          Mi cuenta
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
