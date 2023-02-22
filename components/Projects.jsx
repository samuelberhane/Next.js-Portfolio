import { projects } from "@/utils/projects";
import { useState } from "react";
import { ProjectCard } from ".";
import { motion } from "framer-motion";

const projectType = ["All", "React.js", "Next.js", "Node.js", "Firebase"];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsData, setProjectsData] = useState(projects);

  const handleChange = (index) => {
    console.log(index, "initial");
    setCurrentIndex(index);
    if (index === 0) setProjectsData(projects);
    else
      setProjectsData(
        projects?.filter((project) =>
          project.tools.includes(projectType[index])
        )
      );
  };

  console.log("index", currentIndex);
  return (
    <div className="px-4 md:px-8 lg:px-12 mb-10 py-3" id="Portfolio">
      <h1 className="font-[Satisfy] text-4xl lg:text-5xl text-blue-500 font-bold mb-5 text-center">
        Projects
      </h1>

      <div className="flex flex-col md:flex-row md:gap-4 lg:gap-6">
        <motion.div
          initial={{ left: -20, opacity: 0.4 }}
          whileInView={{ left: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring", bounce: 0.2, delay: 0.3 }}
          className="relative flex flex-col  items-center"
        >
          {projectType?.map((type, index) => (
            <motion.button
              whileHover={{
                scale: 1.05,
                opacity: 0.9,
              }}
              onClick={() => handleChange(index)}
              key={index}
              className={`mb-4 mt-2 text-center rounded-3xl w-[200px]  ${
                currentIndex === index
                  ? "bg-[#D8CF0A] shadow-[#b9c960]"
                  : "bg-blue-500 shadow-[#6098c9]"
              }  text-white font-bold text-lg lg:text-xl shadow-xl  py-3 cursor-pointer`}
            >
              {type}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ right: -20, opacity: 0.4 }}
          whileInView={{ right: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring", bounce: 0.2, delay: 0.3 }}
          className="relative grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 sm:gap-4 md:gap-8 pt-3"
        >
          {projectsData?.map((project, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, type: "spring" }}
              key={index}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
