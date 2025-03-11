import React from "react";
import Form from "../common/Form";
import IntroductoryText from "../../sections/common/IntroductoryText";
import Social from "../common/Social";
import SocialWidget from "../common/SocialWidget";


const ContactInfo = () => {
  return (
    <article className="max-w-screen-desktop w-full justify-self-center pt-20">
      <div className="font-sans">
        <IntroductoryText
          title={
            <>
              Contactarnos <span className="text-lacampana-red2"></span>
              <p className="max-w-2xl font-montserrat">
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
              <SocialWidget 
              wrapperClass="md:ml-0 ml-12"/>
            </>
          }
          bgTitle="Hablemos"
          description=""
          justify="start"
          bgTitleMargin="md:pl-8 md:pt-10"
          titleMargin=""
        >
          <Form
            origin="Página de Contacto"
            padding="p-12"
            margin=""
          />
        </IntroductoryText>

        
        
      </div>
    </article>
  );
};

export default ContactInfo;
