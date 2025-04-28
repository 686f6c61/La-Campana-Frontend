import { Link } from "react-router-dom";

const ActionButton = ({
  type,
  styles,
  text,
  textColor = "white",
  bgColor = "lacampana-red2",
  borderColor,
  width = "fit",
  padding = "py-2 px-8",
  margin = "",
  font = "font-semibold",
  link,
  disabled = false,
  onClick,
}) => {
  const className = `
    ${styles} 
    lacampana-btn 
    ${
      disabled
        ? "opacity-50 pointer-events-none"
        : `hover:bg-${textColor} hover:text-${bgColor} hover:scale-90`
    } 
    border 
    ${borderColor ? `border-${borderColor}` : `border-${bgColor}`} 
    bg-${bgColor} 
    text-${textColor} 
    ${font} 
    w-${width} 
    ${padding} 
    ${margin}
    transition duration-300 ease-in-out
  `;

  return (
    <>
      {type === "submit" ? (
        <button className={className} disabled={disabled}>
          {text}
        </button>
      ) : (
        <Link
          to={link}
          onClick={disabled ? (e) => e.preventDefault() : onClick}
          className={className}
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default ActionButton;
