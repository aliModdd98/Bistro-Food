import "./NavStyle.css";
import TopNav from "./TopNav";
import logo from "./../../assets/logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
const Nav = () => {
  const links = ["Home", "About", "Menu", "Pages", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <head className="flex w-full flex-col bg-white fixed top-0 z-20 px-2 md:px-4">
      <TopNav />
      <section className="max-container  w-full mx-auto mt-3 mb-3 px-4 flex justify-between items-center relative ">
        <div className="flex items-center">
          <img src={logo} alt="logo" width={50} height={50} />
          <h1 className="px-3 text-playfair font-playfairMedium italic text-gray-400 text-4xl">
            Bistro Bliss
          </h1>
        </div>

        <ul className="hidden md:flex justify-between items-center cursor-pointer ">
          {links.map((e, index) => (
            <li
              className="px-4 py-1 font-playfairMedium hover:bg-gray-300 hover:rounded-full"
              key={index}
            >
              {e}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <button className="  border-2 border-black px-4 py-2 rounded-full font-playfairMedium transition-all duration-500 ease-in-out hover:bg-gray-700 hover:text-white">
            Book A Table{" "}
          </button>
        </div>

        <div className="md:hidden relative ">
          {isOpen ? (
            <>
              <MdOutlineClose
                className="bock w-7 h-7 cursor-pointer"
                onClick={handleClick}
              />
            </>
          ) : (
            <HiOutlineMenu
              className="bock w-7 h-7 cursor-pointer"
              onClick={handleClick}
            />
          )}

          {isOpen ? (
            <div className="absolute top-12  right-0 opacity-100 transition-opacity duration-500 ease-in-out">
              <ul className="flex-col z-10 h-full bg-[#474747] rounded-md w-[360px] md:hidden justify-between items-center cursor-pointer ">
                {links.map((e, index) => (
                  <li
                    className="px-4 py-1 text-white hover:text-black font-playfairMedium hover:bg-gray-300 transition-all duration-500 ease-in-out "
                    key={index}
                  >
                    {e}
                  </li>
                ))}
                <button className="ml-2  border-2 border-black px-3 py-1 mb-2 rounded-full font-playfairMedium hover:bg-gray-700 hover:text-white">
                  Book A Table{" "}
                </button>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </head>
  );
};

export default Nav;
