import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#001F3F] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
          About
        </p>
        <p className="py-6 text-2xl">
          Know Me!
        </p>
        <div className=" py-16 rounded-md bg-gradient-to-r from-violet-500 to-blue-500 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4"></div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-left text-4xl font-bold">
              <p>
                Hi. I'm Harsh Aghera, nice to meet you. I hope you are having a
                good time. Please take a look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                A passionate developer crafting responsive and scalable web
                applications, I bridge the gap between front-end and back-end
                with fluency in both realms. Beyond code, I'm a critical thinker
                and lifelong learner, constantly seeking new challenges and
                fueling my creativity through diverse pursuits like music and
                fitness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
