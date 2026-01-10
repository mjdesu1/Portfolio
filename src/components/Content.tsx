import { HiOutlineBriefcase } from "react-icons/hi2";
import { experienceData } from "../constants/experience";
import { HiOutlineBeaker } from "react-icons/hi";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import {
  backEndStacks,
  frontEndStacks,
  otherStacks,
} from "../constants/stacks";
import { projects } from "../constants/projects";

const Content = () => {
  return (
    <div className="w-full h-auto mt-6 lg:mt-8 flex flex-col gap-5 lg:gap-6 pb-8 xl:px-16">
      {/* Row 1: About + Experience Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
        {/* About Section - Left Column */}
        <div className="lg:col-span-7">
          <div className="border border-gray-200 py-5 px-5 rounded-xl h-full">
            <h3 className="text-md font-semibold flex items-center gap-2">
              <HiOutlineBriefcase className="w-4 h-4 text-gray-600" />
              About
            </h3>

            <div className="flex flex-col gap-3 mt-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                I am a BSIT graduate and a passionate Web Developer who enjoys
                building modern, resposive, and use-focused web applications and
                websites. I have hands-on experience working with Vue.js, React,
                Node.js, TypeScript, and modern web technologies, and I
                continuously strive to improve my skills by exploring new tools,
                frameworks, and best practices in web development.
              </p>

              <p className="text-sm text-gray-700 leading-relaxed">
                During my college years, I actively parcipated in website and
                web design competitions, where i honed my problem-solving
                skills, creativity and teamwork, while also pushing me to write
                clean, efficient, and maintainable code.
              </p>

              <p className="text-sm text-gray-700 leading-relaxed">
                I am driven by a strong passion for learning, building
                meaningful projects, and turning ideas into functional digital
                experiences. My goal is to grow as developer while contributing
                to impactful projects that solve real world problems.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section - Right Column */}
        <div className="lg:col-span-5">
          <div className="border border-gray-200 py-5 px-5 rounded-xl h-full">
            <h3 className="text-md font-semibold flex items-center gap-2 mb-4">
              <HiOutlineBriefcase className="w-4 h-4 text-gray-600" />
              Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1.25 top-2 bottom-2 w-0.5 bg-gray-200"></div>

              {/* Timeline items */}
              <div className="space-y-4">
                {experienceData.map((exp, index) => (
                  <div key={index} className="relative flex items-start gap-4">
                    {/* Timeline dot */}
                    <div
                      className={`w-3 h-3 rounded-full z-10 shrink-0 ${
                        exp.current ? "bg-black" : "bg-gray-300"
                      }`}
                    ></div>

                    {/* Content */}
                    <div className="flex-1 flex justify-between items-start min-w-0">
                      <div className="min-w-0 flex-1 pr-2">
                        <h4 className="text-sm font-semibold text-black">
                          {exp.jobTitle}
                        </h4>
                        <p className="text-xs text-gray-600 mt-0.5">
                          {exp.companyName}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-gray-600 shrink-0">
                        {exp.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Tech Stack - Full Width */}
      <div className="border border-gray-200 py-5 px-5 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-md font-semibold flex items-center gap-2">
            <HiOutlineBeaker className="w-4 h-4 text-gray-600" />
            Tech Stack
          </h3>
          <span className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
            View All →
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <div>
            <h4 className="text-sm text-gray-800 font-medium mb-3">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {frontEndStacks.map((stack, index) => (
                <div
                  key={index}
                  className="text-xs py-1.5 px-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {stack.name}
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h4 className="text-sm text-gray-800 font-medium mb-3">Backend</h4>
            <div className="flex flex-wrap gap-2">
              {backEndStacks.map((stack, index) => (
                <div
                  key={index}
                  className="text-xs py-1.5 px-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {stack.name}
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div>
            <h4 className="text-sm text-gray-800 font-medium mb-3">
              DevOps & Cloud
            </h4>
            <div className="flex flex-wrap gap-2">
              {otherStacks.map((stack, index) => (
                <div
                  key={index}
                  className="text-xs py-1.5 px-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {stack.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Beyond Coding + Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
        {/* Beyond Coding Section */}
        <div className="border border-gray-200 py-5 px-5 rounded-xl">
          <h3 className="text-md font-semibold flex items-center gap-2 mb-4">
            <MdOutlineVideoLibrary className="w-4 h-4 text-gray-600" />
            Beyond Coding
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            When not writing code, I enjoy staying active and entertained. I'm
            passionate about{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              jogging
            </span>
            ,{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              basketball
            </span>
            , and{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              online gaming
            </span>
            . These activities help me maintain a healthy work-life balance and
            provide a great way to unwind and relax.
          </p>
        </div>

        {/* Projects Section */}
        <div className="border border-gray-200 py-5 px-5 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-md font-semibold flex items-center gap-2">
              <HiOutlineFolderOpen className="w-4 h-4 text-gray-600" />
              Recent Projects
            </h3>
            <span className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
              View All →
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projects.slice(0, 4).map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-3 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer"
              >
                <h4 className="font-semibold text-sm text-gray-900">
                  {project.title}
                </h4>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                  {project.description}
                </p>
                <span className="inline-block mt-2 bg-gray-100 px-2 py-1 text-xs rounded text-gray-700">
                  {project.domainName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
