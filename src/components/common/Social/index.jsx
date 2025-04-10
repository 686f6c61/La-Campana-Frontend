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
  containerPadding = "",
  iconsSize = "text-2xl",
  textWidth = "w-full md:w-70",
  questionColor = "text-black",
  phoneColor = "text-black",
}) => {
  return (
    <div className={`text-left ${containerPadding}`}>
      <p className={`text-lg ${textWidth} ${questionColor}`}>{question}</p>
      <p className={`${phoneColor} pb-4`}>{phone}</p>
      <p className="text-sm w-60">{description}</p>
    </div>
  );
};

export default Social;
