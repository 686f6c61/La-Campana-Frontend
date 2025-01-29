import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "/login";
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={formData.name}
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
        >
          Registrarse
        </button>
      </form>
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
