import ActionButton from "../../components/common/ActionButton";

const Advantages = ({ image, description, advantagesList }) => {
  return (
    <section className="flex relative px-4 desktop:px-0 mt-10">
      {/* Fondo decorativo curvo rojo */}
      <div className="absolute pl-5 tablet:pl-0 w-full tablet:w-[76%] right-0 h-full flex justify-end pt-16 tablet:pt-0 md:pl-60">
        <div className="max-w-screen-2xl w-full bg-lacampana-red1 md:rounded-tl-full rounded-tl-[150px] rounded-tr-[50px] tablet:rounded-l-full overflow-hidden">
          <img
            className="opacity-20 w-full h-full object-cover"
            src={image}
            alt=""
          />
        </div>
      </div>

      {/* Contenido */}
      <article className="z-10 flex flex-col tablet:flex-row gap-16 items-center w-full max-w-screen-2xl mx-auto">
        {/* Imagen a la izquierda más grande */}
        <section className="tablet:w-2/5 w-full flex justify-center tablet:justify-end">
          <img
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] 
             h-[300px] sm:h-[260px] md:h-[320px] tablet:h-[470px] 
             object-cover rounded-2xl tablet:rounded-l-2xl tablet:rounded-tr-2xl 
             transform translate-x-[-80px] tablet:translate-x-[0px]"
            alt="Imagen del servicio"
            src={image}
          />
        </section>

        {/* Texto + Lista de beneficios */}
        <section className="flex flex-col gap-8 md:pl-0 pl-8 text-start tablet:w-3/5 pb-16 tablet:py-32 max-w-[800px] tablet:pr-10">
          <h3 className="text-white text-2xl font-bold">
            Beneficios de contratar este servicio con nosotros
          </h3>
          <p className="text-white">{description}</p>

          {/* Lista con íconos vectoriales */}
          <ul className="flex flex-col gap-4 ">
            {advantagesList.map((advantage, i) => (
              <li
                key={`advantage-${advantage.id || i}`}
                className="flex gap-2 items-start"
              >
                <img
                  src="/images/vector.png"
                  alt="Ícono"
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <p className="text-white">{advantage.description}</p>
              </li>
            ))}
          </ul>

          <ActionButton
            text="Contactar"
            link=""
            bgColor="lacampana-gray1"
            textColor="white"
            borderColor="lacampana-gray1"
            className="hover:bg-white hover:text-lacampana-gray1 hover:border-lacampana-gray1"
          />
        </section>
      </article>
    </section>
  );
};

export default Advantages;
