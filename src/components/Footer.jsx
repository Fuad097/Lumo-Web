import React from "react";
import Footerlastel from "./Footerlastel";

function Footer() {
  return (
    <div className="w-full px-3 h-[700px] mt-30 bg-gray-200 grid place-items-start md:place-items-center">
      <div className=" container w-2/3  flex justify-between items-start mt-16">
        <div className="flex flex-col w-1/2   text-left gap-2">
          <h2 className="text-xl text-black font-semibold">Vehicle types</h2>
          <ul className="grid grid-rows-4 grid-flow-col gap-2">
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                Car rental
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                Sports car rental
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                Electric car rental
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                Exotic & luxury car rental
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                SUV rental
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                Minivan rental
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                Convertible rental
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                Truck rental
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-1/2  text-left gap-2">
          <h2 className="text-xl text-black font-semibold">Makes</h2>
          <ul className="grid grid-rows-4 grid-flow-col  gap-2">
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                BMW rental
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                Mercedes-Benz rental
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                Tesla rental
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                Toyota rental
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                Porsche rental
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                Hyundai rental
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                Kia rental
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black text-sm hover:underline hover:underline-offset-2"
              >
                Zeekr rental
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="text-black w-5xl"/>
      <Footerlastel/>
    </div>
  );
}

export default Footer;
