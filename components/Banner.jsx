import React, { useEffect, useState } from "react";
import { Floating } from ".";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Banner = () => {
  const [skillText, setSkillText] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");
  const [time, setTime] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const rotateSkills = [
    "Full Stack Web Developer",
    "Mern Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Designer",
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, time);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = skillText % rotateSkills.length;
    let fullText = rotateSkills[i];
    let updatedText = deleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (!deleting && updatedText === fullText) {
      setDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setTime(200);
    } else if (deleting && updatedText === "") {
      setDeleting(false);
      setSkillText(skillText + 1);
      setIndex(1);
      setTime(350);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <div
      className="mt-[20px]  px-4 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 md:gap-18 lg:gap-8 xl:gap-20 2xl:gap-28"
      id="Home"
    >
      <div className="py-5">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-blue-500">
          Hi! I'm
        </h1>
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl my-3 whitespace-nowrap">
          User Name
        </h1>
        <p className="mt-4 pl-2 text-xl md:text-2xl lg:text-5xl text-blue-500 font-semibold">
          <span
            dataPeriod="1000"
            data-rotate='[ "Full Stack Web Developer", "Mern Stack Developer","React Developer","Next.js Developer","UI/UX Designer" ]'
          >
            <span className="wrap">{text}</span>
          </span>
        </p>
        <p className="mt-5 pl-3 text-lg font-light lg:text-[20px] md:text-[17px]">
          Build full-stack web application with interactive frontend design and
          backend operations with the integration of REST API and database.
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
          className="mt-7  rounded-3xl text-white font-bold text-xl md:text-2xl px-12 shadow-xl shadow-[#6098c9] py-3 ml-3"
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

        <div className="flex  justify-center gap-4 md:gap-8 mt-7 text-3xl md:text-5xl text-blue-500">
          <a href="https://github.com/samuelberhane" target="_blank">
            <AiFillGithub />
          </a>

          <AiFillLinkedin />
          <MdEmail />
          <IoLogoWhatsapp />
        </div>
      </div>
      <div className="py-20">
        <div className="relative lg:mt-0 flex justify-center">
          <img
            src="/image/programming.png"
            alt="programming"
            className="object-cover"
          />
          <motion.div
            initial={{ left: -40, opacity: 0.5 }}
            whileInView={{ left: 2, opacity: 1 }}
            transition={{
              duration: 3,
              type: "spring",
              bounce: 0.6,
              delay: 0.2,
            }}
            className="absolute -top-10"
          >
            <Floating
              image="/image/full.jpg"
              text1="Full Stack"
              text2="Developer"
            />
          </motion.div>
          <motion.div
            initial={{ right: -40, opacity: 0.5 }}
            whileInView={{ right: 2, opacity: 1 }}
            transition={{
              duration: 3,
              type: "spring",
              bounce: 0.6,
              delay: 0.2,
            }}
            className="absolute -top-10"
          >
            <Floating
              image="/image/react.png"
              text1="React"
              text2="Developer"
            />
          </motion.div>
          <motion.div
            initial={{ left: -40, opacity: 0.5 }}
            whileInView={{ left: 2, opacity: 1 }}
            transition={{
              duration: 3,
              type: "spring",
              bounce: 0.6,
              delay: 0.2,
            }}
            className="absolute -bottom-16"
          >
            <Floating
              image="/image/mern.png"
              text1="Mern Stack"
              text2="Developer"
            />
          </motion.div>
          <motion.div
            initial={{ right: -40, opacity: 0.5 }}
            whileInView={{ right: 2, opacity: 1 }}
            transition={{
              duration: 3,
              type: "spring",
              bounce: 0.6,
              delay: 0.2,
            }}
            className="absolute -bottom-16 right-2"
          >
            <Floating
              image="/image/next.jpg"
              text1="Next.js"
              text2="Developer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
