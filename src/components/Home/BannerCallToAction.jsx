import BannerDot from "./BannerDot";
import ActionButton from "../common/ActionButton";

const BannerCallToAction = ({ currentSlide, onSlideChange }) => {
  const slideText = {
    item1: {
      title: "Mercado de aceros",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc est fermentum dis arcu odio. Vel eu habitant sit duis amet nisl nulla vel.",
    },
    item2: {
      title: "Productos de acero de alta calidad",
      description:
        "Descubre nuestra variedad de productos de acero, diseñados para satisfacer todas tus necesidades industriales.",
    },
    item3: {
      title: "Soluciones en acero para todos",
      description:
        "Innovación y resistencia en cada producto. Soluciones personalizadas para tu negocio.",
    },
  };

  return (
    <div className="absolute bottom-0 bg-white w-4/5 tablet:w-2/5 p-6 text-start rounded-se-xl flex flex-col gap-4">
      <p className="font-open-sans text-sub-h1 lg:text-sub-h1-desktop text-lacampana-red1 leading-tight">
        SOMOS LA EMPRESA LÍDER EN
      </p>
      <div className="flex flex-col gap-2 sm:pl-4 pl-0">
        <h1 className="leading-none text-lacampana-black">
          {slideText[currentSlide].title}
        </h1>
        <p className="text-lacampana-black">
          {slideText[currentSlide].description}
        </p>
      </div>
      <ActionButton text="Comprar ahora" link="/tienda" />
      <div className="w-full flex justify-end items-center gap-2 py-2 min-h-12">
        {["item1", "item2", "item3"].map((id) => (
          <BannerDot
            key={id}
            id={id}
            isChecked={currentSlide === id}
            onClick={onSlideChange}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCallToAction;
