import CartItem from "./CartItem"

const CartItemsTable = ({ cartProducts }) => {
  return !cartProducts || cartProducts.length === 0 ?
    <div className="bg-lacampana-white min-h-[800px] flex flex-col items-center rounded-br-2xl">
      <h6 className="bg-lacampana-gray1 w-full h-fit text-white py-2">No hay productos en el carrito</h6>
      <div className="w-full h-full flex items-center justify-center">
        <h4>Carrito Vacio</h4>
      </div>
    </div> :
    <div className="h-[800px] bg-lacampana-white rounded-br-2xl overflow-y-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-lacampana-gray1">
          <tr>
            <th><h6 className="text-white">Imagen del producto</h6></th>
            <th><h6 className="text-white">Nombre del producto</h6></th>
            <th><h6 className="text-white">Precio</h6></th>
            <th><h6 className="text-white">Total a pagar</h6></th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map(product =>
            <CartItem
              key={`cart-item-${product.id}`}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              totalPrice={product.subtotal}
              initQuantity={product.quantity}
            />
          )}
        </tbody>
      </table>
    </div>
}

export default CartItemsTable