const Advantages = ({ image, description, advantagesList }) => {
  return (
    <section className="flex relative px-4 desktop:px-0">
      <div className="absolute w-full h-full flex justify-end pt-16 tablet:pt-0">
        <div className="max-w-screen-2xl w-full bg-lacampana-red1 rounded-tl-full tablet:rounded-l-full overflow-hidden">
          <img className="opacity-20 w-full h-full object-cover" src={image} alt="" />
        </div>
      </div>
      <article className="z-10 flex flex-col tablet:flex-row gap-16 items-center">
        <section className="tablet:w-1/3 flex tablet:justify-end">
          <img className="w-2/3 min-h-[300px] max-h-[450px] object-cover rounded-l-2xl rounded-tr-2xl" src={image} alt="" />
        </section>
        <section className="flex flex-col gap-8 text-start w-2/3 pb-16 tablet:py-32 max-w-[800px] tablet:pr-16">
          <h3 className="text-white">Beneficios de contratar este servicio con nosotros</h3>
          <p className="text-white">{description}</p>
          <ul className="flex flex-col gap-4">
            {advantagesList.map(advantage =>
              <li className="list-disc" key={`advantage-${advantage.id}`}>
                <p className="text-white">{advantage.description}</p>
              </li>
            )}
          </ul>
          <button className="lacampana-btn py-2 px-8 w-fit bg-lacampana-gray1 text-white">
            Contactar
          </button>
        </section>
      </article>
    </section>
  )
}

export default Advantages