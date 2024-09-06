"use client";
import React, { useRef, useEffect } from "react";
import myWork_img1 from "../../../public/assets/images/png/myWork_img1.png";
import myWork_img2 from "../../../public/assets/images/png/myWork_img2.png";
import myWork_img3 from "../../../public/assets/images/png/myWork_img3.png";
import Image from "next/image";
import { MyWorkElp } from "./Icon";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyWork = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Add animations to the timeline for horizontal sliding
    tl.fromTo(
      "#sliderImg1",
      { x: "0", y: "50%", rotate: "0" },
      {
        x: "-100%",
        opacity: 1,
        duration: 3,
        y: "75%",
        rotate: "-45%",
        opacity: "0",
      }
    )
      .fromTo(
        "#sliderImg2",
        { x: "100%", y: "100%", rotate: "45%" },
        { x: "-100%", opacity: 1, duration: 3, y: "100%", rotate: "-45%" },
        "-=2"
      )
      .fromTo(
        "#sliderImg3",
        { x: "100%", y: "50%", rotate: "45%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 3, y: "50%", rotate: "0" },
        "-=2"
      );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="work"
      ref={containerRef}
      className="relative max-lg:py-12 pb-[209px] overflow-hidden h-screen"
    >
      <h1 className="max-[400px]:text-[50px] text-[60px] lg:text-[70px] font-normal text-white sm:mb-5 lg:mb-0 text-center">
        My Work
      </h1>
      <div className="absolute bottom-0 left-0">
        <MyWorkElp />
      </div>
      <div
        id="imgParent"
        className="flex justify-center gap-20 items-center w-screen relative mt-[150px]"
      >
        <Image
          id="sliderImg1"
          className="absolute w-[560px] h-[370px] top-0 -translate-y-1/2"
          src={myWork_img1}
          alt="img"
        />
        <Image
          id="sliderImg2"
          src={myWork_img2}
          alt="Image 2"
          className="absolute w-[560px] h-[370px] top-0 -translate-y-1/2"
        />
        <Image
          id="sliderImg3"
          src={myWork_img3}
          alt="Image 3"
          className="absolute w-[560px] h-[370px] top-0 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default MyWork;

// "use client";
// import React, { useRef, useEffect } from "react";
// import myWork_img1 from "../../../public/assets/images/png/myWork_img1.png";
// import myWork_img2 from "../../../public/assets/images/png/myWork_img2.png";
// import myWork_img3 from "../../../public/assets/images/png/myWork_img3.png";
// import Image from "next/image";
// import { MyWorkElp } from "./Icon";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const MyWork = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Create GSAP timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=3000", // Adjust duration as needed
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     // Animation for the images
//     tl.fromTo(
//       "#sliderImg1",
//       { x: "50%", opacity: 1, y: "50%", rotate: "0%" }, // Centered in viewport
//       { x: "0%", opacity: 1, y: "50%", rotate: "0%", duration: 1 } // Centered in container
//     )
//       .to(
//         "#sliderImg1",
//         { x: "-100%", opacity: 1, y: "50%", rotate: "0%", duration: 2 }, // Slide left
//         "-=1" // Overlap with the next image
//       )
//       .fromTo(
//         "#sliderImg2",
//         { x: "100%", opacity: 0, y: "50%", rotate: "0%" }, // Start from right side
//         { x: "0%", opacity: 1, y: "50%", rotate: "0%", duration: 2 }, // Center in container
//         "-=1" // Overlap with the previous animation
//       )
//       .to(
//         "#sliderImg2",
//         { x: "-100%", opacity: 1, y: "50%", rotate: "0%", duration: 2 }, // Slide left
//         "-=1"
//       )
//       .fromTo(
//         "#sliderImg3",
//         { x: "100%", opacity: 0, y: "50%", rotate: "0%" }, // Start from right side
//         { x: "0%", opacity: 1, y: "50%", rotate: "0%", duration: 2 }, // Center in container
//         "-=1"
//       )
//       .to(
//         "#sliderImg3",
//         { x: "0%", opacity: 1, y: "50%", rotate: "0%", duration: 2 }, // Centered at the end
//         "-=1"
//       );

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div
//       id="work"
//       ref={containerRef}
//       className="relative max-lg:py-12 pb-[209px] overflow-hidden h-screen"
//     >
//       <h1 className="max-[400px]:text-[50px] text-[60px] lg:text-[70px] font-normal text-white sm:mb-5 lg:mb-0 text-center">
//         My Work
//       </h1>
//       <div className="absolute bottom-0 left-0">
//         <MyWorkElp />
//       </div>
//       <div
//         id="imgParent"
//         className="flex w-screen relative mt-[150px] h-[560px] overflow-hidden"
//       >
//         <Image
//           id="sliderImg1"
//           className="w-[560px] absolute top-0"
//           src={myWork_img1}
//           alt="img"
//         />
//         <Image
//           id="sliderImg2"
//           className="w-[560px] absolute top-0"
//           src={myWork_img2}
//           alt="Image 2"
//         />
//         <Image
//           id="sliderImg3"
//           className="w-[560px] absolute top-0"
//           src={myWork_img3}
//           alt="Image 3"
//         />
//       </div>
//     </div>
//   );
// };

// export default MyWork;
