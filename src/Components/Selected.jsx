import React, { useState } from "react";
import Grid from "./Grid";
import Tmp from "./Tmp";

const Selected = ({ title = "", id = "", des = "" }) => {
  const [dataFromChild, setDataFromChild] = useState("");

  function handleDataFromChild(data) {
    setDataFromChild(data);
  }

  return (
    <>
      <div className="flex gap-12 flex-col">
        <Tmp title={title} id={id} des={des} />
        <Grid sendDataToParent={handleDataFromChild} />
      </div>
    </>
  );
};

export default Selected;
