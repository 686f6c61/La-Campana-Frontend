import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddressCard = ({
  title,
  name,
  address,
  postalCode,
  country,
  email,
  onEdit,
}) => {
  return (
    <div className="border rounded-lg shadow-md p-6 sm:p-8 w-full sm:w-[400px] bg-white">
      <h3 className="text-md sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">
        {title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base mb-2">{name}</p>
      <p className="text-gray-600 text-sm sm:text-base mb-2">{address}</p>
      <p className="text-gray-600 text-sm sm:text-base mb-2">{postalCode}</p>
      <p className="text-gray-600 text-sm sm:text-base mb-2">{country}</p>
      <p className="text-gray-600 text-sm sm:text-base mb-4">{email}</p>
      <button
        className="border border-lacampana-red1 text-lacampana-red1 text-sm sm:text-base px-4 sm:px-6 py-2 hover:bg-white transition rounded-tl-full rounded-bl-full rounded-tr-full w-full"
        onClick={onEdit}
      >
        Actualizar dirección
      </button>
    </div>
  );
};

const Addresses = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState(() => {
    const savedAddresses = localStorage.getItem("addresses");
    return savedAddresses
      ? JSON.parse(savedAddresses)
      : [
          {
            title: "Dirección por defecto",
            name: "Nombre de empresa o cliente",
            address: "Calle 16 4-25, Bogotá D.C.",
            postalCode: "110001",
            country: "Colombia",
            email: "correo@correo.com",
          },
          {
            title: "Dirección de envío",
            name: "Nombre de empresa o cliente",
            address: "Calle 16 4-25, Bogotá D.C.",
            postalCode: "110001",
            country: "Colombia",
            email: "correo@correo.com",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  return (
    <div className="max-w-5xl mx-auto my-6 sm:my-8 px-4 sm:px-12 text-left">
      <h2 className="text-xl sm:text-2xl font-bold text-lacampana-gray1 mb-4 sm:mb-6 font-antonio">
        Direcciones
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-20 text-lg font-bold text-lacampana-gray1 mb-6 font-antonio">
        {addresses.map((address, index) => (
          <AddressCard
            key={index}
            {...address}
            onEdit={() => navigate(`/micuenta/direcciones/editar/${index}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Addresses;
