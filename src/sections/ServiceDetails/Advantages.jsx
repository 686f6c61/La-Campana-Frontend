import ActionButton from "../../components/common/ActionButton";

const Advantages = ({ image, description, advantagesList }) => {
  return (
    <section className="flex relative px-4 desktop:px-0">
      {/* Fondo decorativo curvo rojo */}
      <div className="absolute w-full h-full flex justify-end pt-16 tablet:pt-0 md:pl-60">
        <div className="max-w-screen-2xl w-full bg-lacampana-red1 md:rounded-tl-full rounded-tl-[250px] rounded-tr-[250px] tablet:rounded-l-full overflow-hidden">
          <img className="opacity-20 w-full h-full object-cover" src={image} alt="" />
        </div>
      </div>

      {/* Contenido */}
      <article className="z-10 flex flex-col tablet:flex-row gap-16 items-center w-full max-w-screen-2xl mx-auto">
        
        {/* Imagen a la izquierda más grande */}
        <section className="tablet:w-2/5 flex justify-center tablet:justify-end">
          <img
            className="md:w-[400px] md:h-[420px] w-[250px] h-[320px] pl-4 md:pl-0 object-cover rounded-l-2xl rounded-tr-2xl transform -translate-x-16 "
            src={image}
            alt="Imagen del servicio"
          />
        </section>

        {/* Texto + Lista de beneficios */}
        <section className="flex flex-col gap-8 md:pl-0 pl-8 text-start tablet:w-3/5 pb-16 tablet:py-32 max-w-[800px] tablet:pr-10">
          <h3 className="text-white text-2xl font-bold">Beneficios de contratar este servicio con nosotros</h3>
          <p className="text-white">{description}</p>

          {/* Lista con íconos vectoriales */}
          <ul className="flex flex-col gap-4 ">
            {advantagesList.map((advantage, i) => (
              <li key={`advantage-${advantage.id || i}`} className="flex gap-2 items-start">
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

