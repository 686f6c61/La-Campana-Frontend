import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardGrid from "../CardGrid";
import Comments from "../Comments";
import ProductTabs from "../ProductTabs";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "../../../features/cart/cartSlice";
import relatedProducts from "../../../utils/relatedProducts";
import ActionButton from "../ActionButton";
import QuantitySelector from "../QuantitySelector";
import ComplementSection from "../ComplementSection";

import categories from "../../../utils/categories";

const ProductGallery = ({ image }) => (
	<div className="flex flex-col lg:flex-row-reverse gap-1">
		<div className="flex-1 relative">
			<img src={image} alt="Producto" className="w-full h-full object-cover border rounded-lg" />

			<span className="absolute top-0 left-0 bg-gray-200 w-24 lg:w-24 lg:h-7 lg:text-sm lg:pt-1 md:w-52 md:h-14 md:text-3xl md:pt-2 font-open-sans text-black px-2 py-1 rounded-tr-lg rounded-bl-lg rounded-br-lg text-md">
				-20%
			</span>
		</div>
		<div className="grid grid-cols-3 lg:flex lg:flex-col gap-2 lg:mt-0 lg:mr-2">
			{[...Array(3)].map((_, index) => (
				<img key={index} src={image} alt={`Vista ${index + 1}`} className="h-20 w-full lg:h-36 lg:w-24 object-cover border rounded-lg cursor-pointer" />
			))}
		</div>
	</div>
);

const ButtonTechnicalInformation = ({ }) => (
	<button className="bg-lacampana-gray1 font-montserrat text-white w-full h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-md">
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
			{["longitud", "ancho"].map((prop, index) => (
				<div key={index} className="flex-1 min-w-[120px]">
					<label className="block font-bold font-open-sans mb-2 capitalize">{prop}</label>
					<select className="border w-full bg-gray-100 font-open-sans text-sm  text-gray-500 p-2 rounded">

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


const ActionButtons = ({ addToCart, productPrice }) => (
	<div className="mt-4 flex lg:flex-row items-center justify-start md:justify-center lg:justify-start lg:items-center gap-6">
		<span className="text-2xl font-antonio text-black">${productPrice}</span>
		<QuantitySelector />
		<ActionButton
			text="Añadir al carrito"
			className="text-center mt-8"
			padding="py-2 px-4"
			margin=""
			onClick={addToCart}
		/>
	</div>
);

const productOptions = {
		paquete: ["Seleccione una opción", "Paquete 2", "Paquete 3"],
		longitud: ["Seleccione una opción", "1.10 mm", "1.20 mm"],
		ancho: ["Seleccione una opción", "1.10 mm", "1.20 mm"],
		colorExterno: ["#E32119", "#BDBDBD", "#3C3C3B", "#BDBDBD"],
		colorInterno: ["#F2F2F2", "#3C3C3B", "#000000"],
}

const ProductDetailPage = () => {
	const { productId } = useParams();
	const [activeTab, setActiveTab] = useState("normas");

	const cartProducts = useSelector(state => state.cart);
	const dispatch = useDispatch();
	
	const products = useSelector((state) => state.products.list);
	const categoryId = useSelector((state) => state.category.selectedCategory);
	const category = categories.find(cat => cat.id === categoryId);
	const [categoryImage, setCategoryImage] = useState(category.image)

	const defaultDescription = "Descripcion del producto donde se da mas detalle del producto, este es un mensaje generico."

	const product = products.find(p => p.ItemCode === productId);

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
	const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 950);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="max-w-7xl mx-auto p-4">
			{isMobile && <h1 className="text-3xl pb-4 font-antonio">{product.ItemName}</h1>}
			<div className="flex flex-col lg:flex-row gap-8">
				<ProductGalleyAndTechnicalInformation image={categoryImage} isMobile={isMobile} />
				<div className="w-full flex flex-col justify-between lg:w-3/5">
					{!isMobile && <h1 className="text-3xl font-antonio text-left">{product.ItemName}</h1>}
					<p className="text-gray-600 mt-2 text-left font-opensans">{product.description || defaultDescription}</p>
					{isMobile && <ActionButtons addToCart={addToCart} productPrice={product.ItemPrices} />}
					<ProductOptions options={productOptions} />
					<ProductColors options={productOptions} />
					{isMobile &&
						<div className="mt-12">
							<ButtonTechnicalInformation />
						</div>

					}
					{!isMobile && <ActionButtons addToCart={addToCart} productPrice={product.ItemPrices} />}
				</div>
			</div>

			<div className="mt-12">
				<ProductTabs />
			</div>
			<ComplementSection />

			<div className="mt-8">

				<CardGrid products={relatedProducts} lgCol="4" smCol="2" />
			</div>

			<div className="mt-16">
				<Comments productId={productId}/>
			</div>
		</div>
	);
};

export default ProductDetailPage;
