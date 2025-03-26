import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router";
import CategoriesSidebar from "./CategoriesSidebar";
import { Sidebar } from "../../Sidebar";

const MenuSidebar = ({ categories }) => {
  const navigate = useNavigate()

  const handleMenuItemClick = (link) => navigate(link)

  return (
    <div className="drawer drawer-end z-20 lg:hidden">
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
            key={`menu-item-${category.id}`}
            link={category.link}
            name={category.name}
            onClick={handleMenuItemClick}
          />
        )}
      </Sidebar>
    </div>
  )
}

export default MenuSidebar

const MenuLink = ({ name, link, onClick }) => {
  return (
    <label
      className="py-4"
      onClick={() => onClick(link)}
      htmlFor="menu-sidebar"
      aria-label="close sidebar"
    >
      <p className="text-start text-lacampana-gray1">{name}</p>
    </label>
  )
}