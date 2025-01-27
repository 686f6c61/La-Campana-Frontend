import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Social from "../common/Social";

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
      <div className="relative p-4 h-screen overflow-y-auto">
        {/* Big screens */}
        <div className="hidden lg:grid grid-cols-4 gap-x-4 gap-y-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full h-auto border rounded-tl-lg p-4 bg-lacampana-gray4 text-center shadow-md"
            >
              <h2 className="text-lg mt-2 text-left font-antonio font-bold text-lacampana-red1">
                {card.name}
              </h2>
              <p className="text-sm mt-2 text-left text-black">{card.phone}</p>
              <p className="text-sm mt-2 text-left text-black pb-2">
                {card.location}
              </p>

              <div className="space-y-2">
                <button className="flex items-center justify-start w-full text-black border border-black py-2 pl-2 rounded-tl-full rounded-bl-full rounded-tr-full">
                  <FaWhatsapp className="mr-2 text-xl" /> WhatsApp
                </button>
                <button className="flex items-center justify-start w-[180px] text-black border border-black py-2 pl-2 rounded-tl-full rounded-bl-full rounded-tr-full">
                  <HiOutlineMail className="mr-2 text-lacampana-red1 text-xl" />{" "}
                  Escribir un correo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Small screens */}
        <div className="block lg:hidden">
          {Array.from({ length: cards.length / 2 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 gap-x-4 gap-y-4 mb-4"
            >
              {cards
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((card, index) => (
                  <div
                    key={index}
                    className="w-full h-auto border rounded-tl-lg p-4 bg-lacampana-gray4 text-center shadow-md"
                  >
                    <h2 className="text-lg mt-2 text-left font-antonio font-bold text-lacampana-red1">
                      {card.name}
                    </h2>
                    <p className="text-sm mt-2 text-left text-black">
                      {card.phone}
                    </p>
                    <p className="text-sm mt-2 text-left text-black pb-2">
                      {card.location}
                    </p>

                    <div className="space-y-2">
                      <button className="flex items-center justify-start w-[170px] text-black border border-black py-2 pl-2 rounded-tl-full rounded-bl-full rounded-tr-full">
                        <FaWhatsapp className="mr-2 text-xl" /> WhatsApp
                      </button>
                      <button className="flex items-center justify-start w-[170px] text-black border border-black py-2 pl-2 rounded-tl-full rounded-bl-full rounded-tr-full">
                        <HiOutlineMail className="mr-2 text-lacampana-red1 text-xl" />{" "}
                        Escribir un correo
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

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

  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <footer className="w-full bg-lacampana-red2 text-white md:mt-20">
      <div className="bg-lacampana-white text-black py-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-6 gap-y-2 px-6 text-sm md:px-20">
          {/* Empresa Section */}
          <div className="pl-4 md:pl-10">
            <img
              src="/images/logoSilhouette.png"
              alt="logoSilhouette"
              className="w-12 h-12"
            />
            <Social
              question="¿Necesitas ayuda?"
              phone="PBX: (601) 555.55.55"
              description="Contáctanos para obtener más información sobre nuestros productos y servicios."
              containerPadding="pt-8 pb-4"
              iconsSize="text-xl"
            />
          </div>

          {/* Línea divisora */}
          <div className="border-t border-lacampana-gray3  sm:hidden"></div>

          {/* Empresa Section */}

          <div className="md:pl-9 hidden md:block">
            <h3 className="font-antonio font-bold text-lacampana-red1 mb-2 text-lg text-left pt-8 pb-3">
              Empresa
            </h3>
            <ul>
              <p className="text-left pb-4 pl-2">
                <Link to="/servicios">Servicios</Link>
              </p>
              <p className="text-left pb-4 pl-2">
                <Link to="/nosotros" className="text-lacampana-gray1">
                  Nosotros
                </Link>
              </p>
              <p className="text-left pb-4 pl-2">
                <Link to="/blog">Blog</Link>
              </p>
              <p className="text-left pb-4 pl-2">
                <Link to="/documentos" className="text-lacampana-gray1">
                  Documentos
                </Link>
              </p>
              <p className="text-left pb-4 pl-2">
                <Link to="/contacto" className="text-lacampana-gray1">
                  Contacto
                </Link>
              </p>
            </ul>
          </div>

          {/* Mi Cuenta Section */}
          <div className="md:pl-0 hidden md:block">
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

          <div className="block md:hidden grid grid-cols-2 gap-4">
            {/* Empresa Section */}
            <div>
              <h3 className="font-antonio font-bold text-lacampana-red1 mb-2 text-lg text-left pt-8 pb-3">
                Empresa
              </h3>
              <ul>
                <p className="text-left pb-4 pl-2">Servicios</p>
                <p className="text-left pb-4 pl-2">
                  <Link to="/nosotros" className="text-lacampana-gray1">
                    Nosotros
                  </Link>
                </p>
                <p className="text-left pb-4 pl-2">Blog</p>
                <p className="text-left pb-4 pl-2">
                  <Link to="/documentos" className="text-lacampana-gray1">
                    Documentos
                  </Link>
                </p>
                <p className="text-left pb-4 pl-2">
                  <Link to="/contacto" className="text-lacampana-gray1">
                    Contacto
                  </Link>
                </p>
              </ul>
            </div>

            {/* Mi Cuenta Section */}
            <div>
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
          </div>

          {/* Línea divisora */}
          <div className="border-t border-lacampana-gray3  sm:hidden"></div>

          {/* Legal Section */}
          <div className="pl-1">
            <div
              className="flex justify-between items-center font-antonio font-bold text-lacampana-gray1 mb-0 text-lg text-left md:pt-8 md:pb-3 cursor-pointer sm:cursor-default"
              onClick={() => setIsLegalOpen(!isLegalOpen)}
            >
              <h3 className="font-antonio font-bold text-lacampana-red1 mb-0 md:mb-1 text-lg text-left  md:pt-1 md:pb-0 pb-3">
                Legal
              </h3>
              <IoIosArrowDown
                className={`text-xl transform transition-transform duration-300 ${
                  isLegalOpen ? "rotate-180" : "rotate-0"
                } sm:hidden`}
              />
            </div>
            {/* List as accordion on small screens */}
            <ul
              className={`${
                isLegalOpen ? "block" : "hidden"
              } sm:block text-left`}
            >
              <p className="text-left pb-4 pl-2">Términos y condiciones</p>
              <p className="text-left pb-4 pl-2">Métodos de pago</p>
              <p className="text-left pb-4 pl-2">Devolución de producto</p>
              <p className="text-left pb-4 pl-2">Envío</p>
              <p className="text-left pb-4 pl-2">Política de privacidad</p>
            </ul>
          </div>

          {/* Línea divisora */}
          <div className="border-t border-lacampana-gray3  sm:hidden"></div>

          {/* Newsletter Section */}
          <div className="w-80">
            <h3 className="font-antonio font-bold text-lacampana-red1 mb-2 text-lg text-left pt-8 pb-3">
              Newsletter
            </h3>

            <div className="flex flex-col space-y-4 pl-10 md:pl-0">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="p-2 text-lacampana-white pl-4 text-lg md:w-[270px] w-[300px] h-[44px] rounded-tl-full rounded-bl-full rounded-tr-full"
              />
              <button className="bg-lacampana-red2 font-montserrat text-white md:w-[270px] w-[300px] h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-lg">
                Suscribirme
              </button>
              <div className="flex items-center w-[400px]">
                <input type="checkbox" className="mr-2 mt-2 " />
                <p className="text-xs pt-3">
                  He leído y acepto la política de privacidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 pt-5 pb-5">
        {/* Texto del copyright */}
        <p className="md:text-sm  text-sm md:text-base text-center md:text-left text-lacampana-white pt-2 pb-2 md:pl-4 md:pl-12">
          Copyright © La Campana Servicios de Acero. Todos los derechos
          reservados.
        </p>

        {/* Botones para pantallas grandes */}
        <div className="hidden sm:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          {/* Botón Sedes */}
          <button className="btn btn-secondary bg-white text-lacampana-red2 font-semibold text-sm md:text-xl px-4 py-2 pr-6 md:pr-12 pl-6 md:pl-12 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-white">
            Sedes
          </button>

          {/* Botón Hablar con un asesor */}
          <button
            className="btn btn-outline text-white border-white text-sm md:text-xl px-4 py-2 pr-6 md:pr-12 pl-6 md:pl-12 rounded-tl-full rounded-bl-full rounded-tr-full w-full md:w-auto"
            onClick={handleOpenModal}
          >
            Hablar con un asesor
          </button>

          {/* Botón Solicitar crédito */}
          <button className="btn bg-lacampana-gray1 text-white border-none text-sm md:text-xl px-4 py-2 pr-6 md:pr-12 pl-6 md:pl-12 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-lacampana-gray1">
            Solicitar crédito
          </button>
        </div>

        {/* Botones para pantallas pequeñas */}
        <div className="flex flex-col space-y-2 sm:hidden">
          {/* Contenedor para los primeros dos botones */}
          <div className="flex justify-center space-x-4">
            {/* Botón Sedes */}
            <button className="btn btn-secondary w-[100px] h-[44px] bg-white text-lacampana-red2 font-semibold text-lg px-2 py-1 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-white">
              Sedes
            </button>

            {/* Botón Solicitar crédito */}
            <button className="btn bg-lacampana-gray1 w-[180px] h-[44px] text-white border-none text-lg px-2 py-1 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-lacampana-gray1">
              Solicitar crédito
            </button>
          </div>

          {/* Botón Hablar con un asesor */}
          <button
            className="btn btn-outline w-[300px] h-[44px] text-white border-white text-lg px-2 py-1 rounded-tl-full rounded-bl-full rounded-tr-full w-full max-w-xs mx-auto"
            onClick={handleOpenModal}
          >
            Hablar con un asesor
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </footer>
  );
};

export default Footer;
