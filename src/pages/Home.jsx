import React from "react";
import { IoMdSearch } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { Navbar } from "../components/Navbar";
import Anime from "../assets/anime.png";
import Image1 from "../assets/11.jpg";
import Image2 from "../assets/12.jpg";
import Image3 from "../assets/14.jpg";
import Image4 from "../assets/15.jpg";
import Image5 from "../assets/16.jpg";
import Image6 from "../assets/17.jpg";

export const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#eeeeee]">
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
            <input
              type="search"
              className=" w-full focus:outline-none"
              placeholder="Find a sticker"
            />
            <div className="p-2">
              <GoArrowRight className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 p-4">
          <img src={Image1} alt="" className="w-full" />
          <img src={Image2} alt="" className="w-full" />
          <img src={Image3} alt="" className="w-full" />
          <img src={Image4} alt="" className="w-full" />
          <img src={Image5} alt="" className="w-full" />
          <img src={Image6} alt="" className="w-full" />
        </div>
        <Navbar />
      </div>
    </div>
  );
};
