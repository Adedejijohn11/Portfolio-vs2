import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
<FaArrowUpRightFromSquare />;

const Project = () => {
  return (
    <div
      id="project"
      className="h-full w-full lg:w-[80%] px-5 md:px-10 lg:px-0  "
    >
      <div className="pt-20 md:pt-30 flex flex-col ">
        <h1 className="text-[15px] md:text-[20px] text-cyan-500 font-bold">
          PORTFOLIO
        </h1>
        <h2 className="text-[15px] md:text-[25px] font-bold">
          Each project is a unique piece of developement
        </h2>
        <div className="h-full w-full mt-10 pl-0  md:pl-15 ">
          <div className="flex flex-col gap-20 ">
            {/* Box-1 */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-15 ">
              <div className="h-[230px] md:h-[300px]  w-full md:w-[50%] rounded-2xl overflow-hidden">
                <img
                  src="/project-1.png"
                  alt="project-1"
                  className="h-full w-full"
                />
              </div>
              <div className="h-full w-full md:w-[50%] flex flex-col  items-center ">
                <h1 className="text-[16px] lg:text-[17px] xl:text-[25px] font-bold">
                  LA DOLCE VITA
                </h1>
                <p className="text-center text-[16px] lg:text-[17px] xl:text-[20px] my-5 text-gray-400">
                  A restaurant website where users can explore dishes, reserve
                  their table and share their experiences, making dining
                  planning simple and enjoyable
                </p>

                <p className="font-bold mt-6">HTML, CSS and JavaScript</p>
                <div className="flex gap-8 mt-10">
                  <a
                    href="https://github.com/Adedejijohn11/restaurant-project.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center "
                  >
                    <span className="font-bold mr-1">Code</span>
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href="https://adedejijohn11.github.io/restaurant-project/
"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  "
                  >
                    <span className="font-bold mr-1">Live Demo</span>
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
            {/* Box-2 */}
            <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-15 ">
              <div className="h-[230px] md:h-[300px] w-full md:w-[50%] rounded-2xl overflow-hidden">
                <img
                  src="/project-2.png"
                  alt="project-2"
                  className="h-full w-full"
                />
              </div>
              <div className="h-full w-full md:w-[50%] flex flex-col  items-center ">
                <h1 className="text-[16px] lg:text-[17px] xl:text-[25px] font-bold">
                  E-COMMERCE
                </h1>
                <p className="text-center text-[16px] lg:text-[17px] xl:text-[20px] my-5 text-gray-400">
                  A stylish e-commerce website that allows users to effortlessly
                  browse and shop their favorite styles, manage their cart, and
                  enjoy a seamless checkout experience
                </p>

                <p className="font-bold mt-6">HTML, CSS and JavsScript</p>
                <div className="flex gap-8 mt-10">
                  <a
                    href="https://github.com/Adedejijohn11/E-commerce-page.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center "
                  >
                    <span className="font-bold mr-1">Code</span>
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href="https://adedejijohn11.github.io/E-commerce-page/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <span className="font-bold mr-1">Live Demo</span>
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
            {/* Box-3 */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-15 ">
              <div className="h-[230px] md:h-[300px] w-full md:w-[50%] rounded-2xl overflow-hidden">
                <img
                  src="/project-3.png"
                  alt="project-3"
                  className="h-full w-full"
                />
              </div>
              <div className="h-full w-full md:w-[50%] flex flex-col  items-center ">
                <h1 className="text-[16px] lg:text-[17px] xl:text-[25px] font-bold">
                  PROTECH
                </h1>
                <p className="text-center text-[16px] lg:text-[17px] xl:text-[20px] my-5 text-gray-400">
                  A modern online store where users can explore a wide range of
                  electronics and appliances, search for items, add them to
                  their cart, and checkout effortlessly.
                </p>

                <p className="font-bold mt-6">
                  React.js, Tailwind and TypeScript
                </p>
                <div className="flex gap-8 mt-10">
                  <a
                    href="https://github.com/Adedejijohn11/protech.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center "
                  >
                    <span className="font-bold mr-1">Code</span>
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href="https://protech-xi-three.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  "
                  >
                    <span className="font-bold mr-1">Live Demo</span>
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
            {/* box-4 */}
            <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-15 ">
              <div className="h-[230px] md:h-[300px] w-full md:w-[50%] rounded-2xl overflow-hidden">
                <img
                  src="/project-4.png"
                  alt="project-4"
                  className="h-full w-full"
                />
              </div>
              <div className="h-full w-full md:w-[50%] flex flex-col  items-center ">
                <h1 className="text-[16px] lg:text-[17px] xl:text-[25px] font-bold">
                  CINEMA
                </h1>
                <p className="text-center text-[16px] lg:text-[17px] xl:text-[20px] my-5 text-gray-400">
                  A user-friendly movie website that allows users to browse new
                  releases, select movies by category, view detailed
                  information, and search for films easily.
                </p>

                <p className="font-bold mt-6">
                  Nextjs, Tailwind and JavaScript
                </p>
                <div className="flex gap-8 mt-10">
                  <a
                    href="https://github.com/Adedejijohn11/movie-website.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center "
                  >
                    <span className="font-bold mr-1">Code</span>
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href="https://movie-website-eight-pi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center  "
                  >
                    <span className="font-bold mr-1">Live Demo</span>
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
