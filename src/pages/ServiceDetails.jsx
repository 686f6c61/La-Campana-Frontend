import { useParams } from "react-router";
import IntroductoryText from "../sections/common/IntroductoryText";
import services from "../data/services.jsx";
import Advantages from "../sections/ServiceDetails/Advantages";
import FAQ from "../components/common/FAQ";
import Form from "../components/common/Form";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const serviceData = services.find((service) => service.id == serviceId);
  const sizeTitleValue =
    serviceData.name.length <= 13
      ? "tablet:text-[5rem] lg:text-[7rem] xl:text-[9rem]"
      : "tablet:text-[3rem] lg:text-[4rem] xl:text-[6rem]";

  const mtValue =
    serviceData.name.length <= 13
      ? "mt-0 tablet:mt-[-55px] lg:mt-[-20px] xl:mt-[10px]"
      : "mt-0 tablet:mt-[-70px] lg:mt-[-60px] xl:mt-[-35px]";

  const sizeTitleMobileValue =
    serviceData.name.length <= 13 ? "text-[50px]" : "text-[35px]";

  const paddingTitleValue = serviceData.name.length <= 13 ? "pt-6" : "pt-9";

  return (
    <>
      <article className="flex flex-col overflow-hidden">
        {/* Introductory section */}
        <section className="max-w-screen-desktop w-full self-center px-4 desktop:px-8 py-8 desktop:py-0">
          <IntroductoryText
            title={serviceData.customTitle || serviceData.name}
            bgTitle={serviceData.name}
            description={
              serviceData.customDescription || serviceData.description
            }
            sizeTitle="tablet:text-[6rem] lg:text-[10rem]"
            sizeTitleMobile="text-[60px]"
            mt="mt-14"

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
            <div className="w-full mt-10 ml-0 tablet:ml-10 h-[200px] tablet:h-[350px] desktop:h-[350px] rounded-tl-2xl overflow-hidden p-2">
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
      <div className="max-w-screen-desktop w-full justify-between pb-16 mx-auto">
        <div className="font-sans">
          <IntroductoryText
            title={
              <>
                <h3 className="text-start">
                  Preguntas{" "}
                  <span className="text-lacampana-red2">Frecuentes</span>
                </h3>
                <FAQ questions={serviceData.faq} />
              </>
            }
            bgTitle=""
            description=""
            justify=""
            bgTitleMargin=""
            titleMargin=""
            ServiceDetails={true}
            flexJustify="justify-start"
          >
            <div className="flex flex-col">
              <h2 className="text-center tablet:text-start mb-5 mt-10 tablet:mt-0 text-2xl tablet:text-4xl">
                Contacte un <span className="text-lacampana-red2">asesor</span>
              </h2>
              <Form origin="Página de Servicios" padding="p-12" margin="" />
            </div>
          </IntroductoryText>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
