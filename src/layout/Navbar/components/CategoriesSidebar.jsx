import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavbarSidebar } from "../../Sidebar";
import { useNavigate } from "react-router";
import { useState } from "react";

const CategoriesSidebar = ({ categories }) => {
  const [showSubcategories, setShowSubcategories] = useState(false)
  const [foundCategory, setFoundCategory] = useState()
  const navigate = useNavigate()

  const handleClickCategory = (link) => {
    navigate(link)
    handleShowSubcategories(false)
  }

  const handleHoverCategory = (categoryID) => {
    const foundCategory = categories.find(category => category.id === categoryID)
    setFoundCategory(foundCategory)
    handleShowSubcategories(true)
  }

  const handleShowSubcategories = (value) => setShowSubcategories(value)

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
        onCloseSubsidebar={handleShowSubcategories}
        showSubsidebar={showSubcategories}
      >
        {categories.map(category =>
          <CategoryLink
            key={`category-sidebar-link-${category.id}`}
            id={category.id}
            link={category.link}
            name={category.name}
            onClick={handleClickCategory}
            onHover={handleHoverCategory}
          />
        )}
      </NavbarSidebar>
    </div>
  )
}

export default CategoriesSidebar

const CategoryLink = ({ id, link, name, onClick, onHover }) => {
  return (
    <label
      onMouseOver={() => onHover(id)}
      onClick={() => onClick(link)}
      className="text-start py-4 flex justify-between hover:cursor-pointer hover:bg-lacampana-white"
      htmlFor="categories-sidebar-navbar"
      aria-label="close sidebar"
    >
      <p>{name}</p>
      <IoIosArrowRoundForward className="text-2xl text-lacampana-gray1" />
    </label>
  )
}