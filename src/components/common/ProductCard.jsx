import { Link } from "react-router"

const ProductCard = ({ id, name, image, price, discount }) => {
  const sanitizedName = name && name.slice(0, 58);

  return (
    <Link to={`/tienda/product/${id}`} className="text-start bg-lacampana-white p-4 mb-4 flex flex-col overflow-y-hidden lg:h-full h-[300px] gap-4 rounded-br-2xl border border-lacampana-gray1/0 hover:shadow-xl hover:shadow-lacampana-gray3/25 hover:scale-95 transition duration-300 ease-in-out">
      <section className="h-1/2">
        <img className="w-full h-full object-cover" src={image} alt="product-image" />
      </section>
      <section className="h-1/2 flex flex-col justify-between">
        <h5 className="">{sanitizedName}</h5>
        <div>
          <span className="text-p3-desktop text-lacampana-gray2">Desde</span>
          <p className="font-bold">${price} <span className="text-p3-desktop font-normal text-lacampana-gray2">IVA incluido</span></p>
        </div>
      </section>
    </Link>
  )
}

export default ProductCard