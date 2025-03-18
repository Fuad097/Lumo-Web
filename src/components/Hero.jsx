import React from "react";
import { IoSearchOutline } from "react-icons/io5";
function Hero() {
  return (
    <div className="hero flex justify-center items-center md:items-start">
      <div className="inputgroup flex flex-col w-3/4 md:flex-row md:w-2/4 py-1   px-3 md:mt-4 gap-5 bg-white rounded-2xl md:rounded-4xl absolute md:justify-start ">
        <div className="flex flex-col w-2/3 px-3">
          <label className="font-medium text-black flex justify-start text-xs">Where</label>
          <input
            className="text-black w-full border border-gray-300 rounded-lg  py-1 border-none "
            placeholder="City, airport, address or hotel"
          />
        </div>

       
          <div className="flex flex-col w-1/3">
            <label className="text-black font-medium text-xs flex justify-start">From</label>
            <div className="flex w-full justify-between">
            <select className="w-full border border-gray-300 rounded-lg text-black  py-2 border-none ">
              <option  value="">Select</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
            <select className="w-full border border-gray-300 rounded-lg text-black  py-2 border-none ">
              <option  value="">Select</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
            </div>
          </div>
          
   
          <div className="flex flex-col w-1/3">
            <label className="text-black font-medium text-xs flex justify-start">Untill</label>
            <div className="flex">
            <select className="w-full border border-gray-300 rounded-lg text-black  py-2 border-none ">
              <option  value="">Select</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
            <select className="w-full border border-gray-300 rounded-lg text-black  py-2 border-none ">
              <option  value="">Select</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
            </div>
          </div>

          <div className="flex justify-center items-center">
          <IoSearchOutline className=" text-white bg-blue-400 invisible md:px-3 md:py-3 md:text-5xl md:rounded-4xl md:visible" />
          <button className="rounded-xl w-2/2 visible py-2 mb-3 bg-black text-3xl md:hidden">Search</button>
          </div>
      </div>
    </div>
  );
}

export default Hero;
