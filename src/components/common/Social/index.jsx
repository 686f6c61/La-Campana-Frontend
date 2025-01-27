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
  iconColors = {
    youtube: "text-lacampana-red1",
    instagram: "text-lacampana-gray1",
    tiktok: "text-lacampana-gray1",
    facebook: "text-lacampana-gray1",
    twitter: "text-lacampana-gray1",
    linkedin: "text-lacampana-gray1",
    phone: "text-lacampana-gray1",
  },
}) => {
  return (
    <div className={`text-left ${containerPadding}`}>
      <p className={`text-lg ${textWidth} ${questionColor}`}>{question}</p>
      <p className={`${phoneColor} pb-4`}>{phone}</p>
      <p className="text-sm w-60 pb-4">{description}</p>
      <div className="flex space-x-3 mt-2 w-80">
        <PiYoutubeLogoThin className={`${iconsSize} ${iconColors.youtube}`} />
        <PiInstagramLogoThin
          className={`${iconsSize} ${iconColors.instagram}`}
        />
        <PiTiktokLogoThin className={`${iconsSize} ${iconColors.tiktok}`} />
        <SlSocialFacebook className={`${iconsSize} ${iconColors.facebook}`} />
        <RiTwitterXLine className={`${iconsSize} ${iconColors.twitter}`} />
        <SlSocialLinkedin className={`${iconsSize} ${iconColors.linkedin}`} />
        <PiPhoneCallThin className={`${iconsSize} ${iconColors.phone}`} />
      </div>
    </div>
  );
};

export default Social;
