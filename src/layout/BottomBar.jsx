import LocationCard from "../components/common/LocationCard";
import AdvisorCard from "../components/layouts/AdvisorCard";
import ModalScreen from "../components/layouts/ModalScreen";
import advisors from "../utils/advisors";
import locations from "../utils/locations";

const BottomBar = () => {
  return (
    <footer className="bg-lacampana-red2">
      <article className="flex flex-col tablet:flex-row items-center justify-between gap-8 max-w-screen-desktop w-full justify-self-center px-4 tablet:px-8 py-4 tablet:py-8">
        <p className="text-white text-p2 desktop:text-p2-desktop">Copyright © La Campana Servicios de Acero. Todos los derechos reservados.</p>
        <div className="flex flex-wrap gap-2 tablet:gap-4 w-fit">
          <ModalScreen
            id="locations-home"
            button={<button className="lacampana-btn text-nowrap h-fit px-8 py-2 text-lacampana-red2 bg-white font-semibold" onClick={() => document.getElementById("locations-home").showModal()}>
              Sedes
            </button>}
          >
            {locations.map(location =>
              <LocationCard
                name={location.name}
                img={location.img}
                phone={location.phone}
                address={location.address}
              />
            )}
          </ModalScreen>
          <div className="order-last desktop:order-none w-full tablet:w-fit">
            <ModalScreen
              id="talk-with-advisor-home"
              button={<button className="lacampana-btn w-full tablet:w-fit tablet:order-none text-nowrap h-fit px-8 py-2 text-white border border-white font-semibold" onClick={() => document.getElementById("talk-with-advisor-home").showModal()}>
                Hablar con un asesor
              </button>}
            >
              {advisors.map(advisor =>
                <AdvisorCard
                  name={advisor.name}
                  phone={advisor.phone}
                  location={advisor.location}
                />
              )}
            </ModalScreen>
          </div>
          <button className="lacampana-btn text-nowrap h-fit px-8 py-2 text-white font-semibold bg-lacampana-gray1">
            Solicitar un crédito
          </button>
        </div>
      </article>
    </footer>
  )
}

export default BottomBar