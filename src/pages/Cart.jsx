import { useSelector } from "react-redux";
import IntroductoryText from "../sections/common/IntroductoryText";
import products from "../utils/products";
import chunkArray from "../helpers/chunkArray";
import AddedProducts from "../sections/Cart/AddedProducts";
import RelatedProducts from "../sections/Cart/RelatedProducts";
import PurchaseSummary from "../sections/Cart/PurchaseSummary";
import Highlighted from "../sections/Cart/Highlighted";
import TestAdd from "../components/Test/TestAdd";
import ComplementSection from "../components/common/ComplementSection";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);

  const subtotal =
    Math.round(
      cartProducts
        .map((product) => product.ItemPrices * product.quantity)
        .reduce((accumulator, curr) => accumulator + curr, 0) * 100
    ) / 100;

  return (
    <article className="max-w-screen-desktop w-full justify-self-center relative px-8 py-4 desktop:px-16 desktop:py-8 mx-auto">
      <IntroductoryText
        sizeTitle="tablet:text-[6rem] lg:text-[6rem]"
        mt="mt-2 tablet:mt-[0px] lg:mt-0"
        sizeTitleMobile="text-[80px]"
        title="Lleva lo mejor en"
        bgTitleMargin="mt-10"
        redTitle=" aceros"
        bgTitle="Carrito"
        justify="center"
        size="text-5xl"
        right="right-0"
        left="left-0"
      />
      <div className="flex flex-col tablet:flex-row gap-8 pt-10 pb-10">
        <main className="w-full tablet:w-2/3 flex flex-col gap-2">
          {/* TABLA DE PRODCUTOS DEL CARRITO */}
          <AddedProducts cartProducts={cartProducts} />
          {/* PRODUCTOS SIMILARES */}
        
          <RelatedProducts/>
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
  );
};

export default Cart;
