import React from "react";
import { DotGreenIcon } from "./Icon";
import { ExpCard } from "./Helper";

const CardExp = () => {
  return (
    <div>
      {" "}
      <h1 className="text-[32px] font-semibold text-white mb-5 ">
        My Experience
      </h1>
      <p className="text-base font-normal text-white/80 lg:w-[534px] tracking-[3px] pb-11 ">
        Lorem ipsum dolor sit amet consectetur. Aliquet elit dolorLorem ipsum
        dolor sit amet consectetur. Aliquet elit dolor..
      </p>{" "}
      <div className="flex flex-wrap gap-5 ">
        {ExpCard.map((item, i) => {
          return (
            <div key={i} className="bg-[#313131] rounded-[10px] p-5 w-5/12  ">
              <p className="text-lg font-normal text-[#15FFEA]  ">
                {item.Year}
              </p>
              <h1 className="text-white font-semibold text-[32px] my-[10px]">
                {item.course}
              </h1>
              <div className="flex gap-[10px] items-center ">
                <DotGreenIcon />
                <p className="text-lg font-normal text-[#15FFEA]  ">
                  {" "}
                  {item.company}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardExp;

{
  /* <div className='bg-[#313131] rounded-[10px] p-5 w-6/12  '>
<p className='text-lg font-normal text-[#15FFEA]  '>2020 - 2021</p>
<h1 className='text-white font-semibold text-[32px] my-[10px]'>Full Stack Developer</h1>
<div className='flex gap-[10px] items-center '>
<DotGreenIcon/>
<p className='text-lg font-normal text-[#15FFEA]  '> Hexabirds Pvt. Ltd</p>
</div>
</div> */
}
