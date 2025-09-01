import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
<FaArrowUpRightFromSquare />

const Project = () => {
  return (
    <div id="project" className="h-full w-full lg:w-[80%] px-5 md:px-10 lg:px-0  bg-pink-700">
      <div className="pt-20 md:pt-30 flex flex-col bg-purple-600">
        <h1 className="text-[20px] font-bold">PORTFOLIO</h1>
        <h2 className="text-[25px] font-bold">Each project is a unique piece of developement</h2>
        <div className="h-full w-full mt-10 pl-15 bg-green-700">
          <div className="flex flex-col bg-amber-600">
            <div className="flex gap-15">
              <div className="h-[300px] w-[50%] bg-white">
                img
              </div>
              <div className="h-[300px] w-[50%] flex flex-col  items-center bg-red-700">
                <h1 className="text-[20px] font-bold">Title</h1>
                <p className="text-center text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, dignissimos reiciendis ullam similique minus, eaque totam accusamus id repellendus recusandae facere in repellat blanditiis sint excepturi! Est assumenda ea voluptate.</p>

                <p className="font-bold">code langauge</p>
                <div className="flex gap-8 ">
                  <div className="flex items-center ">
                    <span className="font-bold mr-1">Code</span>
                    <FaGithub  className="text-2xl"/>
                  </div>
                  <div className="flex items-center ">
                    <span className="font-bold mr-1">Live Demo</span>
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </div>

                </div>
              </div>
            </div>
            <div>
              box1
            </div>
            <div>
              box1
            </div>
            <div>
              box1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
