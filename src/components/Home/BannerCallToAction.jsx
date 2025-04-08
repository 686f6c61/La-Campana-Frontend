import { useState } from "react";
import BannerDot from "./BannerDot";
import ActionButton from "../common/ActionButton";

const BannerCallToAction = () => {
  const [activeSlide, setActiveSlide] = useState("item1");

  const slidesText = [
    {
      id: "item1",
      imgURL: "/images/home/banner/banner.jpg",
      title: "Mercado de aceros 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    },
    {
      id: "item2",
      imgURL: "/images/home/banner/banner2.jpeg",
      title: "Mercado de aceros 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    },
    {
      id: "item3",
      imgURL: "/images/home/banner/banner.jpg",
      title: "Mercado de aceros 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    },
  ];

  const activeSlideData = slidesText.find((slide) => slide.id === activeSlide);

  const handleDotClick = (slideID) => {
    setActiveSlide(slideID);

    const slideToGo = document.getElementById(slideID);
    if (slideToGo) {
      slideToGo.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div className="absolute bottom-0 bg-white w-4/5 tablet:w-2/5 p-6 text-start rounded-se-xl flex flex-col gap-4">
      <p className="font-open-sans text-sub-h1 lg:text-sub-h1-desktop text-lacampana-red1 leading-tight">
        SOMOS LA EMPRESA LÍDER EN
      </p>
      {/* <div className="flex flex-col gap-2 sm:pl-4 pl-0">
        <h1 className="leading-none text-lacampana-black">
          {slidesText[activeSlideData].title}
        </h1>
        <p className="text-lacampana-black">
          {slidesText[activeSlideData].description}
        </p>
      </div> */}

      <ActionButton text="Comprar ahora" link="/tienda" />

      <div className="w-full flex justify-end items-center gap-2 py-2 min-h-12">
        {["item1", "item2", "item3"].map((id) => (
          <BannerDot
            key={id}
            id={id}
            // isChecked={currentSlide === id}
            // onClick={onSlideChange}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCallToAction;
