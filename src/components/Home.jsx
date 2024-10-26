import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import dev from "../assets/dev.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#001F3F]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I’m a dedicated web developer with 4+ years of experience in
            creating user-centered, scalable web applications. Skilled in
            React.js, Node.js, Nest.js, MySQL, MongoDB, and AWS, I bring a
            versatile approach to full-stack development. My experience spans
            frontend and backend work, automation testing, and CI/CD pipelines
            with Jenkins. Passionate about clean, efficient code and creative
            problem-solving, I thrive on transforming complex challenges into
            impactful digital experiences. If it’s about crafting impactful
            results, I’m all in.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-violet-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={dev}
            alt="My profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
