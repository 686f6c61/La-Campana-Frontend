import { useState } from "react"
import CitySelector from "../../components/layouts/CitySelector"
import cities from "../../utils/cities"
import SocialDropdown from "../../components/layouts/SocialDropdown"
import socialMedia from "../../utils/socialMedia"
import { Link } from "react-router"

const Topbar = () => {
  const [citySelected, setCitySelected] = useState(cities[0].name)

  const handleCityChange = (city) => setCitySelected(city)

  return (
    <article>
      <div className="max-w-screen-desktop flex flex-col tablet:items-center gap-2 tablet:flex-row justify-self-center justify-between w-full tablet:py-2 tablet:px-2 text-p3-desktop">
        <p className="text-p3-desktop text-start">ENVÍOS GRATIS</p>
        <section className="flex gap-2 tablet:gap-4 flex-wrap">
          <CitySelector
            citiesList={cities}
            citySelected={citySelected}
            onCityChange={handleCityChange}
          />
          <Link to="/tienda" className="lacampana-btn flex items-center justify-center border-box h-8 w-32 bg-lacampana-gray1 text-white hover:bg-lacampana-gray4 hover:text-lacampana-gray1 hover:border border-lacampana-gray1 transition duration-300 ease-in-out px-4 py-1">
            <p className="text-p3-desktop">Comprar ahora</p>
          </Link>
          <SocialDropdown 
            socialMedia={socialMedia}
          />
        </section>
      </div>
    </article>
  )
}

export default Topbar