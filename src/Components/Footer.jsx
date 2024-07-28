import React, { useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const Footer = () => {
  const [arrow_hover, setarrow_hover] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="flex flex-row justify-between 
      items-center px-3 max-md:pt-[10%] pt-[4%]"
      >
        <h2 className="text-xl max-sm:text-sm">
          Copyright 2023 By Bilal Shahid
        </h2>
        <div
          className="flex flex-row justify-center items-center 
          cursor-pointer max-sm:flex max-sm:flex-row-reverse
          max-sm:mb-[5%]"
          onClick={() => {
            scrollToTop();
          }}
          onMouseEnter={() => {
            setarrow_hover(true);
          }}
          onMouseLeave={() => {
            setarrow_hover(false);
          }}
        >
          <IoIosArrowRoundUp
            size={30}
            className={`rounded-tr-full
            rounded-tl-full border-t-[3px] ease-linear duration-300 transition-all
            ${arrow_hover ? "border-t-48px] border-t-zinc-900" : ""}`}
          />
          <p className="pt-2 px-2 text-xl max-md:hidden">Back On Top</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
