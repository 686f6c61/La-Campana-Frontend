import { useState, useEffect } from "react";
import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";


const FooterItem = ({ title, links, collapsible = false }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!collapsible || !mobile); // abierto por defecto en desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [collapsible]);


  const toggleOpen = () => {
    if (collapsible && isMobile) {
      setIsOpen(!isOpen);
    }
  };


  return (
    <article className="text-start flex flex-col gap-2 w-full">
      <div
        className={`flex justify-between items-center cursor-pointer ${
          collapsible && isMobile ? "hover:text-lacampana-red1" : ""
        }`}
        onClick={toggleOpen}
      >
        <h5 className="text-lacampana-red2 ">{title}</h5>
        {collapsible && isMobile && (
          <IoIosArrowDown
            className={`text-xl transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </div>


      {(isOpen || !collapsible) && (
        <ul className={`flex flex-col gap-2 transition-all duration-300 ease-in-out ${!isOpen && collapsible ? "hidden" : "block"}`}>
          {links.map((linkItem, index) => (
            <li
              key={index}
              className="hover:text-lacampana-red1 hover:scale-105 transition duration-300 ease-in-out "
            >
              <Link to={linkItem.link}>
                <p>{linkItem.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};


export default FooterItem;
