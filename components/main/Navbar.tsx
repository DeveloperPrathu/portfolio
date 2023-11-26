import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { IconContext } from "react-icons";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center hidden md:block" // Added hidden class for medium-sized screens and above
        >
          <Image
            src="/prathunav.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="w-[580px] h-full flex flex-row items-center justify-between md:mr-5">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[10px] px-[20px] py-[10px] rounded-full text-gray-200 font-bold text-[16px]">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-3">
          <a href="https://m.facebook.com/100073820179575/">
            <FaFacebook size={25} className="cursor-pointer hover:animate-slowspin" color="blue" />
          </a>

          <a href="https://www.instagram.com/prathu__gupta/">
            <FaInstagram size={25} className="cursor-pointer hover:animate-slowspin" color="red" />
          </a>

          <a href="https://www.linkedin.com/in/developer-prathu-gupta/">
            <FaLinkedin size={25} className="cursor-pointer hover:animate-slowspin" color="blue" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
