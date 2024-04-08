'use client';

import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '../../lib/data';
import Project from './Project';
import { useActiveSectionContext } from '../../context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { useSectionInView } from '../../lib/hooks';

function Projects() {

  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
        <SectionHeading>My projects</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project project={project}/>
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}

export default Projects