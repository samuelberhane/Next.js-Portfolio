import { frameworks } from "@/utils/frameworks";
import { tools } from "@/utils/tools";

const About = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 mt-3 py-7 lg:py-12" id="About">
      <h1 className="font-[Satisfy] text-4xl lg:text-5xl text-blue-500 font-bold mb-4 lg:mb-7 text-center">
        About me
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-18">
        <div className="mt-1">
          <div className="lg:w-[80%] text-sm font-light flex flex-col gap-2">
            <p>
              Hello, I am a self-taught software developer with expertise in
              full stack web development and mobile app development. I have
              acquired my coding and programming skills by reading books,
              exploring different framework documentations, utilizing YouTube
              tutorials and online courses like Coursera and edX, and
              participating in boot camps such as freeCodeCamp. My knowledge and
              experience lies in the MERN stack, which includes MongoDB,
              Express.js, React, and Node.js, as well as Next.js and Firebase.
              Additionally, I have hands-on experience in developing
              cross-platform mobile applications using React Native.
            </p>
            <p>
              I have successfully worked on various cross-platform development
              projects as well as small and medium-sized businesses&#39;
              projects, ranging from creating customized websites to developing
              complex web applications. My proficiency includes integrating
              third-party APIs and services, and I am constantly upgrading my
              skills with the latest technologies and techniques.
            </p>
            <p>
              Apart from my technical skills, I possess excellent communication
              skills and problem-solving abilities. I enjoy working in a
              collaborative environment and thrive in fast-paced development
              environments. When I am not coding, I read up on the latest
              advancements in web and mobile app development and experiment with
              new technologies. I firmly believe in continuous learning and
              self-improvement and always look for ways to expand my knowledge
              and skills.
            </p>
            <p>
              If you are searching for a passionate and committed self-taught
              software developer with expertise in full stack web development
              and mobile app development, please do not hesitate to contact me
              to discuss your project requirements. I am confident in my ability
              to deliver high-quality work and exceed your expectations.
            </p>
            <p>
              Let&#39;s work together to turn your vision into reality! Whether
              you need a custom website, complex web application or
              cross-platform mobile application, I am up for the challenge. I
              will work closely with you to understand your requirements and
              create a solution that meets your needs and exceeds your
              expectations.
            </p>
            <p>
              I take pride in my work and am committed to delivering
              high-quality, efficient and cost-effective solutions. I am
              dedicated to helping my clients achieve their goals and am
              passionate about delivering value to their businesses. If you are
              looking for a self-taught software developer who is committed to
              excellence and passionate about creating impactful solutions, look
              no further. Contact me today to take the first step towards
              bringing your ideas to life.
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
                  className={`px-10 py-3 shadow-sm shadow-black bg-white rounded`}
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
                  className={`px-10 py-3 shadow-sm shadow-black bg-white rounded`}
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
