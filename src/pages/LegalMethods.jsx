import React from "react";
import IntroductoryText from "../sections/common/IntroductoryText";
import ContentSection from "../components/common/ContentSection";
import legalSections from "../utils/legalSections";

const Terms = () => {
  return (
    <div className="max-w-screen-desktop w-full mx-auto mt-16">
      <IntroductoryText
        size="text-5xl"
        mt="mt-[6rem]"
        mb="mb-0"
        title={
          <>
            Métodos de Pago <span className="text-lacampana-red2"></span>
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
