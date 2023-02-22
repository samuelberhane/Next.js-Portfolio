import { projects } from "@/utils/projects";
import { useState } from "react";
import { ProjectCard } from ".";

const projectType = ["All", "React.js", "Next.js", "Node.js", "Firebase"];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsData, setProjectsData] = useState(projects);

  const handleChange = (index) => {
    setCurrentIndex(index);
    if (index === 0) setProjectsData(projects);
    else
      setProjectsData(
        projects?.filter((project) =>
          project.tools.includes(projectType[index])
        )
      );
  };
  return (
    <div className="px-4 md:px-8 lg:px-12 mb-10 py-3" id="Portfolio">
      <h1 className="font-[Satisfy] text-4xl lg:text-5xl text-blue-500 font-bold mb-5 text-center">
        Projects
      </h1>

      <div className="flex flex-col md:flex-row md:gap-4 lg:gap-6">
        <div className="flex flex-col  items-center">
          {projectType?.map((type, index) => (
            <button
              onClick={() => handleChange(index)}
              key={index}
              className={`mb-4 mt-2 text-center rounded-3xl w-[200px]  ${
                currentIndex === index
                  ? "bg-yellow-400 shadow-[#b9c960]"
                  : "bg-blue-500 shadow-[#6098c9]"
              }  text-white font-bold text-lg lg:text-xl shadow-xl  py-3 cursor-pointer`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 sm:gap-4 md:gap-8 pt-3">
          {projectsData?.map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
