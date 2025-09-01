import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-[500px] w-full lg:w-[80%] px-5 md:px-10 lg:px-0  flex items-center"
    >
      <div className="pt-10">
        <h1 className="text-[18px] font-bold  text-cyan-500 ">CONTACT</h1>
        <p className="text-[22px] font-bold">
          Hit me up for any opportunity 👇!!!{" "}
        </p>
        <div className="flex flex-col md:flex-row pl-0 md:pl-10 mt-15 gap-10">
          <div className="flex items-center gap-5">
            <FaLocationDot className=" text-[25px] text-cyan-500" />
            <div>
              <p className="text-[20px] font-bold">Location</p>
              <p className="text-[18px] text-gray-400">Luxembourg</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <MdEmail className=" text-[25px] text-cyan-500" />
            <div>
              <p className="text-[20px] font-bold">Mail</p>
              <p className="text-[18px] text-gray-400">
                adedejijohn099@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
