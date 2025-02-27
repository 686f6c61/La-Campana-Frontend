import React, { useEffect, useState } from "react";

const DashboardWelcome = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
  }, []);

  return (
    <div>
      <p className="text-gray-600 text-base mb-6">
        Hola{" "}
        <span className="text-lacampana-red1 font-semibold">
          {user ? user.username : "Invitado"}
        </span>
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
