import React, { useState } from "react";

const PaymentMethod = () => { const [methods, setMethods] = useState([ { id: 1, metodo: "Visa terminada en 3887", expira: "11/2025" }, { id: 2, metodo: "MasterCard terminada en 1234", expira: "05/2026" }, ]);

const [newMethod, setNewMethod] = useState({ metodo: "", expira: "" }); const [hoveredId, setHoveredId] = useState(null);

const handleAddMethod = (e) => { e.preventDefault(); if (newMethod.metodo && newMethod.expira) { setMethods([...methods, { id: methods.length + 1, ...newMethod }]); setNewMethod({ metodo: "", expira: "" }); } else { alert("Por favor, completa todos los campos."); } };

const handleDeleteMethod = (id) => { setMethods(methods.filter((method) => method.id !== id)); };

return ( <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md"> <h2 className="text-2xl font-bold text-lacampana-gray1 mb-6 font-antonio text-left"> Métodos de pago </h2>

<div className="md:transform md:-translate-x-10">
    <table className="w-full md:w-[800px] border-collapse">
      <thead>
        <tr className="bg-lacampana-gray1 text-lacampana-white font-antonio">
          <th className="py-2 px-4 text-left">Método</th>
          <th className="py-2 px-4 text-left">Expira</th>
          <th className="py-2 px-4 text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {methods.map((method) => (
          <tr 
            key={method.id} 
            onMouseEnter={() => setHoveredId(method.id)} 
            onMouseLeave={() => setHoveredId(null)}
          >
            <td className="py-2 px-4 text-left">{method.metodo}</td>
            <td className="py-2 px-4 text-left">{method.expira}</td>
            <td className="py-2 px-4 text-left flex items-center gap-2">
              {hoveredId === method.id && (
                <button
                  className="btn btn-outline text-lacampana-red1 border-lacampana-red1 font-montserrat text-sm px-4 py-1 w-[90px] h-[36px] rounded-tl-full rounded-bl-full rounded-tr-full"
                  onClick={() => handleDeleteMethod(method.id)}
                >
                  Borrar
                </button>
              )}
              <button className="btn bg-lacampana-gray1 text-white border-none text-sm transform font-montserrat px-6 py-1 w-[90px] h-[36px] rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-lacampana-gray1">
                Editar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="mt-6 flex">
      <button className="bg-lacampana-red2 font-montserrat text-white w-[270px] h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-lg">
        Agregar método de pago
      </button>
    </div>
  </div>
</div>

); };

export default PaymentMethod;


