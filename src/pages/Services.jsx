import ImageCard from "../components/common/ImageCard"
import IntroductoryText from "../sections/common/IntroductoryText"
import services from "../utils/services"

const Services = () => {
  return (
    <article className="max-w-screen-desktop w-full justify-self-center flex flex-col gap-16 px-4 desktop:px-8 py-8 desktop:py-16">
      <IntroductoryText 
        title={<>Soluciones <span className="text-lacampana-red2">Especializadas</span></>}
        bgTitle="Servicios"
        subtitle="Para la industria del acero"
        description="Lorem ipsum dolor sit amet consectetur. Libero sed netus at diam nec ullamcorper convallis pellentesque suscipit. Dictum sed purus et morbi in lorem in dolor sed. "
        justify="center"
      />
      <section className="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-4 tablet:gap-8 h-[600px] desktop:h-[350px]">
        {services.map(service => 
          <ImageCard 
            key={`service-img-card-${service.id}`}
            title={service.name}
            image={service.image}
            link={`/servicios/${service.id}`}
          />
        )}
      </section>
    </article>
  )
}

export default Services