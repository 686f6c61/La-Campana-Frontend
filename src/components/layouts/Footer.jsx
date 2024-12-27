import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { PiInstagramLogoThin } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { PiTiktokLogoThin } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { PiPhoneCallThin } from "react-icons/pi";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const cards = Array(8).fill({
    name: "Cindy Guarin",
    phone: "+57 310 788 9926",
    location: "Bogotá",
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl text-white hover:text-gray-400"
      >
        &times; {/* The "X" symbol */}
      </button>
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[239px] h-[222px] border rounded-tl-lg p-4 bg-lacampana-gray4 text-center shadow-md"
          >
            <h2 className="text-xl mt-2 text-left font-antonio font-bold text-lacampana-red1">
              {card.name}
            </h2>
            <p className="text-sm mt-2 text-left text-black">{card.phone}</p>
            <p className="text-sm mt-2 text-left text-black pb-2">
              {card.location}
            </p>

            <div className="space-y-2">
              <button className="flex items-center justify-start w-full text-black border border-black py-2 pl-2 rounded-md">
                <FaWhatsapp className="mr-2 text-xl" /> Escribir por WhatsApp
              </button>
              <button className="flex items-center justify-start w-full text-black border border-black py-2 pl-2 rounded-md">
                <HiOutlineMail className="mr-2 text-lacampana-red1 text-xl" />{" "}
                Escribir un correo
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={onClose}
          className="mt-4 col-span-4 text-sm text-gray-600 hover:underline"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <footer className="w-full bg-lacampana-red2 text-white ">
      <div className="bg-lacampana-white text-black py-6 pr-20 ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-6 gap-y-2 text-sm pl-20 pr-20">
          {/* Empresa Section */}
          <div className="pl-10">
            <img
              src="/images/logoSilhouette.png"
              alt="logoSilhouette"
              className="w-12 h-12"
            />
            <p className="text-left pt-10 pb-1 text-lg w-60">
              ¿Tienes alguna pregunta?{" "}
            </p>
            <p className="text-left font-bold pb-4">PBX: (601) 370.22.00</p>

            <p className="text-left text-sm w-60 pb-4">
              Lorem ipsum dolor sit amet consectetur. Etiam id enim diam
              sollicitudin ut molestie velit
            </p>
            <div className="flex space-x-3 mt-2 w-80">
              <PiYoutubeLogoThin className="text-3xl text-lacampana-red1" />
              <PiInstagramLogoThin className="text-3xl text-lacampana-gray1" />
              <PiTiktokLogoThin className="text-3xl text-lacampana-gray1" />
              <SlSocialFacebook className="text-2xl custom-icon text-lacampana-gray1" />

              <SlSocialLinkedin className="text-2xl text-lacampana-gray1" />
              <PiPhoneCallThin className="text-2xl text-lacampana-gray1" />
            </div>
          </div>

          {/* Empresa Section */}
          <div className="pl-9">
            <h3 className="font-antonio font-bold text-lacampana-red1 mb-2 text-lg text-left pt-8 pb-3">
              Empresa
            </h3>
            <ul>
              <p className="text-left pb-4 pl-2">Servicios</p>
              <p className="text-left pb-4 pl-2">Nosotros</p>
              <p className="text-left pb-4 pl-2">Blog</p>
              <p className="text-left pb-4 pl-2">Documentos</p>
              <p className="text-left pb-4 pl-2">Contacto</p>
            </ul>
          </div>

          {/* Mi Cuenta Section */}
          <div className="pl-0">
            <h3 className="font-antonio font-bold text-lacampana-red1 mb-2 text-lg text-left pt-8 pb-3">
              Mi Cuenta
            </h3>
            <ul>
              <p className="text-left pb-4 pl-2">Seguimiento de pedidos</p>
              <p className="text-left pb-4 pl-2">Ver el carrito</p>
              <p className="text-left pb-4 pl-2">Iniciar sesión</p>
              <p className="text-left pb-4 pl-2">Mi lista de deseos</p>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="pl-1">
            <h3 className="font-antonio font-bold text-lacampana-red1 mb-2 text-lg text-left pt-8 pb-3">
              Legal
            </h3>
            <ul>
              <p className="text-left pb-4 pl-2">Términos y condiciones</p>
              <p className="text-left pb-4 pl-2">Métodos de pago</p>
              <p className="text-left pb-4 pl-2">Devolución de producto</p>
              <p className="text-left pb-4 pl-2">Envío</p>
              <p className="text-left pb-4 pl-2">Política de privacidad</p>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-80">
            <h3 className="font-antonio font-bold text-lacampana-red1 mb-2 text-lg text-left pt-8 pb-3">
              Newsletter
            </h3>

            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="p-2 text-black rounded-md"
              />
              <button className="bg-lacampana-red2 font-montserrat text-white w-[270px] h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-lg">
                Suscribirme
              </button>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 mt-2 " />
                <p className="text-sm pt-3">
                  He leído y acepto la política de privacidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 pt-5 pb-5">
        {/* Texto del copyright */}
        <p className="text-sm text-center md:text-left text-lacampana-white pt-2">
          Copyright © La Campana Servicios de Acero. Todos los derechos
          reservados.
        </p>

        {/* Botones */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Botón Sedes */}
          <button className="btn btn-secondary bg-white text-red-600 text-lg px-4 py-2 pr-8 pl-8 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-gray-100">
            Sedes
          </button>

          {/* Botón Hablar con un asesor */}
          <button
            className="btn btn-outline text-white border-white text-lg px-4 py-2 pr-8 pl-8 rounded-tl-full rounded-bl-full rounded-tr-full "
            onClick={handleOpenModal}
          >
            Hablar con un asesor
          </button>

          {/* Botón Solicitar crédito */}
          <button className="btn bg-lacampana-gray1 text-white text-lg px-4 py-2 pr-8 pl-8 rounded-tl-full rounded-bl-full rounded-tr-full border-none ">
            Solicitar crédito
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </footer>
  );
};

export default Footer;
