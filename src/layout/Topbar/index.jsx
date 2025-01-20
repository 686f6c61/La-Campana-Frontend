const Topbar = () => {
  return (
    <article>
      <div className="max-w-screen-desktop flex flex-col gap-2 tablet:flex-row justify-self-center justify-between w-full tablet:py-2 tablet:px-2 text-p3-desktop">
        <p className="text-p3-desktop text-start">ENVÍOS GRATIS</p>
        <section className="flex gap-2 tablet:gap-4 flex-wrap">
          <button className="lacampana-btn bg-lacampana-gray4 px-4 py-1">
            <p className="text-p3-desktop text-lacampana-gray1">Bogotá</p>
          </button>
          <button className="lacampana-btn bg-lacampana-gray1 px-4 py-1">
            <p className="text-p3-desktop text-lacampana-white">Comprar ahora</p>
          </button>
          <button className="lacampana-btn bg-lacampana-gray4 px-4 py-1">
            <p className="text-p3-desktop text-lacampana-gray1">Siguenos en</p>
          </button>
        </section>
      </div>
    </article>
  )
}

export default Topbar