import { frameworks } from "@/utils/frameworks";
import { tools } from "@/utils/tools";

const About = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 mt-3 py-7 lg:py-12" id="About">
      <h1 className="font-[Satisfy] text-4xl lg:text-5xl text-blue-500 font-bold mb-4 lg:mb-7 text-center">
        About me
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-18">
        <div className="mt-4">
          <div className="lg:w-[80%] text-sm font-light xl:text-[16px] flex flex-col lg:gap-5 gap-2">
            <p>
              Hello! I&apos;m Samuel Brhane, a Mern stack developer with the
              experience in developing full-stack web applications. My expertise
              mainly lies in working with the MERN stack, which includes
              MongoDB, Express.js, React, and Node.js.
            </p>
            <p>
              During my career, I have developed applications using React and
              Redux for the front-end, Node.js and Firebase for the back-end,
              and MongoDB for the database. I have experience integrating
              third-party APIs and services to create dynamic web applications.
              I&apos;m also familiar with other popular front-end frameworks and
              libraries such as Next.js and React Native.
            </p>
            <p>
              In addition to my technical skills, I&apos;m a strong communicator
              and a problem-solver. I enjoy working in a collaborative
              environment and thrive in fast-paced development environments.
            </p>
            <p>
              When I&apos;m not coding, I enjoy reading up on the latest
              advancements in web development and experimenting with new
              technologies. I&apos;m always looking for new ways to improve my
              skills and take on new challenges.
            </p>
            <p>
              If you&apos;re looking for a MERN stack developer who can help you
              bring your ideas to life, I would love to hear from you. Please
              don&apos;t hesitate to contact me to discuss your project
              requirements.
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-3 text-xl">
            Here are a list of tools, libraries and platforms I have had
            precious experience on.
          </h1>
          <p className="font-semibold text-lg mb-2">Frameworks</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4">
            {frameworks?.map((skill, index) => (
              <div key={index} className={`flex justify-center mb-6`}>
                <div
                  className={`px-10 py-3 shadow-lg shadow-blue-50 bg-white rounded`}
                >
                  <img
                    src={skill?.image}
                    alt="skillImage"
                    className="w-14 h-14 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="font-semibold text-lg mb-2">Tools</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4">
            {tools?.map((skill, index) => (
              <div key={index} className={`flex justify-center mb-6`}>
                <div
                  className={`px-10 py-3 shadow-lg shadow-blue-50 bg-white rounded`}
                >
                  <img
                    src={skill?.image}
                    alt="skillImage"
                    className="w-14 h-14 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
