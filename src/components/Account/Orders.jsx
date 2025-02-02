import React from "react";

const Orders = () => {
  const orders = [
    {
      id: "LC25874569871365",
      date: "Enero 15, 2025",
      status: "Pendiente",
      total: "$ 19.693",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      id: "LC25874569871365",
      date: "Enero 15, 2025",
      status: "Cancelado",
      total: "$ 19.693",
      color: "bg-red-100 text-red-700",
    },
    {
      id: "LC25874569871365",
      date: "Enero 15, 2025",
      status: "Confirmado",
      total: "$ 19.693",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "LC25874569871365",
      date: "Enero 15, 2025",
      status: "Completado",
      total: "$ 19.693",
      color: "bg-green-100 text-green-700",
    },
  ];

  return (
    <div className="w-full mx-auto my-8 px-8 text-left ">
      <h2 className="text-2xl font-bold text-lacampana-gray1 mb-6 font-antonio">
        Mis pedidos
      </h2>
      <p className="text-gray-600 text-lg mb-10">
        Revisa el estado de tus pedidos y los detalles de compras anteriores.
      </p>

      <table className="w-[900px] text-left">
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
            <tr key={index} className="">
              <td className="p-4 font-antonio text-center">{order.id}</td>
              <td className="p-4 font-antonio text-center">{order.date}</td>
              <td className="p-4 font-antonio text-center">
                <span
                  className={`px-20 py-1 rounded-lg text-xl text-center ${order.color}`}
                >
                  {order.status}
                </span>
              </td>
              <td className="p-4 font-antonio text-center">{order.total}</td>
              <td className="p-4">
                <button className="btn btn-outline pl-20 pr-20 text-lacampana-red1 text-center border-lacampana-red1 text-lg px-2 py-1 rounded-tl-full rounded-bl-full rounded-tr-full w-full max-w-xs mx-auto">
                  Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
