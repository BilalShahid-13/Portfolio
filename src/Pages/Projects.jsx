import React from "react";
import Selected from "../Components/Selected";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main className="mt-[30%] max-sm:mt-[50%]">
      <Selected title="Selected" id={"All"} des={"project*"} />
      <div className="flex flex-col gap-2 px-3" id="selected">
        <h6 className="text-3xl uppercase font-extralight dm-sans-font">
          Next page
        </h6>
        <Link
          to={"/about"}
          className="no-underline text-7xl gallient-font font-bold text-zinc-700 ml-4"
        >
          About*
        </Link>
      </div>
    </main>
  );
};

export default Projects;
