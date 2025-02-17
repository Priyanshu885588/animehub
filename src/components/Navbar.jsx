import React from "react";
import { GoHomeFill } from "react-icons/go";
import { CiCircleList } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsTruck } from "react-icons/bs";
export const Navbar = () => {
  return (
    <div className="flex justify-center items-center w-full bg-transparent">
      <div className="w-[70vw] h-16 fixed bottom-9 bg-white p-2 rounded-full shadow-2xl flex justify-center items-center text-3xl gap-5 z-50">
        <button className="bg-green-100 rounded-full p-2">
          <GoHomeFill />
        </button>
        <button className=" rounded-full p-2">
          <CiCircleList />
        </button>
        <button className=" rounded-full p-2">
          <CiHeart />
        </button>
        <button className=" rounded-full p-2">
          <BsTruck />
        </button>
      </div>
    </div>
  );
};
