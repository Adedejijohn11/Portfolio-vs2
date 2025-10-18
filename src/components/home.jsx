import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import techStackData from "../components//data//techstackdata";

import ProfileImg from "/johnImg.jpg";

const Home = () => {
  return (
    <div id="home" className="h-full w-full lg:w-[80%] px-5 md:px-10 lg:px-0  ">
      <div className="pt-20 md:pt-30 flex  flex-col ">
        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-0 ">
          <div className="flex flex-col h-full w-full lg:w-[60%]  items-center md:items-start b">
            <h1 className="text-[25px]  md:text-[42px]   xl:text-[60px] font-bold">
              Front-End Developer
            </h1>
            <p className="text-[20px]  xl:text-[25px] text-center  md:text-start  w-full md:w-[84%] pt-3 md:pt-0   ">
              I'm Passionate about building clean modern and responsive web
              experience. I bring designs to life with code that's fast,
              accesible and user-focused.
            </p>
            {/* Social media  */}
            <div className="text-3xl mt-[35px] lg:mt-[38px] xl:mt-[48px] flex  gap-5">
              <a
                href="http://www.linkedin.com/in/johnadedeji"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  "
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Adedejijohn11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center  "
              >
                <FaGithub />
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="h-full w-full md:w-[40%] flex  justify-center">
            <div className="h-[200px]  lg:h-[250px] xl:h-[280px] w-[200px] lg:w-[250px] xl:w-[280px] rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600  overflow-hidden">
              <div className="h-[95%] w-[95%] flex items-center justify-center  bg-white rounded-full">
                <img
                  src={ProfileImg}
                  alt="myImage"
                  className="h-[95%] w-[95%] rounded-full bg-center "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full flex flex-col  mt-25 ">
          <h2 className="text-[20px] font-bold md:text-start text-center">
            TECH STACK
          </h2>
          <div className="mt-10  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5 place-items-center ">
            {techStackData.map((data) => (
              <div
                key={data.id}
                className="h-[120px] w-[90%]  md:w-[150px] flex flex-col items-center justify-center border-2 border-gray-500 rounded-2xl   transition-transform duration-2000 hover:rotate-y-400 "
              >
                <img src={data.img} alt="" className="w-16 h-16" />
                <p>{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

//
