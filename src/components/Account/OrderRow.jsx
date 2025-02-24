import React from "react";
import { useNavigate } from "react-router-dom";

const OrderRow = ({ order }) => {
  const navigate = useNavigate();

  return (
    <tr className="border-b">
      <td className="p-4 font-open-sans text-center text-xl">{order.id}</td>
      <td className="p-4 font-open-sans text-center">{order.date}</td>
      <td className="p-4 font-open-sans text-center">
        <span className={`px-6 py-1 rounded-lg text-xl text-center ${order.color}`}>
          {order.status}
        </span>
      </td>
      <td className="p-4 font-antonio text-center text-xl">{order.total}</td>
      <td className="p-4">
        <button
          onClick={() => navigate(`/micuenta/pedidos/${order.id}`)}
          className="btn btn-outline px-6 py-1 text-lacampana-red1 border-lacampana-red1 text-lg rounded-tl-full rounded-bl-full rounded-tr-full w-full max-w-xs mx-auto"
        >
          Ver
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
