import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);

  // scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsopen(false);
    }
  };

  return (
    <div className=" fixed z-30 h-[60px] w-full flex justify-between items-center bg-background px-5  md:px-10 ">
      <div className="text-[20px] lg:text-[25px]  font-bold bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        John.Dev
      </div>
      <div className=" hidden md:flex gap-10 text-[20px] md:text-[18px] lg:text-[20px] font-bold scroll">
        <li
          className=" cursor-pointer list-none"
          onClick={() => handleScroll("home")}
        >
          Home
        </li>
        <li
          className=" cursor-pointer list-none"
          onClick={() => handleScroll("about")}
        >
          About
        </li>
        <li
          className=" cursor-pointer list-none"
          onClick={() => handleScroll("project")}
        >
          Project
        </li>
        <li
          className=" cursor-pointer list-none"
          onClick={() => handleScroll("contact")}
        >
          Contact
        </li>
      </div>

      {/* icon */}
      <button
        onClick={() => setIsopen(!isOpen)}
        className=" flex md:hidden text-[30px]  bg-background"
      >
        <IoIosMenu />
      </button>

      {/* overLay */}
      {/* {isOpen && (
        <div
          onClick={() => setIsopen(false)}
          className="fixed top-0 right-0 z-40 md:hidden w-full h-screen  bg-black/50 transition-transform duration-300"
        ></div>
      )} */}

      {/* SideModal */}
      <div
        className={`fixed top-0 right-0 z-50 md:hidden w-full h-screen flex items-center justify-center bg-black transition-transform duration-300 ${
          isOpen ? "translate-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsopen(false)}
          className="absolute top-4 right-6 h-10"
        >
          <IoMdClose className="text-3xl outline-0 " />
        </button>
        <div className="flex flex-col items-center  gap-10 text-[20px] font-bold  scroll ">
          <li
            className=" cursor-pointer list-none"
            onClick={() => handleScroll("home")}
          >
            Home
          </li>
          <li
            className=" cursor-pointer list-none"
            onClick={() => handleScroll("about")}
          >
            About
          </li>
          <li
            className=" cursor-pointer list-none"
            onClick={() => handleScroll("project")}
          >
            Project
          </li>
          <li
            className=" cursor-pointer list-none"
            onClick={() => handleScroll("contact")}
          >
            Contact
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
