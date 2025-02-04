import React from "react";

const AddressCard = ({ title, name, address, postalCode, country, email }) => {
  return (
    <div className="border rounded-lg shadow-md p-8 w-[400px] bg-white">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
      <p className="text-gray-600 mb-2">{name}</p>
      <p className="text-gray-600 mb-2">{address}</p>
      <p className="text-gray-600 mb-2">{postalCode}</p>
      <p className="text-gray-600 mb-2">{country}</p>
      <p className="text-gray-600 mb-4">{email}</p>
      <button className="border border-lacampana-red1 text-lacampana-red1 px-6 py-2 hover:bg-white transition rounded-tl-full rounded-bl-full rounded-tr-full w-full">
        Actualizar dirección
      </button>
    </div>
  );
};

const Addresses = () => {
  return (
    <div className="max-w-7xl mx-auto my-8 px-12 text-left">
      <h2 className="text-2xl font-bold text-lacampana-gray1 mb-6 font-antonio">
        Direcciones
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-60 text-xl font-bold text-lacampana-gray1 mb-6 font-antonio">
        <AddressCard
          title="Dirección por defecto"
          name="Nombre de empresa o cliente"
          address="Calle 16 4-25, Bogotá D.C."
          postalCode="110001"
          country="Colombia"
          email="correo@correo.com"
        />
        <AddressCard
          title="Dirección de envío"
          name="Nombre de empresa o cliente"
          address="Calle 16 4-25, Bogotá D.C."
          postalCode="110001"
          country="Colombia"
          email="correo@correo.com"
        />
      </div>
    </div>
  );
};

export default Addresses;
