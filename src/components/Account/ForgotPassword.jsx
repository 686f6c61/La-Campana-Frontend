import React, { useState } from "react";
import { useForgotPasswordMutation } from "../../store/reducers/apiSlice.js";
import { useNavigate } from "react-router-dom";
import IntroductoryText from "../../sections/common/IntroductoryText.jsx";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [forgotPassword, { isLoading, error }] = useForgotPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("📩 Enviando email al backend:", email); 
  
    if (!email) {
      setMessage("Por favor, ingresa tu correo electrónico.");
      return;
    }
  
    try {
      const response = await forgotPassword({ email }).unwrap();
      console.log("✅ Respuesta del backend:", response);
      setMessage("Correo enviado. Revisa tu bandeja de entrada.");
      alert("Correo enviado correctamente.");
    } catch (err) {
      console.error("❌ Error en forgotPassword:", err);
      setMessage(err?.data?.error || "Error al enviar el correo.");
    }
  };
  

  return (
    <IntroductoryText
      title={
        <>
          <div className="text-center">
            <div className="relative">
              <h2 className="relative text-4xl font-anton text-lacampana-gray1">
                Recuperar <span className="text-lacampana-red2">Contraseña</span>
              </h2>
            </div>

            <div className="max-w-xl mx-auto mt-12 bg-lacampana-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-lacampana-gray1 font-antonio mb-2">
                Restablecer <span className="text-lacampana-red2">Contraseña</span>
              </h2>

              <p className="text-sm text-center">
                Introduce tu correo y te enviaremos un enlace para restablecer tu contraseña.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 pt-10">
                <div className="flex flex-col items-center">
                  <label className="text-lacampana-gray1 transform -translate-x-28 md:pl-0 pl-24 font-open-sans text-lg mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="Correo electrónico *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="md:w-[400px] w-[280px] p-3 text-lg border border-lacampana-gray3 bg-lacampana-white rounded-lg font-open-sans focus:outline-none focus:border-black"
                    required
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-outline text-lacampana-red1 bg-white text-center border-lacampana-red1 text-lg rounded-tl-full rounded-bl-full rounded-tr-full md:w-[200px]  font-montserrat"
                    disabled={isLoading}
                  >
                    {isLoading ? "Enviando..." : "Enviar"}
                  </button>
                </div>
              </form>

              {message && (
                <p className={error ? "text-red-500 text-center mt-2" : "text-green-500 text-center mt-2"}>
                  {message}
                </p>
              )}

              <div className="text-center mt-4">
                <a href="/inicio" className="text-gray-600 font-open-sans text-sm">
                  Volver a iniciar sesión
                </a>
              </div>
            </div>
          </div>
        </>
      }
      bgTitle="Recuperar Contraseña"
      justify="center"
      bgTitleMargin=""
      bgTitlePadding=""
    />
  );
};

export default ForgotPassword;
