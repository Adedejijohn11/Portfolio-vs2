import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" h-[60px] w-full md:w-[80%] border-t-2 border-gray-500  flex  items-center justify-center ">
      <div className="w-full h-full  flex  items-center justify-center md:justify-between ">
        <div>
          <p className="text-[15px]  font-bold">
            AdedejiJohn<span>&copy;copyright {new Date().getFullYear()}</span>
          </p>
        </div>
        <div className="text-[23px] hidden  md:flex  gap-5">
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
    </div>
  );
};

export default Footer;
