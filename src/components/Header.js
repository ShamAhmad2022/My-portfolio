"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../../context/active-section-context";
import { useSectionInView } from "../../lib/hooks";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../../context/theme-context";

function Header() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLAstClick } = useActiveSectionContext();
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[50rem]"
    >
      {/* <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{type: "tween", duration: 0.2}}>
                    <Image src={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTVE-sDkdeDZ1xT-RarsP29EY3M7nY3pm_M840Y4_Wrf2gH7IDe"} alt='avatar' width={192} height={192} quality={95} priority={true} className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
                </motion.div>

                <motion.span className='absolute bottom-0 right-0 text-3xl' initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{type: "spring", duration: 0.7, stiffness: 125, delay:0.1}}>
                    👋
                </motion.span>
            </div>
        </div> */}

      {/* <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl' initial={{opacity:0, y:100}} animate={{opacity: 1, y: 0}}> */}
      {/* <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl' initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}}>
            <span className='font-bold'>Hello, I'm Sham.</span> I'm a {" "} <span className='font-bold'>web developer</span> with {" "} <span className='font-bold'>2 years</span> of experience. I enjoy building <span className='italic'>websites and web-based app</span>. My focus is {" "} <span className='underline'>React.js (Next.js)</span>
        </motion.h1> */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        Hello! I'm{" "}
        <span className="font-semibold" style={{ display: 'inline-block', color: 'transparent', WebkitBackgroundClip: 'text', backgroundImage: theme === "light" ? 'linear-gradient(to bottom right, #dac24a, #ac8c31' : 'linear-gradient(to bottom right, #c79e55, #c79e55' }}>
          {" "}
          <TypeAnimation
            sequence={[" Sham, a web developer", 1000]}
            speed={10}
            repeat={false}
          />
        </span>
        with over <span className="font-bold">2 years</span> of experience. I
        build{" "}
        <span className="italic">functional, user friendly and responsive</span>{" "}
        websites and web applications. I value <span className="italic">creativity</span> and <span className="italic">responsibility</span> in my work.

        {/* My focus is {" "} <span className='underline'>React.js (Next.js)</span> */}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gradient-to-br from-[#dac24a] to-[#ac8c31] text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:from-[#ffeb87] hover:to-[#c8b03a] active:scale-105 transition dark:from-[#c79e55] dark:to-[#c79e55]"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLAstClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1.5 transition" />{" "}
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Sham-Al-Jalam.pdf"
          target="_blank"
        >
          Show CV{" "}
          <FaExternalLinkAlt className="text-[#ac8c31] opacity-60 group-hover:-translate-y-1 transition group-hover:opacity-100" />{" "}
        </a>

        <a
          href="https://www.linkedin.com/in/sham-al-jalam"
          target="_blank"
          className="bg-white text-[#ac8c31] p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-[#dcc759] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-[#c79e55]"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/ShamAhmad2022"
          target="_blank"
          className="bg-white text-[#ac8c31] p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-[#dcc759] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-[#c79e55]"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Header;
