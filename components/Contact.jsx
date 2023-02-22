import { motion } from "framer-motion";
import { ContactForm, Information } from ".";

const Contact = () => {
  return (
    <div className="relative px-4 md:px-8 lg:px-12 mt-3 py-4 pb-8" id="Contact">
      <h1 className="font-[Satisfy] text-4xl lg:text-5xl text-blue-500 font-bold text-center mb-4">
        Contact
      </h1>

      <motion.div
        initial={{ bottom: -50, opacity: 0.9 }}
        whileInView={{ bottom: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 relative"
      >
        <Information />

        <div className="lg:w-[40%] w-full ml:10">
          <img
            src="/image/contact.png"
            alt="contactImage"
            className="w-full lg:h-[90%] h-full"
          />
        </div>

        <ContactForm />
      </motion.div>
    </div>
  );
};

export default Contact;
