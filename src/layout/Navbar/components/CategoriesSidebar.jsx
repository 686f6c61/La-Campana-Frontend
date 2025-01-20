import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavbarSidebar } from "../../Sidebar";
import { Link } from "react-router";
import { useState } from "react";

const CategoriesSidebar = ({ categories }) => {
  const [showSubcategories, setShowSubcategories] = useState(false)
  const [foundCategory, setFoundCategory] = useState()

  const handleHoverCategory = (categoryID) => {
    const foundCategory = categories.find(category => category.id === categoryID)
    setFoundCategory(foundCategory)
    handleShowSidebar(true)
  }

  const handleShowSidebar = (value) => setShowSubcategories(value)

  return (
    <div className="drawer w-fit z-20">
      <input id="categories-sidebar-navbar" type="checkbox" className="drawer-toggle" />
      {/* BUTTON */}
      <div className="drawer-content">
        <label htmlFor="categories-sidebar-navbar" className="btn btn-ghost drawer-button flex justify-start p-0">
          <HiMenuAlt1 className="text-lacampana-gray1" />
          <p>Todas las categorías</p>
        </label>
      </div>
      {/* SIDEBAR */}
      <NavbarSidebar
        id="categories-sidebar-navbar"
        title="Categorías"
        layerLevel={30}
        subSidebarItems={foundCategory}
        onCloseSubsidebar={handleShowSidebar}
        showSubsidebar={showSubcategories}
      >
        {categories.map(category =>
          <Link
            key={`category-navbar-${category.id}`}
            onMouseOver={() => handleHoverCategory(category.id)}
            to={category.link}
            className="text-start py-4 flex justify-between"
          >
            <p>{category.name}</p>
            <IoIosArrowRoundForward className="text-2xl text-lacampana-gray1" />
          </Link>
        )}
      </NavbarSidebar>
    </div>
  )
}

export default CategoriesSidebar