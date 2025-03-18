import React from "react";
import { FaCheck } from "react-icons/fa";

function Hero2() {
  return (
    <div className=" mt-14 md:mt-20  flex flex-col-reverse gap-4 md:flex-row px-4  w-auto">
      
        <div className="flex flex-col gap-2 justify-center md:w-1/2 text-left ">
          <h3 className="text-black font-medium text-4xl ">
            Airport pickup made easy
          </h3>
          <p className="text-black  w-2/3">
            Easy pickup offered by hosts at hundreds of airports across the
            Azerbaijan,Turkey,Georgia and Kazakhstan.
          </p>
          
            <ul className="text-black gap-3">
              <li className="list"><FaCheck/>No lines, no paperwork, no hassle</li>
              <li className="list"><FaCheck/>Find and pick up the car with the app</li>
              <li className="list"><FaCheck/>Rest easy with 24/7 support</li>
            </ul>
          
          <button className="bg-blue-500 text-xl px-5 py-3 w-2/3 font-bold rounded-xl mt-2">Search for airport cars</button>
        </div>
        <div>
          <img src="/download.webp" className="w-xl" />
        </div>
      
    </div>
  );
}

export default Hero2;
