const ProductSection = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$10", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$20", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "$30", image: "https://via.placeholder.com/150" },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6">Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
              <h4 className="text-lg font-medium">{product.name}</h4>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
