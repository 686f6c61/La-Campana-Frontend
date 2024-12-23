import { Link } from "react-router"

const categories = [
  {
    id: 1,
    name: "Perfiles Drywall",
    results: 20,
    img: "/images/categories/perfiles-drywall.jpeg"
  },
  {
    id: 2,
    name: "Tejas y Cubiertas",
    results: 20,
    img: "/images/categories/tejas-y-cubiertas.jpeg"
  },
  {
    id: 3,
    name: "Perfiles Ornamentación",
    results: 20,
    img: "/images/categories/perfiles-de-ornamentacion.jpeg"
  },
  {
    id: 4,
    name: "Tuberías",
    results: 20,
    img: "/images/categories/tuberias.jpeg"
  },
  {
    id: 5,
    name: "Láminas",
    results: 20,
    img: "/images/categories/laminas.jpeg"
  },
]

const Categories = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h3>Categorias <span className="text-lacampana-red2">Destacadas</span></h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-screen-desktop">
        {categories.map(category =>
          <Link key={`category-card-${category.id}`} className="relative bg-center h-[320px] rounded-tl-2xl hover:bg-cover transition ease-in-out duration-300 overflow-hidden group">
            <img className="absolute h-full object-cover transition ease-in-out duration-300 group-hover:scale-125 -z-10" src={category.img} alt="image" />
            <div className="bg-gradient-to-b from-lacampana-gray1/0 via-lacampana-gray1/80 to-lacampana-gray1 flex flex-col justify-end p-4 h-full rounded-tl-2xl z-10">
              <h4 className="text-lacampana-white">{category.name}</h4>
              <p className="text-lacampana-white text-p2 lg:text-p2-desktop">{category.results} productos</p>
            </div>
          </Link>
        )}
      </div>
      <Link className="lacampana-btn">
        Ver más categorías
      </Link>
    </div>
  )
}

export default Categories