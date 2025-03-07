import { Link } from "react-router"

const ActionButton = ({
  text,
  textColor = "white",
  bgColor = "lacampana-red2",
  borderColor,
  width = "fit",
  link,
  onClick }) => {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={`lacampana-btn hover:bg-${textColor} hover:text-${bgColor} hover:scale-90 border ${borderColor ? `border-${borderColor}` : `border-${bgColor}`} bg-${bgColor} text-${textColor} font-semibold w-${width} py-2 px-8 transition duration-300 ease-in-out`}>
      {text}
    </Link>
  )
}

export default ActionButton