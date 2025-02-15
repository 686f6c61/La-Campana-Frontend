import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardGrid from "../CardGrid";
import Comments from "../Comments";
import ProductTabs from "../ProductTabs";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "../../../features/cart/cartSlice";
import products from "../../../utils/products";
import relatedProducts from "../../../utils/relatedProducts";

const ProductGallery = ({ image }) => (
	<div className="flex flex-col lg:flex-row-reverse gap-4">
		<div className="flex-1">
			<img src={image} alt="Producto" className="w-full h-auto object-contain border rounded-lg" />
		</div>
		<div className="grid grid-cols-3 lg:flex lg:flex-col gap-2 mt-4 lg:mt-0 lg:mr-4">
			{[...Array(3)].map((_, index) => (
				<img key={index} src={image} alt={`Vista ${index + 1}`} className="h-20 w-full lg:h-32 lg:w-24 object-cover border rounded-lg cursor-pointer" />
			))}
		</div>
	</div>
);

const ButtonTechnicalInformation = ({ }) => (
	<button className="bg-lacampana-gray1 font-montserrat text-white w-full md:w-full h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-md">
		Ficha Técnica
	</button>
);

const ProductGalleyAndTechnicalInformation = ({ image, isMobile }) => (
	<div className="w-full lg:w-2/5">
		<ProductGallery image={image} />
		<div className="mt-4 flex justify-center lg:justify-start">
			{!isMobile && <ButtonTechnicalInformation />}
		</div>
	</div>
);


const ProductOptions = ({ options }) => (
	<div className="flex flex-wrap gap-6 text-left mt-8">
		{["paquete", "longitud", "ancho"].map((prop, index) => (
			<div key={index} className="flex-1 min-w-[120px]">
				<label className="block font-bold font-open-sans mb-2 capitalize">{prop}</label>
				<select className="border w-full bg-gray-100 font-open-sans text-sm  text-gray-500 p-2 rounded 
                   sm:w-full md:w-1/2 lg:w-full">

					{options[prop].map((option, i) => (
						<option key={i}>{option}</option>
					))}
				</select>
			</div>
		))}
	</div >
);

const ProductColors = ({ options }) => (
	<div className="flex flex-col sm:w-full lg:flex-row lg:w-full gap-6 mt-8">
		{["colorExterno", "colorInterno"].map((colorType, index) => (
			<div key={index} className="w-full lg:w-1/2 lg:pb-6">
				<label className="block font-bold text-left font-open-sans mb-2 capitalize">
					{colorType.replace("color", "Color ")}
				</label>
				<div className="flex gap-2 flex-wrap">
					{options[colorType].map((color, i) => (
						<div
							key={i}
							className="w-8 h-8 rounded-full cursor-pointer border"
							style={{ backgroundColor: color }}
						></div>
					))}
				</div>
			</div>
		))}
	</div>
);



const QuantitySelector = () => (
	<div className="flex items-center gap-2">
		<button className="bg-gray-200 w-8 h-8 flex items-center justify-center font-bold text-gray-700">
			-
		</button>
		<input type="number" min="1" defaultValue="1" className="w-12 text-center border border-gray-300 rounded-md" />
		<button className="bg-gray-200 w-8 h-8 flex items-center justify-center font-bold text-gray-700">
			+
		</button>
	</div>
);

const ActionButtons = ({ addToCart, productPrice }) => (
	<div className="mt-4 flex lg:flex-row items-center justify-center lg:items-center gap-6">
		<span className="text-lg font-bold text-black">${productPrice}</span>
		<QuantitySelector />
		<button onClick={addToCart} className="bg-lacampana-red2 font-montserrat text-white w-[180px] md:w-[270px] h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-md">
			Añadir al carrito
		</button>
	</div>
);

const ProductDetailPage = () => {
	const { productId } = useParams();
	const [activeTab, setActiveTab] = useState("normas");

	const cartProducts = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const product = products.find((p) => p.id === parseInt(productId));
	if (!product) {
		return <div>Producto no encontrado</div>;
	}

	const addToCart = () => {
		const sameProduct = cartProducts.find(cartProduct => cartProduct.id === product.id);
		if (sameProduct) {
			dispatch(updateItem({ ...product, quantity: sameProduct.quantity + 1 }));
		} else {
			dispatch(addItem(product));
		}
	};
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);


	return (
		<div className="max-w-7xl mx-auto p-4 md:p-8">
			{isMobile && <h1 className="text-3xl pb-4 font-antonio">{product.name}</h1>}
			<div className="flex flex-col lg:flex-row gap-8">
				<ProductGalleyAndTechnicalInformation image={product.image} isMobile={isMobile} />
				<div className="w-full lg:w-3/5">
					{!isMobile && <h1 className="text-3xl font-antonio">{product.name}</h1>}
					<p className="text-gray-600 mt-2 text-left font-opensans">{product.description}</p>
					{isMobile && <ActionButtons addToCart={addToCart} productPrice={product.price} />}
					<ProductOptions options={product.options} />
					<ProductColors options={product.options} />
					{isMobile &&
						<div className="mt-12">
							<ButtonTechnicalInformation />
						</div>

					}
					{!isMobile && <ActionButtons addToCart={addToCart} productPrice={product.price} />}
				</div>
			</div>

			<div className="mt-12">
				<ProductTabs />
			</div>

			<div className="mt-16">
				<div className="flex flex-col md:flex-row items-center gap-6 text-left max-w-screen-lg mx-auto">
					<h2 className="text-xl font-antonio text-red-500">Complementa tu compra</h2>
					<h2 className="text-xl font-antonio text-black">Productos similares</h2>
				</div>
				<CardGrid products={relatedProducts} lgCol="4" smCol="2" />
			</div>

			<div className="mt-16">
				<Comments />
			</div>
		</div>
	);
};

export default ProductDetailPage;
