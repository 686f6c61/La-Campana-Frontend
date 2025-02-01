import React, { useState } from "react";

const Addresses = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    empresa: "",
    telefono: "",
    direccion: "",
    complemento: "",
    pais: "Colombia",
    departamento: "",
    ciudad: "",
    codigoPostal: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos actualizados:", formData);
    alert("Dirección actualizada exitosamente");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-6">
        Actualizar dirección
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        {/* Información de contacto */}
        <div>
          <h3 className="text-gray-700 font-semibold mb-4">
            Información de contacto
          </h3>
          <div className="mb-4">
            <label className="block text-gray-600">Nombre *</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Apellidos *</label>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Empresa</label>
            <input
              type="text"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">
              Teléfono de contacto *
            </label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Dirección */}
        <div>
          <h3 className="text-gray-700 font-semibold mb-4">Dirección</h3>
          <div className="mb-4">
            <label className="block text-gray-600">Dirección *</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Complemento</label>
            <input
              type="text"
              name="complemento"
              value={formData.complemento}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">País *</label>
            <select
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            >
              <option value="Colombia">Colombia</option>
              <option value="Argentina">Argentina</option>
              <option value="México">México</option>
              <option value="Chile">Chile</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Departamento *</label>
            <input
              type="text"
              name="departamento"
              value={formData.departamento}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Ciudad *</label>
            <input
              type="text"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Código postal *</label>
            <input
              type="text"
              name="codigoPostal"
              value={formData.codigoPostal}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Botón de actualizar */}
        <div className="col-span-2 text-center mt-6">
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition"
          >
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addresses;
