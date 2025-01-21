import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layouts/Layout";

const ProductDetailPage = () => {
	const { productId } = useParams();

	const [activeTab, setActiveTab] = useState("normas");

	const products = [
		{
			id: 1,
			name: "Tubo Mueble Cuadrado Esp 1.10 un 3/4 Primera - Norma Ntc 1986",
			price: "$19.693",
			discount: "-20%",
			image: "/images/PERFILESTIPODRYWALL.png",
			description:
				"Presentamos la nueva placa colaborante que se puede utilizar por ambas caras. Su innovador diseño alcanza un metro de ancho útil, es rápida en su instalación, liviana y de gran capacidad de carga. Fabricada con altos estándares de calidad y a la medida requerida, esta placa es la mejor opción para entrepisos.",
			options: {
				paquete: ["Paquete 1", "Paquete 2"],
				longitud: ["1.10 mm", "1.20 mm"],
				ancho: ["1.10 mm", "1.20 mm"],
				colorExterno: ["Rojo", "Blanco", "Negro"],
				colorInterno: ["Gris", "Plata"],
			},
		},
	];

	const relatedProducts = [
		{
			id: 2,
			name: "Tubo Mueble Cuadrado Esp 1.10 un 3/4 Primera - Norma Ntc 1986",
			price: "$19.693 IVA incluido",
			discount: "-20%",
			image: "/images/prod3.jpg",
		},
		{
			id: 3,
			name: "Plancha Hot Rolled Esp 6.00 un 1829x6096 Primera",
			price: "$2.386.483 IVA incluido",
			discount: "-20%",
			image: "/images/prod3.jpg",
		},
		{
			id: 4,
			name: "Marco Ventana Corriente Esp 1.00 un 6.00 mt Primera",
			price: "$32.516 IVA incluido",
			discount: "-20%",
			image: "/images/prod3.jpg",
		},
		{
			id: 5,
			name: "Varilla Corrugada Esp 1/4 x 6 un Primera",
			price: "$19.693 IVA incluido",
			discount: "-20%",
			image: "/images/prod3.jpg",
		},
	];

	const product = products.find((p) => p.id === parseInt(productId));

	if (!product) {
		return <div>Producto no encontrado</div>;
	}

	return (
		<div className="max-w-7xl mx-auto p-6">
			<div className="flex gap-6">
				{/* Galería de imágenes en miniatura */}
				<div className="flex">
					<div className="flex flex-col gap-4">
						{[...Array(3)].map((_, index) => (
							<img
								key={index}
								src={product.image}
								alt={`Vista ${index + 1}`}
								className="w-72 h-32 border rounded-lg cursor-pointer"
							/>
						))}
					</div>
					<div className="ml-4">
						<img
							src={product.image}
							alt={product.name}
							className="w-[1500px] h-auto border rounded-lg"
						/>
					</div>
				</div>

				{/* Información del producto */}
				<div className="flex-grow">
					<h1 className="text-2xl font-bold">{product.name}</h1>
					<p className="text-gray-600 mt-4">{product.description}</p>

					<div className="mt-6">
						<span className="text-3xl font-bold text-red-500">
							{product.price}
						</span>
						<span className="text-sm text-gray-500 ml-4">
							{product.discount}
						</span>
					</div>

					<button className="mt-6 bg-red-500 text-white px-6 py-2 rounded">
						Añadir al carrito
					</button>
				</div>
			</div>

			{/* Sección de pestañas verticales */}
			<div className="mt-12 flex border rounded-lg">
				{/* Pestañas verticales */}
				<div className="w-1/4 bg-gray-100 flex flex-col border-r">
					<button
						className={`py-4 px-6 text-left ${activeTab === "normas"
								? "bg-red-500 text-white font-semibold"
								: "text-gray-700"
							}`}
						onClick={() => setActiveTab("normas")}
					>
						Normas
					</button>
					<button
						className={`py-4 px-6 text-left ${activeTab === "ventajas"
								? "bg-red-500 text-white font-semibold"
								: "text-gray-700"
							}`}
						onClick={() => setActiveTab("ventajas")}
					>
						Ventajas
					</button>
					<button
						className={`py-4 px-6 text-left ${activeTab === "usos"
								? "bg-red-500 text-white font-semibold"
								: "text-gray-700"
							}`}
						onClick={() => setActiveTab("usos")}
					>
						Usos
					</button>
				</div>

				{/* Contenido de la pestaña activa */}
				<div className="w-3/4 p-6">
					{activeTab === "normas" && (
						<div>
							<p>
								<strong>NTC 5805:</strong> Lámina colaborante de acero
								conformada en frío.
							</p>
							<p className="mt-2">
								<strong>ASTM A653 = NTC 4011:</strong> Láminas de acero
								recubiertas con zinc (galvanizadas) o recubiertas con aleación
								hierro y zinc mediante procesos de inmersión en caliente.
							</p>
						</div>
					)}
					{activeTab === "ventajas" && (
						<div>
							<ul className="list-disc ml-6">
								<li>Alta resistencia a la corrosión.</li>
								<li>Durabilidad garantizada.</li>
								<li>Fácil instalación.</li>
								<li>Material 100% reciclable.</li>
							</ul>
						</div>
					)}
					{activeTab === "usos" && (
						<div>
							<p>
								Este producto es ideal para estructuras metálicas, entrepisos
								y refuerzos en construcción.
							</p>
						</div>
					)}
				</div>
			</div>

			{/* Sección de productos relacionados */}
			<div className="mt-12">
				<h2 className="text-xl font-bold text-red-500">
					Complementa tu compra
				</h2>
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
			</div>
		</div>
	);
};

export default ProductDetailPage;
