import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex">
      <div className="container max-w-[1140px] 2xl:max-w-[1550px] mx-auto px-5 flex-grow flex items-center">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2">
            <div>
              <p className="font-normal text-base md:text-xl text-white">
                Full Stack Developer
              </p>
              <h1 className="font-semibold text-4xl md:text-[54px] lg:text-7xl xl:text-[80px] text-white md:!leading-[5~0px] lg:!leading-[90px] mt-1">
                Hello I’ m <span className="text-[#15FFEA]">Navdeep singh</span>
              </h1>
              <p className="font-normal text-base md:text-lg text-white/80 py-4 md:py-[30px]">
                Lorem ipsum dolor sit amet consectetur. At augue dignissim eu
                posuere non mi dictum lacus praesent. Aliquet elit r dolor.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
