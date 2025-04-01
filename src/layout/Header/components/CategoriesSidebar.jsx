import { HiMenuAlt1 } from "react-icons/hi";
import { Sidebar } from "../../Sidebar";
import SubcategoriesSidebar from "./SubcategoriesSidebar";

const CategoriesSidebar = ({ categories, scrolling }) => {
  return (
    <div className="drawer drawer-end">
      <input
        id="categories-sidebar"
        type="checkbox"
        className="drawer-toggle"
      />
      {/* BUTTON */}
      <div className="drawer-content">
        <label
          htmlFor="categories-sidebar"
          className="btn btn-ghost drawer-button flex justify-start p-0"
        >
          <HiMenuAlt1 className="text-lacampana-gray1" />
          <p>Todas las categorías</p>
        </label>
      </div>
      {/* SIDEBAR */}
      <Sidebar id="categories-sidebar" title="Categorías" layerLevel={30}>
        {categories.map((category) => (
          <SubcategoriesSidebar
            key={`subcategory-sidebar-${category.id}`}
            id={category.id}
            link={category.link}
            title={category.name}
            subcategories={category.subcategories}
          />
        ))}
      </Sidebar>
    </div>
  );
};

export default CategoriesSidebar;
