import { IoClose } from "react-icons/io5";

const SubcategoriesSidebar = ({ title, subcategories }) => {
  return (
    <div>
      <section>
        <h4>{title}</h4>
        <IoClose className="text-xl text-lacampana-gray1" />
      </section>
    </div>
  )
}

export default SubcategoriesSidebar