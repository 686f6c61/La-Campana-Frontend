import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import RadioSelect from "../../common/RadioSelect";

const ContactForm = ({ origin = "", title }) => {
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
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        () => alert("Mensaje enviado correctamente"),
        (error) => console.error("Error al enviar:", error)
      );
  };

  return (
    <div className="flex flex-col w-full pl-32">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold font-antonio text-lacampana-gray1 mb-6 text-start">
        {title}
      </h2>
      )}

      <div
        className="flex w-[90%] md:w-[420px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] p-6 mb-20 items-center"
      >
        <form ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="origin" value={origin} />

          <div className="space-y-4">
            {[
              { name: "user_name", placeholder: "Nombre completo", type: "text" },
              { name: "user_city", placeholder: "Ciudad", type: "text" },
              { name: "user_email", placeholder: "Correo electrónico", type: "email" },
              {
                name: "user_phone",
                placeholder: "Teléfono de contacto",
                type: "tel",
                pattern: "[0-9]{8,}",
                title: "Debe contener al menos 8 dígitos numéricos",
              },
            ].map((field) => (
              <input
                key={field.name}
                {...field}
                required
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg p-3 text-sm placeholder-gray-400 focus:ring-2 focus:ring-lacampana-red1 focus:outline-none"
              />
            ))}

            <textarea
              name="message"
              placeholder="Mensaje breve"
              rows="4"
              required
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg p-3 text-sm placeholder-gray-400 focus:ring-2 focus:ring-lacampana-red1 focus:outline-none"
            ></textarea>

            <RadioSelect
              options={[
                {
                  label: (
                    <p className="text-xs text-lacampana-gray2 text-start">
                      He leído y acepto la política de tratamiento de datos personales
                    </p>
                  ),
                  value: "accepted",
                },
              ]}
              selectedOption={formData.policyAccepted ? "accepted" : "denegado"}
              borderColorSelected="border-lacampana-red2"
              onSelectionChange={handlePolicySelection}
              bgColorSelected="bg-lacampana-red2"
              labelClassName="text-sm"
            />

            <div className="pt-3 text-left">
              <button
                type="submit"
                className="bg-lacampana-red1 text-white px-10 py-2 text-sm font-montserrat rounded-full border border-lacampana-red1 hover:bg-white hover:text-lacampana-red1 transition duration-300 ease-in-out hover:scale-95"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
