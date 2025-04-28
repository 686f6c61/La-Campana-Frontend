import React from "react";
import IntroductoryText from "../../sections/common/IntroductoryText";
import steelLeadersData from "../../data/steelLeadersData";

const SteelLeaders = () => {
  return (
    <article className="pl-5 pr-5 max-w-screen-desktop w-full mx-auto">
      <IntroductoryText
        title={
          <>
            {steelLeadersData.title.split(" ")[0]}{" "}
            <span className="text-lacampana-red2">
              {steelLeadersData.title.split(" ").slice(1).join(" ")}
            </span>
            {steelLeadersData.paragraphs.map((text, idx) => (
              <p
                key={`paragraph-${idx}`}
                className="md:text-base text-sm text-gray-600 mt-4 md:w-[480px] w-[360px] pl-0 md:pl-0 text-center md:text-left mx-auto md:mx-0"
              >
                {text}
              </p>
            ))}
          </>
        }
        sizeTitle="tablet:text-[5rem] lg:text-[7rem] xl:text-[9rem]"
        mt="mt-0 tablet:mt-[-55px] lg:mt-[-20px] xl:mt-[0px]"
        bgTitle={steelLeadersData.bgTitle}
        sizeTitleMobile="text-[50px]"
        bgTitlePaddingMobile="pt-5"
      >
        <div className="w-full xl:flex xl:items-center md:w-1/2 flex justify-center md:justify-end mt-10 tablet:mt-0">
          <div
            className="w-full lg:w-[500px] xl:w-[573px] relative overflow-hidden rounded-tl-3xl"
            style={{ aspectRatio: "573 / 322" }}
          >
            <iframe
              src={steelLeadersData.videoUrl}
              title="Video representativo"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </IntroductoryText>
    </article>
  );
};

export default SteelLeaders;
