import React from "react";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#001F3F] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center ">
            Skills
          </p>
          <p className="py-4 text-2xl">
            By continuously learning and expanding my skillset, I've gained
            experience with these technologies:
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 bg-gradient-to-r from-violet-500 to-blue-500">
            <p className="my-4">HTML/CSS</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 bg-gradient-to-r from-violet-500 to-blue-500">
            <p className="my-4">NEST JS</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 bg-gradient-to-r from-violet-500 to-blue-500">
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 bg-gradient-to-r from-violet-500 to-blue-500">
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 bg-gradient-to-r from-violet-500 to-blue-500">
            <p className="my-4">GIT</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 bg-gradient-to-r from-violet-500 to-blue-500">
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 bg-gradient-to-r from-violet-500 to-blue-500">
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 bg-gradient-to-r from-violet-500 to-blue-500">
            <p className="my-4">AWS</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 bg-gradient-to-r from-violet-500 to-blue-500">
            <p className="my-4">SQL</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 bg-gradient-to-r from-violet-500 to-blue-500">
            <p className="my-4">Docker</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 bg-gradient-to-r from-violet-500 to-blue-500">
            <p className="my-4">LINUX</p>
          </div>
          <div className="shadow-lg shadow-[#040c16] hover:scale-110 duration-500 bg-gradient-to-r from-violet-500 to-blue-500">
            <p className="my-4">REST API</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
