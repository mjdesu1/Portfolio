import { useState } from "react";
import { HiOutlineBriefcase, HiOutlineXMark } from "react-icons/hi2";
import { experienceData } from "../constants/experience";
import { HiOutlineBeaker } from "react-icons/hi";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { IoIosLink } from "react-icons/io";
import { MdOutlineVideoLibrary } from "react-icons/md";
import {
  backEndStacks,
  frontEndStacks,
  otherStacks,
} from "../constants/stacks";
import { projects } from "../constants/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { galleryData } from "@/constants/gallery";
import { HiOutlinePhotograph } from "react-icons/hi";
import { socialLinks } from "../constants/socials";
import { motion, AnimatePresence } from "framer-motion";

const Content = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full h-auto mt-6 lg:mt-8 flex flex-col gap-5 lg:gap-6 pb-8">
      {/* Row 1: About + Experience Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
        {/* About Section - Left Column */}
        <div className="lg:col-span-7">
          <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl h-full bg-white dark:bg-gray-900">
            <h3 className="text-md font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
              <HiOutlineBriefcase className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              About
            </h3>

            <div className="flex flex-col gap-4 mt-5">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                I am a <span className="text-gray-900 dark:text-white font-bold">BSIT undergraduate</span> and a <span className="text-gray-900 dark:text-white font-bold">passionate Web Developer</span> who enjoys
                building <span className="text-gray-900 dark:text-white font-bold">modern, responsive, and user-focused</span> web applications and
                websites. I have hands-on experience working with <span className="text-gray-900 dark:text-white font-bold">Vite, React, Node.js, TypeScript</span>, and modern web technologies. I actively leverage <span className="text-gray-900 dark:text-white font-bold">AI tools</span> as the new generation of development to stay efficient and ahead of the curve.
              </p>

              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                During my college years, I actively participated in website and
                web design competitions, including <span className="text-gray-900 dark:text-white font-bold">ATI</span> and various school-based projects.
                Despite being an undergraduate, I have already gained <span className="text-gray-900 dark:text-white font-bold">extensive working experience</span> in real-world jobs, honing my problem-solving skills and technical expertise.
              </p>

              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                I am known as a <span className="text-gray-900 dark:text-white font-bold">fast worker</span> who is deeply dedicated to every project. I am the type of developer who <span className="text-gray-900 dark:text-white font-bold italic underline decoration-gray-900/20 dark:decoration-white/20 underline-offset-4">won't sleep</span> until the task is complete and every target is met. My goal is to grow while contributing to <span className="text-gray-900 dark:text-white font-bold">impactful projects</span> that solve real-world problems.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section - Right Column */}
        <div className="lg:col-span-5">
          <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl h-full bg-white dark:bg-gray-900">
            <h3 className="text-md font-semibold flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
              <HiOutlineBriefcase className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1.25 top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

              {/* Timeline items */}
              <div className="space-y-4">
                {experienceData.map((exp, index) => (
                  <div key={index} className="relative flex items-start gap-4">
                    {/* Timeline dot */}
                    <div
                      className={`w-3 h-3 rounded-full z-10 shrink-0 ${exp.current
                        ? "bg-black dark:bg-white"
                        : "bg-gray-300 dark:bg-gray-600"
                        }`}
                    ></div>

                    {/* Content */}
                    <div className="flex-1 flex justify-between items-start min-w-0">
                      <div className="min-w-0 flex-1 pr-2">
                        <h4 className="text-sm font-semibold text-black dark:text-white">
                          {exp.jobTitle}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                          {exp.companyName}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 shrink-0">
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
      <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl bg-white dark:bg-gray-900">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-md font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
            <HiOutlineBeaker className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            Tech Stack
          </h3>
          <span className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 cursor-pointer">
            View All →
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          <div>
            <h4 className="text-sm text-gray-800 dark:text-gray-200 font-medium mb-3">
              Frontend
            </h4>
            <div className="flex flex-wrap gap-2">
              {frontEndStacks.map((stack, index) => (
                <div
                  key={index}
                  className="text-xs py-1.5 px-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200"
                >
                  {stack.name}
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h4 className="text-sm text-gray-800 dark:text-gray-200 font-medium mb-3">
              Backend
            </h4>
            <div className="flex flex-wrap gap-2">
              {backEndStacks.map((stack, index) => (
                <div
                  key={index}
                  className="text-xs py-1.5 px-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200"
                >
                  {stack.name}
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div>
            <h4 className="text-sm text-gray-800 dark:text-gray-200 font-medium mb-3">
              DevOps & Cloud
            </h4>
            <div className="flex flex-wrap gap-2">
              {otherStacks.map((stack, index) => (
                <div
                  key={index}
                  className="text-xs py-1.5 px-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200"
                >
                  {stack.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Beyond Coding + Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
        {/* Beyond Coding Section */}
        <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl bg-white dark:bg-gray-900">
          <h3 className="text-md font-semibold flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
            <IoIosLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            Social Links
          </h3>
          <div className="flex flex-col gap-3">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 group"
                >
                  <IconComponent className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors shrink-0" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-5 lg:gap-6">
          <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl bg-white dark:bg-gray-900">
            <h3 className="text-md font-semibold flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
              <MdOutlineVideoLibrary className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              Beyond Coding
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              When not writing code, I enjoy staying active and entertained. I'm
              passionate about{" "}
              <span className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                jogging
              </span>
              ,{" "}
              <span className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                cycling
              </span>
              , and{" "}
              <span className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                online gaming
              </span>
              . These activities help me maintain a healthy work-life balance and
              provide a great way to unwind and relax.
            </p>
          </div>

          {/* Projects Section */}
          <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl bg-white dark:bg-gray-900">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-md font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
                <HiOutlineFolderOpen className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                Recent Projects
              </h3>
              <span className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 cursor-pointer">
                View All →
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.slice(0, 6).map((project, index) => (
                <a
                  key={index}
                  href={project.link !== "#" ? project.link : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all bg-white dark:bg-gray-800 flex flex-col justify-between ${project.link !== "#" ? "cursor-pointer" : "cursor-default opacity-80"
                    }`}
                >
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <span className="inline-block mt-2 bg-gray-100 dark:bg-gray-700 px-2 py-1 text-[10px] rounded text-gray-700 dark:text-gray-300 w-fit">
                    {project.domainName}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 4: Gallery Section */}
      <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl bg-white dark:bg-gray-900">
        <h3 className="text-md font-semibold flex items-center gap-2 mb-4 text-gray-900 dark:text-white">
          <HiOutlinePhotograph className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          Gallery
        </h3>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/3 lg:basis-1/5"
                >
                  <div
                    className="overflow-hidden rounded-lg aspect-4/5 cursor-pointer group relative"
                    onClick={() => setSelectedImage(item.imgSrc)}
                  >
                    <img
                      src={item.imgSrc}
                      alt="Gallery item"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">View Full</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700" />
          </Carousel>

          {/* Mobile navigation dots or swipe indicator */}
          <div className="flex justify-center mt-4 md:hidden">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Swipe to see more →
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox / Full Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[101]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <HiOutlineXMark className="w-8 h-8" />
            </motion.button>

            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Content;
