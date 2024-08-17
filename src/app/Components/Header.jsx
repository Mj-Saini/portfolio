"use client";
import React, { useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function toggleNavBar() {}

  const [navbar, setNavbar] = useState(false);
  function shownav() {
    setNavbar(!navbar);
  }

  function shownav() {}

  return (
    <section>
      <div className="container max-w-[1140px] 2xl:max-w-[1550px] mx-auto px-5">
        <div className="pt-[34px] pb-9 flex items-center justify-between">
          <div className="w-3/12 min-[1130px]:w-2/12">
            <a className="text-[32px] font-normal text-white " href="">
              Vikas Boora
            </a>
          </div>

          <div className="w-9/12 min-[1130px]:w-7/12">
            <ol className="flex items-center gap-[35px] lg:gap-[50px] justify-end  ">
              <li>
                <a
                  className="text-base font-normal text-white hover:text-[#15FFEA] duration-300 hover:border-b hover:border-[#15FFEA] "
                  href=""
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-base font-normal text-white hover:text-[#15FFEA] hover:border-b hover:border-[#15FFEA]  "
                  href=""
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  className="text-base font-normal text-white hover:text-[#15FFEA] hover:border-b hover:border-[#15FFEA]  "
                  href=""
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  className="text-base font-normal text-white hover:text-[#15FFEA] hover:border-b hover:border-[#15FFEA]  "
                  href=""
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  className="text-base font-normal text-white hover:text-[#15FFEA] hover:border-b hover:border-[#15FFEA]  "
                  href=""
                >
                  Contact
                </a>
              </li>
              <li>
                <button className="text-base font-normal text-black    bg-[#15FFEA] p-[10px_20px] rounded-[50px] ">
                  Hire me
                </button>
              </li>
            </ol>
          </div>

          {/* transition-transform */}
          <div
            onClick={toggleNavBar()}
            className="w-8 h-7 flex flex-col justify-between duration-[5s] menu_bar min-[850px]:hidden "
          >
            <span className="w-full h-[2px] bg-white  "></span>
            <span className="w-full h-[2px] bg-white  "></span>
            <span className="w-full h-[2px] bg-white  "></span>
          </div>

          <div className="md:hidden z-50" onClick={shownav}>
            {navbar ? (
              <img className="h-6 w-6 rotate-[45deg]" src="" alt="img" />
            ) : (
              <img className="h-6 w-6" src="" alt="img" />
            )}
          </div>
        </div>

        {/* <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="white" />
                    </svg>
                </span> */}
      </div>
    </section>
  );
};

export default Header;
