import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name) return toast.error("Please, write your name.", toastOptions);
    if (!email) return toast.error("Please, write your email.", toastOptions);
    if (!message)
      return toast.error("Please, write your message.", toastOptions);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:items-end md:items-center lg:w-[35%] w-full mt-10"
    >
      <p className="text-center w-full lg:w-[90%] mb-4 font-bold text-xl lg:text-2xl">
        Send me a message.
      </p>
      <input
        type="text"
        placeholder="Full Name"
        className="input"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email Address"
        className="input"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <textarea
        placeholder="Message"
        className="input"
        rows={10}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      ></textarea>
      <div className="flex justify-center  lg:w-[80%] w-full">
        <motion.button
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
          initial={{ backgroundColor: "blue" }}
          animate={{
            scale: [0.9, 1, 0.9, 1],
            backgroundColor: "#4FA6F6",
          }}
          className="rounded-3xl text-white font-bold text-lg px-16 shadow-xl shadow-[#6098c9] py-3 ml-3"
        >
          Send
        </motion.button>
      </div>
    </form>
  );
};

export default ContactForm;