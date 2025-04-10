import React from "react";
import IntroductoryText from "../sections/common/IntroductoryText";
import ContentSection from "../components/common/ContentSection";
import legalSections from "../utils/legalSections";

const Terms = () => {
  return (
    <div className="max-w-screen-desktop w-full mx-auto mt-16">
      <IntroductoryText
        mt="mt-[5.8rem]"
        size="text-5xl"
        mb="mb-0"
        title={
          <>
            Política de privacidad <span className="text-lacampana-red2"></span>
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
