import React from "react";
import Form from "../common/Form";
import IntroductoryText from "../../sections/common/IntroductoryText";
import Social from "../common/Social";
import SocialWidget from "../common/SocialWidget";

const ContactInfo = () => {
  return (
    <article className="pr-5 pl-5 max-w-screen-desktop w-full mx-auto pt-8 tablet:pt-20">
      <div className="relative font-sans flex flex-col items-center justify-between lg:flex-row">
        <IntroductoryText
          mt="mt-[5.8rem]"
          mb="mb-32"
          title={
            <div className="mt-0 mb-10">
              Contactarnos
              <span className="text-lacampana-red2"></span>
              <p className="text-justify pb-8 tablet:text-start tablet:pb-0 mt-0 max-w-2xl font-montserrat mt-2">
                Lorem ipsum dolor sit amet consectetur. Pulvinar dignissim
                pulvinar ut lorem pharetra. Vestibulum nulla faucibus nunc enim.
                Proin feugiat fames turpis sociis viverra. Viverra sit ut
                egestas placerat neque fames ante.
              </p>
              <Social
                question="¿Cómo podemos ayudarte?"
                phone="PBX: (601) 123.45.67"
                description=""
                questionColor="text-lacampana-red2 font-bold font-antonio md:text-left text-center"
                phoneColor="md:text-left text-center"
                containerPadding="pb-8 tablet:pb-0"
              />
              <SocialWidget wrapperClass="justify-center tablet:justify-start" />
            </div>
          }
          bgTitle="Hablemos"
          description=""
          justify="start"
          titleMargin=""
        />
        <Form
          margin="md:transform -translate-y-5"
          origin="Página de Contacto"
        />
      </div>
    </article>
  );
};

export default ContactInfo;
