import React from "react";
import { FiSearch } from "react-icons/fi";

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

const FilterSearchBar = () => {
	return (
		<div>
			<BreadCrumbs />
			<div className="flex">
				<div className="w-2/6 text-center">
					<button
						className="bg-lacampana-red2 text-white px-10 py-2 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-red-600"
					>
						Filtro
					</button>
				</div>
				<div className="relative w-4/6 pr-2 ">
					<input
						type="text"
						placeholder="Buscar producto"
						className="w-full p-2 pr-10 rounded-tl-full rounded-bl-full rounded-tr-full bg-gray-100 focus:outline-none"
					/>
					<button className="absolute right-0 top-0 h-full w-12 flex items-center justify-center rounded-tl-full rounded-bl-full rounded-tr-full  hover:bg-red-300">
						<FiSearch className="text-black text-lg" />
					</button>
				</div>
			</div>
		</div>

	)
}

export default FilterSearchBar;