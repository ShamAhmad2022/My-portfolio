"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";

function EachProject({ project, index }) {
  const eachProjectAnimationVariants = {
    initial: {
      opacity: 0,
    },
    animate: (index) => {
      return {
        opacity: 1,
        transition: {
          delay: 0.1 * index,
        },
      };
    },
  };

  return (
    <motion.div
      className="rounded-lg relative group border border-black/40"
      variants={eachProjectAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
    >
      <div className="relative transition-all group-hover:transition-all rounded-lg h-[13rem] w-[22rem] md:w-[22rem] lg:w-[23rem] flex justify-center items-center gap-10 border border-black/5 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:brightness-50"
          style={{ backgroundImage: `url(${project.thumbnail})` }}
        ></div>
      </div>
      <div className="hidden group-hover:flex absolute gap-9 -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]">
        <Link
          href={project.liveUrl ? project.liveUrl : project.GithubUrl}
          className="text-[#ac8c31] h-16 w-16 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 hover:text-[#dac24a] text-2xl flex justify-center items-center transition-all duration-300 dark:text-[#ae7c26] dark:hover:text-[#c79e55]"
          target="_blank"
        >
          <FaExternalLinkAlt />
        </Link>
        <Link
          href={`/allprojects/${project.name}`}
          className="text-[#ac8c31] h-16 w-16 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 hover:text-[#dac24a] text-4xl flex justify-center items-center transition-all duration-300 dark:text-[#ae7c26] dark:hover:text-[#c79e55]"
        >
          <IoMdInformationCircle />
        </Link>
      </div>
    </motion.div>
  );
}

export default EachProject;
