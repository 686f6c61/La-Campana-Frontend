import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../store/reducers/apiSlice.js";
import IntroductoryText from "../../sections/common/IntroductoryText.jsx";

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
          <div className="text-center">
            <div className="relative">
              <h2 className="relative text-4xl font-anton text-lacampana-gray1">
                Iniciar <span className="text-lacampana-red2">sesión</span>
              </h2>
            </div>

            <div className="w-full max-w-xl mx-auto mt-12 bg-lacampana-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-lacampana-gray1 font-antonio mb-2">
                Acceda a <span className="text-lacampana-red2">su cuenta</span>
              </h2>

              <p className="text-sm text-center">
                ¿No tienes una cuenta?{" "}
                <a href="/registro" className="text-red-500 font-semibold">
                  Regístrate
                </a>
              </p>

              <form onSubmit={handleLogin} className="space-y-6 pt-10">
                {/* Ingrese usuario */}
                <div className="flex flex-col items-center">
                  <label className="text-lacampana-gray1 items-start transform -translate-x-32 font-open-sans text-lg mb-1">
                    Ingrese usuario
                  </label>
                  <input
                    type="email"
                    placeholder="Correo electrónico *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full max-w-[400px] p-3 text-lg border border-lacampana-gray3 rounded-lg font-open-sans focus:outline-none focus:border-black"
                    required
                  />
                </div>

                <div className="flex flex-col items-center">
                  <label className="text-lacampana-gray1 transform -translate-x-36 font-open-sans text-lg mb-1">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    placeholder="Contraseña *"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full max-w-[400px] p-3 text-lg border border-lacampana-gray3 rounded-lg font-open-sans focus:outline-none focus:border-black"
                    required
                  />
                </div>

                <div className="text-left pl-14 transform -translate-y-14">
                  <a
                    href="/forgot-password"
                    className="text-gray-600 font-open-sans text-sm"
                  >
                    ¿Olvidaste la contraseña?
                  </a>
                </div>

                <div className="text-center transform -translate-y-14">
                  <button
                    type="submit"
                    className="w-full max-w-[200px] py-3 text-lg text-lacampana-red1 text-center border border-lacampana-red1 rounded-tl-full rounded-bl-full rounded-tr-full font-montserrat"
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
