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
  className = "",
}) => {
  const classes = `
    lacampana-btn
    border
    bg-${bgColor}
    text-${textColor}
    ${borderColor ? `border-${borderColor}` : `border-${bgColor}`}
    font-${font}
    w-${width}
    ${padding}
    ${margin}
    hover:scale-90
    transition duration-300 ease-in-out
    ${className}
  `;


  return (
    <Link to={link} onClick={onClick} className={classes}>
      {text}
    </Link>
  );
};


export default ActionButton;
