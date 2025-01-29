import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulación de autenticación (puedes reemplazarlo con tu lógica real)
    if (email === "test@example.com" && password === "password") {
      // Redirigir a /micuenta después del inicio de sesión exitoso
      navigate("/micuenta");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-600"
        >
          Iniciar Sesión
        </button>
      </form>
      <p className="text-sm text-center mt-4">
        ¿No tienes una cuenta?{" "}
        <a href="/register" className="text-red-500 font-semibold">
          Regístrate
        </a>
      </p>
    </div>
  );
};

export default Login;
