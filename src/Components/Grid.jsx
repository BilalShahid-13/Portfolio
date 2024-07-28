import React, { useState } from "react";
import Data from "../config/Data";
import ProjectjsShow from "./ProjectjsShow";

const Grid = ({ sendDataToParent }) => {
  const { Tmp } = Data;
  const [togglePopup, settogglePopup] = useState(false);
  const [click_index, setclick_index] = useState(null);
  const [dataFromChild, setDataFromChild] = useState("");

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }

  console.log(Tmp)

  return (
    <>
      <div>
        {Tmp.map((itemss, index_) => (
          <div
            key={index_}
            className={`flex flex-col gap-9 mx-2
           ${index_ % 2 === 0
                ? "justify-start items-start"
                : "justify-end items-end"
              }`}
            id="card"
          >
            <div
              className="bg-blue-50 rounded-md mx-2
                  hover:bg-blue-100 ease-linear duration-500
              transition-all cursor-pointer hover:shadow-md
               hover:shadow-blue-300 w-1/2 flex flex-col"
              id="grid"
              onClick={() => {
                sendDataToParent(index_);
                setclick_index(index_);
                settogglePopup(true);
                setDataFromChild(true);
              }}
            >
              <img
                src={itemss.sampleimg}
                alt={itemss.sampleimg}
                className="px-8 h-full rounded-md drop-shadow-md"
              />
            </div>
            {/* title & des */}
            <div
              className={`flex flex-col ${index_ % 2 === 1
                ? "justify-start items-center"
                : "justify-end items-center"
                } w-full `}
            >
              <h2
                className="dm-sans-font text-2xl font-bold
                   text-zinc-600 mx-5"
              >
                {itemss.title}
              </h2>
              <p
                className="dm-sans-font text-sm font-light tracking-wide
               leading-snug px-4 text-justify text-zinc-500"
              >
                {itemss.des}
              </p>
            </div>
          </div>
        ))}
        {dataFromChild === true ? (
          <main
            className={`ease-linear duration-700
           transition-all ${dataFromChild ? "h-screen w-full opacity-100" : "h-0 w-0 opacity-0"
              } overflow-hidden`}
          >
            <ProjectjsShow
              sendDataToParent={handleDataFromChild}
              index={click_index}
            />
          </main>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Grid;
