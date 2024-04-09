'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '../../context/active-section-context';
import { useSectionInView } from '../../lib/hooks';

function About() {

  const { ref } = useSectionInView("About");

    return (
        <motion.section ref={ref} id='about' className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }}>

          <SectionHeading>About me</SectionHeading>

          <p className="mb-5">I graduated with a bachelor in <span className="font-medium">Software Engineering</span> in Feb 2022, and Now I'm a web developer.
          I mainly work on <span className="font-medium">ReactJs</span> and <span className="font-medium">NextJs</span> for the frontend, and <span className="font-medium">Nodejs</span>, <span className="font-medium">ExpressJs</span> and <span className="font-medium">PostgreSQL</span> for the backend and the database management. I also have strong skills with HTML and CSS, alongside other skills such as Redux, Reducers, context API and CSS frameworks.</p>

          <p className="mb-5">I'm really passionate about building various web-based applications. So far I’ve made so many projects such as a chat app, front store for products, users management system, notes applications, to-do list app and much more (you can visit my GitHub account for details).</p>

          <p><span className="font-medium">I value responsibility and creativity in my work, and I'm excited to find a position where I can contribute to a dynamic company and continue to grow professionally.</span>
          I want to mention that I don't really have an actual work experience(I didn't work in a company before), but I can confidently say that I have the required skills, both soft and technical, that make me well-suited for any professional environment. And that all I'm missing is a chance to take my first step in my career path and gain my first job.
          </p>
        </motion.section>
      );
}

export default About