import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCarousel = ({ orders }) => {
  const navigate = useNavigate();

  return (
    <div className="md:hidden flex overflow-x-scroll space-x-4 p-4">
      {orders.map((order, index) => (
        <div
          key={index}
          className="min-w-[180px] bg-white  p-4 flex flex-col items-center"
        >
          <p className="font-bold text-lg text-center border-b-1 border-b-[1px] border-lacampana-gray3 pb-2">{order.id}</p>
          <p className="text-gray-600 pb-2 pt-2 border-b-[1px] border-lacampana-gray3 w-full">{order.date}</p>
          <span className={`px-6 py-1  pb-2 pt-2 rounded-lg text-lg text-center border-b-[1px] border-lacampana-gray3 w-full ${order.color}`}>
            {order.status}
          </span>
          <p className="font-antonio text-xl mt-0  border-b-[1px] border-lacampana-gray3 w-full pb-2">{order.total}</p>
          <button
            onClick={() => navigate(`/micuenta/pedidos/${order.id}`)}
            className="mt-4 pl-8 pr-8 btn btn-outline px-6 py-1 text-lacampana-red1 border-lacampana-red1 text-lg rounded-tl-full rounded-bl-full rounded-tr-full w-full text-center w-auto"
          >
            Ver
          </button>
        </div>
      ))}
    </div>
  );
};

export default OrderCarousel;
