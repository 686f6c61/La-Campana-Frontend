import ActionButton from "../../components/common/ActionButton";

const Advisor = () => {
  return (
    <section className="relative max-w-screen-desktop w-full justify-self-center pb-80 tablet:py-32">
      <article className="bg-lacampana-red2 flex flex-col tablet:flex-row justify-between rounded-tl-2xl">
        <div className="tablet:w-1/2 text-start p-16 flex flex-col gap-4">
          <h4 className="text-white">Contacta un asesor especializado</h4>
          <p className="text-white">¡No te preocupes! En La Campana, queremos que tengas una experiencia de compra cómoda y segura. Por eso, ponemos a tu disposición un equipo de expertos asesores que te guiarán en todo el proceso de compra.</p>
          <ActionButton 
            text="Hablar con un asesor"
            link="/"
            bgColor="lacampana-gray1"
          />
        </div>
        <div className="tablet:relative tablet:w-1/2">
          <img className="absolute right-0 bottom-0" src="/images/girl.png" alt="girl" />
        </div>
      </article>
    </section>
  );
};

export default Advisor;