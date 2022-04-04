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
          className={`md:flex md:static transition duration-500 ease-in-out absolute md:justify-center ${
            open ? "top-6" : "top-[-120px]"
          }`}
        >
          <CustomLink className="mr-7" to="/home">
            HOME
          </CustomLink>
          <CustomLink className="mr-7" to="/reviews">
            REVIEWS
          </CustomLink>
          <CustomLink className="mr-7" to="/dashBoard">
            DASHBOARD
          </CustomLink>
          <CustomLink className="mr-7" to="/blogs">
            BLOGS
          </CustomLink>
          <CustomLink className="mr-7" to="/about">
            ABOUT
          </CustomLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
