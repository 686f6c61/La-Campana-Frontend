import { useSelector } from "react-redux"
import IntroductoryText from "../sections/common/IntroductoryText"
import AddedProducts from "../sections/Cart/AddedProducts"
import RelatedProducts from "../sections/Cart/RelatedProducts"
import PurchaseSummary from "../sections/Cart/PurchaseSummary"
import Highlighted from "../sections/Cart/Highlighted"
import CheckoutForm from "../components/Checkout/CheckoutForm"
import PaymentMethod from "../components/Checkout/PaymentMethod"


const Checkout = () => {
  const cartProducts = useSelector(state => state.cart)

  const subtotal = Math.round(cartProducts.map(product => product.subtotal).reduce((accumulator, currentValue) => accumulator + currentValue, 0) * 100) / 100
  // console.log(cartProducts);
  console.log(cartProducts);


  return (
    <article className="max-w-screen-desktop w-full justify-self-center relative px-8 py-4 desktop:px-16 desktop:py-8">
       <IntroductoryText
          title={
            <>
              Finalizar <span className="text-lacampana-red2"> Pedido</span>
              
              
              
            </>
          }
          bgTitle="Checkout"
          description=""
          justify="center"
          
        >
          
        </IntroductoryText>
      <div className="flex flex-col tablet:flex-row gap-4">
        <main className="w-full tablet:w-2/3 flex flex-col gap-16">
          {/* TABLA DE CHECKOUT FORM */}
          {/* <AddedProducts cartProducts={cartProducts} /> */}
          <CheckoutForm />
         
        </main>
        <aside className="w-full tablet:w-1/3 flex flex-col gap-16">
          {/* RESUMEN DE LA COMPRA */}
          <div className="fixed left-0 right-0 bottom-0 tablet:static bg-lacampana-white tablet:bg-transparent">
            <PurchaseSummary subtotal={subtotal} />
          </div>
         
          <PaymentMethod />
        </aside>
      </div>
    </article>
  )
}

export default Checkout