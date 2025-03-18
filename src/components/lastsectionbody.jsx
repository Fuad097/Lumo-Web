import React from "react";
import { FaGreaterThan } from "react-icons/fa";

function lastsectionbody() {
  return (
    <div className="flex w-full justify-center">
      <div className=" grid grid-cols-2 w-2/3 md:w-2/4 mt-40 gap-12">
        <div className="flex flex-col items-center justify-end">
          <a
            className="text-blue-400 text-xl md:text-3xl flex  items-center font-semibold hover:underline hover:underline-offset-2 hover:text-blue-500 gap-3"
            href="car"
          >
            Rent a car <FaGreaterThan />
          </a>
          <p className="text-center  md:w-2/3 px-1.5 mt-5 text-black leading-relaxed">
            Down the street or across the country, find the perfect vehicle for
            your next adventure.
          </p>
        </div>

        <div>
          <img className="w-48 h-auto md:w-80 md:h-full" src="/host.png" alt="host" />
        </div>

        <div className="flex justify-end">
          <img className="w-48 h-40 md:w-72 md:h-full" src="/guest.png" alt="guest" />
        </div>

        <div>
          <a
            className="text-blue-400 text-xl md:text-3xl flex  items-center font-semibold hover:underline hover:underline-offset-2 hover:text-blue-500 gap-3"
            href="car"
          >
            Become a host <FaGreaterThan />
          </a>
          <p className="text-center w-3/3 md:w-2/3 md:px-1.5 mt-5 text-black leading-relaxed">
            Accelerate your entrepreneurship and start building a small car
            sharing business on Turo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default lastsectionbody;
