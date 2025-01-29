import React, { useState } from "react";
import { useRegisterUserMutation } from "../../store/reducers/apiSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "", // Cambiado a username
    email: "",
    password: "",
  });

  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await registerUser(formData).unwrap();
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      navigate("/login");
    } catch (err) {
      console.error("Error al registrar el usuario:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          name="username" // Cambiado a username
          placeholder="Nombre de usuario"
          value={formData.username}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-600"
          disabled={isLoading}
        >
          {isLoading ? "Registrando..." : "Registrarse"}
        </button>
      </form>
      {error && (
        <p className="text-red-500 text-sm mt-4">
          Hubo un error al registrar el usuario.
        </p>
      )}
      <p className="text-sm text-center mt-4">
        ¿Ya tienes una cuenta?{" "}
        <a href="/login" className="text-red-500 font-semibold">
          Inicia sesión
        </a>
      </p>
    </div>
  );
};

export default Register;
