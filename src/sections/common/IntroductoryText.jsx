const IntroductoryText = ({ title = "Título", subtitle, description, bgTitle = "Título", justify = "start", children }) => {
  return (
    <section className="relative">
      <div className="absolute left-0 right-0 -z-10 px-4 desktop:px-8">
        <h1 className="text-[40px] tablet:text-[80px] desktop:text-[140px] bg-clip-text text-transparent bg-gradient-to-t from-lacampana-gray4/20 to-lacampana-gray4">{bgTitle}</h1>
      </div>
      <article className="pt-8 tablet:pt-20 desktop:pt-36 flex flex-col tablet:flex-row gap-16 px-4 desktop:px-8">
        {/* Desktop Text */}
        <section className={`hidden text-${justify} tablet:flex flex-col gap-8 text-wrap w-full tablet:w-1/3`}>
          <div>
            <h1>{title}</h1>
            <span className="font-open-sans text-2xl text-lacampana-gray1 uppercase">{subtitle}</span>
          </div>
          <p>{description}</p>
        </section>
        {/* Movile Text */}
        <section className={`tablet:hidden flex flex-col gap-8 text-wrap w-full`}>
          <div>
            <h1>{title}</h1>
            <span className="font-open-sans text-2xl text-lacampana-gray1 uppercase">{subtitle}</span>
          </div>
          <p>{description}</p>
        </section>
        {children}
      </article>
    </section>
  )
}

export default IntroductoryText