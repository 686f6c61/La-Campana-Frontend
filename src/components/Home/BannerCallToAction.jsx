import BannerDot from "./BannerDot";
import ActionButton from "../common/ActionButton";

const BannerCallToAction = () => {
  return (
    <div className="absolute bottom-0 bg-white w-4/5 tablet:w-2/5 p-6 text-start rounded-se-xl flex flex-col gap-4">
      <p className="font-open-sans text-sub-h1 lg:text-sub-h1-desktop text-lacampana-red1 leading-tight">
        SOMOS LA EMPRESA LÍDER EN
      </p>
      <div className="flex flex-col gap-2 pl-4">
        <h1 className="leading-none">Mercado de aceros</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nunc est fermentum dis arcu
          odio. Vel eu habitant sit duis amet nisl nulla vel. Blandit duis at
          quis amet cursus diam integer.
        </p>
      </div>
      <ActionButton text="Comprar ahora" link="/tienda" />
      <div className="w-full flex justify-end items-center gap-2 py-2 min-h-12">
        <BannerDot id="item1" />
        <BannerDot id="item2" />
        <BannerDot id="item3" />
      </div>
    </div>
  );
};

export default BannerCallToAction;
