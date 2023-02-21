import { skills } from "./utils/skills";

const Skills = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 mt-3 py-4">
      <h1 className="font-[Satisfy] text-2xl md:text-3xl xl:text-4xl text-blue-500 font-bold mb-6">
        Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
        {skills?.map((skill, index) => (
          <div key={index} className="flex justify-center mb-6">
            <div className={`px-20 py-3 shadow-md ${skill?.shadow}`}>
              <img
                src={skill?.image}
                alt="skillImage"
                className="w-36 h-36 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
