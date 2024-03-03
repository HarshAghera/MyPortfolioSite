import React from "react";
import ongage from "../assets/Ongage.png";
import FA from "../assets/FA.png";
import Harsh from "../assets/CardFront.png";

const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#001F3F]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col ">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
            Work
          </p>
          <p className="py-6 text-2xl">List of the projects I have worked on</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ongage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                Ongage SMTP API
              </span>
              <p className="text-center">
                An email marketing service provider platform. I was working with
                the API development, analytics & automation testing part of this
                SAAS Application
              </p>
              <div className="pt-8 text-center">
                <a href="https://www.ongage.com/product/  " target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    More Info
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Harsh})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                My PortFolio
              </span>
              <p className="text-center">
                I developed this project using React.js & Tailwind CSS. I used
                it to learn basic fundamentals of react development
              </p>
              <div className="pt-8 text-center">
                <a href="/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    More Info
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${FA})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-white tracking-wider">
                First Allegiance
              </span>
              <p className="text-center">
                A property maintenance service provider. My role is to migrate
                First Allegiance's legacy code base to JavaScript API based
                structure with code optimization.
              </p>
              <div className="pt-8 text-center">
                <a
                  href="https://www.firstallegiance.com/about.html"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    More Info
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Works;
