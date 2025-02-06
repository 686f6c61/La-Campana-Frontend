import React, { useState } from "react";

const ContactForm = ({ padding = "p-8", margin = "my-4" }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    ciudad: "",
    correo: "",
    telefono: "",
    mensaje: "",
    aceptoPolitica: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value === "yes" : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div
      className={`md:w-[800px] mx-auto bg-white rounded-lg  drop-shadow-2xl ${padding} ${margin}`}
    >
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border border-lacampana-gray3 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none font-open-sans text-lacampana-gray3"
            required
          />
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="w-full border border-lacampana-gray3 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none font-open-sans text-lacampana-gray3"
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            className="w-full border border-lacampana-gray3 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none font-open-sans text-lacampana-gray3"
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono de contacto"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full border border-lacampana-gray3 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none font-open-sans text-lacampana-gray3"
            required
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje breve"
            value={formData.mensaje}
            onChange={handleChange}
            rows="4"
            className="w-full border border-lacampana-gray3 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none font-open-sans text-lacampana-gray3"
            required
          ></textarea>

          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                id="aceptoPolitica-yes"
                type="radio"
                name="aceptoPolitica"
                value="yes"
                checked={formData.aceptoPolitica === true}
                onChange={handleChange}
                className="w-4 h-4"
                style={{
                  appearance: "none",
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  backgroundColor: formData.aceptoPolitica ? "red" : "#d1d3d1",
                  border: "2px solid white",
                  cursor: "pointer",
                  boxShadow: formData.aceptoPolitica
                    ? "0 0 0 2px rgba(255, 0, 0, 0.5)"
                    : "0 0 0 2px rgba(209, 211, 209, 0.5)",
                }}
              />
              <label
                htmlFor="aceptoPolitica-yes"
                className="ml-2 text-xs text-lacampana-gray3 font-open-sans"
              >
                He leído y acepto la política de tratamiento de datos personales
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-lacampana-red2 md:-translate-x-16 font-montserrat text-white md:w-[270px] w-[300px] h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-lg"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
