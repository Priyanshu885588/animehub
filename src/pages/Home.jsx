import React from "react";
import { IoMdSearch } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import Anime from "../assets/anime.png";

export const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="overflow-x-hidden">
        <div className="h-56 w-full anime-background flex rounded-b-4xl">
          <div className="flex justify-center items-end w-full">
            <div className="h-full w-full rounded-bl-4xl bg-[#000000de] flex justify-center items-center flex-col">
              <p></p>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-2xl font-quicksand font">
                  Winter Sale
                </h3>
                <p className="text-white text-sm font-quicksand font">
                  Save up to 50% <br></br>on the posters
                </p>
              </div>
            </div>
            <div className="h-full w-full rounded-br-4xl bg-[#000000de] ">
              <img src={Anime} alt="" className="relative" />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="bg-white rounded-full h-10 mb-4 w-[90%] shadow-lg relative bottom-6 flex">
            <div className="p-2">
              <IoMdSearch className="text-2xl" />
            </div>
            <input type="search" className=" w-full" value="Find a sticker" />
            <div className="p-2">
              <GoArrowRight className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
