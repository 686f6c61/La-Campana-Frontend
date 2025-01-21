import React from "react";



const BestOfLaCampana = () => {
  const products = [
    {
      id: 1,
      discount: "-20%",
      image: "/images/prod1.jpg",
      title: "Tubo Mueble Cuadrado Esp 1.10 un 3/4 Primera - Norma Ntc 1986",
      price: "$19.693",
      additionalInfo: "IVA incluido",
    },
    {
      id: 2,
      discount: "-20%",
      image: "/images/prod3.jpg",
      title: "Marco Ventana Corriente Esp 1.00 un 6.00 mt Primera",
      price: "$32.516",
      additionalInfo: "IVA incluido",
    },
    {
      id: 3,
      discount: "-20%",
      image: "/images/prod7.jpg",
      title: "Marco Ventana Tipo Aluminio Esp 0.85 un 6.00 mt Primera",
      price: "$24.895",
      additionalInfo: "IVA incluido",
    },
    {
      id: 4,
      discount: "-20%",
      image: "/images/prod4.jpg",
      title: "Tubo Agua Negra Esp 1.90 un 1 1/4 Primera",
      price: "$58.760",
      additionalInfo: "IVA incluido",
    },
    {
      id: 5,
      discount: "-20%",
      image: "/images/prod5.jpg",
      title: "Platina 2 Esp 1/8 un 6 mt Primera",
      price: "$42.676",
      additionalInfo: "IVA incluido",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold font-antonio mb-8">
          Lo mejor de la <span className="text-red-600">campana</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg shadow-md overflow-hidden"
            >
              {/* Discount */}
              <div className="bg-gray-200 text-gray-800 text-xs px-2 py-1 absolute">
                {product.discount}
              </div>
              {/* Image */}
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain h-full"
                />
              </div>
              {/* Details */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-lg font-bold text-red-600">{product.price}</p>
                <p className="text-sm text-gray-500">{product.additionalInfo}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="my-bg-primary text-white font-bold px-6 py-3 rounded-full">
            Ver más productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestOfLaCampana;
