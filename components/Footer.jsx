import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { SiMessenger } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useModeContext } from "@/context/ModeContext";

const Footer = () => {
  const { darkTheme } = useModeContext();
  return (
    <div className={`${darkTheme ? "bg-gray-900" : "bg-gray-100"} py-5`}>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        Samuel Brhane
      </h1>
      <div className="flex items-center justify-center text-xl md:text-2xl gap-4 text-blue-500 my-4 mb-6">
        {/* github */}
        <a href="https://github.com/samuelberhane" target="_blank">
          <AiFillGithub />
        </a>

        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/samuel-brhane-406759267/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        {/* Email */}
        <a href={`mailto:1samuelbrhane@gmail.com?`}>
          <MdEmail />
        </a>

        {/* Whatsapp */}
        <a href=" https://wa.me/251945964269" target="_blank">
          <IoLogoWhatsapp />
        </a>
      </div>
      <p className="text-center text-light">
        &copy; Samuel. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
