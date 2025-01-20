import { Link } from "react-router"

const NavItem = ({ text, link }) => {
  return (
    <li>
      <Link to={link}>
        <p>{text}</p>
      </Link>
    </li>
  )
}

export default NavItem