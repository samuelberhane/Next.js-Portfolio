import { services } from "@/utils/services";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 mt-3 py-4" id="Services">
      <h1 className="font-[Satisfy] text-4xl lg:text-5xl text-blue-500 font-bold mb-6 text-center">
        Services
      </h1>
      <div className="flex justify-center flex-col md:flex-row gap-6 items-center">
        <motion.div
          initial={{ left: -20 }}
          whileInView={{ left: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative md:w-1/3 px-5 py-20 text-center text-sm md:text-[17px] border-4 border-yellow-400 rounded-2xl"
        >
          <img
            src="/image/service/design.jpg"
            alt="serviceImage"
            className="w-full rounded-md"
          />
          <p className="font-bold mt-2">Web Design</p>
          <p className="text-sm font-light mt-2">
            Prepare, design and maintain the structure, the overall layout and
            aesthetic for websites. write coding for the entire website, create
            website templates and run tests to preview layouts.
          </p>
        </motion.div>
        <div className="md:w-1/3  text-center text-sm md:text-[17px] flex flex-col gap-4">
          <motion.div
            initial={{ top: -20 }}
            whileInView={{ top: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative px-5 py-20 border-4 border-yellow-400 rounded-2xl"
          >
            <img
              src="/image/service/frontend.jpg"
              alt="serviceImage"
              className="w-full rounded-md"
            />
            <p className="font-bold mt-2">Frontend Web Development</p>
            <p className="text-sm font-light mt-2">
              Writing clean and interactive code to develop and design the
              overall look of a website for many platforms, including laptops
              and smartphones, and enhance the user&#39;s experience.
            </p>
          </motion.div>
          <motion.div
            initial={{ bottom: -20 }}
            whileInView={{ bottom: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative px-5 py-20 border-4 border-yellow-400 rounded-2xl"
          >
            <img
              src="/image/service/backend.jpg"
              alt="serviceImage"
              className="w-full rounded-md"
            />
            <p className="font-bold mt-2">Backend Web Development</p>
            <p className="text-sm font-light mt-2">
              Write code and tests, build prototypes, compile and analyze data,
              processes, and codes to troubleshoot problems as well as design
              robust APIs to support mobile and web applications.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ right: -20 }}
          whileInView={{ right: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative md:w-1/3 px-5 py-20 text-center text-sm md:text-[17px] border-4 border-yellow-400 rounded-2xl"
        >
          <img
            src="/image/service/database.png"
            alt="serviceImage"
            className="w-full rounded-md"
          />
          <p className="font-bold mt-2">Database Handling</p>
          <p className="text-sm font-light mt-2">
            Create REST API with incorporation of databases,ensure safety of
            stored data,troubleshoot database issues, and implement database
            recovery procedures and safety protocols.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
