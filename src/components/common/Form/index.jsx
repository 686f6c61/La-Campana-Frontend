import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import RadioSelect from "../../common/RadioSelect"; 


const ContactForm = ({ origin = "", padding = "p-8", margin = "my-4", title }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_city: "",
    user_email: "",
    user_phone: "",
    message: "",
    origin: "",
    policyAccepted: false,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handlePolicySelection = (value) => {
    setFormData({ ...formData, policyAccepted: value === "accepted" });
  };


  const sendEmail = (e) => {
    e.preventDefault();


    if (!formData.policyAccepted) {
      alert("Debes aceptar la política de tratamiento de datos personales.");
      return;
    }


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
      {title && (
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold font-antonio leading-snug">{title}</h2>
        </div>
      )}


      <form ref={form} onSubmit={sendEmail}>
        <input type="hidden" name="origin" value={origin} />


        <div className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Nombre completo"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
            onChange={handleChange}
          />
          <input
            type="text"
            name="user_city"
            placeholder="Ciudad"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
            onChange={handleChange}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Correo electrónico"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Teléfono de contacto"
            required
            pattern="[0-9]{8,}"
            title="Debe contener al menos 8 dígitos numéricos"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Mensaje breve"
            rows="4"
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
            onChange={handleChange}
          ></textarea>


          {/* Política de datos con RadioSelect */}
          <RadioSelect
            options={[
              {
                label: (
                  <> <p className="text-xs text-lacampana-gray2">He leído y acepto la politica de tratamiento de datos personales </p>
                   
                  </>
                ),
                value: "accepted",
              },
            ]}
            selectedOption={formData.policyAccepted ? "accepted" : ""}
            onSelectionChange={handlePolicySelection}
            textColor="text-lacampana-gray1"
            bgColor="lacampana-red2"
            labelClassName="text-sm"
          />


          {/* Botón alineado a la izquierda */}
          <div className="pt-4 text-left">
            <button
              type="submit"
              className="bg-lacampana-red1 text-lacampana-white px-12 py-2 text-sm sm:text-base font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full border border-lacampana-red1 hover:bg-white hover:text-lacampana-red1 hover:border-lacampana-red1 transition duration-300 ease-in-out hover:scale-90"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default ContactForm;
