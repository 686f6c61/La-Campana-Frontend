import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };


  const products = [
    {
      id: 1,
      name: "Tubo Mueble Cuadrado Esp 1.10 un 3/4 Primera - Norma Ntc 1986",
      price: "$19.693",
      discount: "-20%",
      image: "public/images/prod1.jpg",
      espesor: "1.10 mm",
      longitud: "1.15 mm",
      ancho: "1.10 mm",
    },
    {
      id: 2,
      name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
      price: "$2.386.483",
      discount: "-20%",
      image: "public/images/prod5.jpg",
      espesor: "1.20 mm",
      longitud: "1.20 mm",
      ancho: "1.15 mm",
    },
    {
      id: 3,
      name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
      price: "$2.386.483",
      discount: "-20%",
      image: "public/images/prod5.jpg",
      espesor: "1.50 mm",
      longitud: "1.20 mm",
      ancho: "1.20 mm",
    },
    {
      id: 4,
      name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
      price: "$2.386.483",
      discount: "-20%",
      image: "public/images/prod8.jpg",
      espesor: "1.50 mm",
      longitud: "1.10 mm",
      ancho: "1.15 mm",
    },
    {
        id: 54,
        name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
        price: "$2.386.483",
        discount: "-20%",
        image: "public/images/prod5.jpg",
        espesor: "1.50 mm",
        longitud: "1.10 mm",
        ancho: "1.50 mm",
      },
      {
        id: 6,
        name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
        price: "$2.386.483",
        discount: "-20%",
        image: "public/images/prod4.jpg",
        espesor: "1.15 mm",
        longitud: "1.10 mm",
        ancho: "1.20 mm",
      },
  ];

  const [selectedFilters, setSelectedFilters] = useState({
    espesor: "",
    longitud: "",
    ancho: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(4); // Inicialmente mostramos 4 productos

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleLoadMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4); // Cargar 4 productos más
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery);
    const matchesFilters =
      (!selectedFilters.espesor || product.espesor === selectedFilters.espesor) &&
      (!selectedFilters.longitud || product.longitud === selectedFilters.longitud) &&
      (!selectedFilters.ancho || product.ancho === selectedFilters.ancho);

    return matchesSearch && matchesFilters;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images/Tiendadeaceros@2x.png)`,
            backgroundSize: "cover",
            height: "150px",
            width: "1200px",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
            <h1 className="text-3xl font-anton font-bold h2 text-white mb-1 text-center">
              <span className="text-black">Nuestros</span>{" "}
              <span className="text-red-500 ">aceros</span>
            </h1>
          </div>
        </div>

        <div className="flex">
          <aside className="w-1/4 bg-gray-100 p-4 shadow">
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Buscar producto"
                className="w-full p-2 pr-10 border border-gray-300 rounded placeholder-gray-500 focus:outline-none"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <span className="absolute right-2 top-2.5 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.415l4.387 4.387a1 1 0 01-1.414 1.415l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            <h2 className="text-lg font-bold mb-2">FILTRAR POR</h2>
            <div>
              <h3 className="font-semibold">Espesor</h3>
              <ul>
                {["1.10 mm", "1.15 mm", "1.20 mm", "1.50 mm"].map((espesor) => (
                  <li key={espesor}>
                    <button
                      className={`text-sm ${
                        selectedFilters.espesor === espesor
                          ? "font-bold text-red-500"
                          : ""
                      }`}
                      onClick={() => handleFilterChange("espesor", espesor)}
                    >
                      {espesor}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mt-4">Longitud</h3>
              <ul>
                {["1.10 mm", "1.15 mm", "1.20 mm", "1.50 mm"].map((longitud) => (
                  <li key={longitud}>
                    <button
                      className={`text-sm ${
                        selectedFilters.longitud === longitud
                          ? "font-bold text-red-500"
                          : ""
                      }`}
                      onClick={() => handleFilterChange("longitud", longitud)}
                    >
                      {longitud}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mt-4">Ancho</h3>
              <ul>
                {["1.10 mm", "1.15 mm", "1.20 mm", "1.50 mm"].map((ancho) => (
                  <li key={ancho}>
                    <button
                      className={`text-sm ${
                        selectedFilters.ancho === ancho
                          ? "font-bold text-red-500"
                          : ""
                      }`}
                      onClick={() => handleFilterChange("ancho", ancho)}
                    >
                      {ancho}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="w-3/4 pl-6">
      <div className="grid grid-cols-3 gap-6">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <div
            key={product.id}
            className="bg-white shadow p-4 cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full"
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.discount}
          </span>
        </div>
        <h2 className="text-sm font-bold mt-2">{product.name}</h2>
        <p className="text-lg text-gray-700 mt-1">{product.price}</p>
        <p className="text-xs text-gray-500">IVA incluido</p>
      </div>
    ))}
  </div>
  {visibleProducts < filteredProducts.length && (
    <div className="mt-6 text-center">
      <button
        onClick={handleLoadMore}
        className="bg-black text-white px-6 py-2 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-red-600"
      >
        Cargar más
      </button>
    </div>
  )}
</main>

        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
