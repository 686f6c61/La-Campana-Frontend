import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../store/reducers/apiSlice.js";
import IntroductoryText from "../../sections/common/IntroductoryText.jsx";
import PasswordToggleInput from "../Account/PasswordToggleInput.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginUser, { isLoading, error }] = useLoginUserMutation();

  // Redirigir a /micuenta si el usuario ya está logueado
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/micuenta");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password }).unwrap();
      console.log("respuesta login: ", response);

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      alert("Inicio de sesión exitoso. Serás redirigido a tu cuenta.");
      navigate("/micuenta");
    } catch (err) {
      alert(err?.data?.error || "Correo o contraseña incorrectos");
    }
  };

  return (
    <IntroductoryText
      title={
        <>
          <div className="text-center pb-20">
            <div className="relative">
              <h2 className="relative text-4xl font-anton text-lacampana-gray1">
                Iniciar <span className="text-lacampana-red2">sesión</span>
              </h2>
            </div>

            <div className="w-full max-w-xl mx-auto mt-12 bg-lacampana-white p-8 rounded-lg ">
              <h2 className="text-2xl font-bold text-lacampana-gray1 font-antonio mb-2">
                Acceda a <span className="text-lacampana-red2">su cuenta</span>
              </h2>

              <p className="text-sm text-center">
                ¿No tienes una cuenta?{" "}
                {/* <a href="/registro" className="text-red-500 font-semibold">
                  Regístrate
                </a> */}
                <Link className="text-red-500 font-semibold" to="/registro">
                  Regístrate
                </Link>
              </p>

              <form onSubmit={handleLogin} className="space-y-6 pt-10">
                <div className="flex flex-col items-center w-full max-w-[400px] mx-auto">
                  <label className="text-lacampana-gray1 text-lg mb-1 font-open-sans text-left w-full">
                    Ingrese email
                  </label>
                  <input
                    type="email"
                    placeholder="Correo electrónico *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 text-lg bg-lacampana-white border border-lacampana-gray3 rounded-lg font-open-sans focus:outline-none focus:border-black"
                    required
                  />
                </div>

                <div className="flex flex-col items-center w-full max-w-[400px] mx-auto">
                  <label className="text-lacampana-gray1 text-lg mb-1 font-open-sans text-left w-full">
                    Contraseña
                  </label>
                  <PasswordToggleInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña *"
                  />
                </div>

                <div className="text-left w-full max-w-[400px] mx-auto pt-0">
                  {/* <a
                    href="/forgot-password"
                    className="text-gray-600 font-open-sans text-sm"
                  >
                    ¿Olvidaste la contraseña?
                  </a> */}
                  <Link
                    to="/forgot-password"
                    className="text-gray-600 font-open-sans text-sm"
                  >
                    ¿Olvidaste la contraseña?
                  </Link>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full max-w-[200px] py-3 text-lg text-lacampana-red1 text-center border border-lacampana-red1 rounded-tl-full rounded-bl-full rounded-tr-full bg-white font-montserrat transition duration-300 ease-in-out hover:bg-lacampana-red1 hover:text-white hover:scale-90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Cargando..." : "Ingresar"}
                  </button>
                </div>
              </form>

              {error && (
                <p className="text-red-500 text-center mt-2">
                  Error: {error.data?.error}
                </p>
              )}
            </div>
          </div>
        </>
      }
      bgTitle="Login"
      justify="center"
      bgTitleMargin=""
      bgTitlePadding=""
    />
  );
};

export default Login;
