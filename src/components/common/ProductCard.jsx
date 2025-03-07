import { Link } from "react-router"

const ProductCard = ({ id, name, image, price, discount }) => {
  return (
    <Link to={`/tienda/${id}`} className="text-start bg-lacampana-white p-4 flex flex-col gap-4 h-full rounded-br-2xl border border-lacampana-gray1/0 hover:border-lacampana-gray1 hover:scale-95 transition duration-300 ease-in-out">
      <section className="h-1/2">
        <img className="w-full h-full object-cover" src={image} alt="product-image" />
      </section>
      <section className="h-1/2 flex flex-col justify-between">
        <h5 className="">{name}</h5>
        <div>
          <span className="text-p3-desktop text-lacampana-gray2">Desde</span>
          <p className="font-bold">${price} <span className="text-p3-desktop font-normal text-lacampana-gray2">IVA incluido</span></p>
        </div>
      </section>
    </Link>
  )
}

export default ProductCard