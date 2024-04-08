'use client';

import React, { createContext, useContext, useState } from 'react';

export const ActiveSectionContext = createContext(null);

function ActiveSectionContextProvider({ children }) {

    const [activeSection, setActiveSection] = useState('Home');
    const [timeOfLAstClick, setTimeOfLAstClick] = useState(0);

  return (
    <ActiveSectionContext.Provider value={{activeSection, setActiveSection, timeOfLAstClick, setTimeOfLAstClick}}>
        {children}
    </ActiveSectionContext.Provider>
  )
}

//costume hock to make sure that the value won't benull in case we set outside the ActiveSectionContextProvider rovider in the layout or anywhere
export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);

    if(context === null){
        throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
    }

    return context;
}

export default ActiveSectionContextProvider