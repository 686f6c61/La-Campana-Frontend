import NavItem from "./components/NavItem";
import CategoriesSidebar from "./components/CategoriesSidebar";
import categories from "../../utils/categories";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { pathname } = useLocation();

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="hidden tablet:block w-full w-full mx-auto flex items-center">
      <article
        className={`bg-white flex items-center justify-center w-full py-2 gap-2 m-h-[60px] ${
          scrolling
            ? "bg-lacampana-red2 fixed top-[70px] left-0 z-50 shadow-lg m-0"
            : "max-w-7xl mx-auto"
        } transition-all duration-100 ease-in-out`}
      >
        <ul className="menu menu-horizontal flex items-center p-0 xl:gap-7 lg:gap-3 md:gap-0 sm:gap-0">
          <CategoriesSidebar categories={categories} />
          {categories.map((item) => (
            <NavItem
              active={pathname === item.link}
              key={`navitem-${item.id}`}
              text={item.name}
              link={item.link}
            />
          ))}
        </ul>
      </article>
    </nav>
  );
};

export default Navbar;
