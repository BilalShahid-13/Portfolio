import React from "react";
import Hero from "../Components/Hero";
import Selected from "../Components/Selected";
import Tmp from "../Components/Tmp";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <Selected title={"Selected"} id={"02"} des={"Project*"} />
      <Tmp title={"Get into"} id={"03"} des={"touch"} />
      <Contact />
    </main>
  );
};

export default Home;
