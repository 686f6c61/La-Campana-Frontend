import React, { useState, useEffect } from "react";
import { useForgotPasswordMutation } from "../../store/reducers/apiSlice";

const AccountDetails = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [forgotPassword, { isLoading, error }] = useForgotPasswordMutation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user?.email) {
      setMessage("No hay correo disponible en el sistema.");
      return;
    }
    try {
      const response = await forgotPassword({ email: user.email }).unwrap();
      setMessage("Correo enviado. Revisa tu bandeja de entrada.");
      alert("Correo enviado correctamente.");
    } catch (err) {
      setMessage(err?.data?.error || "Error al enviar el correo.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-lacampana-gray1 mb-6 font-antonio">
        Detalles de la cuenta
      </h2>

      {user ? (
        <>
          <div className="grid grid-cols-2 gap-6 text-lacampana-gray1">
            <div>
              <p className="text-sm text-gray-500 mb-1">Nombre</p>
              <p className="font-semibold">{user.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Apellido</p>
              <p className="font-semibold">{user.lastname}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-500 mb-1">Nombre de usuario</p>
              <p className="font-semibold">{user.username}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-500 mb-1">Correo electrónico</p>
              <p className="font-semibold">{user.email}</p>
            </div>
          </div>

          <div className="mt-10 border-t pt-6">
            <h3 className="text-2xl font-bold text-lacampana-gray1 mb-4 font-antonio">
              Restablecer contraseña
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Te enviaremos un enlace para restablecer tu contraseña al correo registrado:
            </p>
            <p className="font-semibold text-lacampana-gray1 mb-4">{user.email}</p>

            <form onSubmit={handleResetPassword}>
              <button
                type="submit"
                className="bg-white text-lacampana-red2 border border-lacampana-red2 font-semibold px-6 py-2 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-lacampana-red2 hover:text-white transition duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Enviar enlace de restablecimiento"}
              </button>
            </form>

            {message && (
              <p className={`${error ? "text-red-500" : "text-green-600"} mt-3`}>
                {message}
              </p>
            )}
          </div>
        </>
      ) : (
        <p className="text-gray-500">No hay datos del usuario disponibles.</p>
      )}
    </div>
  );
};

export default AccountDetails;
