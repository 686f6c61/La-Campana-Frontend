import NavItem from "./components/NavItem";
import CategoriesSidebar from "./components/CategoriesSidebar";
import categories from "../../utils/categories";
import { useLocation } from "react-router-dom";
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
    <nav className="hidden tablet:block w-full flex items-center">
      <article
        className={` mx-auto m-h-[60px] justify-center bg-white flex items-center w-full ${
          scrolling &&
          "m-h-[60px] bg-lacampana-red2 fixed top-[70px] left-0 z-50 shadow-lg m-0"
        } transition-all duration-100 ease-in-out`}
      >
        <ul className="menu menu-horizontal flex items-center p-0 lg:gap-14 md:gap-0 sm:gap-0 text-base sm:text-lg md:text-xl lg:text-2xl">
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
