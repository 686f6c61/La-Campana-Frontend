import { IoClose } from "react-icons/io5";
import SearchBar from "../../components/common/SearchBar";
import Topbar from "../Topbar";
import SubSidebar from "./components/Subsidebar";

export const Sidebar = ({ id, title, layerLevel = 20, children }) => {
  return (
    <section className={`drawer-side z-${layerLevel}`}>
      <label htmlFor={id} aria-label="close sidebar" className="drawer-overlay"></label>
      <div className="menu bg-white text-base-content min-h-full w-80 p-4 gap-4">
        {/* HEADER */}
        <header className="border-b border-black py-4 flex justify-between">
          <h3 className="text-start text-lacampana-red2">{title}</h3>
          <label htmlFor={id} aria-label="close sidebar">
            <IoClose className="text-xl text-lacampana-gray1" />
          </label>
        </header>
        {/* MAIN */}
        <main className="flex flex-col border-b border-black">
          {children}
        </main>
        {/* FOOTER */}
        <footer className="flex flex-col gap-4">
          <SearchBar placeholder="Buscar producto..." />
          <Topbar />
        </footer>
      </div>
    </section>
  )
}

export const NavbarSidebar = ({ id, title, layerLevel = 20, children, subSidebarItems, onCloseSubsidebar, showSubsidebar }) => {

  return (
    <section className={`drawer-side z-${layerLevel}`}>
      <label
        onClick={() => onCloseSubsidebar(false)}
        htmlFor={id}
        aria-label="close sidebar"
        className="drawer-overlay"
      />
      <div className="flex h-full">
        <div className="menu bg-white text-base-content w-80 p-4 gap-4">
          {/* HEADER */}
          <header className="border-b border-black py-4 flex justify-between">
            <h3 className="text-start text-lacampana-red2">{title}</h3>
            <label htmlFor={id} aria-label="close sidebar">
              <IoClose className="text-xl text-lacampana-gray1" />
            </label>
          </header>
          {/* MAIN */}
          <main className="flex flex-col border-b border-black">
            {children}
          </main>
        </div>
        {/* SUBSIDEBAR */}
        {showSubsidebar &&
          <SubSidebar
            title={subSidebarItems.name}
            link={subSidebarItems.link}
            imgURL={subSidebarItems.image}
            subSidebarItems={subSidebarItems.subcategories}
            onCloseSubsidebar={onCloseSubsidebar}
          />
        }
      </div>
    </section>
  )
}