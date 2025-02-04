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
    <div className="  my-8 px-8 text-left ">
      <p className="text-gray-600 text-base mb-6 ">
        Hola {""}
        <span className="text-lacampana-red1 font-semibold">[Mi cuenta]</span>
      </p>
      <p className="text-gray-600 text-base mb-6 w-[650px]">
        Desde el panel de su cuenta puede ver su{" "}
        <span className="text-lacampana-red1 font-semibold">
          pedidos recientes
        </span>
        , gestiona tu{" "}
        <span className="text-lacampana-red1 font-semibold">
          direcciones de envío y facturación
        </span>
        , y edite su{" "}
        <span className="text-lacampana-red1 font-semibold">
          contraseña y detalles de la cuenta
        </span>
        .
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-60 gap-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-lacampana-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all min-h-[220px] min-w-[240px]"
          >
            <img
              src={item.imgSrc}
              alt={item.text}
              className="w-16 h-16 object-contain"
            />
            <p className="text-lacampana-gray1 font-medium mt-4 text-2xl font-antonio text-center">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPanel;
