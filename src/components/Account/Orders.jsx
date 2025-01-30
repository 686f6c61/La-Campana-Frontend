import React from "react";

const Orders = () => {
  return (
    <div className="w-full mx-auto my-8 px-8 text-left">
      <h2 className="text-lg font-bold text-gray-700">Mis pedidos</h2>
      <p className="text-gray-600 text-base mb-6">
        Revisa el estado de tus pedidos y los detalles de compras anteriores.
      </p>

      <table className="w-full border-collapse border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-4">Número de orden</th>
            <th className="border border-gray-300 p-4">Fecha de compra</th>
            <th className="border border-gray-300 p-4">Estado del pedido</th>
            <th className="border border-gray-300 p-4">Total</th>
            <th className="border border-gray-300 p-4">Detalles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-4">LC25874569871365</td>
            <td className="border border-gray-300 p-4">Enero 15, 2025</td>
            <td className="border border-gray-300 p-4 text-yellow-500">
              Pendiente
            </td>
            <td className="border border-gray-300 p-4">$ 19.693</td>
            <td className="border border-gray-300 p-4 text-red-500 underline cursor-pointer">
              Ver
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
