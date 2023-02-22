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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, voluptatibus?
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, voluptatibus?
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, voluptatibus?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, ullam!
          </p>
          =
        </motion.div>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services?.map((service, index) => (
          <div className="flex justify-center shadow-md  pb-2" key={index}>
            <div>
              <img
                src={service.image}
                alt="serviceImage"
                className="h-[200px]"
              />
              <p className="text-center font-bold mt-3">{service.name}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Services;
