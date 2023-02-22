import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 shadow px-4 md:px-8 lg:px-12 fixed top-0 w-full h-[70px] z-[100] bg-black text-white">
      <h1 className="font-[Satisfy] text-3xl lg:text-4xl text-blue-500 font-bold">
        User Name
      </h1>
      <AiOutlineMenu className="md:hidden text-xl cursor-pointer" />
      <div className="gap-6 items-center hidden md:flex">
        <ul className="flex items-center gap-6 lg:gap-8 font-semibold">
          <li>Home</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <button className="bg-green-600 font-bold text-white shadow-4xl  rounded-2xl px-4 py-2 hidden">
          Night
        </button>
      </div>
    </div>
  );
};

export default Header;
