import { Link } from "react-router-dom";

const ActionButton = ({
  styles,
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
      className={`${styles} lacampana-btn hover:bg-${textColor} hover:text-${bgColor} hover:scale-90 border-2 ${
        borderColor ? `border-${borderColor}` : `border-${bgColor}`
      } bg-${bgColor} text-${textColor} font-semibold w-${width} py-2 px-8 transition duration-300 ease-in-out`}
    >
      {text}
    </Link>
  );
};

export default ActionButton;
