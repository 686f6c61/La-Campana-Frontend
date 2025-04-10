import ActionButton from "../../components/common/ActionButton";

const Advisor = () => {
  return (
    <section className="overflow-hidden relative max-w-screen-desktop w-full justify-self-center pt-0 pb-32 mx-auto tablet:pt-32">
      <article className="bg-lacampana-red2 flex flex-col tablet:flex-row justify-between rounded-tl-2xl">
        <div className="tablet:w-1/2 text-start md:p-12 p-7 md:pb-0 pb-32  flex flex-col gap-4">
          <h4 className="text-white">Contacta un asesor especializado</h4>
          <p className="text-white">
            ¡No te preocupes! En La Campana, queremos que tengas una experiencia
            de compra cómoda y segura. Por eso, ponemos a tu disposición un
            equipo de expertos asesores que te guiarán en todo el proceso de
            compra.
          </p>
          <div className="md:pt-10 pt-10 md:pb-10">
            <ActionButton
              text="Hablar con un asesor"
              link="/"
              bgColor="lacampana-gray1"
            />
          </div>
        </div>
        <div className="tablet:relative tablet:w-1/2">
          <img
            className="absolute right-0 md:bottom-0 bottom-0 w-[280px] md:w-[60%] translate-x-16 md:translate-x-0"
            src="/images/girl.png"
            alt="girl"
          />
        </div>
      </article>
    </section>
  );
};

export default Advisor;
