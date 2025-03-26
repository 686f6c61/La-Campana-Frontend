import { useState } from "react";


const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("paypal"); 


  return (
    <section className="bg-white border border-lacampana-gray4 rounded-md p-6 space-y-6 w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-lacampana-gray1 text-lacampana-white font-antonio">
            <th className="text-left md:text-xl text-sm py-3 px-4 border-b md:pr-0 pr-20">
              Método de pago
            </th>
          </tr>
        </thead>
      </table>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {["paypal", "stripe"].map((method) => {
    const isSelected = paymentMethod === method;
    return (
      <label
        key={method}
        htmlFor={method}
        className="border border-lacampana-gray1 rounded-lg p-4 flex items-center gap-4 cursor-pointer transition duration-200"
      >
        <input
          type="radio"
          id={method}
          name="payment"
          value={method}
          checked={isSelected}
          onChange={() => setPaymentMethod(method)}
          className="accent-lacampana-red2"
        />
        <img
          src={`/images/${method}.png`}
          alt={method}
          className="h-8"
        />
      </label>
    );
  })}
</div>



      <p className="text-sm text-lacampana-gray2">
        Tus datos personales se utilizarán para procesar tu pedido, mejorar tu
        experiencia en esta web y otros propósitos descritos en nuestra política
        de privacidad.
      </p>


      <div className="space-y-2 text-sm text-lacampana-gray2">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 accent-lacampana-red2"
          />
          He leído y estoy de acuerdo con los{" "}
          <strong className="text-lacampana-gray1">Términos y condiciones</strong>{" "}
          de la web.
        </label>


        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 accent-lacampana-red2"
          />
          Declaro que los fondos utilizados en esta transacción provienen de
          actividades lícitas y no están relacionados con lavado de activos ni
          financiación del terrorismo, de conformidad con la normativa vigente en
          Colombia.
        </label>
      </div>


      <button className="mt-8 bg-lacampana-red1 text-lacampana-white px-8 py-2 text-sm sm:text-base font-montserrat rounded-tl-full rounded-bl-full rounded-tr-full w-auto md:w-auto relative z-10 border border-lacampana-red1 hover:bg-white hover:text-lacampana-red1 hover:border-lacampana-red1 transition duration-300 ease-in-out">
        Realizar Pedido
      </button>
    </section>
  );
};


export default PaymentMethod;
