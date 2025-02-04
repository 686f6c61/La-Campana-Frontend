import React, { useState } from "react";

const PaymentMethod = () => {
  const [methods, setMethods] = useState([
    { id: 1, metodo: "Visa terminada en 3887", expira: "11/2025" },
    { id: 2, metodo: "MasterCard terminada en 1234", expira: "05/2026" },
  ]);

  const [newMethod, setNewMethod] = useState({ metodo: "", expira: "" });

  const handleAddMethod = (e) => {
    e.preventDefault();
    if (newMethod.metodo && newMethod.expira) {
      setMethods([...methods, { id: methods.length + 1, ...newMethod }]);
      setNewMethod({ metodo: "", expira: "" });
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  const handleDeleteMethod = (id) => {
    setMethods(methods.filter((method) => method.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-6">Métodos de pago</h2>

      {/* Tabla de métodos de pago */}
      <table className="w-[800px] border-collapse ">
        <thead>
          <tr className="bg-lacampana-gray1 text-lacampana-white font-antonio">
            <th className="py-2 px-4 text-left">Método</th>
            <th className="py-2 px-4 text-left">Expira</th>
            <th className="py-2 px-4 text-center"></th>
            <th className="py-2 px-4 text-center"></th>
          </tr>
        </thead>
        <tbody>
          {methods.map((method) => (
            <tr key={method.id}>
              <td className="py-2 px-4 text-left">{method.metodo}</td>
              <td className="py-2 px-4 text-left">{method.expira}</td>
              <td className="py-2 px-4 text-center">
                <div className="flex justify-center gap-4">
                  <button
                    className="btn btn-outline text-lacampana-red1 border-lacampana-red1 text-sm md:text-xl  rounded-tl-full rounded-bl-full rounded-tr-full w-full"
                    onClick={() => handleDeleteMethod(method.id)}
                  >
                    Borrar
                  </button>
                  <button className="btn bg-lacampana-gray1 text-white border-none text-sm md:text-xl  rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-lacampana-gray1">
                    Editar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="bg-lacampana-red2 font-montserrat text-white md:w-[270px] w-[300px] h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-lg mt-6">
        Agregar método de pago
      </button>
    </div>
  );
};

export default PaymentMethod;
