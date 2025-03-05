import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useResetPasswordMutation } from "../../store/reducers/apiSlice";
import IntroductoryText from "../../sections/common/IntroductoryText.jsx";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // Obtener el token de la URL
  console.log("token", token);

  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState(false);

  const [resetPassword, { isLoading, error }] = useResetPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      // const response = await resetPassword({ token, newPassword }).unwrap();
      const response = await fetch(
        `http://localhost:3000/api/users/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newpassword: newPassword, token: token }),
        }
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error);
      }
      console.log("result dessde fetch", result);

      setMessage(result.message);
      setLoad(false);
    } catch (err) {
      console.log("error desde catch", err);

      setMessage(err.message);
      setLoad(false);
    }
  };

  return (
    <IntroductoryText
      title={
        <>
          <div className="text-center pb-20">
            <div className="relative">
              <h2 className="relative text-4xl font-anton text-lacampana-gray1">
                Restablecer{" "}
                <span className="text-lacampana-red2">Contraseña</span>
              </h2>
            </div>

            <div className="w-full max-w-xl mx-auto mt-12 bg-lacampana-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-lacampana-gray1 font-antonio mb-2">
                Ingresa tu{" "}
                <span className="text-lacampana-red2">nueva contraseña</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 pt-10">
                {/* Campo de Nueva Contraseña */}
                <div className="flex flex-col items-center">
                  <label className="text-lacampana-gray1 md:pl-0 pl-28 transform -translate-x-24 font-open-sans text-lg mb-1">
                    Nueva Contraseña
                  </label>
                  <input
                    type="password"
                    placeholder="Ingrese su nueva contraseña *"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full max-w-[400px] p-3 text-lg bg-lacampana-white border border-lacampana-gray3 rounded-lg font-open-sans focus:outline-none focus:border-black"
                    required
                  />
                </div>

                {/* Botón de Actualizar */}
                <div className="text-center transform -translate-y-2">
                  <button
                    type="submit"
                    className="w-full max-w-[200px] py-3 text-lg text-lacampana-red1 text-center border border-lacampana-red1 rounded-tl-full rounded-bl-full bg-white rounded-tr-full font-montserrat"
                    disabled={load}
                  >
                    {load ? "Actualizando..." : "Restablecer"}
                  </button>
                </div>
              </form>

              {message && (
                <p className="text-green-500 text-center mt-2">{message}</p>
              )}
              {/* {error && (
                <p className="text-red-500 text-center mt-2">
                  Error: {error.data?.error}
                </p>
              )} */}
            </div>
          </div>
        </>
      }
      bgTitle="Restablecer Contraseña"
      justify="center"
      bgTitleMargin=""
      bgTitlePadding=""
    />
  );
};

export default ResetPassword;
