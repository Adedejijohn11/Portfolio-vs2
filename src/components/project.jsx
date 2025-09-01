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
              <div className="h-[230px] md:h-[300px]  w-full md:w-[50%] rounded-2xl bg-white">
                img
              </div>
              <div className="h-full w-full md:w-[50%] flex flex-col  items-center ">
                <h1 className="text-[16px] lg:text-[17px] xl:text-[25px] font-bold">
                  Title
                </h1>
                <p className="text-center text-[16px] lg:text-[17px] xl:text-[20px] text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis, dignissimos reiciendis ullam similique minus, eaque
                  totam accusamus id repellendus recusandae facere in repellat
                  blanditiis sint excepturi! Est assumenda ea voluptate.
                </p>

                <p className="font-bold mt-6">code langauge</p>
                <div className="flex gap-8 mt-10">
                  <div className="flex items-center ">
                    <span className="font-bold mr-1">Code</span>
                    <FaGithub className="text-2xl" />
                  </div>
                  <div className="flex items-center  ">
                    <span className="font-bold mr-1">Live Demo</span>
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
            {/* Box-2 */}
            <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-15 ">
              <div className="h-[230px] md:h-[300px] w-full md:w-[50%] rounded-2xl bg-white">
                img
              </div>
              <div className="h-full w-full md:w-[50%] flex flex-col  items-center ">
                <h1 className="text-[16px] lg:text-[17px] xl:text-[25px] font-bold">
                  Title
                </h1>
                <p className="text-center text-[16px] lg:text-[17px] xl:text-[20px] text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis, dignissimos reiciendis ullam similique minus, eaque
                  totam accusamus id repellendus recusandae facere in repellat
                  blanditiis sint excepturi! Est assumenda ea voluptate.
                </p>

                <p className="font-bold mt-6">code langauge</p>
                <div className="flex gap-8 mt-10">
                  <div className="flex items-center ">
                    <span className="font-bold mr-1">Code</span>
                    <FaGithub className="text-2xl" />
                  </div>
                  <div className="flex items-center  ">
                    <span className="font-bold mr-1">Live Demo</span>
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
            {/* Box-3 */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-15 ">
              <div className="h-[230px] md:h-[300px] w-full md:w-[50%] rounded-2xl bg-white">
                img
              </div>
              <div className="h-full w-full md:w-[50%] flex flex-col  items-center ">
                <h1 className="text-[16px] lg:text-[17px] xl:text-[25px] font-bold">
                  Title
                </h1>
                <p className="text-center text-[16px] lg:text-[17px] xl:text-[20px] text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis, dignissimos reiciendis ullam similique minus, eaque
                  totam accusamus id repellendus recusandae facere in repellat
                  blanditiis sint excepturi! Est assumenda ea voluptate.
                </p>

                <p className="font-bold mt-6">code langauge</p>
                <div className="flex gap-8 mt-10">
                  <div className="flex items-center ">
                    <span className="font-bold mr-1">Code</span>
                    <FaGithub className="text-2xl" />
                  </div>
                  <div className="flex items-center  ">
                    <span className="font-bold mr-1">Live Demo</span>
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
            {/* box-4 */}
            <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-15 ">
              <div className="h-[230px] md:h-[300px] w-full md:w-[50%] rounded-2xl bg-white">
                img
              </div>
              <div className="h-full w-full md:w-[50%] flex flex-col  items-center ">
                <h1 className="text-[16px] lg:text-[17px] xl:text-[25px] font-bold">
                  Title
                </h1>
                <p className="text-center text-[16px] lg:text-[17px] xl:text-[20px] text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis, dignissimos reiciendis ullam similique minus, eaque
                  totam accusamus id repellendus recusandae facere in repellat
                  blanditiis sint excepturi! Est assumenda ea voluptate.
                </p>

                <p className="font-bold mt-6">code langauge</p>
                <div className="flex gap-8 mt-10">
                  <div className="flex items-center ">
                    <span className="font-bold mr-1">Code</span>
                    <FaGithub className="text-2xl" />
                  </div>
                  <div className="flex items-center  ">
                    <span className="font-bold mr-1">Live Demo</span>
                    <FaArrowUpRightFromSquare className="text-2xl" />
                  </div>
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
