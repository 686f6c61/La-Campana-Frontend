import React from "react";
import IntroductoryText from "../sections/common/IntroductoryText";
import ContentSection from "../components/common/ContentSection";
import legalSections from "../utils/legalSections";

const Terms = () => {
  return (
    <div className="max-w-screen-desktop w-full mx-auto mt-16">
      <IntroductoryText
        sizeTitle="tablet:text-[6rem] lg:text-[8.5rem]"
        mt="mt-2 tablet:mt-[-50px] lg:mt-0"
        sizeTitleMobile="text-[80px]"
        size="text-5xl"
        right="right-0"
        left="left-0"
        mb="mb-0"
        title={
          <>
            Términos y condiciones <span className="text-lacampana-red2"></span>
          </>
        }
        bgTitle="Políticas"
        justify="center"
      />

      <ContentSection sections={legalSections} />
    </div>
  );
};

export default Terms;
