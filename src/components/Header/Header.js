import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <nav className="p-3 bg-lime-300 flex justify-center	">
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
      </nav>
    </div>
  );
};

export default Header;
