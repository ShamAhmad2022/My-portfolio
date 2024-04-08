'use client';

import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';
import { projectsPageProjects } from '../../../../lib/data';
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";
import { PiNotepadFill } from "react-icons/pi";
import { FaCirclePlay } from "react-icons/fa6";
import clsx from 'clsx';

function ProjectDetails({ params }) {

  const [selectedProject, setSelectedProject]= useState({});
  const [selectedImage, setSelectedImage]= useState();

  useEffect(()=>{
    projectsPageProjects.filter(project=> {
      if(project.name === params.name){
        setSelectedProject(project);
      }
      });
  },[params]);
 
  useEffect(()=>{
    console.log(selectedProject.thumbnail,'llll');
    if(selectedProject.thumbnail) setSelectedImage(selectedProject.thumbnail);
  },[selectedProject]);

  return (
    <section className='relative'>
      <div className='group absolute bg-white w-14 h-14 flex justify-center items-center font-black text-2xl p-8 rounded-full top-10 left-10 borderBlack transition-all hover:scale-110 dark:bg-pink-900 cursor-pointer'>
        <Link href={'/allprojects'}><BsArrowLeft className='transition-al group-hover:-translate-x-[0.3rem]' /></Link>
      </div>

      <div className='w-[80%] mx-auto font-medium pt-52 px-20  flex flex-row'>
        <div className='w-[70%] pr-10 flex flex-col'>
          <h1 className='text-4xl font-bold mb-2'>{selectedProject.name}</h1>
          <p className='text-xl mb-6'>{selectedProject.date}</p>
          <p className='text-xl mb-10'>{selectedProject.desciption}</p>

          <div dangerouslySetInnerHTML={{ __html: selectedProject.details }} />

          <div className='flex flex-row gap-4 my-10'>
            <a href={selectedProject.liveUrl? selectedProject.liveUrl : selectedProject.GithubUrl} className={clsx('bg-pink-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-pink-950 active:scale-105 transition dark:bg-white dark:bg-opacity-10',{"opacity-50 pointer-events-none" : selectedProject.liveUrl===''})} target='_blank'>live link <FaExternalLinkAlt /></a>
            <a href={selectedProject.GithubUrl} className='bg-pink-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-pink-950 active:scale-105 transition dark:bg-white dark:bg-opacity-10' target='_blank'>GitHub <FaGithubSquare className='text-lg'/></a>
            <a href={selectedProject.videoUrl? selectedProject.videoUrl : selectedProject.GithubUrl} className={clsx('border-[0.2rem] border-pink-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:border-white/10',{"opacity-50 pointer-events-none" : selectedProject.videoUrl===''})} target='_blank'>watch demo <FaCirclePlay className='text-lg'/></a>
          </div>
          
        </div>
        <div className='w-[30%] flex flex-col'>
          <ul className='flex flex-row gap-2 flex-wrap'>{selectedProject.tags && selectedProject.tags.map((tag, index) => (
            <li key={index} className='bg-white/70 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'>{tag}</li>
          ))}
          </ul>
          
          <p className='font-bold mt-8 flex flex-row items-center gap-1 -mb-3 z-40'>Notes <PiNotepadFill className='text-lg'/></p>
          <div className='min-h-52 borderBlack bg-white/50 rounded-lg flex flex-col justify-center items-center p-4 dark:bg-white/10'>
            {selectedProject.notes && selectedProject.notes.length===0 ? 
            (<p className='opacity-50'>none</p>) : 
            (selectedProject.notes && selectedProject.notes.map((note, index)=>(
              <li className='opacity-90' key={index}>{note}</li>
            )))}
          </div>
        </div>
      </div>
      <div className='w-[80%] h-[40rem] mx-auto mb-52 mt-10 px-20'>
        <div className='w-[100%] h-[100%] flex flex-col justify-between'>
          <div className='h-[83%] bg-contain bg-center bg-no-repeat transition-all' style={{ backgroundImage: `url(${selectedImage})`}}></div>
          <div className='h-[16%] bg-pink-900 bg-opacity-20 flex flex-row overflow-x-auto dark:bg-white/10'>
            {selectedProject.images && selectedProject.images.map((img, index)=>(
              <div className='h-[100%] w-[15%] bg-cover bg-center cursor-zoom-in block -mr-20 hover:z-50 hover:scale-110 transition-all' onClick={()=>setSelectedImage(img)} key={index} style={{ backgroundImage: `url(${img})`}}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails