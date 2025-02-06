import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../store/reducers/apiSlice.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [loginUser, { isLoading, error }] = useLoginUserMutation();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ email, password }).unwrap();

      console.log("respuesta login: ", response);

      localStorage.setItem("token", response.token);

      navigate("/micuenta");
    } catch (err) {
      alert(err?.data?.error || "Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-lacampana-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-lacampana-gray1 mb-6 font-antonio">
        Iniciar Sesión
      </h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 text-lacampana-gray1 pl-4 text-lg md:w-[400px] w-[300px] h-[44px] rounded-tl-full rounded-bl-full rounded-tr-full"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 text-lacampana-gray1 pl-4 text-lg md:w-[400px] w-[300px] h-[44px] rounded-tl-full rounded-bl-full rounded-tr-full"
          required
        />
        <button
          type="submit"
          className="bg-lacampana-red2 font-montserrat text-white md:w-[270px] w-[300px] h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-lg"
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
