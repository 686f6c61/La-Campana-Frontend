import { Link } from "react-router"

const NavItem = ({ text, link, active  }) => {
  return (
 
    <li className={`border border-lacampana-red2/0 hover:border-lacampana-red2 hover:scale-90 rounded-lg transition duration-300 ease-in-out ${active && 'bg-lacampana-red2'}`}>
      <Link to={link}>
        <p className={`${active && "font-semibold text-white"} text-p2 desktop:text-p2-desktop`}>{text}</p>
      </Link>
    </li>
  )
}

export default NavItem