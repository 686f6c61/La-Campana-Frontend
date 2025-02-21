import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FilterSearchBar from "../FilterSearchBar";
import IntroductoryText from "../../../sections/common/IntroductoryText";
import Card from "../Card";
import { useGetProductsByTextQuery } from "../../../store/reducers/apiSlice";

const BreadCrumbs = () => {
	return (
		<div className="flex justify-center ">
			<ol class="list-reset py-4 pl-4 rounded flex bg-grey-light text-lacampana-gray2">
				<li class="px-2"><a href="/" class="no-underline text-open-sans text-sm">Inicio</a></li>
				<li>/</li>
				<li class="px-2"><a href="/product" class="no-underline text-open-sans text-sm">Tienda</a></li>
				<li>/</li>
				<li class="px-2 text-open-sans">Láminas</li>
			</ol>
		</div>
	)
}
const FILTER_OPTIONS = {
	espesor: ["1.10 mm", "1.15 mm", "1.20 mm", "1.50 mm"],
	longitud: ["1.10 mm", "1.15 mm", "1.20 mm", "1.50 mm"],
	ancho: ["1.10 mm", "1.15 mm", "1.20 mm", "1.50 mm"],
};

const CategoryPage = () => {
	const { categoryId } = useParams();
	const navigate = useNavigate();
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	const [selectedFilters, setSelectedFilters] = useState({
		espesor: "",
		longitud: "",
		ancho: "",
	});
	const [searchQuery, setSearchQuery] = useState("");
	const [visibleProducts, setVisibleProducts] = useState(8);

	// Get data for current category
	const { data, error, isLoading, refetch } = useGetProductsByTextQuery(categoryId);

	useEffect(() => {
    // Reset visible products count when category changes
    setVisibleProducts(8);
    
    // Force a refetch of the data
    refetch();
    
    return () => {
      // Cleanup when component unmounts or category changes
      setVisibleProducts(8);
    };
  }, [categoryId, refetch]);


	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (isLoading) return <p>Cargando...</p>;
	if (error) return <p>Error al cargar los datos.</p>;

	const products = useMemo(() => {
    if (!data) return [];
    
    return data.map((product) => ({
      id: product.ItemsGroupCode,
      image: product.image || "images/prod4.jpg",
      title: product.ItemName,
      price: `${product.ItemCode}`,
      discount: product.discount || "-",
    }));
  }, [data]);

	const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery);
      const matchesFilters = Object.keys(selectedFilters).every(
        (filter) => !selectedFilters[filter] || product[filter] === selectedFilters[filter]
      );
      return matchesSearch && matchesFilters;
    });
  }, [products, searchQuery, selectedFilters]);

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

	const renderFilterSection = (filterType, title) => (
		<div>
			<h3 className="font-antonio text-left text-lg mt-4">{title}</h3>
			<ul>
				{FILTER_OPTIONS[filterType].map((value) => (
					<li key={value}>
						<button
							className={`text-sm ${selectedFilters[filterType] === value ? "font-bold text-red-500" : ""
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
				<div className="relative z-10 text-center w-full max-w-screen-xl " >
					<IntroductoryText
						title={<>Nuestros <span className="text-lacampana-red2">aceros</span></>}
						bgTitle="Lideres en acero"
						justify="center"
					/>
				</div>
			</div>
			{!isMobile && <div className="flex items-center space-x-2">
				<BreadCrumbs />
			</div>}

			<div className="flex">
				<aside className="w-1/4 h-1/2 bg-gray-100 p-4 shadow hidden lg:block">
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
					<h2 className="text-lg border-b border-gray-500 text-left font-antonio mb-6">FILTRAR POR</h2>
					{renderFilterSection("espesor", "Espesor")}
					{renderFilterSection("longitud", "Longitud")}
					{renderFilterSection("ancho", "Ancho")}
				</aside>
				<main className=" pl-4">
					{isMobile && <FilterSearchBar />}

					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
						{filteredProducts.slice(0, visibleProducts).map((product) => (
							<div
								key={product.id}
								className=" p-2 cursor-pointer "
								onClick={() => handleProductClick(product.id)}
							>
								<Card product={product} />
							</div>
						))}
					</div>
					{
						visibleProducts < filteredProducts.length && (
							<div className="mt-6 pb-12 text-center">
								<button
									onClick={handleLoadMore}
									className="bg-black text-white px-6 py-2 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-red-600"
								>
									Cargar más
								</button>
							</div>
						)
					}
				</main>
			</div>
		</div>
	);
};
export default CategoryPage;
