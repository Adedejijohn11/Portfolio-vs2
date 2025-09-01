import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="h-[600px]  w-full lg:w-[80%] px-5 md:px-10 lg:px-0   "
    >
      <div className="pt-30 xl:pt-40 h-full flex flex-col gap-8 items-center justify-center">
        <h1 className="text-[20px] lg:text-[25px] text-cyan-500 font-bold ">
          ABOUT ME
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
          <div className="h-[200px] md:h-[220px] lg:h-[230px] xl:lg:h-[300px]  w-full md:w-[230px] lg:w-[300px]  flex items-center justify-center rounded-2xl overflow-hidden ">
            <img
              src="/about-img.jpg"
              alt=""
              className="h-[200px] md:h-[220px] lg:h-[230px] xl:lg:h-[300px]  w-full md:w-[230px] lg:w-[300px]  "
            />
          </div>
          <div className="h-full w-full md:w-[90%] lg:w-[60%] ">
            <p className="text-[16px] lg:text-[17px] xl:text-[22px]">
              Hi, I'm Adedeji John a front-end developer who enjoys building
              clean, responsive and user-friendly web applications. I have a
              strong foundation in HTML, CSS, and JavaScript, which I use as the
              backbone for creating accessible and scalable solutions. On top of
              that, I specialize in modern tools like React, Next.js, and
              Tailwind CSS to design interfaces that are visually engaging,
              fast, and optimized for performance. My focus is always on writing
              clean code, ensuring accessibility and delivering experiences that
              feel seamless across all devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
