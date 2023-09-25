"use client"
import React from 'react';
import { ModalStates } from '../(small)/auth/page';

type LoginProps = {
    setAuthModalState: React.Dispatch<React.SetStateAction<ModalStates>>;
};

const Login:React.FC<LoginProps> = ({setAuthModalState}) => {
    const handleClick = (type:'login' | 'register' | 'forgotPassword') => {
        setAuthModalState((prev) => ({...prev, type}));
    };
    return (
        <form className='space-y-8 px-6 py-4 bg-white rounded-lg'>
            <h3 className='-mt-4 text-2xl font-medium text-center'>Uloguj se</h3>
            <div>
                <label htmlFor="email" className='text-base font-medium block mb-2 text-gray-500'>Email</label>
                <input type='email' name='email' id='email' 
                className='border-2 sm:text-sm rounded-lg
                block w-full p-2.5 text-while' placeholder='name@company.com'/>
            </div>
            <div>
                <label htmlFor="password" className='text-base font-medium block mb-2 text-gray-500'>Lozinka</label>
                <input type='password' name='password' id='password' 
                className='border-2 sm:text-sm rounded-lg
                block w-full p-2.5 text-while' placeholder='Lozinka'/>
            </div>
            <button type='submit' className='w-full font-medium rounded-lg text-base
            px-5 py-2.5 text-center text-white bg-primary hover:bg-primary/80'>
                Uloguj se
            </button>
            <button onClick={() => handleClick("forgotPassword")} className='flex w-full justify-end'>
                <a href='#' className='-my-4 text-sm block hover:underline w-full text-right'>
                    Zaboravio si lozinku?
                </a>
            </button>
            <div onClick={() => handleClick("register")} className='text-sm font-medium text-black'>
                Nisi registrovan?{" "}
                <a href='#' className='text-primary hover:underline'>
                    Napravi nalog
                </a>
            </div>
        </form>
    )
}
export default Login;