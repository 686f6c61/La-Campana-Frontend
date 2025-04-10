import React from "react";
import socialMedia from "../../../utils/socialMedia";
import { Link } from "react-router";

const SocialWidget = ({
  className = "", // Estilos para los íconos (tamaño, animación)
  iconSize = "w-6 h-6", // Tamaño de los íconos
  wrapperClass = "", // NUEVO: Estilos para margen, padding, etc.
}) => {
  return (
    <div className={`flex gap-4 ${wrapperClass}`}>
      {socialMedia.map((item, index) =>
        item.link.startsWith("http") ? (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:scale-90 transition duration-300 ease-in-out ${className}`}
          >
            <img src={item.icon} alt={item.title} className={iconSize} />
          </a>
        ) : (
          <Link
            key={index}
            to={item.link}
            className={`hover:scale-90 transition duration-300 ease-in-out ${className}`}
          >
            <img src={item.icon} alt={item.title} className={iconSize} />
          </Link>
        )
      )}
    </div>
  );
};

export default SocialWidget;
