import React, { useState } from "react";
import { useRegisterUserMutation } from "../../store/reducers/apiSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
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
    <div className="max-w-md mx-auto mt-12 bg-lacampana-white p-6 rounded-lg shadow-lg mb-20">
      <h2 className="text-2xl font-bold text-lacampana-gray1 mb-6 font-antonio">
        Registro
      </h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={formData.username}
          onChange={handleChange}
          className="p-2 text-lacampana-gray1 pl-4 text-lg md:w-[400px] w-[300px] h-[44px] rounded-tl-full rounded-bl-full rounded-tr-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className="p-2 text-lacampana-gray1 pl-4 text-lg md:w-[400px] w-[300px] h-[44px] rounded-tl-full rounded-bl-full rounded-tr-full"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className="p-2 text-lacampana-gray1 pl-4 text-lg md:w-[400px] w-[300px] h-[44px] rounded-tl-full rounded-bl-full rounded-tr-full"
          required
        />
        <button
          type="submit"
          className="bg-lacampana-red2 font-montserrat text-white md:w-[270px] w-[300px] h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-lg"
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
