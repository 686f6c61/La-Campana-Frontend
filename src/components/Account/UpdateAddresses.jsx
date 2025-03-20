import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateAddress = () => {
  const { addressId } = useParams();
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    id: "",
    name: "",
    lastname: "",
    company: "",
    phone: "",
    streetAddress: "",
    complement: "",
    country: "",
    department: "",
    city: "",
    postalCode: "",
  });

  // Opciones para selects
  const countries = ["Colombia", "Argentina", "México"];
  const departments = {
    Colombia: ["Antioquia", "Cundinamarca", "Santander"],
    Argentina: ["Buenos Aires", "Córdoba", "Santa Fe"],
    México: ["CDMX", "Jalisco", "Nuevo León"],
  };
  const cities = {
    Antioquia: ["Medellín", "Envigado", "Bello"],
    Cundinamarca: ["Bogotá", "Soacha", "Zipaquirá"],
    Santander: ["Bucaramanga", "Floridablanca", "Girón"],
    "Buenos Aires": ["La Plata", "Mar del Plata", "Tigre"],
    Córdoba: ["Villa Carlos Paz", "Río Cuarto", "Alta Gracia"],
    "Santa Fe": ["Rosario", "Santa Fe Capital", "Venado Tuerto"],
    CDMX: ["Azcapotzalco", "Coyoacán", "Iztapalapa"],
    Jalisco: ["Guadalajara", "Tlaquepaque", "Zapopan"],
    "Nuevo León": ["Monterrey", "San Pedro", "Guadalupe"],
  };

  // Cargar la dirección guardada en localStorage
  useEffect(() => {
    const storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
    const foundAddress = storedAddresses.find((addr) => addr.id === addressId);
    if (foundAddress) {
      setAddress(foundAddress);
    }
  }, [addressId]);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let storedAddresses = JSON.parse(localStorage.getItem("addresses")) || [];

    // Buscar si la dirección existe en el array
    const index = storedAddresses.findIndex((addr) => addr.id === addressId);

    if (index !== -1) {
      storedAddresses[index] = address; // Actualizar dirección existente
    } else {
      storedAddresses.push({ ...address, id: addressId || new Date().getTime().toString() });
    }

    localStorage.setItem("addresses", JSON.stringify(storedAddresses));
    navigate("/micuenta/direcciones");
  };

  return (
    <div className="max-w-5xl mx-auto my-8 p-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-lacampana-gray1 mb-6 font-antonio">Actualizar dirección</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {/* Información de Contacto (Columna Izquierda) */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Información de contacto</h3>
            
            <label className="block text-gray-700 font-semibold text-left">Nombre<span className="text-lacampana-red2"> *</span></label>
            <input
              type="text"
              name="name"
              value={address.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              required
            />

            <label className="block text-gray-700 font-semibold text-left">Apellidos<span className="text-lacampana-red2"> *</span></label>
            <input
              type="text"
              name="lastname"
              value={address.lastname}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              required
            />

            <label className="block text-gray-700 font-semibold text-left">Empresa</label>
            <input
              type="text"
              name="company"
              value={address.company}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            />

            <label className="block text-gray-700 font-semibold text-left">Teléfono de contacto *</label>
            <input
              type="text"
              name="phone"
              value={address.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Dirección (Columna Derecha) */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Dirección</h3>

            <label className="block text-gray-700 font-semibold text-left">Dirección<span className="text-lacampana-red2"> *</span></label>
            <input
              type="text"
              name="streetAddress"
              value={address.streetAddress}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              required
            />

            <label className="block text-gray-700 font-semibold text-left">Complemento</label>
            <input
              type="text"
              name="complement"
              value={address.complement}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            />

            <label className="block text-gray-700 font-semibold text-left">País<span className="text-lacampana-red2"> *</span></label>
            <select
              name="country"
              value={address.country}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white mb-4"
              required
            >
              <option value="">Seleccione un país</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <label className="block text-gray-700 font-semibold text-left">Departamento<span className="text-lacampana-red2"> *</span></label>
            <select
              name="department"
              value={address.department}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white mb-4"
              required
              disabled={!address.country}
            >
              <option value="">Seleccione un departamento</option>
              {departments[address.country]?.map((dep) => (
                <option key={dep} value={dep}>
                  {dep}
                </option>
              ))}
            </select>

            <label className="block text-gray-700 font-semibold text-left">Ciudad<span className="text-lacampana-red2"> *</span></label>
            <select
              name="city"
              value={address.city}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white mb-4"
              required
              disabled={!address.department}
            >
              <option value="">Seleccione una ciudad</option>
              {cities[address.department]?.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <label className="block text-gray-700 font-semibold text-left">Código postal<span className="text-lacampana-red2"> *</span></label>
            <input
              type="text"
              name="postalCode"
              value={address.postalCode}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-lacampana-red1 text-white px-8 py-3 rounded-tl-full rounded-bl-full rounded-tr-full mt-6 text-lg hover:bg-red-600 transition-all"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default UpdateAddress;
