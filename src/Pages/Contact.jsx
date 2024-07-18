import React, { useEffect } from "react";
import Contact_ from "../Components/Contact";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

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
    </>
  );
};

export default Contact;
