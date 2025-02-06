import {
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import HeaderItem from "./components/HeaderItem";
import SearchBar from "../../components/common/SearchBar";
import MenuSidebar from "./components/MenuSidebar";
import categories from "../../utils/categories";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-lacampana-red2">
      <nav className="navbar w-full py-4 max-w-screen-desktop justify-self-center">
        <div className="mx-2 px-2 navbar-start">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
        </div>
        <section className="navbar-end">
          <div className="flex gap-4">
            <div className="hidden tablet:block">
              <SearchBar placeholder="Buscar producto..." />
            </div>
            <ul className="flex gap-4 items-center">
              <HeaderItem
                link="/login"
                icon={<HiOutlineUser className="text-white text-2xl" />}
              />
              <HeaderItem
                icon={<HiOutlineHeart className="text-white text-2xl" />}
              />
              <HeaderItem
                link="/carrito"
                icon={<HiOutlineShoppingCart className="text-white text-2xl" />}
              />
            </ul>
            <MenuSidebar categories={categories} />
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;
