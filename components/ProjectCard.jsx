import { AiFillGithub, AiOutlineDeploymentUnit } from "react-icons/ai";

const ProjectCard = ({ name, description, image, liveUrl, gitUrl }) => {
  return (
    <div className="flex justify-center mb-4">
      <div className="relative rounded h-[260px] shadow-lg group">
        <img src={image} alt="projectImage" className="w-full h-full" />
        <h1 className="absolute top-0 left-0 w-full py-2 bg-[rgba(0,0,0,0.7)] text-white text-center font-semibold">
          {name}
        </h1>
        <div
          className="absolute text-center top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-[1s] ease-in-out 
  opacity-0 w-full bg-[rgba(71,110,160,0.7)] h-full group-hover:top-[50%] group-hover:opacity-100 z-50 text-white"
        >
          <div className="px-4 md:px-8 lg:px-10 flex flex-col justify-center h-full w-full">
            <p className="font-semibold">{description}</p>
            <div className="flex justify-center items-center gap-4 mt-5 text-black">
              <button className="bg-yellow-300 font-semibold rounded py-2 px-2 whitespace-nowrap flex gap-1 items-center">
                Source Code <AiFillGithub className="text-xl" />
              </button>
              <button className="bg-yellow-300 font-semibold rounded py-2 px-2 whitespace-nowrap flex gap-1 items-center">
                Live Demo <AiOutlineDeploymentUnit className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
