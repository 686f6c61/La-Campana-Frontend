import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaRegCreditCard } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router";

const FloatingDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Comportamiento para pantallas grandes */}
      <div className="hidden lg:block fixed right-0 bottom-1/3 z-50 p-4">
        <div className="relative group">
          {/* Floating Button */}
          <Drawer />

          {/* Drawer (hidden by default) */}
          <div className="absolute top-0 right-0 bg-lacampana-red2 text-white w-64 h-64 rounded-lg shadow-lg flex flex-col justify-around p-4 opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
            <DrawerLink
              text="Rastrea tu pedido"
              icon={<LuMapPin className="text-3xl" />}
              link="/micuenta/pedidos"
            />
            <DrawerLink
              text="Pagos PSE"
              icon={<img src="/images/pse.png" alt="PSE" className="w-8 h-8 rounded-full" />}
              link=""
            />
            <DrawerLink
              text="Solicitar crédito"
              icon={<FaRegCreditCard className="text-3xl" />}
              link="https://clientes.covifactura.com/linksolicitudcupo/#/cupo-afiliado?codigo=1N8600569718"
            />
            <DrawerLink
              text="Ver el carrito"
              icon={<PiShoppingCartLight className="text-3xl" />}
              link="/carrito"
            />
            <DrawerLink
              text="Hablar con un asesor"
              icon={<FaWhatsapp className="text-3xl" />}
              link=""
            />
          </div>
        </div>
      </div>

      {/* Comportamiento para pantallas pequeñas */}
      <div className="flex flex-col-reverse gap-4 lg:hidden fixed right-0 bottom-0 z-50 p-4">
        {/* BOTON PARA ABRIR */}
        <div
          className={`bg-lacampana-red2 w-16 h-16 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg transition-transform duration-300 ${isOpen && "rotate-45"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <GoPlus className="text-4xl" />
        </div>
        {/* CONTENIDO */}
        {isOpen && (
          <Drawer />
        )}
      </div>
    </>
  );
};

export default FloatingDrawer;

const Drawer = () => {
  return (
    <div className="bg-lacampana-red2 rounded-tl-full rounded-bl-full rounded-tr-full px-2 py-4 gap-4 flex flex-col justify-around items-center text-white cursor-pointer shadow-lg transition-opacity duration-300">
      <LuMapPin className="text-4xl" />
      <img
        src="/images/pseblack.png"
        alt="PSE"
        className="w-10 h-10 object-cover rounded-full"
      />
      <FaRegCreditCard className="text-3xl" />
      <PiShoppingCartLight className="text-3xl" />
      <FaWhatsapp className="text-2xl" />
    </div>
  )
}

const DrawerLink = ({ text, link, icon }) => {
  return (
    <Link to={link} className="flex items-center gap-2">
      {icon}
      <span>{text}</span>
    </Link>
  )
}
