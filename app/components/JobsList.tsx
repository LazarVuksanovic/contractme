"use client"
import React, { useEffect } from 'react';
import JobModal from './JobModal';
import { useDisclosure } from "@nextui-org/modal";
import { useStickyContext } from '../contexts/StickyContext';

type JobsListProps = {
    
};

const JobsList:React.FC<JobsListProps> = () => {
    //for JobsModal functionality
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {setSticky, setScrollOnTopVisibility} = useStickyContext();
    const handleOpen = () => {
        setSticky(false);
        setScrollOnTopVisibility(false);
        onOpen();
    }
    const handleClose = () => {
        if(window.scrollY >= 30){
            setSticky(true);
            setScrollOnTopVisibility(true);
        }
        onClose();
    }

    return (
        <div className='flex flex-wrap gap-[10px]'>
            <div onClick={handleOpen} className='relative jobWidth p-3 flex flex-col gap-2 border rounded-md 
                hover:bg-primary/5 hover:cursor-pointer'>
                <div className='absolute top-0 right-0 translate-x-1 -translate-y-1 bg-primary text-white 
                    rounded-full w-fit px-1.5 text-sm text-end'>
                    5
                </div>
                <h1 className='text-primary text-xl font-medium'>Popravka cevi sudopere u kuhinj na petom spratu</h1>
                <p className='text-s indent-8 text-gray-600 p-1.5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className='p-1.5 font-semibold'>2000 - 2500 RSD</p>
                <div className='flex gap-1 overflow-x-auto flex-wrap'>
                    <p className='tag'>Logo</p>
                    <p className='tag'>WordPress</p>
                    <p className='tag'>Website</p>
                    <p className='tag'>Privatni časovi</p>
                    <p className='tag'>UI/UX</p>
                    <p className='tag'>Logo</p>
                    <p className='tag'>WordPress</p>
                    <p className='tag'>Website</p>
                    <p className='tag'>Privatni časovi</p>
                    <p className='tag'>UI/UX</p>
                </div>
                <p className='text-end text-gray-400 whitespace-nowrap'>Pre 345 dana</p>
            </div>
            <div onClick={handleOpen} className='relative jobWidth p-3 flex flex-col gap-2 border rounded-md 
                hover:bg-primary/5 hover:cursor-pointer'>
                <div className='absolute top-0 right-0 translate-x-1 -translate-y-1 bg-primary text-white 
                    rounded-full w-fit px-1.5 text-sm text-end'>
                    5
                </div>
                <h1 className='text-primary text-xl font-medium'>Popravka cevi sudopere u kuhinj na petom spratu</h1>
                <p className='text-s indent-8 text-gray-600 p-1.5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className='p-1.5 font-semibold'>2000 - 2500 RSD</p>
                <div className='flex gap-1 overflow-x-auto flex-wrap'>
                    <p className='tag'>Logo</p>
                    <p className='tag'>WordPress</p>
                    <p className='tag'>Website</p>
                    <p className='tag'>Privatni časovi</p>
                    <p className='tag'>UI/UX</p>
                    <p className='tag'>Logo</p>
                    <p className='tag'>WordPress</p>
                    <p className='tag'>Website</p>
                    <p className='tag'>Privatni časovi</p>
                    <p className='tag'>UI/UX</p>
                </div>
                <p className='text-end text-gray-400 whitespace-nowrap'>Pre 345 dana</p>
            </div>
            <div onClick={handleOpen} className='relative jobWidth p-3 flex flex-col gap-2 border rounded-md 
                hover:bg-primary/5 hover:cursor-pointer'>
                <div className='absolute top-0 right-0 translate-x-1 -translate-y-1 bg-primary text-white 
                    rounded-full w-fit px-1.5 text-sm text-end'>
                    5
                </div>
                <h1 className='text-primary text-xl font-medium'>Popravka cevi sudopere u kuhinj na petom spratu</h1>
                <p className='text-s indent-8 text-gray-600 p-1.5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className='p-1.5 font-semibold'>2000 - 2500 RSD</p>
                <div className='flex gap-1 overflow-x-auto flex-wrap'>
                    <p className='tag'>Logo</p>
                    <p className='tag'>WordPress</p>
                    <p className='tag'>Website</p>
                    <p className='tag'>Privatni časovi</p>
                    <p className='tag'>UI/UX</p>
                    <p className='tag'>Logo</p>
                    <p className='tag'>WordPress</p>
                    <p className='tag'>Website</p>
                    <p className='tag'>Privatni časovi</p>
                    <p className='tag'>UI/UX</p>
                </div>
                <p className='text-end text-gray-400 whitespace-nowrap'>Pre 345 dana</p>
            </div>
            <div onClick={handleOpen} className='relative jobWidth p-3 flex flex-col gap-2 border rounded-md 
                hover:bg-primary/5 hover:cursor-pointer'>
                <div className='absolute top-0 right-0 translate-x-1 -translate-y-1 bg-primary text-white 
                    rounded-full w-fit px-1.5 text-sm text-end'>
                    5
                </div>
                <h1 className='text-primary text-xl font-medium'>Popravka cevi sudopere u kuhinj na petom spratu</h1>
                <p className='text-s indent-8 text-gray-600 p-1.5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <p className='p-1.5 font-semibold'>2000 - 2500 RSD</p>
                <div className='flex gap-1 overflow-x-auto flex-wrap'>
                    <p className='tag'>Logo</p>
                    <p className='tag'>WordPress</p>
                    <p className='tag'>Website</p>
                    <p className='tag'>Privatni časovi</p>
                    <p className='tag'>UI/UX</p>
                    <p className='tag'>Logo</p>
                    <p className='tag'>WordPress</p>
                    <p className='tag'>Website</p>
                    <p className='tag'>Privatni časovi</p>
                    <p className='tag'>UI/UX</p>
                </div>
                <p className='text-end text-gray-400 whitespace-nowrap'>Pre 345 dana</p>
            </div>
            <JobModal isOpen={isOpen} onClose={handleClose} handleOpen={handleOpen}/>
        </div>
    )
}
export default JobsList;