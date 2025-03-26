import ProductCard from "../../components/common/ProductCard"
import chunkArray from "../../helpers/chunkArray"
import products from "../../utils/products"

const RelatedProducts = () => {
  const relatedProducts = chunkArray(products)
  const relatedProductsMovile = chunkArray(products, 2)

  return (
    <section className="text-start">
      <h4>Productos Similares</h4>
      <div className="hidden lg:block">
        <div className="carousel w-full">
          {relatedProducts.map((productChunk, index) =>
            <article
              id={`product-chunk-${index}`}
              className="carousel-item w-full"
            >
              {productChunk.map(product =>
                <article className="w-1/2 lg:w-1/3">
                  <div className="p-2 h-full">
                    <ProductCard
                      key={`related-product-card-${product.id}`}
                      id={product.id}
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      discount={product.discount}
                    />
                  </div>
                </article>
              )}
            </article>
          )}
        </div>
        <div className="flex justify-center items-center gap-2">
          {relatedProducts.map((_, index) =>
            <input
              key={`related-news-radio-${index}`}
              onClick={() => {
                document.getElementById(`product-chunk-${index}`).scrollIntoView({ behavior: "smooth", block: "nearest" })
              }}
              type="radio"
              name="radio-blog-details"
              className="radio w-3 h-3 checked:w-5 checked:h-5 border-none bg-lacampana-gray3 checked:bg-lacampana-red2"
              defaultChecked={index === 0}
            />
          )}
        </div>
      </div>
      <div className="tablet:hidden">
        <div className="carousel w-full">
          {relatedProductsMovile.map((productChunk, index) =>
            <article
              id={`product-chunk-movile-${index}`}
              className="carousel-item w-full"
            >
              {productChunk.map(product =>
                <article className="w-1/2 tablet:w-1/3">
                  <div className="p-2 h-full">
                    <ProductCard
                      key={`related-product-card-${product.id}`}
                      id={product.id}
                      name={product.name}
                      image={product.image}
                      price={product.price}
                      discount={product.discount}
                    />
                  </div>
                </article>
              )}
            </article>
          )}
        </div>
        <div className="flex justify-center items-center gap-2">
          {relatedProductsMovile.map((_, index) =>
            <input
              key={`related-news-radio-${index}`}
              onClick={() => {
                document.getElementById(`product-chunk-movile-${index}`).scrollIntoView({ behavior: "smooth", block: "nearest" })
              }}
              type="radio"
              name="radio-blog-details"
              className="radio w-3 h-3 checked:w-5 checked:h-5 border-none bg-lacampana-gray3 checked:bg-lacampana-red2"
              defaultChecked={index === 0}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts