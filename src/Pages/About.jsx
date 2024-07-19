import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const About = () => {
  useEffect(() => {
    gsap.from("img", {
      opacity: 0,
      duration: 1,
    });

    // h1
    gsap.from("#about h1", {
      opacity: 0,
      y: -900,
      duration: 1,
    });
    gsap.to("#about h1", {
      y: 0,
      duration: 3,
      stagger: 3,
      opacity: 1,
    });
    // img
    gsap.to("img", {
      opacity: 1,
      duration: 8,
    });
  }, []);
  const services = [
    {
      imgs: "https://bilalshahid-13.github.io/Portfolio/strategy.png",
      title: "Strategy & Direction",
      des: "Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project.",
    },
    {
      imgs: "https://bilalshahid-13.github.io/Portfolio/design.png",
      title: "Design UI/UX",
      des: "Defining the problem, identifying the scope and finally, organising the design roadmap to bring out 100% of every project.",
    },
  ];

  return (
    <>
      <div
        className="mt-[30%] flex flex-col justify-center
       items-center gap-4 max-sm:mt-[70%]"
      >
        <div className="flex flex-col gap-4" id="about">
          <h1 className="gallient-font max-md:text-6xl text-[16vw] text-zinc-700">
            MY LITTLE
          </h1>
          <h1
            className="gallient-font max-md:text-4xl text-[12vw] text-right
           text-zinc-600"
          >
            BIT ABOUT*
          </h1>
        </div>

        <div
          className="flex justify-center items-center max-lg:flex-row md:gap-6 bg-neutral-100 mx-2 max-md:mx-4
        max-md:flex-col"
        >
          <img
            src="https://bilalshahid-13.github.io/Portfolio/file.jpg"
            alt=""
            className="max-md:w-[70%] max-md:h-70% w-[100%] h-[100%]"
          />
          <div className="flex flex-col justify-center items-center tracking-wider px-4 gap-5 mt-2 ">
            <p className="font-extralight text-base md:text-xl lg:text-4xl xl:text-5xl dm-sans-font text-left leading-relaxed tracking-wider">
              I help people and companies achieve their&nbsp;
              <span className="font-semibold">goals by designing&nbsp;</span>&
              building&nbsp;
              <span className="font-semibold">user-friendly&nbsp;</span>
              websites and &nbsp;
              <span className="font-semibold">interactive &nbsp;</span>
              experiences.
            </p>

            <p className="text-xl max-md:text-[16px] font-extralight text-justify dm-sans-font">
              I’ve been developing work in many disciplines around the world for
              the past 8 years in Web Development, crafting Systematic Digital
              Experiences, defining Brand Design and Product User Interfaces. A
              Developer at heart, I am interested in creating useful
              relationships between people and technology.
            </p>
          </div>
        </div>

        <div className="space-y-7 my-[17%]">
          <h2
            className="gallient-font md:text-6xl lg:text-[16vw]
            text-zinc-700  uppercase max-sm:text-[17vw]"
          >
            Featured
          </h2>
          <h2
            className="gallient-font md:text-5xl lg:text-[12vw]
            text-zinc-500 uppercase text-right max-sm:text-[12vw]"
          >
            servies*
          </h2>
        </div>

        <div
          className="flex flex-col gap-4
        "
        >
          {services.map((items, index) => (
            <div
              key={index}
              className="bg-neutral-100 p-3 rounded-lg
              flex flex-col max-md:w-1/2
              max-md:translate-x-[50%]
              max-sm:w-[80%] max-sm:translate-x-[13%]
              max-sm:justify-center max-sm:items-center"
            >
              <img
                src={items.imgs}
                alt=""
                className="w-[10%] h-[10%] max-sm:w-[50%] max-sm:h-[50%]"
              />
              <h1>{items.title}</h1>
              <p>{items.des}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 px-3">
          <h6 className="text-3xl uppercase font-extralight dm-sans-font">
            Next page
          </h6>
          <Link
            to={"/contact"}
            className="no-underline text-7xl gallient-font font-bold text-zinc-700 ml-4"
          >
            Contact*
          </Link>
        </div>


      </div>
    </>
  );
};

export default About;
