import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layouts/Layout";
import Comments from "../Comments";
import ProductTabs from "../ProductTabs";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "../../../features/cart/cartSlice";
import products from "../../../utils/products";
import relatedProducts from "../../../utils/relatedProducts";

const ProductDetailPage = () => {
	const { productId } = useParams();

	const [activeTab, setActiveTab] = useState("normas");

	const cartProducts = useSelector(state => state.cart)
	const dispatch = useDispatch()
	// 	{
	// 		id: 1,
	// 		name: "Tubo Mueble Cuadrado Esp 1.10 un 3/4 Primera - Norma Ntc 1986",
	// 		price: "19.693",
	// 		discount: "-20%",
	// 		image: "/images/prod1.jpg",
	// 		quantity: 1,
	// 		description:
	// 			"Presentamos la nueva placa colaborante que se puede utilizar por ambas caras. Su innovador diseño alcanza un metro de ancho útil, es rápida en su instalación, liviana y de gran capacidad de carga. Fabricada con altos estándares de calidad y a la medida requerida, esta placa es la mejor opción para entrepisos.",
	// 		options: {
	// 			paquete: ["Seleccione una opción", "Paquete 2", "Paquete 3"],
	// 			longitud: ["Seleccione una opción", "1.10 mm", "1.20 mm"],
	// 			ancho: ["Seleccione una opción", "1.10 mm", "1.20 mm"],
	// 			colorExterno: ["#E32119", "#BDBDBD", "#3C3C3B", "#BDBDBD"],
	// 			colorInterno: ["#F2F2F2", "#3C3C3B", "#000000"],
	// 		},
	// 	},
	// ];

	// const relatedProducts = [
	// 	{
	// 		id: 2,
	// 		name: "Tubo Mueble Cuadrado Esp 1.10 un 3/4 Primera - Norma Ntc 1986",
	// 		price: "$19.693 IVA incluido",
	// 		discount: "-20%",
	// 		image: "/images/prod3.jpg",
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
	// 		price: "$2.386.483 IVA incluido",
	// 		discount: "-20%",
	// 		image: "/images/prod3.jpg",
	// 	},
	// 	{
	// 		id: 4,
	// 		name: "Marco Ventana Corriente Esp 1.00 un 6.00 mt Primera",
	// 		price: "$32.516 IVA incluido",
	// 		discount: "-20%",
	// 		image: "/images/prod3.jpg",
	// 	},
	// 	{
	// 		id: 5,
	// 		name: "Varilla Corrugada Esp 1/4 x 6 un Primera",
	// 		price: "$19.693 IVA incluido",
	// 		discount: "-20%",
	// 		image: "/images/prod3.jpg",
	// 	},
	// ];

	const product = products.find((p) => p.id === parseInt(productId));

	if (!product) {
		return <div>Producto no encontrado</div>;
	}

	const addToCart = () => {
		const sameProduct = cartProducts.find(cartProduct => cartProduct.id === product.id)

		if (sameProduct) {
			dispatch(updateItem({ ...product, quantity: sameProduct.quantity + 1 }))
		} else {
			dispatch(addItem(product))
		}
	}

	return (
		<div className="max-w-7xl mx-auto p-8">
			<div className="flex gap-8">
				{/* Galeria de imagenes */}
				<div className="w-2/5">
					<div className="flex">
						{/* Galería de imágenes en miniatura */}
						<div className="flex-initial w-32">
							{[...Array(3)].map((_, index) => (
								<img
									key={index}
									src={product.image}
									alt={`Vista ${index + 1}`}
									className="flex-initial mt-3 h-32 object-cover border rounded-lg cursor-pointer"
								/>
							))}
						</div>
						{/* Imagen principal */}
						<div className="flex-1">
							<img
								src={product.image}
								alt={product.name}
								className="h-full w-auto object-contain border rounded-lg"
							/>
						</div>

					</div >
					{/* boton ficha tecnica */}
					<div className="mt-4">
						<button className="bg-lacampana-gray1 ont-montserrat text-white w-full h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-md">
							Ficha Tecnica
						</button>
					</div>
				</div>

				{/* Información del producto */}
				<div className="w-3/5">
					{/* header */}
					<div>
						<h1 className="text-3xl font-antonio">{product.name}</h1>
						<p className="text-gray-600 mt-4 font-opensans">{product.description}</p>
					</div>

					{/* propiedades */}
					<div className="flex flex-wrap gap-6 mt-8 justify-center w-full">
						<div className="flex-1">
							<label className="block font-bold font-open-sans mb-2">Selección de paquete</label>
							<select className="border w-full bg-gray-100 font-open-sans text-gray-500 p-2 rounded">
								{product.options.paquete.map((option, index) => (
									<option key={index}>{option}</option>
								))}
							</select>
						</div>
						<div className="flex-1">
							<label className="block font-bold font-open-sans mb-2">Longitud</label>
							<select className="border w-full bg-gray-100 font-open-sans text-gray-500 p-2 rounded">
								{product.options.longitud.map((option, index) => (
									<option key={index}>{option}</option>
								))}
							</select>
						</div>
						<div className="flex-1">
							<label className="block font-bold font-open-sans mb-2">Ancho</label>
							<select className="border w-full bg-gray-100 font-open-sans text-gray-500 p-2 rounded">
								{product.options.ancho.map((option, index) => (
									<option key={index}>{option}</option>
								))}
							</select>
						</div>
					</div>

					{/* colores */}
					<div className="flex flex-wrap gap-6 mt-8 justify-center">
						<div>
							<label className="block font-bold font-open-sans mb-2">Color externo</label>
							<div className="flex gap-2">
								{product.options.colorExterno.map((color, index) => (
									<div
										key={index}
										className="w-8 h-8 rounded-full cursor-pointer border"
										style={{ backgroundColor: color }}
									></div>
								))}
							</div>
						</div>
						<div >
							<label className="block font-bold font-open-sans mb-2">Color interno</label>
							<div className="flex gap-2">
								{product.options.colorInterno.map((color, index) => (
									<div
										key={index}
										className="w-8 h-8 rounded-full cursor-pointer border"
										style={{ backgroundColor: color }}
									>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* boton añadir al carrito*/}
					<div className="flex flex-wrap gap-6 mt-8 justify-center">
						<div className="mt-2 flex items-center gap-6">
							<span className="text-lg font-bold text-black">${product.price}</span>
							<div className="flex items-center gap-2">
								<button className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center font-bold text-gray-700">
									-
								</button>
								<input
									type="number"
									min="1"
									defaultValue="1"
									className="w-12 text-center border border-gray-300 rounded-md"
								/>
								<button className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center font-bold text-gray-700">
									+
								</button>
							</div>
							<div>
								<button onClick={addToCart} className="bg-lacampana-red2 font-montserrat text-white md:w-[270px] w-[300px] h-[44px] rounded-md rounded-tl-full rounded-bl-full rounded-tr-full text-md">
									Añadir al carrito
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-12">
				<ProductTabs />
			</div>

			<div className="mt-12">
				<div className="flex items-center gap-6 text-left max-w-screen-lg mx-auto">
					<h2 className="text-xl font-bold text-red-500">
						Complementa tu compra
					</h2>
					<h2 className="text-xl font-bold text-black">
						Productos similares
					</h2>
				</div>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
				{relatedProducts.map((product) => (
					<div
						key={product.id}
						className="border rounded-lg shadow-sm p-4 text-center"
					>
						<div className="relative">
							<span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
								{product.discount}
							</span>
							<img
								src={product.image}
								alt={product.name}
								className="w-full h-32 object-contain"
							/>
						</div>
						<h3 className="text-sm font-semibold mt-4">{product.name}</h3>
						<p className="text-red-500 font-bold mt-2">{product.price}</p>
					</div>
				))}
			</div>
			<div className="mt-16">
				<Comments />
			</div>
		</div>


	);
};

export default ProductDetailPage;
