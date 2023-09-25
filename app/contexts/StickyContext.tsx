import { createContext, SetStateAction, useContext } from 'react';

interface AppContextType {
    sticky: boolean,
    setSticky: React.Dispatch<SetStateAction<boolean>>,
    scrollOnTopVisibility:boolean,
    setScrollOnTopVisibility: React.Dispatch<SetStateAction<boolean>>;
}

export const StickyContext = createContext<AppContextType>(
    {
        sticky: false,
        setSticky: () => {},
        scrollOnTopVisibility: false,
        setScrollOnTopVisibility: () => {},
    });

export const useStickyContext = () => useContext(StickyContext);