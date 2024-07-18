import React, { useEffect, useState } from "react";
import Data from "../config/Data";
import { IoMdArrowDropright } from "react-icons/io";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { Heading } = Data;
  const location = useLocation();
  useEffect(() => {
    // Animate li elements
    gsap.fromTo(
      "li",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, xPercent: 0, stagger: 0.3, duration: 1.4 }
    );

    // Animate heading
    gsap.fromTo(
      "#heading",
      { opacity: 0, xPercent: -100, color: "#fff" },
      { opacity: 1, xPercent: 0, color: "#E97451", duration: 1.4 }
    );
  }, []);

  const [liHover, setLiHover] = useState({ bol: false, index: null });

  const NavbarItems = [
    { title: "Home", link: "/" },
    { title: "Projects", link: "/projects" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className="flex flex-row relative my-5">
        <h1
          className="text-black text-2xl font-bold mx-5 dm-sans-font"
          id="heading"
        >
          {Heading[0].title}
        </h1>
      </div>
      <div className="absolute right-10">
        <ul>
          {NavbarItems.map((item, index) => (
            <Link
              to={item.link}
              className="flex flex-col cursor-pointer no-underline"
              key={index}
              onMouseEnter={() => setLiHover({ bol: true, index: index })}
              onMouseLeave={() => setLiHover({ bol: false, index: index })}
            >
              <div className="flex flex-row justify-center items-center gap-1">
                <IoMdArrowDropright
                  className={`${
                    liHover.bol && liHover.index === index
                      ? "w-full text-3xl"
                      : "w-0"
                  } 
                  overflow-hidden text-zinc-700 flex
                   opacity-70 transition-all ease-in-out
                    duration-500 ${
                      !liHover.bol && location.pathname === item.link
                        ? "w-full text-3xl"
                        : "w-0"
                    }`}
                />
                <p
                  className={`flex justify-end dm-sans-font items-center text-center w-full uppercase font-bold text-[18px] text-black transition-all ease-in-out duration-500 ${
                    liHover.bol && liHover.index === index
                      ? "text-zinc-700 mr-3"
                      : ""
                  }`}
                >
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
