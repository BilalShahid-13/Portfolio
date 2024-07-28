import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <div
        className="flex flex-row justify-center 
      items-center max-md:w-[100%] my-12
      max-lg:text-split px-5 max-xl:text-split 
      max-sm:text-split max-md:gap-9"
      >
        <p
          className="max-md:text-xl font-extralight 
         text-3xl text-center space-x-3 max-sm:text-sm"
        >
          IF YOU HAVE A GENERAL OR PROJECT ENQUIRY, PLEASE DROP ME AN <br />
          <span className="font-semibold">EMAIL</span> OR
          <span className="font-semibold">CONTACT</span>*
        </p>
        <img
          src="https://bilalshahid-13.github.io/Portfolio/contact.png"
          alt=""
          className="max-sm:w-[50vw] max-md:h-[40vh]"
        />
      </div>
      <Form />
    </>
  );
};

export default Contact;
