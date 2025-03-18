import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const cars = [
  { img: "Jeep.webp", name: "Jeep" },
  { img: "benz.webp", name: "Mercedenz-benz" },
  { img: "bmw.webp", name: "BMW" },
  { img: "ford.webp", name: "Ford" },
  { img: "nissan.webp", name: "Nissan" },
  { img: "porsche.webp", name: "Porsche" },
  { img: "tesla.webp", name: "Tesla" },
  { img: "toyota.webp", name: "Toyota" },
  { img: "lambo.webp", name: "Lambo" },
  { img: "subaru.webp", name: "Subaru" },
];

function wrapper() {
  return (
    <div className="w-full">
      <div className="min-w-7xl flex justify-center mt-20">
        <div className="flex justify-between items-center w-5xl">
          <h3 className="text-black text-2xl font-semibold">Browse by make</h3>
          <div className="flex items-center text-gray-500 text-2xl justify-center">
            <IoIosArrowBack className="active:text-black" />
            <IoIosArrowForward />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 items-center">
        <div className="grid grid-cols-5  gap-5">
          {cars.map((car, index) => (
            <div
              key={index}
              className="rounded-2xl outline-1 outline-gray-600 mb-3 bg-white  shadow-lg hover:scale-105 ease-in-out duration-300"
            >
              <img
                className="w-[220px] rounded-t-2xl cursor-pointer "
                src={car.img}
                alt="Car"
              />
              <h2 className="text-black text-xl font-semibold mb-4 hover:text-blue-400 text-center">
                {car.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default wrapper;
