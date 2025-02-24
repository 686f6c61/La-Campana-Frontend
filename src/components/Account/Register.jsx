import React, { useState } from "react"; 
import { useRegisterUserMutation } from "../../store/reducers/apiSlice.js"; 
import { useNavigate } from "react-router-dom"; 
import IntroductoryText from "../../sections/common/IntroductoryText.jsx";

const Register = () => { const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "", });

const [registerUser, { isLoading, error }] = useRegisterUserMutation(); const navigate = useNavigate();

const handleChange = (e) => { const { name, value } = e.target; setFormData({ ...formData, [name]: value }); };

const handleRegister = async (e) => { e.preventDefault(); if (formData.password !== formData.confirmPassword) { alert("Las contraseñas no coinciden."); return; }

try {
  await registerUser({
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

return ( <IntroductoryText title={ <div className="text-center pb-10 px-4"> <h2 className="text-4xl font-anton text-lacampana-gray1">Registrarse</h2>

<p className="text-sm mt-2">
        ¿Ya tienes una cuenta? <a href="/login" className="text-red-500 font-semibold">Inicia sesión</a>
      </p>

      <div className="max-w-xl mx-auto mt-6 bg-lacampana-white p-8 rounded-lg shadow-lg min-h-[500px]">
        <h2 className="text-2xl font-bold text-lacampana-gray1 font-antonio mb-2">Accede a <span className="text-lacampana-red2">su cuenta</span></h2>

        <form onSubmit={handleRegister} className="space-y-6 pt-4 ">
          {['username', 'email', 'password', 'confirmPassword'].map((field, index) => (
            <div key={index} className="md:pl-16 pl-0 flex flex-col items-start">
              <label className="text-lacampana-gray3 text-lg font-open-sans mb-1 ">
                {field === "username" ? "Nombre" : field === "email" ? "Correo Electrónico" : field === "password" ? "Contraseña" : "Confirmar contraseña"}
              </label>
              <input
                type={field.includes("password") ? "password" : "text"}
                name={field}
                placeholder={`${field === "username" ? "Nombre completo" : field === "email" ? "Dirección de correo" : "Contraseña"} *`}
                value={formData[field]}
                onChange={handleChange}
                className="md:w-[400px] w-[250px] p-3 text-lg border border-lacampana-gray3 bg-lacampana-white rounded-lg font-open-sans focus:outline-none focus:border-black"
                required
              />
            </div>
          ))}

          <div className="text-left pl-14 transform -translate-y-12">
            <a href="/forgot-password" className="text-gray-600 font-open-sans text-sm">¿Olvidaste la contraseña?</a>
          </div>

          <div className="text-center transform -translate-y-12">
            <button
              type="submit"
              className="btn btn-outline text-lacampana-red1 text-center border-lacampana-red1 text-lg rounded-tl-full rounded-bl-full bg-white rounded-tr-full w-[200px] font-montserrat"
              disabled={isLoading}
            >
              {isLoading ? "Registrando..." : "Ingresar"}
            </button>
          </div>
        </form>

        {error && (
          <p className="text-red-500 text-center mt-2 min-h-[30px]">Error: {error.data?.error}</p>
        )}
      </div>
    </div>
  }
  bgTitle="Registro"
  justify="center"
/>

); };

export default Register;


