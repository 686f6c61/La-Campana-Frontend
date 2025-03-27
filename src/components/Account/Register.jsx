import React, { useState } from "react";
import { useRegisterUserMutation } from "../../store/reducers/apiSlice.js";
import { useNavigate } from "react-router-dom";
import PasswordToggleInput from "../Account/PasswordToggleInput.jsx";


const Register = ({ showTitle = true, customTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }


    try {
      await registerUser({
        name: formData.name,
        lastname: formData.lastname,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }).unwrap();


      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      navigate("/inicio");
    } catch (err) {
      console.error("Error al registrar el usuario:", err);
    }
  };


  return (
    <div className="max-w-xl mx-auto mt-6 bg-lacampana-white p-8 rounded-lg min-h-[500px]">
      {showTitle && (
        <h2 className="text-2xl font-bold text-lacampana-gray1 font-antonio mb-2">
          {customTitle || (
            <>
              Cree una <span className="text-lacampana-red2">cuenta nueva</span>
            </>
          )}
        </h2>
      )}


      <form onSubmit={handleRegister} className="space-y-6 pt-4">
        {["name", "lastname", "username", "email"].map((field, index) => (
          <div
            key={index}
            className="w-full max-w-[400px] mx-auto flex flex-col items-center"
          >
            <label className="text-lacampana-gray3 text-lg font-open-sans mb-1 w-full text-left">
              {field === "name"
                ? "Nombre"
                : field === "lastname"
                ? "Apellido"
                : field === "username"
                ? "Nombre de usuario"
                : "Correo Electrónico"}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={
                field === "name"
                  ? "Nombre *"
                  : field === "lastname"
                  ? "Apellido *"
                  : field === "username"
                  ? "Nombre de usuario *"
                  : "Correo electrónico *"
              }
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-3 text-lg border border-lacampana-gray3 bg-lacampana-white rounded-lg font-open-sans focus:outline-none focus:border-black"
              required
            />
          </div>
        ))}


        <div className="w-full max-w-[400px] mx-auto flex flex-col items-center">
          <label className="text-lacampana-gray3 text-lg font-open-sans mb-1 w-full text-left">
            Contraseña
          </label>
          <PasswordToggleInput
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña *"
          />
        </div>


        <div className="w-full max-w-[400px] mx-auto flex flex-col items-center">
          <label className="text-lacampana-gray3 text-lg font-open-sans mb-1 w-full text-left">
            Confirmar Contraseña
          </label>
          <PasswordToggleInput
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmar contraseña *"
          />
        </div>


        <div className="text-left w-full max-w-[400px] mx-auto pt-0">
          <a
            href="/forgot-password"
            className="text-gray-600 font-open-sans text-sm"
          >
            ¿Olvidaste la contraseña?
          </a>
        </div>


        <div className="text-center">
          <button
            type="submit"
            className="w-full max-w-[200px] py-3 text-lg text-lacampana-red1 text-center border border-lacampana-red1 rounded-tl-full rounded-bl-full rounded-tr-full bg-white font-montserrat transition duration-300 ease-in-out hover:bg-lacampana-red1 hover:text-white hover:scale-90"
            disabled={isLoading}
          >
            {isLoading ? "Registrando..." : "Ingresar"}
          </button>
        </div>
      </form>


      {error && (
        <p className="text-red-500 text-center mt-2 min-h-[30px]">
          Error: {error.data?.error}
        </p>
      )}
    </div>
  );
};


export default Register;
