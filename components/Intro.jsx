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
        I am Full Stack web and mobile app developer specialized in design,
        development and deployment of MERN stack web and cross-platform mobile
        applications.
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
        className="mt-7 rounded-xl text-white font-light text-lg md:text-xl px-6 shadow-xl  py-2 ml-3"
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
        className="mt-7 rounded-xl text-white font-light text-lg md:text-xl px-6 shadow-xl  py-2 ml-3"
      >
        <a href="samuelCV.pdf">Resume</a>
      </motion.button>
    </div>
  );
};

export default Intro;
