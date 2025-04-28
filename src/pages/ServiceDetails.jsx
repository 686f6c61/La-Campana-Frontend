import { useParams } from "react-router";
import IntroductoryText from "../sections/common/IntroductoryText";
import services from "../data/services.jsx";
import Advantages from "../sections/ServiceDetails/Advantages";
import FAQ from "../components/common/FAQ";
import Form from "../components/common/Form";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const serviceData = services.find((service) => service.id == serviceId);

  return (
    <>
      <article className="flex flex-col gap-16">
        {/* Introductory section */}
        <section className="max-w-screen-desktop w-full self-center px-4 desktop:px-8 py-8 desktop:py-0">
          <IntroductoryText
            title={serviceData.customTitle || serviceData.name}
            bgTitle={serviceData.name}
            description={
              serviceData.customDescription || serviceData.description
            }
            bgTitlePadding="pt-10"
          >
            {/* <div className="w-full md:mt-20 mt-0 tablet:w-1/2 flex-none h-[300px] tablet:h-[350px] rounded-tl-2xl overflow-hidden relative ">
              <div className="absolute left-0 right-0 bottom-0 top-0 flex justify-center items-center ">
              
<img
      src="/images/play.png"
      alt="Icono representativo"
      className="absolute z-20 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] cursor-pointer"
    />
 


              </div>
              <img className="w-full h-full object-cover" src={serviceData.image} alt="" />
            </div> */}
            <div className="w-full mt-10 h-[200px] tablet:h-[300px] desktop:h-[350px] rounded-tl-2xl overflow-hidden p-2">
              <iframe
                className="w-full h-full rounded-tl-3xl"
                src={serviceData.videoUrl}
                title="Video de servicio"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </IntroductoryText>
        </section>

        {/* Advantages section */}
        <Advantages
          image={serviceData.image}
          description={serviceData.advantages.description}
          advantagesList={serviceData.advantages.advantagesList}
        />

        {/* <section className="max-w-screen-desktop w-full self-center px-4 desktop:px-8 py-8 desktop:py-16 flex flex-col desktop:flex-row gap-8">
          <section className="w-full desktop:w-1/2 flex flex-col gap-4">
            <h3>
              Preguntas <span className="text-lacampana-red2">Frecuentes</span>
            </h3>
            <FAQ questions={serviceData.faq} />
          </section>

          <section className="w-full desktop:w-1/2 flex flex-col gap-4">
            <h3>
              Contacte un <span className="text-lacampana-red2">Asesor</span>
            </h3>
            <ContactForm origin="Página de Servicios" />
          </section>
        </section> */}
      </article>

      {/* Extra contact section */}
      <div className="max-w-screen-desktop w-full justify-self-center pt-20">
        <div className="font-sans">
          <IntroductoryText
            title={
              <>
                <h3>
                  Preguntas{" "}
                  <span className="text-lacampana-red2">Frecuentes</span>
                </h3>
                <FAQ questions={serviceData.faq} />
              </>
            }
            bgTitle=""
            description=""
            justify="center"
            bgTitleMargin=""
            titleMargin=""
          >
            <Form
              title={
                <>
                  Contacte un{" "}
                  <span className="text-lacampana-red2">asesor</span>
                </>
              }
              origin="Página de Servicios"
              padding="p-12"
              margin="md:transform -translate-y-12"
            />
          </IntroductoryText>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
