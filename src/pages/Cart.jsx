import { useSelector } from "react-redux"
import IntroductoryText from "../sections/common/IntroductoryText"
import products from "../utils/products"
import chunkArray from "../helpers/chunkArray"
import AddedProducts from "../sections/Cart/AddedProducts"
import RelatedProducts from "../sections/Cart/RelatedProducts"
import PurchaseSummary from "../sections/Cart/PurchaseSummary"
import Highlighted from "../sections/Cart/Highlighted"
import TestAdd from "../components/Test/TestAdd"

const Cart = () => {
  const cartProducts = useSelector(state => state.cart)

  const subtotal = Math.round(
    cartProducts
      .map(product => product.ItemPrices * product.quantity)
      .reduce((accumulator, curr) => accumulator + curr, 0) * 100
  ) / 100;

  return (
    <article className="max-w-screen-desktop w-full justify-self-center relative px-8 py-4 desktop:px-16 desktop:py-8">
      <IntroductoryText
        title="Lleva lo mejor en"
        redTitle="aceros"
        bgTitle="Carrito"
        justify="center"
      />
      <div className="flex flex-col tablet:flex-row gap-4">
        <main className="w-full tablet:w-2/3 flex flex-col gap-16">
          {/* TABLA DE PRODCUTOS DEL CARRITO */}
          <AddedProducts cartProducts={cartProducts} />
          {/* PRODUCTOS SIMILARES */}
          <RelatedProducts />
        </main>
        <aside className="w-full tablet:w-1/3 flex flex-col gap-16">
          {/* RESUMEN DE LA COMPRA */}
          <div className="fixed left-0 right-0 bottom-0 tablet:static bg-lacampana-white tablet:bg-transparent">
            <PurchaseSummary subtotal={subtotal} />
          </div>
          {/* HIGHLIGHTS CARDS*/}
          <Highlighted />
        </aside>
      </div>
    </article>
  )
}

export default Cart