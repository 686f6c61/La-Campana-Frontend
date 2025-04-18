import { IoClose } from "react-icons/io5";
import { Link } from "react-router";

const SubSidebar = ({ title, link, imgURL, subSidebarItems, onCloseSubsidebar }) => {
  return (
    <article className="flex flex-col gap-8 p-4 bg-lacampana-white max-w-[800px]">
      <section className="flex justify-between">
        <Link to={link}>
          <h4>{title}</h4>
        </Link>
        <IoClose
          onClick={() => onCloseSubsidebar(false)}
          className="text-xl text-lacampana-gray1 hover:cursor-pointer"
        />
      </section>
      <section className="flex gap-8">
        <section className="grid grid-cols-2 h-fit gap-8 text-start">
          {subSidebarItems.map(subcategory =>
            <SubSidebarItem
              key={`subcategory-${subcategory.id}`}
              title={subcategory.title}
              link={subcategory.link}
              items={subcategory.items}
            />
          )}
        </section>
        <section className="w-64">
          <img src={imgURL} alt="category-img" className="h-full object-cover" />
        </section>
      </section>
    </article>
  )
}

export default SubSidebar

const SubSidebarItem = ({ title, link, items }) => {
  return (
    <article>
      <Link to={link}>
        <h5>{title}</h5>
      </Link>
      <div>
        {items.map(item =>
          <p key={`subcategory-item-${item}`} className="py-2">{item}</p>
        )}
      </div>
    </article>
  )
}