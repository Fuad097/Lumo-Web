import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <div className="flex w-2/3 px-4 md:w-full justify-between items-center">
      <div className="flex-none  w-auto bg-black m-2" ><h1 className="logo text-white px-1">Lumo</h1></div>
      <div className="flex-none w-64"></div>
      <div className="flex-1 justify-end md:justify-end md:gap-3 text-black flex">
        <button className="font-normal invisible md:visible md:rounded-lg outline-1 text-sm outline-gray-400 px-3 py-1">
          Become a host
        </button>

        <div className="flex w-auto gap-2 md:w-14 md:justify-between items-center ">
          <span className="text-2xl">
            <GiHamburgerMenu />
          </span>
          <span className="text-2xl">
            <FaRegUserCircle />
          </span>
        </div>
      </div>
    </div>

     
  );
}

export default Navbar;
