import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ padding = "p-8", margin = "my-4" }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_city: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ql4l8jp",
        "template_r2axg8f",
        form.current,
        "A9qRr6XGiI8PZy8rS"
      )
      .then(
        () => {
          alert("Mensaje enviado correctamente");
        },
        (error) => {
          console.error("Error al enviar:", error);
        }
      );
  };

  return (
    <div className={`md:w-[800px] mx-auto bg-white rounded-lg drop-shadow-2xl ${padding} ${margin}`}>
      <form ref={form} onSubmit={sendEmail}>
        <div className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Nombre completo"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          <input
            type="text"
            name="user_city"
            placeholder="Ciudad"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Correo electrónico"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Teléfono de contacto"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Mensaje breve"
            rows="4"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-red-500 text-white w-full py-2 rounded-md text-lg"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
