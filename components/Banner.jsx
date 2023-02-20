import React, { useEffect, useState } from "react";
import { Floating } from ".";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

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
    "UI/UX Designer",
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
    <div className=" mt-[70px] justify-center flex  md:gap-10 h-[calc(100vh-70px)] px-4 md:px-8 lg:px-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-18 lg:gap-20 xl:gap-28">
        <div className="md:mt-12 mt-4">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-blue-500">
            Hi! I'm
          </h1>
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl my-3 whitespace-nowrap">
            User Name
          </h1>
          <p className="mt-4 pl-2 text-lg md:text-2xl lg:text-4xl text-blue-500 font-semibold">
            <span
              dataPeriod="1000"
              data-rotate='[ "Full Stack Web Developer", "Mern Stack Developer","React Developer","Next.js Developer","UI/UX Designer" ]'
            >
              <span className="wrap">{text}</span>
            </span>
          </p>
          <p className="mt-4 pl-3 text-sm md:text-[17px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            illo a nobis esse fuga, sit odio perferendis officia laudantium
            consectetur eos quae voluptatum assumenda quis.
          </p>
          <button className="mt-5 rounded-3xl bg-blue-500 text-white font-bold text-xl md:text-2xl px-12 shadow-xl shadow-[#6098c9] py-3 ml-3">
            Contact
          </button>
          <div className="flex justify-center gap-4 md:gap-8 mt-4 text-5xl md:text-7xl text-blue-500">
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
        </div>
        <div>
          <div className="relative my-20 lg:mt-0">
            <img
              src="/image/programming.png"
              alt="programming"
              className="object-cover md:mt-20"
            />
            <div className="absolute -top-10 left-2">
              <Floating
                image="/image/full.jpg"
                text1="Full Stack"
                text2="Developer"
              />
            </div>
            <div className="absolute -bottom-16 left-2">
              <Floating
                image="/image/mern.png"
                text1="Mern Stack"
                text2="Developer"
              />
            </div>
            <div className="absolute -bottom-16 right-2">
              <Floating
                image="/image/next.jpg"
                text1="Next.js"
                text2="Developer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
