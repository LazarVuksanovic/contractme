'use client'
import {NextUIProvider} from '@nextui-org/react'
import { useState } from 'react'; 
import { StickyContext } from './contexts/StickyContext';

export function Providers({children}: { children: React.ReactNode }) {
  const [sticky, setSticky] = useState(false);
  const [scrollOnTopVisibility, setScrollOnTopVisibility] = useState(false);

  const value = {
    sticky,
    setSticky,
    scrollOnTopVisibility,
    setScrollOnTopVisibility,
  };
  return (
      <NextUIProvider>
        <StickyContext.Provider value={value}>
        {children}
        </StickyContext.Provider>
      </NextUIProvider>
  )
}