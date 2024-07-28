import React, { useEffect } from "react";
import Contact_ from "../Components/Contact";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoGmail } from "react-icons/bi";
import { RiGithubFill } from "react-icons/ri";


const Contact = () => {
  useEffect(() => {
    gsap.from("img", {
      opacity: 0,
      duration: 1,
    });

    // h1
    gsap.from("#reached h1", {
      // opacity: 0,
      y: -900,
      duration: 1,
    });
    gsap.to("#reached h1", {
      y: 0,
      duration: 3,
      stagger: 3,
    });
    // img
    gsap.to("img", {
      opacity: 1,
      duration: 8,
    });
  }, []);

  return (
    <>
      <div
        className="flex flex-col gap-4
      justify-center items-center max-sm:mt-[60%]"
        id="reached"
      >
        <h1
          className="gallient-font
        max-md:text-6xl text-[16vw] text-zinc-700
        max-sm:text-7xl"
        >
          REACHED
        </h1>
        <h1
          className="gallient-font max-md:text-4xl text-[10vw] text-right
            text-zinc-500"
        >
          OUT TODAY*
        </h1>
      </div>
      <Contact_ />
      <div className="flex flex-col gap-2 px-3 my-[10%]">
        <h6 className="text-3xl uppercase font-extralight dm-sans-font">
          Next page
        </h6>
        <Link
          to={"/"}
          className="no-underline text-7xl gallient-font font-bold text-zinc-700 ml-4"
        >
          Home*
        </Link>
      </div>

      <div className="flex flex-row justify-center items-center gap-16">
        {/* linkedin */}
        <a href="https://www.linkedin.com/in/codingwithbilal-pro/" target="_blank" className="text-2xl max-md:text-base
          no-underline text-zinc-800 flex justify-center items-center
          flex-col gap-2">
          <TiSocialLinkedin className="rounded-full
           bg-blue-500 max-md:text-5xl text-6xl p-2 hover:bg-blue-600
           hover:scale-125 transtition-all ease-linear duration-150" color="white" />
          Linkedin
        </a>
        {/* email */}
        <a href="mailto:codingwithbilal.pro@gmail.com" className="text-2xl max-md:text-base
          no-underline text-zinc-800 flex justify-center items-center
          flex-col gap-2">
          <BiLogoGmail className="rounded-full
           bg-red-500 max-md:text-5xl text-6xl p-2  hover:scale-125 transtition-all ease-linear duration-150" color="white" />
          Gmail
        </a>
        {/* github */}
        <a href="https://github.com/BilalShahid-13/" target="_blank" className="text-2xl max-md:text-base
          no-underline text-zinc-800 flex justify-center items-center
          flex-col gap-2">
          <RiGithubFill className="rounded-full
           bg-zinc-500 max-md:text-5xl text-6xl p-2 hover:scale-125 transtition-all ease-linear duration-150" color="white" />
          Github
        </a>
      </div>
    </>
  );
};

export default Contact;
