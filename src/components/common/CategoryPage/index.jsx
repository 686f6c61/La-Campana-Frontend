import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiSearch } from "react-icons/fi";

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
    <div className="hidden lg:flex lg:justify-start">
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
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const urlSearchQuery = searchParams.get("search") || "";
  const categoryId = rawCategoryId || "tuberia";

  const queryValue = urlSearchQuery ? urlSearchQuery : categoryId;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);
  const [selectedFilters, setSelectedFilters] = useState({
    espesor: "",
    longitud: "",
    ancho: "",
  });
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [categoryImage, setCategoryImage] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const { data, error, isLoading, refetch } = useGetProductsByTextQuery(queryValue);

  useEffect(() => {
    setSearchQuery(urlSearchQuery);
  }, [urlSearchQuery]);

  useEffect(() => {
    dispatch(setSelectedCategory(categoryId));
    setVisibleProducts(8);
    refetch();
    return () => {
      setVisibleProducts(8);
    };
  }, [queryValue, dispatch, refetch]);

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
      const matchesSearch = searchQuery
        ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

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
    setSelectedFilters((prevFilters) => {
      // If the same value is selected again, deselect it
      if (prevFilters[filterType] === value) {
        return {
          ...prevFilters,
          [filterType]: ""
        };
      }
      // Otherwise select the new value
      return {
        ...prevFilters,
        [filterType]: value
      };
    });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSearchSubmit = (query) => {
    setSearchQuery(query.toLowerCase());
    // Update URL with search parameter without navigation
    const newSearchParams = new URLSearchParams(location.search);
    if (query) {
      newSearchParams.set('search', query);
    } else {
      newSearchParams.delete('search');
    }
    navigate(`${location.pathname}?${newSearchParams.toString()}`, { replace: true });
  };

  const handleToggleMobileFilters = (isActive) => {
    setShowMobileFilters(isActive);
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
              className={`text-sm ${selectedFilters[filterType] === value
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

  const renderMobileFilters = () => {
    if (!showMobileFilters) return null;

    return (
      <div className="bg-gray-100 p-4 mb-4 rounded-lg">
        <h2 className="text-lg border-b border-gray-500 text-left font-antonio mb-4">
          FILTRAR POR
        </h2>
        {renderFilterSection("espesor", "Espesor")}
        {renderFilterSection("longitud", "Longitud")}
        {renderFilterSection("ancho", "Ancho")}

        <div className="mt-4 flex justify-center">
          <button
            className="bg-lacampana-red2 text-white px-4 py-1 rounded-full text-sm"
            onClick={() => setSelectedFilters({ espesor: "", longitud: "", ancho: "" })}
          >
          </button>
        </div>
      </div>
    );
  };

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
            mt="mt-2 tablet:mt-[-5px] lg:mt-[-5px]"
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

      {/* BreadCrumbs displayed for all screen sizes */}
      <BreadCrumbs path={rawCategoryId} />

      <div className="flex justify-center">
        <aside className="w-1/5 h-1/2 bg-gray-100 p-4 shadow hidden lg:block">
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Buscar producto"
              className="w-full p-2 pr-8 rounded bg-gray-100 focus:outline-none"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSearchSubmit(e.target.value);
                }
              }}
            />
            <button
              className="absolute h-4 right-2 top-2.5 text-gray-500"
              onClick={() => handleSearchSubmit(searchQuery)}
            >
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
            </button>
          </div>
          <h2 className="text-lg border-b border-gray-500 text-left font-antonio mb-6">
            FILTRAR POR
          </h2>
          {renderFilterSection("espesor", "Espesor")}
          {renderFilterSection("longitud", "Longitud")}
          {renderFilterSection("ancho", "Ancho")}

          <div className="mt-6">
            <button
              className="text-sm text-lacampana-red2 hover:underline"
              onClick={() => setSelectedFilters({ espesor: "", longitud: "", ancho: "" })}
            >
            
            </button>
          </div>
        </aside>
        <main className="desktop:pl-4 sm:px-4 w-full lg:w-4/5">
          {isMobile && (
            <>
              <FilterSearchBar
                onSearchSubmit={handleSearchSubmit}
                onFilterClick={handleToggleMobileFilters}
              />
              {renderMobileFilters()}
            </>
          )}

          <div className="grid grid-cols-2 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, visibleProducts).map((product) => (
                <div
                  key={product.id}
                  className="p-1 cursor-pointer"
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
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p>No se encontraron productos que coincidan con la búsqueda.</p>
                {searchQuery && (
                  <button
                    className="mt-4 text-lacampana-red2 hover:underline"
                    onClick={() => {
                      setSearchQuery('');
                      navigate(location.pathname);
                    }}
                  >
                    Limpiar búsqueda
                  </button>
                )}
              </div>
            )}
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