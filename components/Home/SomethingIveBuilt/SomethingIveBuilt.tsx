import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
      <div
        id="SomethingIveBuiltSection"
        className=" flex flex-col space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
      >
        {/* // ? Title  */}
        <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
          <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
          <div className="flex-none flex-row space-x-2 items-center pr-2">
            <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
            <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
              {" "}
              Some Things I&apos;ve Built
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
        </div>

        <div className="flex flex-col space-y-8 md:space-y-28">

          
          {/* // ?  Project 1 */}
          <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
            {/* Left image */}
            <div
              className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
            >
              <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
                <a href="https://github.com/KunalKatiyar/mediavibe" target={"_blank"} rel="noreferrer">
                  <div
                    className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                  ></div>
                </a>

                <Img src={"/MediaVibe.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
              </div>
            </div>

            {/* right Content */}
            <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
              {/* background for text in mobile responsive */}
              <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
                <div className="relative w-full h-full">
                  <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                  <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                  <Img src={"/MediaVibe.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
                </div>
              </div>

              <div
                className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
              >
                <div className="flex flex-col space-y-1  z-10">
                  <span className="text-AAsecondary text-base">Recent Project</span>
                  <a href="https://github.com/KunalKatiyar/mediavibe" target={"_blank"} rel="noreferrer">
                    <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                      MediaVibe
                    </span>
                  </a>
                </div>
                <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                  <p className="text-gray-300 md:text-gray-400 text-left ">
                    A <span className="text-AAsecondary">music player</span> which 
                    can play files from the desktop as well as from the internet at one place.
                  </p>
                </div>
                <ul
                  className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
                >
                  <span className="pr-4 z-10">Rust</span>
                  <span className="pr-4 z-10">Svelte.js</span>
                  <span className="pr-4 z-10">YoutubeAPI</span>
                  <span className="pr-4 z-10">Google Cloud Services</span>
                </ul>
                <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                  <GithubIcon link="https://github.com/KunalKatiyar/mediavibe" />
                </div>
              </div>
            </div>
          </div>

          {/* // ?  Project 2 */}
          <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
            {/* Left image */}
            <div
              className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
            >
              <div className="relative rounded w-full h-full col-span-7 ">
                <a href="https://github.com/KunalKatiyar/HashPoster" target={"_blank"} rel="noreferrer">
                  <div
                    className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                  ></div>
                </a>

                <Img src={"/HashPoster.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
              </div>
            </div>

            {/* right Content */}
            <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
              {/* background for text in mobile responsive */}
              <div className="absolute w-full h-full bg-opacity-70 z-0">
                <div className="relative w-full h-full">
                  <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                  <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                  <Img src={"/HashPoster.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
                </div>
              </div>

              <div
                className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
                col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
              >
                <div className="flex flex-col space-y-1 md:items-end z-10">
                  <span className="text-AAsecondary text-base">Recent Project</span>
                  <a href="https://github.com/KunalKatiyar/HashPoster" target={"_blank"} rel="noreferrer">
                    <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                      HashPoster
                    </span>
                  </a>
                </div>
                <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                  <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                    A <span className="text-AAsecondary">autonomous twitter bot</span>
                    which specializes in posting Top Technology Posts from Hashnode, a blogging website. It uses
                    <span className="text-AAsecondary"> Machine Learning</span> to find the best technology related blogs to post.
                  </p>
                </div>
                <ul
                  className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
                >
                  <span className="pr-4 z-10">TwitterAPI</span>
                  <span className="pr-4 z-10">Node.js</span>
                  <span className="pr-4 z-10">Firebase</span>
                  <span className="pr-4 z-10">Machine Learning (Baye`s Algorithm)</span>
                </ul>
                <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                  <GithubIcon link="https://github.com/KunalKatiyar/HashPoster" />
                </div>
              </div>
            </div>
          </div>

          {/* // ?  Project 3 */}
          <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
            {/* Left image */}
            <div
              className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
            >
              <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
                <a href="https://github.com/synixjs/synix" target={"_blank"} rel="noreferrer">
                  <div
                    className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-60 hover:opacity-0 hover:cursor-pointer duration-300"
                  ></div>
                </a>

                <Img src={"/Synix.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
              </div>
            </div>

            {/* right Content */}
            <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
              {/* background for text in mobile responsive */}
              <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
                <div className="relative w-full h-full">
                  <div className="absolute w-full h-full bg-AAprimary opacity-50 z-10"></div>
                  <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                  <Img src={"/Synix.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
                </div>
              </div>

              <div
                className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  sm:space-y-3 md:order-1"
              >
                <div className="flex flex-col space-y-1  z-10">
                  <span className="text-AAsecondary text-base">Recent Project</span>
                  <a href="https://github.com/synixjs/synix" target={"_blank"} rel="noreferrer">
                    <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                      Synix
                    </span>
                  </a>
                </div>
                <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                  <p className="text-gray-300 md:text-gray-400 text-left ">
                    A no-flag <span className="text-AAsecondary"> Node.js CLI </span> 
                    to make the use of command-line easy and uniform.
                  </p>
                </div>
                <ul
                  className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
                >
                  <span className="pr-4 z-10">Node.js</span>
                  <span className="pr-4 z-10">Npm</span>
                  <span className="pr-4 z-10">CLI</span>
                  <span className="pr-4 z-10">NPM-Package</span>
                </ul>
                <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                  <GithubIcon link="https://github.com/synixjs/synix" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
