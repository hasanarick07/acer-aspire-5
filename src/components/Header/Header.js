import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import { MenuIcon } from "@heroicons/react/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="p-3 bg-violet-400">
        <div onClick={() => setOpen(!open)} className="w-6 md:hidden">
          <MenuIcon></MenuIcon>
        </div>
        <div
          className={`flex md:static transition duration-500 ease-in-out absolute md:justify-center ${
            open ? "top-2" : "top-[-120px]"
          } ${open ? "left-10" : "top-[-120px]"}`}
        >
          <CustomLink className="md:mr-7 text-xs md:text-base" to="/home">
            HOME
          </CustomLink>
          <CustomLink className="md:mr-7 text-xs md:text-base" to="/reviews">
            REVIEWS
          </CustomLink>
          <CustomLink className=" md:mr-7 text-xs md:text-base" to="/dashBoard">
            DASHBOARD
          </CustomLink>
          <CustomLink className="md:mr-7 text-xs md:text-base" to="/blogs">
            BLOGS
          </CustomLink>
          <CustomLink className="md:mr-7 text-xs md:text-base" to="/about">
            ABOUT
          </CustomLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
