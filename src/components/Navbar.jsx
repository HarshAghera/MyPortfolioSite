import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#001F3F] text-gray-300">
      <div>
        <h1 className=" font-thin text-2xl italic font-serif">Harsh Aghera</h1>
      </div>
      {/* menu */}
      <ul className="hidden md:flex gap-x-8">
        <li className="hover:scale-110 duration-500">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:scale-110 duration-500">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:scale-110 duration-500">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:scale-110 duration-500">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:scale-110 duration-500">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 "
            style={{ background: "linear-gradient( #4076b5, #1e5ca1)" }}
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/harsh-aghera-webdeveloper/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 "
            style={{
              background:
                "linear-gradient( #fa7e1e,  #d62976,#962fbf, #4f5bd5)",
            }}
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.instagram.com/harsh__aghera/"
              target="_blank"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 "
            style={{ background: "linear-gradient(#4dc0b5, #2d7a6f)" }}
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:Harsh Aghera<harsh.aghera2@gmail.com>"
            >
              Email <HiMailOpen size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ]"
            style={{ background: "linear-gradient(#008080, #004040)" }}
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/HarshResume.pdf"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300"
            style={{ background: "linear-gradient(#555555, #222222)" }}
          >
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/HarshAghera"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
