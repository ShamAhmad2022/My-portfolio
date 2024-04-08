'use client';

import React, { useEffect } from 'react'
import { useActiveSectionContext } from '../context/active-section-context';
import { useInView } from 'react-intersection-observer';

export function useSectionInView(sectionName, threshold = 0.75) {
    
  const { ref, inView } = useInView({
    // threshold: threshold (old)
    //in javascrpt, when the object key and value are the same, we can represnt them like the following, typing only one:
    threshold //(new)) | we use threshold to set inView to true when the section shows to the setted value of the viewport (the default is 75%)
  });

  const { setActiveSection, timeOfLAstClick } = useActiveSectionContext();

  useEffect(()=>{
    if(inView && Date.now() - timeOfLAstClick > 1000){
      setActiveSection(sectionName);
    }
  },[inView, setActiveSection, timeOfLAstClick, sectionName]);

  return (
    {
        ref
    }
  )
}
