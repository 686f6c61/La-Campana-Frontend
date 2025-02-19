import React, { useState } from "react";
import { useRegisterUserMutation } from "../../store/reducers/apiSlice.js";
import { useNavigate } from "react-router-dom";
import IntroductoryText from "../../sections/common/IntroductoryText.jsx";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Botón de registro presionado");

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      await registerUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }).unwrap();

      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      navigate("/inicio"); // Redirige después de cerrar el alert
    } catch (err) {
      console.error("Error al registrar el usuario:", err);
    }
  };

  return (
    <IntroductoryText
      title={
        <>
          <div className="text-center">
            <div className="relative">
              <h2 className="relative text-4xl font-anton text-lacampana-gray1">
                Registrarse <span className="text-lacampana-red2"></span>
              </h2>
            </div>

            <p className="text-sm text-center mt-2">
              ¿Ya tienes una cuenta?{" "}
              <a href="/login" className="text-red-500 font-semibold">
                Inicia sesión
              </a>
            </p>

            <div className="max-w-xl mx-auto mt-6 bg-lacampana-white p-8 rounded-lg shadow-lg min-h-[500px]">
              <h2 className="text-2xl font-bold text-lacampana-gray1 font-antonio mb-2">
                Acceda a <span className="text-lacampana-red2">su cuenta</span>
              </h2>

              <p className="text-sm text-center">
                ¿No tienes una cuenta?{" "}
                <a href="/register" className="text-red-500 font-semibold">
                  Regístrate
                </a>
              </p>

              <form onSubmit={handleRegister} className="space-y-6 pt-4">
                {/* Nombre */}
                <div className="flex flex-col items-center">
                  <label className="text-lacampana-gray1 transform -translate-x-36 pr-8 font-open-sans text-lg mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Nombre completo *"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-[400px] p-3 text-lg border border-lacampana-gray3 rounded-lg font-open-sans focus:outline-none focus:border-black"
                    required
                  />
                </div>

                {/* Correo Electrónico */}
                <div className="flex flex-col items-center">
                  <label className="text-lacampana-gray1 transform -translate-x-32 pl-2 font-open-sans text-lg mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Dirección de correo *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-[400px] p-3 text-lg border border-lacampana-gray3 rounded-lg font-open-sans focus:outline-none focus:border-black"
                    required
                  />
                </div>

                {/* Contraseña */}
                <div className="flex flex-col items-center">
                  <label className="text-lacampana-gray1 transform -translate-x-36 pr-4 font-open-sans text-lg mb-1">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña *"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-[400px] p-3 text-lg border border-lacampana-gray3 rounded-lg font-open-sans focus:outline-none focus:border-black"
                    required
                  />
                </div>

                {/* Confirmar Contraseña */}
                <div className="flex flex-col items-center">
                  <label className="text-lacampana-gray1 transform -translate-x-28 font-open-sans text-lg mb-1">
                    Confirmar contraseña
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Repita la contraseña *"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-[400px] p-3 text-lg border border-lacampana-gray3 rounded-lg font-open-sans focus:outline-none focus:border-black"
                    required
                  />
                </div>

                <div className="text-left pl-14 transform -translate-y-12 ">
                  <a href="/forgot-password" className="text-gray-600 font-open-sans text-sm">
                    ¿Olvidaste la contraseña?
                  </a>
                </div>

                <div className="text-center transform -translate-y-12">
                  <button
                    type="submit"
                    className="btn btn-outline text-lacampana-red1 text-center border-lacampana-red1 text-lg rounded-tl-full rounded-bl-full rounded-tr-full w-[200px] font-montserrat"
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
          </div>
        </>
      }
      bgTitle="Registro"
      justify="center"
      bgTitleMargin=""
      bgTitlePadding=""
    />
  );
};

export default Register;
