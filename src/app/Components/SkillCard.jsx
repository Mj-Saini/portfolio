import React from "react";
import { SkillCardArr } from "./Helper";

const SkillCard = () => {
  return (
    <div>
      <h1 className="text-[32px] font-semibold text-white mb-5 ">My Skills</h1>
      <p className="text-base font-normal text-white/80 lg:w-[534px] tracking-[3px] pb-11 ">
        Lorem ipsum dolor sit amet consectetur. Aliquet elit dolorLorem ipsum
        dolor sit amet consectetur. Aliquet elit dolor..
      </p>
      <div className="flex flex-wrap  ">
        {SkillCardArr.map((items, i) => {
          return (
            <div
              key={i}
              className="w-3/12 rounded-[10px] bg-[#313131] p-5 flex justify-center items-center flex-col"
            >
              <span>{items.courseImg}</span>
              <p className="font-normal text-base tracking-[3px] text-white text-center ">
                {items.courseName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
