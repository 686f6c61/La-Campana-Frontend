import React from "react";

const DashboardWelcome = () => {
  return (
    <div>
      <p className="text-gray-600 text-base mb-6">
        Hola{" "}
        <span className="text-lacampana-red1 font-semibold">[Mi cuenta]</span>
      </p>
      <p className="text-gray-600 md:text-base text-sm mb-6 md:w-[650px] w-[350px]">
        Desde el panel de su cuenta puede ver su{" "}
        <span className="text-lacampana-red1 font-semibold">
          pedidos recientes
        </span>
        , gestionar sus{" "}
        <span className="text-lacampana-red1 font-semibold">
          direcciones de envío y facturación
        </span>
        , y editar su{" "}
        <span className="text-lacampana-red1 font-semibold">
          contraseña y detalles de la cuenta
        </span>
        .
      </p>
    </div>
  );
};

export default DashboardWelcome;
