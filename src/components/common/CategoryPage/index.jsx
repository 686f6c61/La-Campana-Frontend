import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setProducts } from "../../../store/reducers/productsSlice";
import { setSelectedCategory } from "../../../store/reducers/categorySlice";

import FilterSearchBar from "../FilterSearchBar";
import IntroductoryText from "../../../sections/common/IntroductoryText";
import ProductCard from "../../common/ProductCard";
import { useGetProductsByTextQuery } from "../../../store/reducers/apiSlice";
import ActionButton from "../ActionButton";

import categories from "../../../utils/categories";

const BreadCrumbs = ({ path }) => {
  const pathUp =
    path && path.charAt(0).toUpperCase() + path.slice(1).toLowerCase();
  return (
    <div className="flex justify-center ">
      <ol class="list-reset py-4 pl-4 rounded flex bg-grey-light text-lacampana-gray2">
        <li class="px-2">
          <a
            href="/"
            class="no-underline text-open-sans hover:text-lacampana-red2 text-sm"
          >
            Inicio
          </a>
        </li>
        <li>/</li>
        <li class="px-2">
          <a
            href="/tienda"
            class="no-underline text-open-sans  hover:text-lacampana-red2 text-sm"
          >
            Tienda
          </a>
        </li>
        <li>/</li>
        {path && (
          <li class="px-2 text-open-sans hover:text-lacampana-red2">
            {pathUp}
          </li>
        )}
      </ol>
    </div>
  );
};
const FILTER_OPTIONS = {
  espesor: ["1.10 mm", "1.15 mm", "1.20 mm", "1.50 mm"],
  longitud: ["1.10 mm", "1.15 mm", "1.20 mm", "1.50 mm"],
  ancho: ["1.10 mm", "1.15 mm", "1.20 mm", "1.50 mm"],
};

const CategoryPage = () => {
  const { categoryId: rawCategoryId } = useParams();
  const categoryId = rawCategoryId || "tuberia";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);
  const [selectedFilters, setSelectedFilters] = useState({
    espesor: "",
    longitud: "",
    ancho: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(8);

  const [categoryImage, setCategoryImage] = useState("");

  const { data, error, isLoading, refetch } =
    useGetProductsByTextQuery(categoryId);

  // All hooks must be called before any conditional returns
  useEffect(() => {
    dispatch(setSelectedCategory(categoryId));
    setVisibleProducts(8);
    refetch();
    return () => {
      setVisibleProducts(8);
    };
  }, [categoryId, refetch]);

  useEffect(() => {
    const newCategory = categories.find((cat) => cat.id === categoryId);
    setCategoryImage(newCategory?.image || "/images/default-category.jpg");
  }, [categoryId]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  const products = useMemo(() => {
    if (!data) return [];

    return data.map((product) => ({
      id: product.ItemCode,
      image: product.image || categoryImage || "/images/prod4.jpg",
      name: product.ItemName,
      price: product.ItemPrices,
      discount: product.discount,
    }));
  }, [data, categoryImage]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery);
      const matchesFilters = Object.keys(selectedFilters).every(
        (filter) =>
          !selectedFilters[filter] ||
          product[filter] === selectedFilters[filter]
      );
      return matchesSearch && matchesFilters;
    });
  }, [products, searchQuery, selectedFilters]);

  // Event handlers
  const handleProductClick = (productId) => {
    navigate(`/tienda/product/${productId}`);
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

  // Now we can have conditional returns
  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos.</p>;

  const renderFilterSection = (filterType, title) => (
    <div>
      <h3 className="font-antonio text-left text-lg mt-4">{title}</h3>
      <ul>
        {FILTER_OPTIONS[filterType].map((value) => (
          <li key={value}>
            <button
              className={`text-sm ${
                selectedFilters[filterType] === value
                  ? "font-bold text-red-500"
                  : ""
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
      <div className="relative w-full flex flex-col items-center justify-center bg-white">
        <div className="relative z-10 text-center w-full max-w-screen-xl mt-5 ">
          <IntroductoryText
            title={
              <>
                Nuestros <span className="text-lacampana-red2">aceros</span>
              </>
            }
            sizeTitle="tablet:text-[6rem] lg:text-[6rem]"
            mt="mt-2 tablet:mt-[0px] lg:mt-0"
            sizeTitleMobile="text-[60px]"
            bgTitlePaddingMobile="pt-3"
            bgTitle="Lideres en acero"
            bgTitleMargin="mt-10"
            justify="center"
            right="right-0"
            size="text-5xl"
            left="left-0"
            mb="mb-5"
          />
        </div>
      </div>
      {!isMobile && (
        <div className="flex items-center hover:text-red-600 space-x-2">
          <BreadCrumbs path={rawCategoryId} />
        </div>
      )}

      <div className="flex justify-center">
        <aside className="w-1/5 h-1/2 bg-gray-100 p-4 shadow hidden lg:block">
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Buscar producto"
              className="w-full p-2 pr-8 rounded bg-gray-100 focus:outline-none"
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
          <h2 className="text-lg border-b border-gray-500 text-left font-antonio mb-6">
            FILTRAR POR
          </h2>
          {renderFilterSection("espesor", "Espesor")}
          {renderFilterSection("longitud", "Longitud")}
          {renderFilterSection("ancho", "Ancho")}
        </aside>
        <main className="desktop:pl-4 sm:px-4 w-4/5">
          {isMobile && <FilterSearchBar />}

          <div className="grid grid-cols-2 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 ">
            {filteredProducts.slice(0, visibleProducts).map((product) => (
              <div
                key={product.id}
                className="p-1 cursor-pointer "
                onClick={() => handleProductClick(product.id)}
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  discount={product.discount}
                />
              </div>
            ))}
          </div>
          {visibleProducts < filteredProducts.length && (
            <div className="mt-6 pb-12 text-center text-black hover:scale-90 hover:bg-white transition duration-300 ease-in-out">
              <ActionButton
                onClick={handleLoadMore}
                text="Cargar más"
                bgColor="black"
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
export default CategoryPage;
