import React from "react";

const items = [
  { imgSrc: "/images/cart.png", text: "Pedidos" },
  { imgSrc: "/images/mapIcon.png", text: "Direcciones" },
  { imgSrc: "/images/credit.png", text: "Métodos de pago" },
  { imgSrc: "/images/user.png", text: "Detalles de la cuenta" },
  { imgSrc: "/images/like.png", text: "Lista de deseos" },
  { imgSrc: "/images/exit.png", text: "Cerrar sesión" },
];

const DashboardPanel = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 px-4 text-left">
      <p className="text-gray-600 text-sm mb-4">
        Hola
        <span className="text-lacampana-red1 font-semibold">[Mi cuenta]</span>
      </p>
      <p className="text-gray-600 text-sm mb-4">
        Desde el panel de su cuenta puede ver su
        <span className="text-lacampana-red1 font-semibold">
          pedidos recientes
        </span>
        , gestiona tu
        <span className="text-lacampana-red1 font-semibold">
          direcciones de envío y facturación
        </span>
        , y edite su
        <span className="text-lacampana-red1 font-semibold">
          contraseña y detalles de la cuenta
        </span>
        .
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <img
              src={item.imgSrc}
              alt={item.text}
              className="w-16 h-16 object-contain aspect-square"
            />
            <p className="text-gray-700 font-medium mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPanel;
