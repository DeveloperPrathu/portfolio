import React from "react";
import Link from "next/link";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            {/* <div className="font-bold text-[16px]">Community</div> */}
            {/* <a href="https://github.com/DeveloperPrathu" className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a> */}
            {/* <Link href="/discord" legacyBehavior>
              <a className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </a>
            </Link> */}
          </div>
          {/* Similar modifications for other sections */}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          © Prathu Gupta 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
