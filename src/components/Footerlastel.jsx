import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";

function Footerlastel() {
  return (
    <div className="w-full h-auto ">
      <div className=" flex flex-col-reverse  md:flex-row md:justify-between w-2/3 md:mx-auto gap-4">
        <div className=" flex flex-col justify-start md:flex-row md:justify-between text-start w-2/3 md:mx-auto gap-4">
          <h2 className="text-xl text-black font-semibold">Lumo</h2>

          <h2 className="text-xl text-black font-semibold">Locations</h2>

          <h2 className="text-xl text-black font-semibold">Explore</h2>

          <h2 className="text-xl text-black font-semibold">Hosting</h2>
        </div>
        <div className="grid grid-rows-3 gap-5 mt-5 justify-items-start">
          <div className="flex gap-6 text-black text-2xl">
            <FaFacebook />
            <FaInstagram />
          </div>
          <div className="flex  md:justify-between gap-4 ">
            <button className="px-3 py-1 rounded-xl flex gap-2 bg-black cursor-pointer">
              <div className="flex items-center text-2xl">
                <FaApple />
              </div>
              <div className="flex flex-col text-white justify-end text-[10px]">
                <p>Download on the</p>
                <p className="text-[12px] font-bold">App Store</p>
              </div>
            </button>

            <button className="px-3 py-1 rounded-xl flex gap-2 bg-black">
              <div className="flex items-center text-2xl">
                <FaGooglePlay />
              </div>
              <div className="flex flex-col text-white text-[10px]">
                <p>Get it on</p>
                <p className="font-bold text-[12px]">Google Play</p>
              </div>
            </button>
          </div>

          <select className="text-black bg-gray-100 w-36 ">
            <option defaultChecked value="English">
              English
            </option>
            <option value="Russian">Russian</option>
            <option value="Azerbaijan"> Azerbaijan</option>
            <option value="Turkish">Turkish</option>
            <option value="Georgia">Georgia</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Footerlastel;
