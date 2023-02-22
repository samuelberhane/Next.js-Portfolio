import { ImLocation2 } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Information = () => {
  return (
    <div className="flex justify-center">
      <div className="shadow-lg shadow-blue-100 p-6 w-[300px]">
        <div className="flex justify-center">
          <img
            src="/image/person.jpg"
            alt="profileImage"
            className="rounded-full  h-[150px] w-[150px]"
          />
        </div>
        <h1 className="text-lg md:text-xl lg:text-2xl text-center mt-1 text-blue-500 font-bold">
          User Name
        </h1>
        <p className="my-1 text-center font-bold text-lg">
          Full Stack Web Developer
        </p>
        <div className="flex items-center flex-col gap-2">
          <p className="flex items-center gap-1">
            <ImLocation2 className="text-blue-500" /> Addis Ababa, Ethiopia
          </p>

          <div className="flex flex-col  items-center gap-1 border-2 w-full p-2">
            <MdEmail className="text-blue-500 text-xl" />
            <p className="font-bold text-lg">Email</p>
            <p>1samibrhane@gmail.com</p>
            <p className="text-blue-500 cursor-pointer">Send a message</p>
          </div>

          <div className="flex flex-col  items-center gap-1 border-2 w-full p-2">
            <IoLogoWhatsapp className="text-blue-500 text-xl" />
            <p className="font-bold text-lg">Whatsapp</p>
            <p>+251945964269</p>
            <p className="text-blue-500 cursor-pointer">Send a message</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
