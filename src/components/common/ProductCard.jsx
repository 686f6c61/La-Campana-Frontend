import { Link } from "react-router";

const ProductCard = ({ id, name, image, price, discount }) => {
  const sanitizedName = name && name.slice(0, 58);

  return (
    <Link
      to={`/tienda/product/${id}`}
      className="text-start bg-lacampana-white p-3 mb-4 flex flex-col overflow-y-hidden h-full gap-4 rounded-br-2xl border border-lacampana-gray1/0  hover:scale-95 transition duration-300 ease-in-out"
    >
      <section className="relative h-1/2">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="product-image"
        />
        <p
          className="absolute top-2 left-2 bg-lacampana-white  px-7 py-1 rounded-md rounded-tl-none text-center"
          style={{ color: "#3C3C3B" }}
        >
          {discount}
        </p>
      </section>
      <section className="h-1/2 flex flex-col">
        <h5 className="" style={{ color: "#3C3C3B" }}>
          {sanitizedName}
        </h5>
        <div className="mt-5">
          <span className="text-p3-desktop text-lacampana-gray2">Desde</span>
          <p className="font-bold" style={{ color: "#3C3C3B" }}>
            ${price}{" "}
            <span
              className="text-p3-desktop font-normal text-lacampana-gray2"
              style={{ color: "#3C3C3B" }}
            >
              IVA incluido
            </span>
          </p>
        </div>
      </section>
    </Link>
  );
};

export default ProductCard;
