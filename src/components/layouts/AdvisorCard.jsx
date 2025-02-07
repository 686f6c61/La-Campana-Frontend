import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const AdvisorCard = ({ name, phone, location }) => {
  return (
    <article className="flex flex-col gap-2 text-start bg-white p-4 rounded-tl-2xl">
      <h4>{name}</h4>
      <p>{phone}</p>
      <p>{location}</p>
      <div className="flex flex-col gap-2">
        <button className="lacampana-btn text-p2 desktop:text-p2-desktop flex items-center gap-2 text-start border border-lacampana-gray1 text-lacampana-gray1 font-semibold px-4 py-2 w-full">
          <FaWhatsapp className="text-2xl" /> Escribir por WhatsApp
        </button>
        <button className="lacampana-btn text-p2 desktop:text-p2-desktop flex items-center gap-2 text-start border border-lacampana-gray1 text-lacampana-gray1 font-semibold px-4 py-2 w-full">
        <MdMailOutline className="text-2xl" /> Escribir por Correo
        </button>
      </div>
    </article>
  )
}

export default AdvisorCard