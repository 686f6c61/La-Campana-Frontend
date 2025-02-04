import { Link } from "react-router"

const ProductCard = ({ id, name, image, price, discount }) => {
  return (
    <Link to={`/product/${id}`} className="text-start bg-lacampana-white p-4 flex flex-col gap-4 h-full rounded-br-2xl">
      <section className="h-[250px]">
        <img className="w-full h-full object-cover" src={image} alt="product-image" />
      </section>
      <section>
        <h5 className="min-h-[3rem]">{name}</h5>
        <span className="text-p3-desktop text-lacampana-gray2">Desde</span>
        <p className="font-bold">${price} <span className="text-p3-desktop font-normal text-lacampana-gray2">IVA incluido</span></p>
      </section>
    </Link>
  )
}

export default ProductCard