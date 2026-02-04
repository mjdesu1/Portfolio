import { useState } from "react";
import ProfileImage from "../assets/images/profile.png";
import ProfileImageHover from "../assets/images/profile1.png";
import { ReactComponent as VerifiedCheck } from "../assets/svg/verified-check.svg";
import { ReactComponent as Location } from "../assets/svg/location.svg";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { personalLinks } from "../constants/personal";
import AchievementButton from "./AchievementButton";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="w-full h-auto pt-8 lg:pt-12">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8">
        <div
          className="relative w-32 h-32 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-38 xl:h-38 flex-shrink-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <img
            src={ProfileImage}
            alt="Profile"
            className={`absolute inset-0 w-full h-full rounded-2xl object-cover transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"
              }`}
          />
          <img
            src={ProfileImageHover}
            alt="Profile Hover"
            className={`absolute inset-0 w-full h-full rounded-2xl object-cover transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
              }`}
          />
        </div>

        <div className="flex flex-col items-center sm:items-start gap-2 flex-1 min-w-0">
          <div className="flex flex-col items-center sm:items-start gap-1 w-full">
            <h3 className="text-xl lg:text-3xl font-bold flex items-center justify-center sm:justify-start gap-2 text-gray-900 dark:text-white w-full">
              <span className="truncate">Michael Joshua B. Paloa</span>
              <VerifiedCheck className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
            </h3>
            <h5 className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center sm:justify-start gap-1.5">
              <Location className="w-3.5 h-3.5" />
              Libertad Bunawan ADS, Philippines
            </h5>
            <h4 className="text-sm lg:text-base font-medium text-gray-800 dark:text-gray-300">
              Front-end Developer{" "}
              <span className="text-gray-400 dark:text-gray-500">\</span> Web
              Developer
            </h4>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start mt-4 gap-3 w-full">
            <a
              href={personalLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 lg:h-10 px-4 lg:px-5 bg-black dark:bg-white text-white dark:text-black font-semibold text-xs lg:text-sm rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all flex items-center gap-2 shadow-sm"
            >
              <IoNewspaperOutline className="w-4 h-4" />
              Resume
              <FaAngleRight className="w-3 h-3" />
            </a>
            <a
              href={personalLinks.email}
              className="h-9 lg:h-10 px-4 lg:px-5 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-xs lg:text-sm rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center gap-2"
            >
              <IoIosSend className="w-5 h-5" />
              Send Email
            </a>
            <AchievementButton />
          </div>
        </div>
      </div>
    </header>

  );
};

export default Header;
