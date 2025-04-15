import React from "react";
import { DotGreenIcon } from "./Icon";
import { ExpCard } from "./Helper";

const CardExp = () => {
  return (
    <div>
      <h1 className="text-[32px] font-semibold text-white mb-3 md:mb-5 ">
        My Experience
      </h1>
      <p className="text-base font-normal text-white/80 lg:w-[534px] tracking-[3px] pb-5 lg:pb-11 ">
        I have over 2 years of experience working as a Frontend Developer at
        Hexabirds Pvt. Ltd, where I honed my skills in building responsive and
        user-friendly web applications.
      </p>
      <div className="flex flex-wrap -mx-[10px] justify-center max-lg:h-[250px] max-lg:overflow-y-scroll ">
        {ExpCard.map((item, index) => {
          return (
            <div key={index} className="w-full sm:w-10/12 lg:w-6/12 px-[10px] mb-5">
              <div className="bg-[#313131] flex flex-col justify-between rounded-[10px] p-5 h-full">
                <div> <p className="text-lg font-normal text-[#15FFEA]  ">
                  {item.Year}
                </p>
                  <h1 className="text-white font-semibold text-[24px] lg:text-[28px] xl:text-[32px] my-[10px]">
                    {item.course}
                  </h1></div>
                <div className="flex gap-[10px] items-center ">
                  <DotGreenIcon />
                  <p className="text-lg font-normal text-[#15FFEA] ">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardExp;


