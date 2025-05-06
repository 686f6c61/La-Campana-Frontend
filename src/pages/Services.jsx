import ImageCard from "../components/common/ImageCard";
import IntroductoryText from "../sections/common/IntroductoryText";
import services from "../data/services";

const Services = () => {
  return (
    <article className="mb-16 max-w-screen-desktop w-full justify-self-center flex flex-col gap-16 px-4 desktop:px-8 py-8 desktop:py-0 mx-auto">
        <IntroductoryText
          title={
            <>
              Servicios{" "}
              <span className="text-lacampana-red2 ">Especializados</span>
            </>
          }
          bgTitle="Servicios"
          description="Lorem ipsum dolor sit amet consectetur. Libero sed netus at diam nec ullamcorper convallis pellentesque suscipit. Dictum sed purus et morbi in lorem in dolor sed. "
          sizeTitle="tablet:text-[6rem] lg:text-[10rem]"
          sizeTitleMobile="text-[60px]"
          bgTitleMargin="mt-10"//
          mt="mt-16"
          justify="center"
          right="right-0"
          left="left-0"
        />
      <section className="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-4 tablet:gap-8 h-[600px] desktop:h-[350px]">
        {services.map((service) => (
          <ImageCard
            key={`service-img-card-${service.id}`}
            title={service.name}
            image={service.image}
            link={`/servicios/${service.id}`}
          />
        ))}
      </section>
    </article>
  );
};

export default Services;
