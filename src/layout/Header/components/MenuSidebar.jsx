import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router";
import CategoriesSidebar from "./CategoriesSidebar";
import { Sidebar } from "../../Sidebar";

const MenuSidebar = ({ categories }) => {
  return (
    <div className="drawer drawer-end z-20 tablet:hidden">
      <input id="menu-sidebar" type="checkbox" className="drawer-toggle" />
      {/* BUTTON */}
      <div className="drawer-content">
        <label htmlFor="menu-sidebar" className="btn btn-ghost drawer-button">
          <GiHamburgerMenu className="text-2xl text-white" />
        </label>
      </div>
      {/* SIDEBAR */}
      <Sidebar
        id="menu-sidebar"
        title="Menú"
      >
        <CategoriesSidebar
          categories={categories}
        />
        {categories.map(category =>
          <MenuLink
            key={`menu-link-${category.id}`}
            title={category.name}
            link={category.link}
          />
        )}
      </Sidebar>
    </div>
  )
}

export default MenuSidebar

const MenuLink = ({ title, link }) => {
  return (
    <Link className="py-4" to={link}>
      <p className="text-start">{title}</p>
    </Link>
  )
}