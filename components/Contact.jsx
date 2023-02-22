import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 mt-3 py-4 pb-8" id="Contact">
      <h1 className="font-[Satisfy] text-4xl lg:text-5xl text-blue-500 font-bold mb-6 text-center">
        Contact
      </h1>
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4">
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
              {/* 
            <div className="flex flex-col  items-center gap-1 border-2 w-full p-2">
              <AiFillPhone className="text-blue-500 text-xl" />
              <p className="font-bold text-lg">Phone</p>
              <p>+251945964269</p>
              <p className="text-blue-500 cursor-pointer">Call Me</p>
            </div> */}

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

        <div className="lg:w-[40%] w-full ml:10">
          <img
            src="/image/contact.png"
            alt="contactImage"
            className="w-full lg:h-[90%] h-full"
          />
        </div>

        <form className="flex flex-col lg:items-end md:items-center lg:w-[35%] w-full">
          <input type="text" placeholder="Full Name" className="input" />
          <input type="email" placeholder="Email Address" className="input" />
          <textarea
            placeholder="Message"
            className="input"
            rows={10}
          ></textarea>
          <div className="flex justify-center  lg:w-[80%] w-full">
            <button className="bg-blue-500 shadow-lg shadow-blue-50 px-12 py-4 rounded-2xl text-sm font-bold xl:text-lg whitespace-nowrap">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
