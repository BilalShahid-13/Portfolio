import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../config/Data";
import { IoCloseCircleOutline } from "react-icons/io5";

const ProjectjsShow = ({ sendDataToParent, index }) => {
  const { Tmp } = Data;
  const [arrofimg, setarrofimg] = useState([]);
  const [ImageTitle, setImageTitle] = useState([]);

  useEffect(() => {
    if (index >= 0) {
      console.log(Tmp[index])
      setarrofimg(Tmp[index].imgs);
      const tmpArray = Array.isArray(Tmp[index]) ? Tmp[index] : [Tmp[index]];
      setImageTitle(tmpArray);
    }

  }, [index]);

  useEffect(() => {
    console.log(ImageTitle)
  }, [ImageTitle])


  return (
    <>
      <div
        className={`${"w-full h-screen bg-zinc-600 fixed "}
      left-0 top-0 bg-opacity-60 overflow-hidden
     ease-linear duration-300 transition-all`}
        id="root-popup"
      >
        <div
          className={`fixed bg-neutral-100 flex flex-col
        justify-start items-center z-[999] max-md:left-[5%]
        max-md:top-[5%] rounded-md shadow-md
        shadow-zinc-500  left-[5%] top-[5%]
         overflow-auto ${"max-md:w-[90%] max-md:h-[90%"}
         w-[90%] h-[90%] ease-linear duration-300
          transition-all hide-scrollbar-webkit hide-scrollbar-moz`}
          id="popup"
        >
          <IoCloseCircleOutline
            size={35}
            className="fixed
          max-md:right-12 max-md:top-12 z-50 cursor-pointer
          hover:text-red-600 right-24 top-16"
            onClick={() => {
              sendDataToParent(false);
            }}
          />
          <Carousel className="">
            {arrofimg.map((itemss, indexx) => (
              <Carousel.Item key={indexx}>
                <img
                  src={itemss}
                  alt=""
                  className="h-[60vh] py-2 max-md:h-[20%]"
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="">
            {ImageTitle.map((items, index) => (
              <div
                key={index}
                className="flex flex-col
            justify-center items-center text-justify px-4"
              >
                <h6
                  className="dm-sans-font
                font-bold text-2xl text-zinc-600"
                >
                  {items.title}
                </h6>
                <p
                  className="dm-sans-font
              font-extralight text-zinc-600 text-center
               leading-loose"
                >
                  {items.des}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectjsShow;
