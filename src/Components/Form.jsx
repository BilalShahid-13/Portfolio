import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [to, setTo] = useState("");
  const [senderName, setSenderName] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // const { to_email, from_name, body } = e.target.elements;

    try {
      await emailjs.send(
        "service_7ymbc4a",
        "template_b6j3utj",
        {
          to_email: to,
          from_name: senderName,
          body: body,
        },
        "bBeow1hXQ0-gnsS37"
      );

      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    } finally {
      setLoading(false);
      setTo("");
      setSenderName("");
      setBody("");
    }
  };

  return (
    <>
      {/* {Loader} */}
      <form onSubmit={handleSubmit}>
        <div
          className="grid grid-rows-3 justify-center
      items-center gap-16 my-7 border-b-[4px]
      border-b-zinc-400 mx-[10vw] max-md:pb-[15%] 
      pb-[7%]"
        >
          {/*name  */}
          <div className="flex flex-col gap-4">
            <label
              htmlFor="name"
              className="max-md:text-2xl 
            font-semibold dm-sans-font uppercase text-zinc-600"
            >
              Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="full name"
              required
              className="outline-none 
             border-b-[1px] border-b-zinc-600 w-[70vw] 
             py-2 text-xl"
            />
          </div>

          {/* email */}
          <div className="flex flex-col gap-4">
            <label
              htmlFor="email"
              className="max-md:text-2xl 
            font-semibold dm-sans-font uppercase text-zinc-600"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="outline-none
             border-b-[1px] border-b-zinc-600 w-[70vw] 
             py-2 text-xl"
              placeholder="email"
              required
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>

          {/* msg */}
          <div className="flex flex-col gap-4">
            <label
              htmlFor="msg"
              className="max-md:text-2xl 
            font-semibold dm-sans-font uppercase text-zinc-600"
            >
              Message <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="msg"
              className="outline-none
             border-b-[1px] border-b-zinc-600 w-[70vw] 
             py-2 text-xl"
              placeholder="message"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <button
            className={`uppercase 
        py-4 hover:text-white border-[1px] border-b-[2px] 
        border-zinc-900 mx-8 transition-all ease-linear
        duration-500 ${
          loading
            ? "bg-blue-50 border-0 hover:text-zinc-700"
            : "hover:bg-zinc-800"
        } shadow-sm`}
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="loader"></div>
                <p>Sending ...</p>
              </>
            ) : (
              "Send message"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
