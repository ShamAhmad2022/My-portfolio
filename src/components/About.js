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
        I mainly work on <span className="font-medium">ReactJs</span> and <span className="font-medium">NextJs</span> for the frontend, and <span className="font-medium">Nodejs</span>, <span className="font-medium">ExpressJs</span> and <span className="font-medium">PostgreSQL</span> for the backend and the database management. I also have strong skills with HTML and CSS, alongside other skills such as Redux, Reducers, context API and CSS frameworks. I'm really passionate about building various web-based applications. So far I’ve made so many projects such as a chat app, front store for products, users management system, notes applications, to-do list app and much more (you can visit my GitHub account for details).</p>

      <div className="mb-5">
        <strong>MY experience:</strong>
        <p><strong>- Frontend developer at Logatta:</strong> As a FrontendDeveloper at Logatta, I built scalable   frontend architectures
          usingNext.js and React, delivering responsive, user-friendly web applications with seamless API
          integration. I collaborated closely with backend developers, designers, and product managers,
          usingGit and Jira for project management.
        </p>
        <p><strong>- Advanced web development with Javascript course at Abdul aziz al ghurair school of advanced computing:</strong> A 6-month boot camp powered by Code Fellows. Through out the program, I gained hands-on
          experience with the latest technologies and frameworks, includingNode.js, React, Express, and
          PostgreSQL. I learned how to design and build scalable and dynamic web applications from
          scratch. The program also included comprehensive training in data structures. Additionally, I had
          the opportunity to work in teams to solve problems and create projects.</p>
      </div>

      <div className="mb-5">
        <strong>Currently: </strong>
        <p><span className="font-medium">I'm open for work and excited to find a position where I can contribute to a dynamic company and continue to grow professionally.</span></p>
      </div>
    </motion.section>
  );
}

export default About