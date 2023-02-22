import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { SiMessenger } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="py-5 bg-gray-800">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        User Name
      </h1>
      <div className="flex items-center justify-center text-xl md:text-2xl gap-4 text-blue-500 my-3 md:my-4">
        <BsLinkedin />
        <AiFillGithub />
        <IoLogoWhatsapp />
        <SiMessenger />
        <MdEmail />
      </div>
      <p className="text-center text-light">
        &copy; Samuel. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
