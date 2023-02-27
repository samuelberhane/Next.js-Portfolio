import React, { useEffect, useState } from "react";
import { Floating, Intro } from ".";
import { motion } from "framer-motion";

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
    console.log("i", i);
    let fullText = rotateSkills[i];
    let updatedText = deleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    if (updatedText === "") {
      setText("|");
    } else {
      setText(updatedText);
    }

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
      <Intro text={text} />

      <div className="py-20">
        <div className="relative lg:mt-0 flex justify-center">
          <img
            src="/image/programming.png"
            alt="programming"
            className="object-cover"
          />
          <motion.div
            initial={{ left: -20, opacity: 0.5 }}
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
            initial={{ right: -20, opacity: 0.5 }}
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
            initial={{ left: -20, opacity: 0.5 }}
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
            initial={{ right: -20, opacity: 0.5 }}
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
