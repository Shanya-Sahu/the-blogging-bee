import React from "react";
import logo from "../logo.png";

function Header() {
  return (
    <div className="fixed top-0 w-full">
      <nav className="py-5 bg-[#F4F4F4]">
        <h1 className="text-center text-[#5398C6] font-bold text-3xl lg:text-5xl flex justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="h-[15%] w-[15%] lg:h-[5%] lg:w-[5%] mr-3"
          />
          Latest Blogs{" "}
        </h1>
      </nav>
    </div>
  );
}

export default Header;
