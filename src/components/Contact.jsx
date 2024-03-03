import React from "react";
import cardBack from "../assets/CardBack.png";
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#001F3F] flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">
            Contact Me
          </p>
          <p className=" text-gray-300 py-6 text-2xl">
          Let us connect!
        </p>
          <div
            style={{ backgroundImage: `url(${cardBack})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto card-div"
          ></div>
          <p className="text-gray-300 py-4">Please feel free to reach out.</p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
