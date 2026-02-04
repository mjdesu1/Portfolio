import { useState } from "react";
import { HiOutlineTrophy } from "react-icons/hi2";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { achievementsData } from "../constants/achievements";
import { IoIosLink } from "react-icons/io";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

const AchievementButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMediaOpen, setIsMediaOpen] = useState(false);
    const achievement = achievementsData[0]; // Focusing on Agri-IGNITE

    return (
        <div className="relative inline-block">
            {/* Primary Achievement Button */}
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    if (isOpen) setIsMediaOpen(false);
                }}
                className="h-9 lg:h-10 px-4 lg:px-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs lg:text-sm rounded-xl transition-all flex items-center gap-2 shadow-sm group relative overflow-hidden"
            >
                <div className="flex items-center gap-1.5 z-10">
                    <HiOutlineTrophy className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    <span className="truncate tracking-tight uppercase">Achievements</span>
                </div>

                <div className="flex items-center h-full pl-3 ml-2 border-l border-white/20 z-10">
                    {isOpen ? (
                        <HiChevronUp className="w-4 h-4 text-white/80" />
                    ) : (
                        <HiChevronDown className="w-4 h-4 text-white/80" />
                    )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 mt-3 w-[280px] sm:w-[340px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden backdrop-blur-md p-5"
                    >
                        <div className="flex flex-col gap-4">
                            {/* Achievement Header */}
                            <div className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                <div className="flex-1">
                                    <h4 className="text-[14px] font-bold text-gray-900 dark:text-white leading-tight">
                                        {achievement.title}
                                    </h4>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                                            {achievement.tag}
                                        </span>
                                        <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                            {achievement.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary "Media" Toggle Button inside Dropdown */}
                            {achievement.mediaCoverages && (
                                <div className="flex flex-col gap-2">
                                    <button
                                        onClick={() => setIsMediaOpen(!isMediaOpen)}
                                        className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl border transition-all duration-300 group/media ${isMediaOpen
                                            ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20"
                                            : "bg-gray-50 dark:bg-white/5 border-gray-100 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-blue-500/30"
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <HiOutlineGlobeAlt className={`w-4 h-4 ${isMediaOpen ? "text-white" : "text-blue-500"}`} />
                                            <span className="text-[12px] font-bold uppercase tracking-wider">Media Coverage</span>
                                        </div>
                                        {isMediaOpen ? <HiChevronUp className="w-3.5 h-3.5" /> : <HiChevronDown className="w-3.5 h-3.5" />}
                                    </button>

                                    {/* Sub-Dropdown for Media Links */}
                                    <AnimatePresence>
                                        {isMediaOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="flex flex-col gap-1.5 mt-1 pl-2 border-l-2 border-blue-500/20 ml-2">
                                                    {achievement.mediaCoverages.map((media, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={media.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all group/link border border-transparent hover:border-blue-500/20"
                                                        >
                                                            <IoIosLink className="w-3.5 h-3.5 text-blue-500" />
                                                            <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 truncate">
                                                                {media.name}
                                                            </span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}

                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                <p className="text-[10px] text-gray-400 dark:text-gray-500 italic text-center">
                                    Click media to view coverage
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AchievementButton;
