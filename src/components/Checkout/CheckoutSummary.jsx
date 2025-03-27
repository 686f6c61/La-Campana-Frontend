import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IVA } from "../../utils/consts";
import shippingIcon from "../../utils/shippingIcon";
import ActionButton from "../common/ActionButton";


const CheckoutSummary = ({ cartProducts = [], subtotal = 0, city = "Bogotá" }) => {
  const total = subtotal + Math.trunc(subtotal * IVA);


  return (
    <section className="flex flex-col gap-8">
      {/* Título */}
      <h3 className="bg-lacampana-gray1 text-white font-antonio py-3 px-4 text-left text-lg rounded-t-md">
        Resumen de la compra
      </h3>


      {/* Lista de productos */}
      <div className="bg-white rounded-md shadow px-4 py-4 space-y-6">
        {cartProducts.map((product, index) => (
          <div key={index} className="border-b pb-4">
            <h6 className="font-semibold text-sm text-lacampana-gray1">
              {product.name}
            </h6>
            <div className="flex justify-between items-center pt-2 text-lacampana-gray3 font-semibold text-base">
              <span>x{product.quantity}</span>
              <span>${product.price.toLocaleString("es-CO")}</span>
            </div>
          </div>
        ))}


        {/* Subtotal */}
        <div className="grid grid-cols-2 font-semibold text-lacampana-gray1 border-t pt-4">
          <h6>Subtotal</h6>
          <h6>${subtotal.toLocaleString("es-CO")}</h6>
        </div>


        {/* Envío */}
        <div className="grid grid-cols-2 gap-4 items-start">
          <div className="flex flex-col gap-2">
            <h6 className="font-semibold text-lacampana-gray1">Envío</h6>
            {shippingIcon && (
              <img className="w-10" src={shippingIcon} alt="Icono de envío" />
            )}
          </div>
          <div className="flex flex-col gap-2 text-sm text-lacampana-gray3">
            <label className="flex items-center gap-2">
              <input type="radio" name="envio" defaultChecked />
              Envío gratis <strong className="ml-1">{city}</strong>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="envio" />
              Recoger en tienda <strong className="ml-1">{city}</strong>
            </label>
          </div>
        </div>


        {/* Botón */}
        <div className="pt-4">
          <ActionButton
            text="Terminar compra con un asesor"
            link="/checkout"
            className="w-full text-sm font-montserrat border-lacampana-red1 text-lacampana-red1 bg-white hover:bg-lacampana-red1 hover:text-white rounded-full"
          />
        </div>


        {/* Total */}
        <div className="grid grid-cols-2 pt-4 font-bold text-lacampana-gray1">
          <h6>Total</h6>
          <h6>
            ${total.toLocaleString("es-CO")}
            <p className="font-normal text-sm">(IVA incluido)</p>
          </h6>
        </div>
      </div>


      {/* Volver */}
      <Link to="/tienda" className="flex justify-end items-center text-lacampana-gray3">
        <IoIosArrowBack className="text-lacampana-gray3 text-lg" />
        Volver a la tienda
      </Link>
    </section>
  );
};


export default CheckoutSummary;
