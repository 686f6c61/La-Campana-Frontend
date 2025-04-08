import LocationCard from "../components/common/LocationCard";
import AdvisorCard from "../components/layouts/AdvisorCard";
import ModalScreen from "../components/layouts/ModalScreen";
import advisors from "../utils/advisors";
import locations from "../utils/locations";

const BottomBar = () => {
  return (
    <footer className="bg-lacampana-red2">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly px-4 pt-5 pb-5">
        {/* Texto del copyright */}
        <p className="md:text-sm text-sm text-white pt-2 pb-2">
          Copyright © La Campana Servicios de Acero. Todos los derechos
          reservados.
        </p>

        {/* Botones para pantallas grandes */}
        <div className="hidden sm:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          {/* Botón Sedes */}
          <ModalScreen
            id="locations-home"
            button={
              <button
                className="lacampana-btn text-nowrap h-fit px-8 py-2 border-2 border-white/0 hover:border-white text-lacampana-red2 bg-white font-semibold hover:scale-90 hover:bg-lacampana-red2 hover:text-white transition duration-300 ease-in-out"
                onClick={() =>
                  document.getElementById("locations-home").showModal()
                }
              >
                Sedes
              </button>
            }
          >
            {locations.map((location) => (
              <LocationCard key={location.name} {...location} />
            ))}
          </ModalScreen>

          {/* Botón Hablar con un asesor */}
          <ModalScreen
            id="talk-with-advisor-home"
            button={
              <button
                className="lacampana-btn hover:text-lacampana-red2 border-2 hover:bg-white hover:scale-90 transition duration-300 ease-in-out w-full md:w-auto text-nowrap h-fit px-8 py-2 text-white border border-white font-semibold"
                onClick={() =>
                  document.getElementById("talk-with-advisor-home").showModal()
                }
              >
                Hablar con un asesor
              </button>
            }
          >
            {advisors.map((advisor) => (
              <AdvisorCard key={advisor.name} {...advisor} />
            ))}
          </ModalScreen>

          {/* Botón Solicitar crédito */}
          <button
            className="lacampana-btn text-nowrap h-fit px-8 py-2 hover:bg-white hover:text-lacampana-gray1 hover:scale-90 transition duration-300 ease-in-out text-white font-semibold bg-lacampana-gray1"
            onClick={() =>
              window.open(
                "https://clientes.covifactura.com/linksolicitudcupo/#/cupo-afiliado?codigo=1N8600569718",
                "_blank"
              )
            }
          >
            Solicitar crédito
          </button>
        </div>

        {/* Botones para pantallas pequeñas */}
        <div className="flex flex-col space-y-2 sm:hidden mt-4">
          <div className="flex justify-center space-x-4">
            {/* Botón Sedes */}
            <ModalScreen
              id="locations-home-mobile"
              button={
                <button
                  className="btn btn-secondary w-[100px] h-[44px] bg-white text-lacampana-red2 font-semibold text-lg px-2 py-1 rounded-tl-full rounded-bl-full rounded-tr-full hover:scale-90 hover:bg-lacampana-red2 hover:text-white transition duration-300 ease-in-out"
                  onClick={() =>
                    document.getElementById("locations-home-mobile").showModal()
                  }
                >
                  Sedes
                </button>
              }
            >
              {locations.map((location) => (
                <LocationCard key={location.name} {...location} />
              ))}
            </ModalScreen>

            {/* Botón Solicitar crédito */}
            <button
              className="btn bg-lacampana-gray1 w-[180px] h-[44px] text-white border-none text-lg px-2 py-1 rounded-tl-full rounded-bl-full rounded-tr-full hover:bg-white hover:text-lacampana-gray1 hover:scale-90 transition duration-300 ease-in-out"
              onClick={() =>
                window.open(
                  "https://clientes.covifactura.com/linksolicitudcupo/#/cupo-afiliado?codigo=1N8600569718",
                  "_blank"
                )
              }
            >
              Solicitar crédito
            </button>
          </div>

          {/* Botón Hablar con un asesor */}
          <ModalScreen
            id="talk-with-advisor-home-mobile"
            button={
              <button
                className="btn btn-outline w-[300px] h-[44px] text-white border-white text-lg px-2 py-1 rounded-tl-full rounded-bl-full rounded-tr-full w-full max-w-xs mx-auto hover:bg-white hover:scale-90 transition duration-300 ease-in-out"
                onClick={() =>
                  document
                    .getElementById("talk-with-advisor-home-mobile")
                    .showModal()
                }
              >
                Hablar con un asesor
              </button>
            }
          >
            {advisors.map((advisor) => (
              <AdvisorCard key={advisor.name} {...advisor} />
            ))}
          </ModalScreen>
        </div>
      </div>
    </footer>
  );
};

export default BottomBar;
