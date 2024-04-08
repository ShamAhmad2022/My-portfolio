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
      <div className='absolute bg-white w-14 h-14 flex justify-center items-center text-3xl rounded-full top-10 left-10 borderBlack'>
        <Link href={'/'}><BsArrowLeft /></Link>
      </div>
      <div className='w-[80%] mx-auto py-24'>
        <motion.ul initial={{opacity:0}} animate={{opacity:1}} className='flex gap-4 justify-center'>{filterTags.map((tag, index)=>(
        <li key={index} className={clsx('bg-white/70 py-3 px-6 rounded-full hover:cursor-pointer hover:bg-white/100 flex justify-center items-center',{"border-4 border-pink-800 bg-white/100" : selectedTagId === index})} onClick={()=>{setActiveTag(tag); setSelectedTagId(index);}}>{tag}</li>
        ))}</motion.ul>

        <div className='mt-14 flex flex-wrap gap-8 justify-center items-center'>{/*//flex */}
            {projects.map((project, index) => (
                <React.Fragment key={index}>
                    {/* <Link href={`/allprojects/${project.name}`} className='bg-yellow-100 h-[15rem] lg:w-[23rem] border border-black/5 rounded-lg relative hover:bg-gray-200 transition'></Link> */}
                    <EachProject project={project} index={index}/>
                </React.Fragment>
            ))}
          {activeTag==='NextJs' && <p>this portfolio</p>}
        </div>
      </div>
    </section>
  )
}

export default AllProjects