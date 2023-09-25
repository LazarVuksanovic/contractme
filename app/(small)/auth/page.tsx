"use client"
import React, { useState } from 'react';
import Login from '../../components/Login';
import Signup from '../../components/Signup';
import ResetPassword from '../../components/ResetPassword';

type pageProps = {
    
};

export type ModalStates = {
    type: 'login' | 'register' | 'forgotPassword';
}

const page:React.FC<pageProps> = () => {
    const [authModalState, setAuthModalState] = useState<ModalStates>({
        type:'login'
    });

    return (
        <>
            <img src='/bg.jpg' className='w-full h-full absolute top-0 left-0'/>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-30'/>
            <div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
            flex justify-center items-center'>
                <div className='relative w-full h-full mx-auto flex items-center justify-center '>
                    <div className='rounded-md shadow-lg relative w-full bg-gray-8 mx-6 bg-white'>
                        <img src='contractme-logo.png' className='w-[220px] mx-auto py-6'/>
                        {authModalState.type === "login" ? 
                        <Login setAuthModalState={setAuthModalState} /> 
                        : authModalState.type === "register" ? <Signup setAuthModalState={setAuthModalState} /> 
                        : <ResetPassword />}
                    </div>
                </div>
            </div>
        </>
    )
}
export default page;

