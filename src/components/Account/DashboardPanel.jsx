import React, { useState } from "react";
import Orders from "./Orders";
import Addresses from "./Addresses";
// import PaymentMethod from "./PaymentMethod";
import AccountDetails from "./AccountDetails";
import WishList from "./WishList";
import DashboardItems from "./DashboardItems";
import DashboardGreetings from "./DashboardGreetings";

const items = [
  {
    id: "pedidos",
    link: "/micuenta/pedidos",
    imgSrc: "/images/cart.png",
    text: "Pedidos",
  },
  {
    id: "direcciones",
    link: "/micuenta/direcciones",
    imgSrc: "/images/mapIcon.png",
    text: "Direcciones",
  },
  // { id: "metodos", link: "/micuenta/metodos", imgSrc: "/images/credit.png", text: "Métodos de pago" },
  {
    id: "detalles",
    link: "/micuenta/detalles",
    imgSrc: "/images/user.png",
    text: "Detalles de la cuenta",
  },
  {
    id: "deseos",
    link: "/micuenta/deseos",
    imgSrc: "/images/like.png",
    text: "Lista de deseos",
  },
  { id: "cerrar", imgSrc: "/images/exit.png", text: "Cerrar sesión" },
];

const DashboardPanel = () => {
  const [activeComponent, setActiveComponent] = useState("");

  const handleItemClick = (id) => {
    if (id === "cerrar") {
      localStorage.removeItem("token");
      alert("Sesión cerrada exitosamente.");
      window.location.href = "/";
      return;
    }
    setActiveComponent(id);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "pedidos":
        return <Orders />;
      case "direcciones":
        return <Addresses />;
      // case "metodos":
      //   return <PaymentMethod />;
      case "detalles":
        return <AccountDetails />;
      case "deseos":
        return <WishList />;
      default:
        return null;
    }
  };

  return (
    <div className="my-8 px-8 text-left">
      {activeComponent === "" && (
        <>
          <div className="hidden md:block">
            <DashboardGreetings />
          </div>
          <DashboardItems items={items} onItemClick={handleItemClick} />
        </>
      )}
      <div className="mt-8">{renderComponent()}</div>
    </div>
  );
};

export default DashboardPanel;
