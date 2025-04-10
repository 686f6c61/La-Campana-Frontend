import React from "react";
import IntroductoryText from "../../sections/common/IntroductoryText";
import steelLeadersData from "../../data/steelLeadersData";


const SteelLeaders = () => {
  return (
    <article className="max-w-screen-desktop w-full justify-self-center">
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
        bgTitle={steelLeadersData.bgTitle}
        bgTitleMargin=""
        bgTitlePadding=""
      >
        <div className="flex items-center justify-center md:justify-end md:pr-16 mt-8 md:mt-0">
          <div className="flex items-center justify-center w-[790px] sm:w-[500px] h-[290px] relative overflow-hidden">
            <iframe
              src={steelLeadersData.videoUrl}
              title="Video representativo"
              className="w-full h-full rounded-tl-3xl "
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
