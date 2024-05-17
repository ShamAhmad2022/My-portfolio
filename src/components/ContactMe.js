'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import {motion} from 'framer-motion';
import { useSectionInView } from '../../lib/hooks';
import { sendEmail } from '../../actions/sendEmail';
import SendEmailButton from './SendEmailButton';
import toast from 'react-hot-toast';

function ContactMe() {

  const { ref } = useSectionInView("Contact");

  return (
    <motion.section ref={ref} id='contact' className='mb-20 text-center sm:mb-28 w-[min(100%, 38rem)]' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1}} viewport={{once: true}}>
        <SectionHeading>Contact me</SectionHeading>

        <p className='-mt-6 dark:text-white/80'>Please contact me directly at <a href='mailto:shamahmadaljalam@gmail.com' className='underline'>shamahmadaljalam@gmail.com</a> or through this form</p>

        <form className='mt-10 flex flex-col dark:text-black' 
        action={async (formData)=>{
        const {data, error} = await sendEmail(formData);
        if(error){
          // alert(error);
          toast.error(error);
          return;
        }

        // alert("Email sent successfully");
        toast.success("Email sent successfully");
        }}>
            <input type='email' name='senderEmail' className='h-14 px-4 rounded-lg borderBlack placeholder-[#9a872a]/40 focus:outline-[#cfb638] dark:bg-white dark:bg-opacity-50 dark:focus:bg-opacity-70 dark:outline-none dark:placeholder-[#242426]/30' placeholder='Your email' maxLength={500} required/>
            <textarea name='message' className='h-52 my-3 rounded-lg borderBlack placeholder-[#9a872a]/40   p-4 focus:outline-[#cfb638] dark:bg-white dark:bg-opacity-50 dark:focus:bg-opacity-70 dark:outline-none dark:placeholder-[#242426]/30' placeholder='Your message' maxLength={5000} required/>
            <SendEmailButton />
        </form>
    </motion.section>
  )
}

export default ContactMe