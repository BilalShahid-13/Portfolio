import React, { useEffect } from "react";
import Data from "../config/Data";
import { gsap } from "gsap";

const Hero = () => {
  const { HeroTitle, HeroDes } = Data;
  useEffect(() => {
    gsap.from("img", {
      opacity: 0,
      duration: 1,
    });

    // h1
    gsap.from("#hero h1", {
      // opacity: 0,
      y: -900,
      duration: 1,
      // stagger: 3,
    });
    gsap.to("#hero h1", {
      y: 0,
      // opacity: 1,
      duration: 3,
      stagger: 0.3,
    });
    // img
    gsap.to("img", {
      opacity: 1,
      duration: 8,
    });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-36 max-md:gap-20">
        <div
          className="mt-40 flex flex-col justify-center items-center space-y-5"
          id="hero"
        >
          <h1
            className="flex flex-row justify-center items-center
      gap-1 uppercase text-[180px] max-md:text-4xl gallient-font text-zinc-600 drop-shadow-2xl"
          >
            Crea
            <div className="relative w-[20vw] h-[50vh] max-md:w-24 max-md:h-28 mx-4">
              <img
                src="https://bilalshahid-13.github.io/Portfolio/favicon.jpg"
                alt=""
                className="bg-[#DCDCDC] drop-shadow-2xl
            absolute inset-0 w-full h-full object-cover
            rounded-tr-full rounded-tl-full rounded-br-full
            rounded-bl-md"
              />
            </div>
            tive
          </h1>
          {HeroTitle.map((items, index) => (
            <h1
              className="uppercase text-[180px] max-md:text-4xl gallient-font text-center text-zinc-600 drop-shadow-2xl"
              key={index}
            >
              {items.title}
            </h1>
          ))}
        </div>

        <div className="max-md:flex-col flex flex-row">
          <div
            className="flex flex-wrap items-center justify-center text-center
            max-md:w-[80%] gap-3 px-4 w-[70%] max-md:justify-start"
          >
            {HeroDes.map((items, index) => (
              <span
                className="inline uppercase leading-relaxed max-md:text-sm text-[44px]"
                key={index}
              >
                <span className="font-extralight text-zinc-500 dm-sans-font">
                  {items.p}
                </span>
                <span className="font-bold text-zinc-700 dm-sans-font">
                  {items.bold}
                </span>
              </span>
            ))}
          </div>
          <img
            src="https://bilalshahid-13.github.io/Portfolio/about.png"
            alt=""
            className="w-[60vw] h-[100vh] max-md:mx-6
            max-md:w-[70vw] max-md:h-[80vh]
             max-sm:w-[60vw] max-sm:h-[70%]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
