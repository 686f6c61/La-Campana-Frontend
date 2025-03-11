import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

//team help

const ContactForm = ({ origin="", padding = "p-8", margin = "my-4" }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_city: "",
    user_email: "",
    user_phone: "",
    message: "",
    origin: "",
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
        import.meta.env.VITE_SERVICE_ID,   
        import.meta.env.VITE_TEMPLATE_ID,  
        form.current,
        import.meta.env.VITE_PUBLIC_KEY

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

      <input type="hidden" name="origin" value={origin} />



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
            className="mt-8 bg-lacampana-red1 text-lacampana-white px-8 py-2 text-sm sm:text-base font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full w-auto md:w-auto relative z-10 border border-lacampana-red1 hover:bg-white hover:text-lacampana-red1 hover:border-lacampana-red1 transition duration-300 ease-in-out"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;