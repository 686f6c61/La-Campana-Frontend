import React, { useState } from "react";

const ContactForm = () => {
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
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
            required
          />
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono de contacto"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
            required
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje breve"
            value={formData.mensaje}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
            required
          ></textarea>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="aceptoPolitica"
              checked={formData.aceptoPolitica}
              onChange={handleChange}
              className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-0"
              required
            />
            <label className="ml-2 text-sx text-gray-600">
              He leído y acepto la política de tratamiento de datos personales
            </label>
          </div>

          <button
            type="submit"
            className="bg-lacampana-red2 font-montserrat text-white md:w-[270px] w-[300px] h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-lg"
          >
            Botón link
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
