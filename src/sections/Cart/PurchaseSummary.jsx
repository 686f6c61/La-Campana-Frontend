import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router";
import { IVA } from "../../utils/consts";
import ActionButton from "../../components/common/ActionButton";

const PurchaseSummary = ({ subtotal, city = "Bogotá" }) => {
  const total = subtotal + Math.trunc(subtotal * IVA)

  return (
    <section className="flex flex-col gap-4">
      <div className="bg-lacampana-white rounded-br-2xl">
        <table className="table h-full">
          <thead>
            <tr className="bg-lacampana-gray1 text-lacampana-white font-antonio">
              <th className="text-left md:text-xl text-sm py-3 px-4 border-b md:pr-0 pr-20">
                Resumen de la compra
              </th>
            </tr>
          </thead>
          <tbody className="text-lacampana-gray1">
            <tr>
              <td>
                <div className="grid grid-cols-2">
                  <h6>Subtotal</h6>
                  <h6>${subtotal}</h6>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="grid grid-cols-2">
                  <div className="flex flex-col gap-4">
                    <h6>Envío</h6>
                    <img className="w-fit" src="/images/Group1.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h6>Contra entrega enviar a <span className="bg-lacampana-gray4 rounded-full px-2 text-p2-desktop">{city}</span></h6>
                    <Link to="micuenta/direcciones" className="text-lacampana-red2 font-bold">Cambiar direccion</Link>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="grid grid-cols-2">
                  <h6>Total</h6>
                  <h6>${total} <p>(IVA incluido)</p></h6>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col">
        <ActionButton
          text="Finalizar carrito"
          link="/checkout"
          width="full"
        />
        <Link to="/tienda" className="flex justify-end items-center text-lacampana-gray3 py-5">
          <IoIosArrowBack className="text-lacampana-gray3 text-lg" />
          Volver a la tienda
        </Link>
      </div>
    </section>
  )
}

export default PurchaseSummary