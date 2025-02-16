import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateAddress = () => {
  const { addressId } = useParams();
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    name: "",
    address: "",
    postalCode: "",
    country: "",
    email: "",
  });

  useEffect(() => {
    const storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    if (storedAddresses[addressId]) {
      setAddress(storedAddresses[addressId]);
    }
  }, [addressId]);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedAddresses =
      JSON.parse(localStorage.getItem("addresses")) || [];
    updatedAddresses[addressId] = address;
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    navigate("/micuenta/direcciones");
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Actualizar dirección</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Nombre *</label>
            <input
              type="text"
              name="name"
              value={address.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Dirección *</label>
            <input
              type="text"
              name="address"
              value={address.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Código Postal *</label>
            <input
              type="text"
              name="postalCode"
              value={address.postalCode}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">País *</label>
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700">Correo electrónico *</label>
            <input
              type="email"
              name="email"
              value={address.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-lacampana-red1 text-white px-6 py-2 rounded-full mt-4"
        >
          Guardar cambios
        </button>
      </form>
    </div>
  );
};

export default UpdateAddress;
