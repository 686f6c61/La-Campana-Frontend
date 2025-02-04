import HighlightedCard from "../../components/Cart/HighlightedCard"
import highlighted from "../../utils/highlighted"

const Highlighted = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <img src="/images/pay-methods.png" alt="img" />
      <ul className="flex flex-col gap-4">
        {highlighted.map(info =>
          <li>
            <HighlightedCard
              title={info.title}
              description={info.description}
              icon={info.icon}
              link={info.id === 5 &&
                <button className="lacampana-btn w-full bg-white border border-lacampana-gray1 text-lacampana-gray1 py-2 font-bold">
                  Hablar con un asesor
                </button>}
            />
          </li>
        )}
      </ul>
    </section>
  )
}

export default Highlighted