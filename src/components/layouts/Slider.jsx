const Ofertas = () => {
  const products = [
    {
      id: 1,
      image: "/images/prod1.jpg",
      title: "Producto 1",
      price: "$5,795.00",
      discount: "-20%",
    },
    {
      id: 2,
      image: "/images/prod1.jpg",
      title: "Producto 2",
      price: "$5,245.00",
      discount: "-20%",
    },
    {
      id: 3,
      image: "/images/prod3.jpg",
      title: "Producto 3",
      price: "$5,995.00",
      discount: "-20%",
    },
    {
      id: 4,
      image: "/images/prod4.jpg",
      title: "Producto 4",
      price: "$5,995.00",
      discount: "-20%",
    },
    {
      id: 5,
      image: "/images/prod5.jpg",
      title: "Producto 5",
      price: "$5,995.00",
      discount: "-20%",
    },
    {
      id: 6,
      image: "/images/prod1.jpg",
      title: "Producto 6",
      price: "$5,795.00",
      discount: "-20%",
    },
    {
      id: 7,
      image: "/images/prod7.jpg",
      title: "Producto 7",
      price: "$5,245.00",
      discount: "-20%",
    },
    {
      id: 8,
      image: "/images/prod8.jpg",
      title: "Producto 8",
      price: "$5,995.00",
      discount: "-20%",
    },
    {
      id: 9,
      image: "/images/prod7.jpg",
      title: "Producto 9",
      price: "$5,995.00",
      discount: "-20%",
    },
    {
      id: 10,
      image: "/images/prod4.jpg",
      title: "Producto 10",
      price: "$5,995.00",
      discount: "-20%",
    },
  ];

  return (
    <section className="bg-white py-12">
      {/* Título */}
      <div className="container mx-auto px-4 text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Las mejores <span className="text-red-600">ofertas</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Descubre nuestras promociones destacadas y aprovecha grandes descuentos en productos seleccionados.
        </p>
      </div>

      {/* Productos */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Imagen del producto */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 my-bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}
                </span>
              </div>
              {/* Información del producto */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800 truncate">
                  {product.title}
                </h3>
                <p className="text-lg font-bold text-red-600">{product.price}</p>
                <p className="text-xs text-gray-500">+ IVA incluido</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botón */}
      <div className="text-center mt-10">
        <button className="my-bg-primary text-white font-medium py-3 px-8 rounded-full hover:bg-red-700">
          Explorar todas las ofertas
        </button>
      </div>
    </section>
  );
};

export default Ofertas;
