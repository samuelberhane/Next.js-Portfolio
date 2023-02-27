import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";

const Intro = ({ text }) => {
  return (
    <div className="py-5">
      <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-blue-500">
        Hi! I&apos;m
      </h1>
      <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl my-3 whitespace-nowrap">
        Samuel Brhane
      </h1>
      <p className="mt-4 pl-2 text-xl md:text-2xl lg:text-5xl text-blue-500 font-semibold">
        <span data-rotate='[ "Full Stack Web Developer", "MERN Stack Developer","React Developer","Next.js Developer","UI/UX Designer" ]'>
          <span className="wrap">{text}</span>
        </span>
      </p>
      <p className="mt-5 pl-3 font-light text-sm md:text-[17px]">
        I am Full Stack developer specialized in design,development and
        deployment of MERN stack web applications.
      </p>
      <motion.button
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        initial={{ backgroundColor: "blue" }}
        animate={{
          scale: [0.9, 1, 0.9, 1],
          backgroundColor: "#4FA6F6",
        }}
        className="mt-7  rounded-3xl text-white font-bold text-xl md:text-2xl px-12 shadow-xl  py-3 ml-3"
      >
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={-10}
          duration={1000}
          href="#Contact"
        >
          Contact
        </Link>
      </motion.button>

      <div className="flex  justify-start gap-4 md:gap-8 mt-7 text-3xl md:text-5xl text-blue-500">
        {/* Github */}
        <a
          href="https://github.com/samuelberhane"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 hover:text-blue-400"
        >
          <AiFillGithub />
        </a>

        {/* Linkedin */}
        <a
          className="hover:scale-110 hover:text-blue-400"
          href="https://www.linkedin.com/in/samuel-brhane-406759267/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>

        {/* Email */}
        <a
          className="hover:scale-110 hover:text-blue-400"
          href={`mailto:1samuelbrhane@gmail.com?`}
        >
          <MdEmail />
        </a>

        {/* Whatsapp */}
        <a
          className="hover:scale-110 hover:text-blue-400"
          href=" https://wa.me/251945964269"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Intro;
