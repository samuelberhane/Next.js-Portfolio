import { MdNightsStay } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import { useModeContext } from "@/context/ModeContext";

const Header = () => {
  const { dispatch, darkTheme } = useModeContext();
  const [rightPosition, setRightPosition] = useState(true);
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
        User Name
      </h1>
      <div
        className="gap-2 border-2 border-yellow-500 rounded-2xl relative w-[75px] h-[35px] bg-blue-100"
        onClick={changeMode}
      >
        <BsFillSunFill className="absolute top-[50%] translate-y-[-50%] left-1 text-xl text-black" />
        <MdNightsStay className="absolute top-[50%] translate-y-[-50%] right-1 text-xl text-black" />
        <div
          className={`absolute top-[50%] translate-y-[-50%] ${
            rightPosition ? "right-1" : "left-1"
          } duration-500 ease-in-out w-[25px] h-[25px] bg-blue-500 rounded-full z-30`}
        />
      </div>
    </div>
  );
};

export default Header;
