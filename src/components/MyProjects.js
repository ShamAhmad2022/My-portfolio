'use client';

import React from 'react'
import SectionHeading from './SectionHeading'
import { homeProjectsThumbnails } from '../../lib/data';
import MyProject from './MyProject';
import { useSectionInView } from '../../lib/hooks';
import Link from 'next/link';

function MyProjects() {

  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
        <SectionHeading>My projects</SectionHeading>
         <div className='md:px-10 w-[20rem] sm:w-[60rem] flex flex-wrap gap-8 justify-center items-center'>{/*//flex */}
            {homeProjectsThumbnails.map((project, index) => (
                <React.Fragment key={index}>
                    <MyProject project={project} index={index}/>
                </React.Fragment>
            ))}
        </div>
        {/* <Link href="/projects" className='text-center font-semibold block mt-10 lg:text-right lg:mr-[4rem]'>Show more →</Link> */}
        <Link href="/allprojects" className='mt-8 px-6 m-auto flex items-center justify-center gap-2 h-[3rem] w-[10rem] bg-pink-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-pink-950 active:scale-105 dark:bg-white dark:bg-opacity-10'>Show more...</Link>
    </section>
  )
}

export default MyProjects