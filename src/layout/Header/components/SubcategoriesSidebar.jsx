import { IoIosArrowRoundForward } from "react-icons/io";
import { Sidebar } from "../../Sidebar"
import { Link } from "react-router";

const SubcategoriesSidebar = ({ id, title, subcategories }) => {
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
        <Link className="lacampana-btn bg-lacampana-red2 px-4 py-1 text-white">Ver Todos</Link>
        <section className="flex flex-col gap-4 py-4">
          {subcategories.map(subcategory =>
            <SubcategoryItem
              key={`subcategory-item-${subcategory.id}`}
              title={subcategory.title}
              subcategoryItems={subcategory.items}
            />
          )}
        </section>
      </Sidebar>
    </div>
  )
}

export default SubcategoriesSidebar

const SubcategoryItem = ({ title, subcategoryItems }) => {
  return (
    <article className="text-start flex flex-col gap-4">
      <Link>
        <h4>{title}</h4>
      </Link>
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