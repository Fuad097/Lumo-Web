import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";



function Footerlastel() {
  return (
    <div className="w-full ">
      <div className="container w-full  flex gap-10">
        <div>
          <h2 className="text-xl text-black font-semibold">Lumo</h2>
        </div>
        <div>
          <h2 className="text-xl text-black font-semibold">Locations</h2>
        </div>
        <div>
          <h2 className="text-xl text-black font-semibold">Explore</h2>
        </div>
        <div>
          <h2 className="text-xl text-black font-semibold">Hosting</h2>
        </div>
        <div className="grid grid-rows-3">
          <div className="flex gap-3 text-black text-2xl">
            <FaFacebook />
            <FaInstagram />
          </div>
          <div className="flex justify-between gap-3 ">
            <button className="px-3 py-1 rounded-2xl flex gap-2 bg-black cursor-pointer">
              <div className="flex items-center text-4xl"><FaApple/></div>
              <div className="flex flex-col text-white justify-end text-[10px]">
                <p>Download on the</p>
                <p className="text-[14px] font-bold">App Store</p>
              </div>
            </button>

            <button className="px-3 py-1 rounded-2xl flex gap-2 bg-black">
              <div className="flex items-center text-4xl"><FaGooglePlay/></div>
              <div className="flex flex-col text-white text-[12px]">
                <p>Get it on</p>
                <p className="text-[20px]">Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footerlastel;
