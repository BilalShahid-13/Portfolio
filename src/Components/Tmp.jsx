import React, { useEffect } from "react";
import { gsap } from "gsap";

const Tmp = ({ title, id, des }) => {
  useEffect(() => {
    gsap.from("img", {
      opacity: 0,
      duration: 1,
    });

    // h1
    gsap.from("#selected h2 , #selected div", {
      opacity: 0,
      yPercent: -100,
      duration: 1,
    });
    gsap.to("#selected h2 , #selected div", {
      yPercent: 0,
      opacity: 1,
      duration: 3,
      stagger: .3,
    });
    // img
    gsap.to("img", {
      opacity: 1,
      duration: 8,
    });
  }, []);
  return (
    <>
      <div className="flex gap-12 flex-col max-sm:my-[10%]">
        <div
          className="flex flex-col justify-center items-center text-zinc-600"
          id="selected"
        >
          <h2
            className="gallient-font max-md:text-[100px]
           uppercase text-[230px] max-sm:text-[70px]"
          >
            {title}
          </h2>
          <div
            className="flex flex-row max-md:gap-14 gallient-font
         justify-between items-center gap-52"
          >
            <span
              className="border-[1px] border-neutral-300
            max-md:px-8 max-md:py-7 px-10 py-8 rounded-full text-center
            font-extralight"
            >
              {id}
            </span>
            <h2
              className="font-normal max-md:text-[80px] 
            uppercase text-[140px] max-sm:text-[50px]"
            >
              {des}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tmp;
