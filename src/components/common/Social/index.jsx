import React from "react";
import {
  PiYoutubeLogoThin,
  PiInstagramLogoThin,
  PiTiktokLogoThin,
  PiPhoneCallThin,
} from "react-icons/pi";
import { SlSocialLinkedin, SlSocialFacebook } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";

const Social = ({
  question = "¿Tienes alguna pregunta?",
  phone = "PBX: (601) 370.22.00",
  description = "",
  containerPadding = "pt-10 pb-1",
  iconsSize = "text-2xl",
  textWidth = "w-full md:w-70",
  questionColor = "text-black",
  phoneColor = "text-black",
  iconsPadding = "p-4", // Nuevo padding para los iconos
  iconsMargin = "mt-6 mb-4", // Nuevo margin para los iconos
  iconColors = {
    youtube: "text-lacampana-red1",
    instagram: "text-lacampana-gray1",
    tiktok: "text-lacampana-gray1",
    facebook: "text-lacampana-gray1",
    twitter: "text-lacampana-gray1",
    linkedin: "text-lacampana-gray1",
    phone: "text-lacampana-gray1",
  },
  socialLinks = {
    facebook: "https://www.facebook.com/lacampanacolombia/",
    instagram: "https://www.instagram.com/lacampana.co/",
    linkedin:
      "https://www.linkedin.com/company/la-campana-servicios-de-acero-s-a-/?originalSubdomain=co",
    youtube:
      "https://www.youtube.com/channel/UCSB_jR1084XFuvYcR4koPWQ?view_as=subscriber",
    twitter: "https://x.com/lacampana_acero",
    tiktok: "https://www.tiktok.com/@lacampana_acero",
  },
}) => {
  return (
    <div className={`text-left ${containerPadding}`}>
      <p className={`text-lg ${textWidth} ${questionColor}`}>{question}</p>
      <p className={`${phoneColor} pb-4`}>{phone}</p>
      <p className="text-sm w-60 pb-4">{description}</p>

      {/* Contenedor de íconos con padding y margin personalizados */}
      <div className={`flex space-x-3 ${iconsPadding} ${iconsMargin} w-80`}>
        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
          <PiYoutubeLogoThin className={`${iconsSize} ${iconColors.youtube}`} />
        </a>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiInstagramLogoThin
            className={`${iconsSize} ${iconColors.instagram}`}
          />
        </a>
        <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer">
          <PiTiktokLogoThin className={`${iconsSize} ${iconColors.tiktok}`} />
        </a>
        <a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialFacebook className={`${iconsSize} ${iconColors.facebook}`} />
        </a>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <RiTwitterXLine className={`${iconsSize} ${iconColors.twitter}`} />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialLinkedin className={`${iconsSize} ${iconColors.linkedin}`} />
        </a>
        <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
          <PiPhoneCallThin className={`${iconsSize} ${iconColors.phone}`} />
        </a>
      </div>
    </div>
  );
};

export default Social;
