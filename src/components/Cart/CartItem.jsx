import { useEffect, useState } from "react"
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, updateItem } from "../../features/cart/cartSlice";

const CartItem = ({ id, name, image, price, stock = 10, initQuantity = 1, totalPrice }) => {
  const [quantity, setQuantity] = useState(initQuantity)
  const dispatch = useDispatch()
  const cartProducts = useSelector(state => state.cart)

  useEffect(() => {
    updateProduct()
  }, [quantity])

  const increaseQuantity = () => quantity < stock && setQuantity(quantity + 1)
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1)

  const updateProduct = () => dispatch(updateItem({...cartProducts.find(product => product.id === id), quantity: quantity}))
  const deleteProduct = () => dispatch(deleteItem(id))

  return (
    <tr>
      <td>
        <div className="flex items-center gap-4">
          <button onClick={deleteProduct}>
            <IoClose className="text-2xl" />
          </button>
          <div className="h-40 w-full object-cover rounded-lg border overflow-hidden border-lacampana-gray4">
            <img
              className="w-full h-full"
              src={image}
              alt="product-image" />
          </div>

        </div>
      </td>
      <td>
        <h6>{name}</h6>
        <article className="grid grid-cols-3 w-24 pt-4">
          <button onClick={decreaseQuantity} className="bg-lacampana-gray4 p-1">
            -
          </button>
          <div className="bg-white flex justify-center items-center">
            {quantity}
          </div>
          <button onClick={increaseQuantity} className="bg-lacampana-gray4 p-1">
            +
          </button>
        </article>
      </td>
      <td>
        <h4>${price}</h4>
      </td>
      <td>
        <h4>${totalPrice}</h4>
      </td>
    </tr>
  )
}

export default CartItem