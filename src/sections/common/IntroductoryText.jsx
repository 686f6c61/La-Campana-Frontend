const IntroductoryText = ({
  title = "Título",
  redTitle,
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
  zIndex = "-z-10",
  sizeTitle,
  sizeTitleMobile,
  bgTitlePaddingMobile,
  flexJustify,
  ServiceDetails,
  sizeMobile,
  left,
  right,
}) => {
  return (
    <section className="relative ">
      {/* Desktop BgTitle */}
      <div
        className={`hidden tablet:block absolute ${left} ${right} ${zIndex} ${bgTitlePadding} ${bgTitleMargin}`}
      >
        <h1
          className={`leading-tight ${sizeTitle}  bg-clip-text text-transparent bg-gradient-to-t from-lacampana-gray4/20 to-lacampana-gray4`}
        >
          {bgTitle}
        </h1>
      </div>
      {/* Mobile BgTitle */}
      <div
        className={`tablet:hidden absolute left-0 right-0 ${zIndex} ${bgTitlePaddingMobile} mt-0 tablet:${bgTitleMargin}`}
      >
        <h1
          className={`${sizeTitleMobile} tablet:text-[80px] bg-clip-text text-transparent bg-gradient-to-t from-lacampana-gray4/20 to-lacampana-gray4`}
        >
          {bgTitle}
        </h1>
      </div>
      <article className={`flex flex-col tablet:flex-row pt-24`}>
        {/* Desktop Text */}
        <section
          className={`hidden text-${justify} tablet:flex flex-col ${flexJustify} text-wrap w-full`}
        >
          <div
            className={`${titleMargin} ${ServiceDetails ? "text-start" : ""}`}
          >
            <h1 className={`leading-tight ${mt} ${mb} ${size} `}>
              {title}
              {redTitle && (
                <span className="text-lacampana-red2">{redTitle}</span>
              )}
            </h1>
            {
              <span className="font-open-sans text-2xl text-lacampana-gray1 uppercase ">
                {subtitle}
              </span>
            }
          </div>
          {description && (
            <p className="max-w-[800px] text-justify text-lacampana-gray1 font-open-sans leading-relaxed self-center mt-8">
              {description}
            </p>
          )}
        </section>
        {/* Mobile Text */}
        <section
          className={`tablet:hidden flex flex-col gap-8 text-wrap w-full`}
        >
          <div className={`${titleMargin}`}>
            <h1
              className={`leading-tight mt-[-2.5rem] tablet:${mt} ${mb} ${sizeMobile} tablet:text-4xl`}
            >
              {title}
              {redTitle && (
                <span className={`text-lacampana-red2`}>{redTitle}</span>
              )}
            </h1>
            <span className="font-open-sans text-2xl text-lacampana-gray1 uppercase">
              {subtitle}
            </span>
          </div>
          {description && <p>{description}</p>}
        </section>
        {children}
      </article>
    </section>
  );
};

export default IntroductoryText;
