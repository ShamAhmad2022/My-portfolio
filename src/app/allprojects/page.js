'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { filterTags, projectsPageProjects } from '../../../lib/data';
import EachProject from './EachProject.js';
import { motion} from "framer-motion";
import clsx from 'clsx';
import CustomHead from '@/components/CusHead';

function AllProjects() {

  const [activeTag, setActiveTag] = useState('all');
  const [projects, setProjects] = useState(projectsPageProjects);
  const [selectedTagId, setSelectedTagId] = useState(0);

  useEffect(()=>{
    if(activeTag==='all'){
      setProjects(projectsPageProjects);
    }else{
      setProjects(projectsPageProjects.filter(project => project.tags.includes(activeTag)));
    }
  }, [activeTag]);

  return (
    <section className='relative'>
      <CustomHead title='projects'/>
      <div className='group absolute bg-white w-10 h-10 sm:w-14 sm:h-14 flex justify-center items-center font-black text-2xl p-6 sm:p-8 rounded-full top-5 left-5 sm:top-10 sm:left-10 borderBlack transition-all hover:scale-110 dark:bg-pink-900 cursor-pointer'>
        <Link href={'/'}><BsArrowLeft className='transition-al group-hover:-translate-x-[0.3rem]' /></Link>
      </div>
      <div className='w-[90%] mx-auto py-20 md:py-36 md:w-[90%] lg:py-24 lg:w-[80%]'>
        <motion.ul initial={{opacity:0}} animate={{opacity:1}} className='flex gap-4 justify-center flex-wrap'>{filterTags.map((tag, index)=>(
        <li key={index} className={clsx('bg-white/70 py-3 px-6 rounded-full hover:cursor-pointer hover:bg-white/100 flex justify-center items-center dark:bg-white/30',{"border-4 border-pink-800 bg-white/100 dark:border-pink-200" : selectedTagId === index})} onClick={()=>{setActiveTag(tag); setSelectedTagId(index);}}>{tag}</li>
        ))}</motion.ul>

        <div className='mt-14 flex flex-wrap gap-8 justify-center items-center'>{/*//flex */}
            {projects.map((project, index) => (
                <React.Fragment key={index}>
                    {/* <Link href={`/allprojects/${project.name}`} className='bg-yellow-100 h-[15rem] lg:w-[23rem] border border-black/5 rounded-lg relative hover:bg-gray-200 transition'></Link> */}
                    <EachProject project={project} index={index}/>
                </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  )
}

export default AllProjects