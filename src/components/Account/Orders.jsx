import React from "react";
import { orders } from "../../data/ordersInfo";
import TitleAndParagraph from "../Account/TitleAndParagraph";
import TableHeader from "../Account/TableHeader";
import OrderRow from "../Account/OrderRow";
import OrderCarousel from "../Account/OrderCarousel";

const Orders = () => {
  return (
    <div>
      {/* Mostrar solo en pantallas grandes */}
      <TitleAndParagraph title="Mis pedidos" showOnSmall={false}>
        Revisa el estado de tus pedidos y los detalles de compras anteriores.
      </TitleAndParagraph>

      {/* Tabla para pantallas medianas y grandes */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <TableHeader /> {/* 🔹 Encabezado en fila en pantallas grandes */}
          <tbody>
            {orders.map((order, index) => (
              <OrderRow key={index} order={order} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Contenedor para móviles: TableHeader a la izquierda y OrderCarousel a la derecha */}
      <div className="md:hidden flex w-full p-4 gap-2">
        <div className="w-1/3">
          <TableHeader isMobile={true} />
        </div>
        <div className="w-2/3">
          <OrderCarousel orders={orders} />
        </div>
      </div>
    </div>
  );
};

export default Orders;
