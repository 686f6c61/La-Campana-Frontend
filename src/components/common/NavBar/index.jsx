import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import NavbarItems from "../NavBarItems";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuCat = [
    { id: "drywall", name: "Perfiles Drywall" },
    { id: "ornamentacion", name: "Perfiles Ornamentación" },
    { id: "tejas", name: "Tejas y Cubiertas" },
    { id: "tuberias", name: "Tuberías" },
    { id: "vigas", name: "Vigas y Perfiles" },
    { id: "entrepisos", name: "Entrepisos" },
    { id: "laminas", name: "Láminas" },
  ];

  return (
    <div>
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 lg:px-32">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-700 text-sm flex items-center space-x-2 lg:hidden"
            >
              <HiMenuAlt2 className="h-6 w-6" />
              <p>Todas las categorías</p>
            </button>

            <ul className="hidden lg:flex justify-between items-center space-x-6">
              <li>
                <button
                  onClick={toggleSidebar}
                  className="text-gray-700 text-sm flex items-center space-x-2"
                >
                  <HiMenuAlt2 className="h-5 w-5" />
                  <p>Todas las categorías</p>
                </button>
              </li>
              <NavbarItems items={menuCat} listClass={"text-gray-700 text-sm hover:bg-red-600"} />
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
      >
        {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
      </div>

      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
