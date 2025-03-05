import { Link } from "react-router"
import ImageCard from "../../components/common/ImageCard"
import categories from "../../utils/categories"

const Categories = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h3>Categorias <span className="text-lacampana-red2">Destacadas</span></h3>
      <ul className="grid grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-5 gap-4 max-w-screen-desktop">
        {categories.slice(0, 5).map(category =>
          <ImageCard
            key={`category-img-card-${category.id}`}
            title={category.name}
            subtitle={`${category.results} productos`}
            image={category.image}
            link={category.link}
          />
        )}
      </ul>
      <Link to="/tienda" className="lacampana-btn px-8 py-2 bg-lacampana-red2 font-semibold text-white">
        Ver más categorías
      </Link>
    </div>
  )
}

export default Categories