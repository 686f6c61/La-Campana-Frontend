import React, { useState } from "react";
import { HiOutlineMail, HiOutlineChatAlt2 } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

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
    <footer className="w-full bg-lacampana-red2 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Texto del copyright */}
        <p className="text-sm text-center md:text-left text-lacampana-white">
          Copyright © La Campana Servicios de Acero. Todos los derechos
          reservados.
        </p>

        {/* Botones */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Botón Sedes */}
          <button className="btn btn-secondary bg-white text-red-600 font-medium px-4 py-2 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-gray-100">
            Sedes
          </button>

          {/* Botón Hablar con un asesor */}
          <button
            className="btn btn-outline text-white border-white font-medium px-4 py-2 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-red-700"
            onClick={handleOpenModal}
          >
            Hablar con un asesor
          </button>

          {/* Botón Solicitar crédito */}
          <button className="btn bg-gray-800 text-white font-medium px-4 py-2 rounded-tl-full rounded-bl-full rounded-tr-full border-none hover:bg-gray-700">
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
