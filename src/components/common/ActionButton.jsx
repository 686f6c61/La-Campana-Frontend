import { Link } from "react-router-dom";


const ActionButton = ({
  text,
  textColor = "white",
  bgColor = "lacampana-red2",
  borderColor,
  width = "fit",
  padding = "py-2 px-8",
  margin = "mt-8",
  font = "font-semibold",
  link,
  onClick,
}) => {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`lacampana-btn hover:scale-90
        hover:bg-${textColor} hover:text-${bgColor}
        ${margin}
        border ${borderColor ? `border-${borderColor}` : `border-${bgColor}`}
        bg-${bgColor} text-${textColor}
        ${font} w-${width} ${padding}
        transition duration-300 ease-in-out`}
    >
      {text}
    </Link>
  );
};


export default ActionButton;
