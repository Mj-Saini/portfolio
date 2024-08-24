"use client";
import React, { useState } from "react";
import CardExp from "./CardExp";
import SkillCard from "./SkillCard";

const HireResume = () => {
  const [activeTabs, setActiveTabs] = useState("Experience");
  return (
    <div id="resume" className="relative py-12 lg:pt-[81px] lg:pb-[ 225px] ">
      <div className="container max-w-[1140px] 2xl:max-w-[1550px] mx-auto px-5  ">
        <h1 className="max-[400px]:text-[50px] text-[60px] lg:text-[70px] font-normal text-white sm:mb-5 xl:mb-[ 144px]  ">
          Resume...
        </h1>

        <div className="flex flex-wrap">
          <div className="p-[30px] w-4/12 ">
            <h1 className="text-[40px] font-semibold text-white  ">
              Why hire me?
            </h1>
            <p className="text-base font-normal text-white/80 my-5 tracking-[2px] ">
              Lorem ipsum dolor sit amet consectetur. Aliquet elit dolor.
            </p>

            <div className="flex flex-col gap-5 ">
              <button
                onClick={() => setActiveTabs("Experience")}
                className={`text-base font-normal  p-[10px] rounded-[10px]  hover:bg-[#15FFEA] hover:text-black text-center w-full duration-300  ${
                  activeTabs === "Experience"
                    ? "bg-[#15FFEA] text-black"
                    : "bg-[#313131] text-white"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTabs("Education")}
                className={`text-base font-normal  p-[10px] rounded-[10px]  hover:bg-[#15FFEA] hover:text-black text-center w-full duration-300  ${
                  activeTabs === "Education"
                    ? "bg-[#15FFEA] text-black"
                    : "bg-[#313131] text-white"
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTabs("Skills")}
                className={`text-base font-normal  p-[10px] rounded-[10px]  hover:bg-[#15FFEA] hover:text-black text-center w-full duration-300  ${
                  activeTabs === "Skills"
                    ? "bg-[#15FFEA] text-black"
                    : "bg-[#313131] text-white"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTabs("About")}
                className={`text-base font-normal  p-[10px] rounded-[10px]  hover:bg-[#15FFEA] hover:text-black text-center w-full duration-300  ${
                  activeTabs === "About"
                    ? "bg-[#15FFEA] text-black"
                    : "bg-[#313131] text-white"
                }`}
              >
                About me
              </button>
            </div>
          </div>
          <div className="w-8/12">
            <div className="p-[30px]  ">
              {activeTabs === "Experience" && <CardExp />}
              {activeTabs === "Skills" && <SkillCard />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireResume;
