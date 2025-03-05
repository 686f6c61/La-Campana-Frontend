import ActionButton from "../../components/common/ActionButton"
import CardsCarousel from "../../components/common/CardsCarousel"
import ProductCard from "../../components/common/ProductCard"
import chunkArray from "../../helpers/chunkArray"
import products from "../../utils/products"

const BestOffers = () => {
  const chunkedProducts = chunkArray(products, 2)

  return (
    <section className="max-w-screen-desktop w-full justify-self-center flex flex-col gap-8 px-4 tablet:px-8 py-16 tablet:py-32">
      <section>
        <h2>Las mejores <span className="text-lacampana-red2">ofertas</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur. Etiam id enim diam sollicitudin ut molestie velit</p>
      </section>
      <section className="flex flex-col gap-8 items-center">
        <div className="tablet:hidden w-full h-[300px]">
          <CardsCarousel id="best-offer-carousel-item" cardsList={chunkedProducts}>
            {chunkedProducts.map((chunk, index) =>
              <ul id={`best-offer-carousel-item-${index}`} className="carousel-item w-full">
                {chunk.map(product =>
                  <li className="w-1/2 p-2">
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      discount={product.discount}
                    />
                  </li>
                )}
              </ul>
            )}
          </CardsCarousel>
        </div>
        <ul className="hidden tablet:grid grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-5 gap-4">
          {products.map(product =>
            <li>
              <ProductCard
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                discount={product.discount}
              />
            </li>
          )}
        </ul>
        <ActionButton
          text="Explorar todas las ofertas"
          link="/tienda"
        />
      </section>
    </section>
  )
}

export default BestOffers