import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BgText from "../BgText";

const FILTER_OPTIONS = {
  espesor: ["1.10 mm", "1.15 mm", "1.20 mm", "1.50 mm"],
  longitud: ["1.10 mm", "1.15 mm", "1.20 mm", "1.50 mm"],
  ancho: ["1.10 mm", "1.15 mm", "1.20 mm", "1.50 mm"],
};

const PRODUCTS = [
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
    espesor: "1.20 mm",
    longitud: "1.20 mm",
    ancho: "1.15 mm",
  },{
    id: 4,
    name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
    price: "$2.386.483",
    discount: "-20%",
    image: "public/images/prod5.jpg",
    espesor: "1.20 mm",
    longitud: "1.20 mm",
    ancho: "1.15 mm",
  },{
    id: 5,
    name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
    price: "$2.386.483",
    discount: "-20%",
    image: "public/images/prod5.jpg",
    espesor: "1.20 mm",
    longitud: "1.20 mm",
    ancho: "1.15 mm",
  },{
    id: 6,
    name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
    price: "$2.386.483",
    discount: "-20%",
    image: "public/images/prod5.jpg",
    espesor: "1.20 mm",
    longitud: "1.20 mm",
    ancho: "1.15 mm",
  },{
    id: 7,
    name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
    price: "$2.386.483",
    discount: "-20%",
    image: "public/images/prod5.jpg",
    espesor: "1.20 mm",
    longitud: "1.20 mm",
    ancho: "1.15 mm",
  },{
    id: 8,
    name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
    price: "$2.386.483",
    discount: "-20%",
    image: "public/images/prod5.jpg",
    espesor: "1.20 mm",
    longitud: "1.20 mm",
    ancho: "1.15 mm",
  },{
    id: 9,
    name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
    price: "$2.386.483",
    discount: "-20%",
    image: "public/images/prod5.jpg",
    espesor: "1.20 mm",
    longitud: "1.20 mm",
    ancho: "1.15 mm",
  },
	{
    id: 10,
    name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
    price: "$2.386.483",
    discount: "-20%",
    image: "public/images/prod5.jpg",
    espesor: "1.20 mm",
    longitud: "1.20 mm",
    ancho: "1.15 mm",
  },
	{
    id: 11,
    name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
    price: "$2.386.483",
    discount: "-20%",
    image: "public/images/prod5.jpg",
    espesor: "1.20 mm",
    longitud: "1.20 mm",
    ancho: "1.15 mm",
  },
];

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [selectedFilters, setSelectedFilters] = useState({
    espesor: "",
    longitud: "",
    ancho: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(6);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

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
    setVisibleProducts((prevVisible) => prevVisible + 5);
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery);
    const matchesFilters = Object.keys(selectedFilters).every(
      (filter) => !selectedFilters[filter] || product[filter] === selectedFilters[filter]
    );
    return matchesSearch && matchesFilters;
  });

  const renderFilterSection = (filterType, title) => (
    <div>
      <h3 className="font-antonio text-left text-lg mt-4">{title}</h3>
      <ul>
        {FILTER_OPTIONS[filterType].map((value) => (
          <li key={value}>
            <button
              className={`text-sm ${
                selectedFilters[filterType] === value ? "font-bold text-red-500" : ""
              }`}
              onClick={() => handleFilterChange(filterType, value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="relative w-full flex flex-col items-center justify-center bg-white">
        <div className="relative z-10 text-center w-full max-w-screen-xl">
          <div className="absolute inset-0 flex z-0 transform translate-x-[300px] hidden md:block">
            <BgText text="Tienda de aceros" className="md:justify-center md:items-center" />
          </div>
          <h1 className="md:text-5xl text-3xl font-semibold text-lacampana-gray1 pt-5 md:pt-20 font-anton">
            Nuestros <span className="text-lacampana-red2">aceros</span>
          </h1>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-100 p-4 shadow">
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Buscar producto"
              className="w-full p-2 pr-10 rounded bg-gray-100 focus:outline-none"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <span className="absolute h-4 right-2 top-2.5 text-gray-500">
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

          <h2 className="text-lg font-anton mb-6">FILTRAR POR</h2>
          {renderFilterSection("espesor", "Espesor")}
          {renderFilterSection("longitud", "Longitud")}
          {renderFilterSection("ancho", "Ancho")}
        </aside>

        {/* Product List */}
        <main className="w-3/4 pl-6">
          <div className="grid grid-cols-3 gap-6">
            {filteredProducts.slice(0, visibleProducts).map((product) => (
              <div
                key={product.id}
                className="bg-white shadow p-4 cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full" />
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
  );
};

export default CategoryPage;
