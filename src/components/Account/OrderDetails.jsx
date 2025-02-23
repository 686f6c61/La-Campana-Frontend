import React from "react";
import { useParams } from "react-router-dom";
import ordersData from "../../data/ordersData";

const OrderDetails = () => {
  const { pedidoId } = useParams();
  const order = ordersData.find((o) => o.id === pedidoId);

  if (!order) {
    return (
      <h2 className="text-red-500 text-xl text-center mt-10">
        Pedido no encontrado
      </h2>
    );
  }

  return (
    <div className="p-6 rounded-lg shadow-md bg-white">
      <h2 className=" text-left text-2xl font-bold text-lacampana-gray1 mb-6 font-antonio">
        Detalles del pedido
      </h2>
      <p className="text-gray-600 text-lg mb-10 text-left">
        El pedido <span className="font-bold">{order.id}</span> ha sido
        realizado el <span className="font-bold">{order.date}</span> y está
        actualmente <span className="font-bold">{order.status}</span>.
      </p>

      <table className=" transform -translate-x-14 w-full text-left border-collapse ">
        <thead>
          <tr className="bg-lacampana-gray1 text-lacampana-white font-antonio">
            <th className="text-left md:text-xl text-sm py-3 px-4 border-b md:pr-0 pr-20">Producto</th>
            <th className="text-center md:text-xl text-sm py-3 px-4 border-b">Cantidad</th>
            <th className="text-right md:text-xl text-sm py-3 px-4 border-b">Total</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-3 px-4 font-opens-sans text-lacampana-gray1 md:text-xl text-sm">
                {item.product}
              </td>
              <td className="text-center py-3 px-4 text-lacampana-gray1 md:text-2xl text-sm font-opens-sans">
                {item.quantity}
              </td>
              <td className="text-right py-3 px-4 font-antonio md:text-3xl text-xl text-lacampana-gray1">
                ${item.total.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-lacampana-white ">
            <td className="py-3 px-4 text-left md:text-2xl text-xs text-lacampana-gray1 font-bold">
              Subtotal:
            </td>
            <td></td>
            <td className="text-right px-4 font-antonio md:text-3xl text-xl text-lacampana-gray1">
              ${order.subtotal.toLocaleString()}
            </td>
          </tr>
          <tr className="bg-white  md:text-2xl  text-lacampana-gray1">
            <td className="py-3 px-4 text-left text-xs font-bold">Costo de envío:</td>
            <td></td>
            <td className="text-right px-4 font-antonio md:text-3xl text-xl text-lacampana-gray1">
              ${order.shippingCost.toLocaleString()}
            </td>
          </tr>
          <tr className="bg-white font-bold md:text-2xl text-xs text-lacampana-gray1">
            <td className="py-3 px-4 text-left font-bold">Método de pago:</td>
            <td colSpan="2" className="text-right px-4">
              {order.paymentMethod}
            </td>
          </tr>
          <tr className="bg-lacampana-white ">
            <td className="py-3 px-4 text-left md:text-2xl text-xs text-lacampana-gray1 font-bold">
              Total:
            </td>
            <td></td>
            <td className="text-right px-4 font-antonio md:text-3xl text-lg text-lacampana-gray1">
              ${order.total.toLocaleString()}
            </td>
          </tr>
        </tfoot>
      </table>

      {/* Información de envío */}
      <div className="mt-8 p-4 ">
        <h3 className="text-xl font-bold text-lacampana-gray1 mb-2 text-left">
          Dirección de envío
        </h3>
        <p className="text-lacampana-gray1 text-left">
          <span className="font-bold">{order.shippingAddress.name}</span>
        </p>
        <p className="text-lacampana-gray1 text-left">
          {order.shippingAddress.address}
        </p>
        <p className="text-lacampana-gray1 text-left">
          {order.shippingAddress.city}, {order.shippingAddress.country} -{" "}
          {order.shippingAddress.zipCode}
        </p>
        <p className="text-lacampana-gray1 text-left">
          Correo: {order.shippingAddress.email}
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
