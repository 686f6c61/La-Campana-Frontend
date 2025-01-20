import { Link } from "react-router"

const HeaderItem = ({ link, icon }) => {
  return (
    <li>
      <Link to={link}>
        {icon}
      </Link>
    </li>
  )
}

export default HeaderItem