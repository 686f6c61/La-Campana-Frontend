import React from "react";
import Register from "../components/Account/Register";
import { Link } from "react-router-dom";
import IntroductoryText from "../sections/common/IntroductoryText.jsx";


const RegisterPage = () => {
  return (
    <IntroductoryText
      title={
        <div className="text-center pb-10 px-4">
          <h2 className="text-4xl font-anton text-lacampana-gray1">
            Registrarse
          </h2>
          <p className="text-sm mt-2">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/inicio" className="text-red-500 font-semibold">
              Inicia sesión
            </Link>
          </p>
          <Register showTitle={true} />
        </div>
      }
      bgTitle="Registro"
      justify="center"
    />
  );
};


export default RegisterPage;
