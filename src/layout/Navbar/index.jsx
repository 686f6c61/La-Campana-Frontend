import NavItem from "./components/NavItem";
import CategoriesSidebar from "./components/CategoriesSidebar";
import categories from "../../utils/categories";
import { useLocation } from "react-router";


const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <nav className="hidden tablet:block">
      <article className="navbar bg-white max-w-screen-desktop justify-self-center">
        <CategoriesSidebar
          categories={categories}
        />
        <ul className="menu menu-horizontal gap-2 px-1">
          {categories.map(item =>
            <NavItem
              active={pathname === item.link}
              key={`navitem-${item.id}`}
              text={item.name}
              link={item.link}
            />
          )}
        </ul>
      </article>
    </nav>
  )
}

export default Navbar