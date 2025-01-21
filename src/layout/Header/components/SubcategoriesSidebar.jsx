import { IoIosArrowRoundForward } from "react-icons/io";
import { Sidebar } from "../../Sidebar"
import { Link, useNavigate } from "react-router";

const SubcategoriesSidebar = ({ id, link, title, subcategories }) => {
  const navigate = useNavigate()

  const handleNavigate = (link) => navigate(link)

  return (
    <div className="drawer drawer-end">
      <input id={`subcategories-sidebar-${id}`} type="checkbox" className="drawer-toggle" />
      {/* BUTTON */}
      <div className="drawer-content">
        <label htmlFor={`subcategories-sidebar-${id}`} className="btn btn-ghost drawer-button flex justify-between p-0">
          <p>{title}</p>
          <IoIosArrowRoundForward className="text-lacampana-gray1 text-xl" />
        </label>
      </div>
      {/* SIDEBAR */}
      <Sidebar
        id={`subcategories-sidebar-${id}`}
        title={title}
        layerLevel={40}
      >
        <label
          onClick={() => handleNavigate(link)}
          className="lacampana-btn bg-lacampana-red2 px-4 py-1 text-white"
          htmlFor={`subcategories-sidebar-${id}`}
          aria-label="close sidebar"
        >
          <label htmlFor={`categories-sidebar`} aria-label="close sidebar">
            <label htmlFor="menu-sidebar" aria-label="close sidebar">
              Ver Todos
            </label>
          </label>
        </label>
        <section className="flex flex-col gap-4 py-4">
          {subcategories.map(subcategory =>
            <SubcategoryItem
              key={`subcategory-item-${subcategory.id}`}
              id={subcategory.id}
              title={subcategory.title}
              link={subcategory.link}
              subcategoryItems={subcategory.items}
              onClick={handleNavigate}
            />
          )}
        </section>
      </Sidebar>
    </div>
  )
}

export default SubcategoriesSidebar

const SubcategoryItem = ({ id, title, link, subcategoryItems, onClick }) => {
  return (
    <article className="text-start flex flex-col gap-4">
      <label
        onClick={() => onClick(link)}
        htmlFor={`subcategories-sidebar-${id}`}
        aria-label="close sidebar"
      >
        <label htmlFor={`categories-sidebar`} aria-label="close sidebar">
          <label htmlFor="menu-sidebar" aria-label="close sidebar">
            <h4>{title}</h4>
          </label>
        </label>
      </label>
      <div className="flex flex-col gap-2">
        {subcategoryItems.map(item =>
          <Link key={`item-${item}`}>
            <p>{item}</p>
          </Link>
        )}
      </div>
    </article>
  )
}