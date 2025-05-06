import {
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import HeaderItem from "./components/HeaderItem";
import SearchBar from "../../components/common/SearchBar";
import MenuSidebar from "./components/MenuSidebar";
import categories from "../../utils/categories";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../store/reducers/apiSlice";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const cart = useSelector((state) => state.cart);
  const cartItemCount = cart.length;

  const { data: products } = useGetProductsQuery();
  console.log(products);

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
    <header
      className={`pl-5 pr-5 bg-lacampana-red2 flex justify-evenly items-center ${
        !scrolling
          ? "h-[100px]"
          : "bg-lacampana-red2 fixed top-0 w-full z-50 shadow-lg h-[70px]"
      } transition-all duration-300 ease-in-out`}
    >
      <nav className="w-full max-w-7xl flex items-center justify-between">
        <div className="navbar-start">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className={`transition-all duration-300 ease-in-out object-cover ${
                scrolling
                  ? "w-[130px] tablet:w-[200px]"
                  : "w-[130px] tablet:w-[230px]"
              }`}
            />
          </Link>
        </div>
        <section className="navbar-end">
          <div className="flex justify-end gap-4">
            <div className="hidden tablet:block w-[300px]">
              <SearchBar placeholder="Buscar producto..." />
            </div>
            <ul className="flex gap-4 items-center">
              <HeaderItem
                link="/inicio"
                icon={
                  <HiOutlineUser className="text-white text-2xl hover:scale-90 transition duration-200 ease-in-out" />
                }
              />
              <HeaderItem
                icon={
                  <HiOutlineHeart className="text-white text-2xl hover:scale-90 transition duration-200 ease-in-out" />
                }
              />
              <HeaderItem
                link="/carrito"
                icon={
                  <div className="relative">
                    <HiOutlineShoppingCart className="text-white text-2xl hover:scale-90 transition duration-200 ease-in-out" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
                        {cartItemCount}
                      </span>
                    )}
                  </div>
                }
              />
            </ul>
            <MenuSidebar categories={categories} scrolling={scrolling} />
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;
