import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="justify-between items-center  py-5 bg-[rgba(57,45,45,0.9)] px-4 md:px-8 lg:px-12">
      <h1 className="font-[Satisfy] text-3xl lg:text-4xl text-blue-500 font-bold">
        User Name
      </h1>
      <AiOutlineMenu className="md:hidden text-xl cursor-pointer" />
      <div className="gap-6 items-center hidden md:flex">
        <button className="bg-green-600 font-bold text-white shadow-4xl  rounded-2xl px-4 py-2 hidden">
          Night
        </button>
      </div>
    </div>
  );
};

export default Header;
