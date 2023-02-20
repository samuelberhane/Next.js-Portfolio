import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";

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
    <div className=" mt-[70px] justify-center flex flex-col md:gap-10 md:flex-row h-[calc(100vh-70px)] px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-18 lg:gap-36">
        <div className="md:mt-12">
          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-blue-500">
            Hi! I'm
          </h1>
          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl my-3">
            User Name
          </h1>
          <p className="mt-4 pl-2 text-lg md:text-2xl lg:text-4xl text-blue-400 font-semibold">
            <span
              dataPeriod="1000"
              data-rotate='[ "Full Stack Web Developer", "Mern Stack Developer","React Developer","Next.js Developer","UI/UX Designer" ]'
            >
              <span className="wrap">{text}</span>
            </span>
          </p>
          <p className="mt-4 pl-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            illo a nobis esse fuga, sit odio perferendis officia laudantium
            consectetur eos quae voluptatum assumenda quis. Quaerat corporis
            veniam, temporibus aperiam eaque impedit vitae non nam ipsum at.
            Dolor nisi omnis nam tenetur unde? Sunt optio quasi cumque accusamus
            consequatur et.
          </p>
          <button className="mt-3 rounded-3xl bg-blue-500 text-white font-bold text-xl px-8 shadow-2xl shadow-blue-300 py-2 ml-3">
            Contact
          </button>
        </div>
        <div className="">
          <img src="/image/programming.png" alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
