import { frameworks } from "@/utils/frameworks";
import { tools } from "@/utils/tools";

const About = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 mt-3 py-7" id="About">
      <h1 className="font-[Satisfy] text-4xl lg:text-5xl text-blue-500 font-bold mb-4 lg:mb-7 text-center">
        Skills
      </h1>
      {/* skills */}
      <div>
        <h1 className="font-bold mb-3 text-xl">
          Here are a list of tools, libraries and platforms I have had precious
          experience on.
        </h1>
        <div className="flex flex-col lg:flex-row justify-between lg:gap-4">
          <div>
            <p className="font-semibold text-lg mb-2">Frameworks</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4">
              {frameworks?.map((skill, index) => (
                <div key={index} className={`flex justify-center mb-6`}>
                  <div
                    className={`px-10 py-3 xl:px-12 xl:py-4 shadow-sm shadow-black bg-white rounded `}
                  >
                    <img
                      src={skill?.image}
                      alt="skillImage"
                      className="w-14 h-14 xl:w-16 xl:h-16 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg mb-2">Tools</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4">
              {tools?.map((skill, index) => (
                <div key={index} className={`flex justify-center mb-6`}>
                  <div
                    className={`px-10 py-3 xl:px-12 xl:py-4 shadow-sm shadow-black bg-white rounded `}
                  >
                    <img
                      src={skill?.image}
                      alt="skillImage"
                      className="w-14 h-14 xl:w-16 xl:h-16 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
