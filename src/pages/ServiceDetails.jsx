import { useParams } from "react-router"
import IntroductoryText from "../sections/common/IntroductoryText"
import services from "../utils/services"
import { CiPlay1 } from "react-icons/ci";
import ContactForm from "../components/common/Form";
import Advantages from "../sections/ServiceDetails/Advantages";
import FAQ from "../components/common/FAQ";

const ServiceDetails = () => {
  const { serviceId } = useParams()
  const serviceData = services.find(service => service.id == serviceId)

  return (
    <article className="flex flex-col gap-16">
      <section className="max-w-screen-desktop w-full self-center px-4 desktop:px-8 py-8 desktop:py-16">
        <IntroductoryText
          title={serviceData.name}
          bgTitle={serviceData.name}
          description={serviceData.description}
        >
          <div className="w-full tablet:w-1/2 flex-none h-[300px] tablet:h-[350px] rounded-tl-2xl overflow-hidden relative">
            <div className="absolute left-0 right-0 bottom-0 top-0 flex justify-center items-center">
              <button className="btn btn-circle bg-lacampana-red2 btn-ghost pl-1">
                <CiPlay1 className="text-2xl text-white" />
              </button>
            </div>
            <img className="w-full h-full object-cover" src={serviceData.image} alt="" />
          </div>
        </IntroductoryText>
      </section>
      {/* SECCION BENEFICIOS ---------------------------------------------------------------------------------------------- */}
      <Advantages 
        image={serviceData.image}
        description={serviceData.advantages.description}
        advantagesList={serviceData.advantages.advantagesList}
      />
      {/* SECCION PREGUNTAS FRECUENTES Y FORMULARIO ----------------------------------------------------------------------- */}
      <section className="max-w-screen-desktop w-full self-center px-4 desktop:px-8 py-8 desktop:py-16 flex flex-col desktop:flex-row gap-8">
        <section className="w-full desktop:w-2/3 flex flex-col gap-4">
          <h3>Preguntas <span className="text-lacampana-red2">Frecuentes</span></h3>
          <FAQ questions={serviceData.faq} />
        </section>
        <section className="w-full desktop:w-1/3 flex flex-col gap-4">
          <h3>Contacte un <span className="text-lacampana-red2">Asesor</span></h3>
          <ContactForm 
          origin="Página de Servicios"/>
        </section>
      </section>
    </article>
  )
}

export default ServiceDetails