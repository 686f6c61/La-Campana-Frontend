import React from "react";
import Form from "../common/Form";
import IntroductoryText from "../../sections/common/IntroductoryText";
import Social from "../common/Social";
import SocialWidget from "../common/SocialWidget";

const ContactInfo = () => {
  return (
    <article className="max-w-screen-desktop w-full mx-auto pt-20">
      <div className="relative font-sans flex items-center justify-between">
        <IntroductoryText
          mb="mb-32"
          mt="mt-0"
          title={
            <div className="mt-24">
              Contactarnos <span className="text-lacampana-red2"></span>
              <p className="max-w-2xl font-montserrat mt-2">
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
              />
              <SocialWidget wrapperClass="" />
            </div>
          }
          bgTitle="Hablemos"
          description=""
          justify="start"
          titleMargin=""
        />
        <Form
          margin="md:transform -translate-y-12"
          origin="Página de Contacto"
        />
      </div>
    </article>
  );
};

export default ContactInfo;
