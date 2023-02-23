import { MdNightsStay } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import { useModeContext } from "@/context/ModeContext";
import { motion } from "framer-motion";

const Header = () => {
  const { dispatch, darkTheme } = useModeContext();
  const [rightPosition, setRightPosition] = useState(true);
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const changeMode = () => {
    setRightPosition((prev) => !prev);
    dispatch({ type: "CHANGE_MODE" });
  };
  return (
    <div
      className={`justify-between items-center flex  py-5 px-4 md:px-8 lg:px-12 ${
        darkTheme ? "bg-gray-900" : "bg-gray-100"
      } shadow`}
    >
      <h1 className="font-[Satisfy] text-3xl lg:text-4xl text-blue-500 font-bold">
        Samuel Brhane
      </h1>

      <div
        className={`w-[100px] h-[40px] bg-blue-100 flex items-center ${
          rightPosition ? "justify-end" : "justify-start"
        } rounded-3xl p-2 cursor-pointer relative`}
        onClick={changeMode}
      >
        <motion.div
          className="w-[35px] h-[35px] bg-yellow-400 rounded-full z-[100]"
          layout
          transition={{ type: "spring" }}
        />
        <BsFillSunFill className="absolute top-[50%] translate-y-[-50%] left-2 text-xl text-black" />
        <MdNightsStay className="absolute top-[50%] translate-y-[-50%] right-2 text-xl text-black" />
      </div>
    </div>
  );
};

export default Header;
