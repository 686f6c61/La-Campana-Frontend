import CartItemsTable from "../../components/Cart/CartItemsTable"

const AddedProducts = ({ cartProducts }) => {
  return (
    <section className="flex flex-col gap-8">
      <CartItemsTable
        cartProducts={cartProducts}
      />
      <div className="flex gap-4 flex-col tablet:flex-row justify-between">
        <article className="flex lacampana-btn w-full tablet:w-fit h-10 overflow-hidden border border-lacampana-gray4">
          <button className="bg-lacampana-gray1 flex items-center h-full px-4 text-white">Aplicar</button>
          <input className="h-full px-2 rounded-tr-2xl" type="text" name="cuponInput" placeholder="Cupón de descuento" />
        </article>
        <button className="lacampana-btn bg-lacampana-white text-lacampana-gray1 border border-lacampana-gray1 py-1 px-4">
          Actualizar carrito
        </button>
      </div>
    </section>
  )
}

export default AddedProducts