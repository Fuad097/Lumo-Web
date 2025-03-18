import React from "react";

function Body() {
  return (
    <div className="mt-40 w-full  md:flex items-center justify-between  gap-24 px-6">
      <div>
        <img className=" w-5xl h-64 object-cover" src="/list.webp" />
      </div>
      <div className="flex flex-col mt-10 md:mt-0 text-left gap-2.5">
        <h1 className="text-black font-medium text-3xl">
          Car rental for any occasion
        </h1>
        <p className="text-black">
          Browse an incredible selection of cars, from the everyday to the
          extraordinary.
        </p>
        <button className="bg-blue-500 text-xl w-1/3 px-2 py-3 font-bold rounded-xl mt-2">Explore cars</button>
      </div>
    </div>
  );
}

export default Body;
