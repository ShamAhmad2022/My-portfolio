'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {links} from '../../lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '../../context/active-section-context';

function Header() {

  const {activeSection, setActiveSection, setTimeOfLAstClick} = useActiveSectionContext();

  return (
    <header className='z-[999] relative mt-28 sm:mt-36'>
        <motion.div className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-b-2xl border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-pink-950 dark:border-none dark:bg-opacity-75' initial={{y: -100, x: "-50%", opacity:0}} animate={{y: 0, x: "-50%", opacity:1}}></motion.div>

        <nav className='fixed flex top-[.6rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[intial] sm:py-0'>
          <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-pink-900 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
            {links.map(link => (
              <motion.li key={link.hash} className='relative h-3/4 flex items-center justify-center' initial={{y: -100, opacity:0}} animate={{y: 0, opacity:1}}>
                <Link href={link.hash} className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-pink-700 transition dark:text-white dark:hover:text-pink-300',{"text-pink-800 dark:text-pink-200" : activeSection === link.name})} onClick={()=> {setActiveSection(link.name); setTimeOfLAstClick(Date.now());}}>
                  {link.name}
                  {activeSection===link.name && <motion.span className='bg-pink-700 bg-opacity-10 rounded-full absolute inset-0 -z-10 dark:bg-pink-200 dark:bg-opacity-40' layoutId='activeSection' transition={{type: "spring", stiffness: 380, damping: 30}}></motion.span>}{/* inset means set all  the (left top right bottom) to zero */}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
    </header>
  )
}

export default Header