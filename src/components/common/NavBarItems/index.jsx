import React from "react";
import { Link } from "react-router-dom";

const NavbarItems = ({ items, listClass }) => {
  return (
    <>
      {items.map((category) => (
        <li key={category.id}>
          <Link to={`/${category.id}`} className={listClass}>
            {category.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavbarItems;
