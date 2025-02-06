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
      className={`lacampana-btn ${borderColor && `border border-${borderColor}`} bg-${bgColor} text-${textColor} font-semibold w-${width} py-2 px-8`}>
      {text}
    </Link>
  )
}

export default ActionButton