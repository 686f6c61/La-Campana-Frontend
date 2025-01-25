import { Link } from "react-router"
import ImageCard from "../ImageCard"

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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-screen-desktop h-[350px]">
        {categories.map(category =>
          <ImageCard 
            key={`category-img-card-${category.id}`}
            title={category.name}
            subtitle={`${category.results} productos`}
            image={category.img}
          />
        )}
      </div>
      <Link className="lacampana-btn">
        Ver más categorías
      </Link>
    </div>
  )
}

export default Categories