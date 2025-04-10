const IntroductoryText = ({
  title = "Título",
  subtitle,
  description,
  size,
  bgTitle = "Título",
  bgTitlePadding = "",
  bgTitleMargin = "",
  titleMargin = "",
  justify = "start",
  children,
  mt,
  mb,
}) => {
  return (
    <section className="relative ">
      {/* Desktop BgTitle */}
      <div
        className={`hidden tablet:block absolute left-0 right-0 -z-10 ${bgTitlePadding} ${bgTitleMargin}`}
      >
        <h1
          className={`leading-tight text-${justify} text-[40px] tablet:text-[140px] desktop:text-[140px] bg-clip-text text-transparent bg-gradient-to-t from-lacampana-gray4/20 to-lacampana-gray4`}
        >
          {bgTitle}
        </h1>
      </div>
      {/* Mobile BgTitle */}
      <div
        className={`tablet:hidden absolute left-0 right-0 -z-10 ${bgTitlePadding} ${bgTitleMargin}`}
      >
        <h1
          className={`text-[60px] tablet:text-[140px] desktop:text-[140px] bg-clip-text text-transparent bg-gradient-to-t from-lacampana-gray4/20 to-lacampana-gray4`}
        >
          {bgTitle}
        </h1>
      </div>
      <article className={`flex flex-col tablet:flex-row gap-16`}>
        {/* Desktop Text */}
        <section
          className={`hidden text-${justify} tablet:flex flex-col justify-center text-wrap w-full`}
        >
          <div className={`${titleMargin}`}>
            <h1 className={`leading-tight ${mt} ${mb} ${size}`}>{title}</h1>
            <span className="font-open-sans text-2xl text-lacampana-gray1 uppercase ">
              {subtitle}
            </span>
          </div>
<<<<<<< HEAD
          <p className="max-w-[1000px] self-center mt-8">{description}</p>
=======
          <p className="max-w-[800px] text-justify text-lacampana-gray1 font-open-sans leading-relaxed self-center">{description}</p>
>>>>>>> feature/documentos
        </section>
        {/* Mobile Text */}
        <section
          className={`tablet:hidden flex flex-col gap-8 text-wrap w-full`}
        >
          <div className={`${titleMargin}`}>
            <h1 className="mt-[1.5rem]">{title}</h1>
            <span className="font-open-sans text-2xl text-lacampana-gray1 uppercase">
              {subtitle}
            </span>
          </div>
          <p>{description}</p>
        </section>
        {children}
      </article>
    </section>
  );
};

export default IntroductoryText;
