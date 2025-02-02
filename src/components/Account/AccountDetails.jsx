import React, { useState } from "react";

const AccountDetails = () => {
  const [accountInfo, setAccountInfo] = useState({
    nombre: "",
    apellidos: "",
    nombreUsuario: "",
    correoElectronico: "",
  });

  const [passwords, setPasswords] = useState({
    contrasenaActual: "",
    nuevaContrasena: "",
    confirmarContrasena: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in accountInfo) {
      setAccountInfo({ ...accountInfo, [name]: value });
    } else {
      setPasswords({ ...passwords, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.nuevaContrasena !== passwords.confirmarContrasena) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    console.log("Detalles de la cuenta actualizados:", accountInfo);
    console.log("Nueva contraseña:", passwords.nuevaContrasena);
    alert("Detalles de la cuenta actualizados correctamente.");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-lacampana-gray1 mb-6 font-antonio">
        Detalles de la cuenta
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Detalles de la cuenta */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-gray-600 mb-1 text-left">
              Nombre *
            </label>
            <input
              type="text"
              name="nombre"
              value={accountInfo.nombre}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-lg"
              placeholder="Nombre actual"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-left">
              Apellidos *
            </label>
            <input
              type="text"
              name="apellidos"
              value={accountInfo.apellidos}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-lg"
              placeholder="Apellido actual"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-600 mb-1 text-left">
              Nombre de usuario *
            </label>
            <input
              type="text"
              name="nombreUsuario"
              value={accountInfo.nombreUsuario}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-lg"
              placeholder="Nombre del usuario actual"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-600 mb-1 text-left">
              Correo electrónico *
            </label>
            <input
              type="email"
              name="correoElectronico"
              value={accountInfo.correoElectronico}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-lg"
              placeholder="correo@actual.com"
            />
          </div>
        </div>

        {/* Actualizar contraseña */}
        <h3 className="text-2xl font-bold text-lacampana-gray1 mb-6 font-antonio">
          Actualizar contraseña
        </h3>

        <div className="grid grid-cols-1 gap-4 mb-6">
          <div>
            <label className="block text-gray-600 mb-1 text-left">
              Contraseña actual *
            </label>
            <input
              type="password"
              name="contrasenaActual"
              value={passwords.contrasenaActual}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-lg"
              placeholder="**********"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-left">
              Nueva contraseña *
            </label>
            <input
              type="password"
              name="nuevaContrasena"
              value={passwords.nuevaContrasena}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-lg"
              placeholder="**********"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1 text-left">
              Confirmar contraseña *
            </label>
            <input
              type="password"
              name="confirmarContrasena"
              value={passwords.confirmarContrasena}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded-lg"
              placeholder="**********"
            />
          </div>
        </div>

        {/* Botón de actualizar */}
        <button
          type="submit"
          className="bg-lacampana-red2 font-montserrat text-white md:w-[270px] w-[300px] h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-lg"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default AccountDetails;
