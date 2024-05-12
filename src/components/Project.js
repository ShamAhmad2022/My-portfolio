'use client';

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";

function Project({ project, index }) {

    const eachProjectAnimationVariants = {
        initial: {
            opacity: 0,
        },
        animate: (index) => {
            return {
                opacity: 1,
                transition: {
                    delay: 0.10 * index
                }
            }
        }
    }

    return (
        <motion.div className='last:hidden sm:last:block rounded-lg relative group border border-black/40' variants={eachProjectAnimationVariants} initial="initial" whileInView="animate" viewport={{once: true}} custom={index}>
            <div className="transition-all group-hover:transition-all rounded-lg h-[11rem] sm:h-[14rem] w-[20rem] md:w-[22rem] lg:w-[25rem] border border-black/5 bg-cover bg-center flex justify-center items-center gap-10 group-hover:brightness-50 group-hover:bg-118%" style={{ backgroundImage: `url(${project.thumbnail})`}}>
            </div>
            <div className='hidden group-hover:flex absolute gap-9 -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]'>
                <Link href={project.url} className='h-16 w-16 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 text-3xl flex justify-center items-center transition-all dark:text-pink-900' target='_blank'><FaExternalLinkAlt /></Link>
                <Link href={`/allprojects/${project.name}`} className='h-16 w-16 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 text-4xl flex justify-center items-center dark:text-pink-900'><IoMdInformationCircle /></Link>
            </div>
        </motion.div>
    )
}

export default Project