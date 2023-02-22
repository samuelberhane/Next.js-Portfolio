import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { RiProjector2Fill } from "react-icons/ri";
import { MdContacts, MdMiscellaneousServices } from "react-icons/md";
import { HiBriefcase } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const FloatingNav = () => {
  const [active, setActive] = useState(0);
  const Menus = [
    { name: "Home", icon: <AiFillHome />, position: "translate-x-0" },
    { name: "Skills", icon: <HiBriefcase />, position: "translate-x-[60px]" },
    {
      name: "Portfolio",
      icon: <RiProjector2Fill />,
      position: "translate-x-[116px]",
    },
    {
      name: "Services",
      icon: <MdMiscellaneousServices />,
      position: "translate-x-[176px]",
    },
    { name: "Contact", icon: <MdContacts />, position: "translate-x-[235px]" },
  ];

  return (
    <motion.div
      initial={{ bottom: -10 }}
      whileInView={{ bottom: 10 }}
      transition={{ duration: 3, type: "spring" }}
      className="fixed left-[50%] translate-x-[-50%] h-[50px] px-6 rounded-t-xl bg-[rgba(100,191,213,0.7)] text-white z-[70]"
    >
      <ul className="flex relative">
        <div
          className={`bg-yellow-300 duration-500 ${Menus[active]?.position} border-4 border-gray-400 h-[65px] w-[65px] absolute
         -top-4 rounded-full`}
        ></div>
        <div className="w-[300px] grid grid-cols-5 px-4 gap-6">
          {Menus.map((menu, index) => (
            <div key={index} className="flex justify-center w-full">
              <Link
                to={menu?.name}
                spy={true}
                smooth={true}
                offset={menu?.name === "Home" ? -200 : -10}
                duration={1000}
                className="flex flex-col text-center pt-6"
                onClick={() => setActive(index)}
              >
                <span
                  className={`text-xl cursor-pointer duration-500 ${
                    index === active && "-mt-6 text-white"
                  }`}
                >
                  {menu?.icon}
                </span>
                <span
                  className={`text-[12px] font-bold text-center text-black ${
                    active === index
                      ? "translate-y-[-13px] duration-700 opacity-100"
                      : "opacity-0 hidden translate-y-10 text-gray-300"
                  } `}
                >
                  {menu?.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </ul>
    </motion.div>
  );
};

export default FloatingNav;
