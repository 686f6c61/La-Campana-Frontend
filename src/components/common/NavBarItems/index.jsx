import React from "react";
import { Link } from "react-router-dom";

const NavbarItems = ({ items, listClass }) => {
  return (
    <>
      {items.map((category) => (
        <li key={category.id}>
          <Link to={`/${category.id}`} className="text-gray-700 text-sm  hover:text-gray-700">
            {category.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavbarItems;
