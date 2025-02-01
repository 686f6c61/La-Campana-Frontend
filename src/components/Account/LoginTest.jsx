import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../store/reducers/apiSlice.js"; // Importa tu hook del apiSlide

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Usar la mutación de login
  const [loginUser, { isLoading, error }] = useLoginUserMutation();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Enviar la solicitud de login con los datos del formulario
      const response = await loginUser({ email, password }).unwrap();

      console.log("respuesta login: ", response);

      // Guardar el token JWT (opcional)
      localStorage.setItem("token", response.token);

      // Redirigir a la página de cuenta
      navigate("/micuenta");
    } catch (err) {
      // Manejar errores (mostrar alerta o mensaje de error)
      alert(err?.data?.error || "Correo o contraseña incorrectos");
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
          disabled={isLoading}
        >
          {isLoading ? "Cargando..." : "Iniciar Sesión"}
        </button>
      </form>

      {error && (
        <p className="text-red-500 text-center mt-2">
          Error: {error.data?.error}
        </p>
      )}

      <a
        href="/forgot-password"
        className="text-red-500 font-semibold hover:underline"
      >
        ¿Olvidaste tu contraseña?
      </a>
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
