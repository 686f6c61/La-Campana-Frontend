import React from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();

  const orders = [
    {
      id: "LC25874569871365",
      date: "Enero 15, 2025",
      status: "Pendiente",
      total: "$ 19.693",
      color: "bg-yellow-200 text-black",
    },
    {
      id: "LC25874569871365",
      date: "Enero 15, 2025",
      status: "Cancelado",
      total: "$ 19.693",
      color: "bg-red-200 text-black",
    },
    {
      id: "LC25874569871365",
      date: "Enero 15, 2025",
      status: "Confirmado",
      total: "$ 19.693",
      color: "bg-blue-200 text-black",
    },
    {
      id: "LC25874569871365",
      date: "Enero 15, 2025",
      status: "Completado",
      total: "$ 19.693",
      color: "bg-green-200 text-black",
    },
  ];

  return (
    <div className="w-full mx-auto my-8 px-4 md:px-8 text-left">
      <h2 className="text-2xl font-bold text-lacampana-gray1 mb-6 font-antonio">
        Mis pedidos
      </h2>
      <p className="text-gray-600 text-lg mb-10">
        Revisa el estado de tus pedidos y los detalles de compras anteriores.
      </p>

      {/* Tabla para pantallas medianas y grandes */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-lacampana-gray1 text-lacampana-white font-antonio">
              <th className="text-xl p-4 text-center">Número de orden</th>
              <th className="text-xl p-4 text-center">Fecha de compra</th>
              <th className="text-xl p-4 text-center">Estado del pedido</th>
              <th className="text-xl p-4 text-center">Total</th>
              <th className="text-xl p-4 text-center">Detalles</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 font-open-sans text-center text-xl">
                  {order.id}
                </td>
                <td className="p-4 font-open-sans text-center">{order.date}</td>
                <td className="p-4 font-open-sans text-center">
                  <span
                    className={`px-6 py-1 rounded-lg text-xl text-center ${order.color}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-4 font-antonio text-center text-xl">
                  {order.total}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => navigate(`/micuenta/pedidos/${order.id}`)}
                    className="btn btn-outline px-6 py-1 text-lacampana-red1 border-lacampana-red1 text-lg rounded-tl-full rounded-bl-full rounded-tr-full w-full max-w-xs mx-auto"
                  >
                    Ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Carrusel para móviles */}
      <div className="md:hidden flex overflow-x-scroll space-x-4 p-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-white border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <p className="font-bold text-lg text-center">Orden: {order.id}</p>
            <p className="text-gray-600">{order.date}</p>
            <span
              className={`px-6 py-1 rounded-lg text-lg text-center ${order.color}`}
            >
              {order.status}
            </span>
            <p className="font-antonio text-xl mt-2">{order.total}</p>
            <button
              onClick={() => navigate(`/micuenta/pedidos/${order.id}`)}
              className="mt-4 btn btn-outline px-6 py-1 text-lacampana-red1 border-lacampana-red1 text-lg rounded-tl-full rounded-bl-full rounded-tr-full w-full text-center"
            >
              Ver
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
