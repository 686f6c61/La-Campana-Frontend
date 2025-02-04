import React, { useState } from "react";
import { useForgotPasswordMutation } from "../../store/reducers/apiSlice.js";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [forgotPassword, { isLoading, error, isSuccess }] =
    useForgotPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await forgotPassword({ email }).unwrap();
      alert("Correo enviado. Revisa tu bandeja de entrada.");
    } catch (err) {
      alert(
        err?.data?.error || "Error al enviar el correo de restablecimiento."
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Restablecer Contraseña
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-600"
          disabled={isLoading}
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {error && (
        <p className="text-red-500 text-center mt-2">
          Error: {error.data?.error}
        </p>
      )}
      {isSuccess && (
        <p className="text-green-500 text-center mt-2">
          Correo enviado correctamente.
        </p>
      )}
    </div>
  );
};

export default ForgotPassword;
