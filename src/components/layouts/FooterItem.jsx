import { Link } from "react-router"

const FooterItem = ({ title, links }) => {
  return (
    <article className="text-start flex flex-col gap-4">
      <h5 className="text-lacampana-red2">{title}</h5>
      <ul className="flex flex-col gap-2">
        {links.map(linkItem =>
          <li className="hover:text-lacampana-red1 hover:scale-105">
            <Link to={linkItem.link}>
              <p>{linkItem.title}</p>
            </Link>
          </li>
        )}
      </ul>
    </article>
  )
}

export default FooterItem