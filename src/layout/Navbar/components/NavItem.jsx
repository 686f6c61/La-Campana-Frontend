import { Link } from "react-router"

const NavItem = ({ text, link, active, onClick  }) => {
  return (
 
    <li className={`text-base ${active ? 'bg-gray-100 font-bold' : 'text-gray-700'}`}>
       
      <Link onClick={(e) => {
      onClick();
    }}
     to={link}>
        <p>{text}</p>
      </Link>
    </li>
  )
}

export default NavItem