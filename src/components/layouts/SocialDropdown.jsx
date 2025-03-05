import { Link } from "react-router"
import { IoIosArrowDown } from "react-icons/io";

const SocialDropdown = ({ socialMedia = [] }) => {
  return (
    <div className="dropdown dropdown-end">
      <button tabIndex={0} role="button" className="font-open-sans border-box h-8 w-fit rounded-2xl rounded-br-none flex items-center gap-2 bg-lacampana-gray4 px-4 py-1 text-lacampana-gray1 hover:bg-lacampana-gray1 hover:text-white transition duration-300 ease-in-out">
        Síguenos en<IoIosArrowDown />
      </button>
      <ul tabIndex={0} className="dropdown-content flex items-center bg-lacampana-white rounded-tr-none rounded-box z-1 w-52 p-2 shadow-sm z-10">
        {socialMedia.map(social =>
          <li key={`topbar-social-${social.id}`} title={social.title} className="hover:cursor-pointer hover:scale-125 transition duration-150 ease-in-out text-start p-2">
            <Link to={social.link}>
              <img src={social.icon} alt="icon" />
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default SocialDropdown