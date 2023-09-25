"use client"
import React from 'react';
import { ModalStates } from '../(small)/auth/page';

type SignupProps = {
    setAuthModalState: React.Dispatch<React.SetStateAction<ModalStates>>;
};

const Signup:React.FC<SignupProps> = ({setAuthModalState}) => {
    const handleClick = () => {
        setAuthModalState((prev) => ({...prev, type:'login'}));
    };
    return (
        <form className='space-y-8 px-6 py-4 bg-white rounded-lg'>
            <h3 className='-mt-4 text-2xl font-medium'>Registruj se</h3>
            <div>
                <label htmlFor="email" className='text-base font-medium block mb-2 text-gray-500'>Email</label>
                <input type='email' name='email' id='email' 
                className='border-2 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue
                block w-full p-2.5 text-while' placeholder='name@company.com'/>
            </div>
            <div>
                <label htmlFor="displayName" className='text-base font-medium block mb-2 text-gray-500'>Ime</label>
                <input type='displayName' name='displayName' id='displayName' 
                className='border-2 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue
                block w-full p-2.5 text-while' placeholder='Lazar Cvijic'/>
            </div>
            <div>
                <label htmlFor="password" className='text-base font-medium block mb-2 text-gray-500'>Lozinka</label>
                <input type='password' name='password' id='password' 
                className='border-2 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue
                block w-full p-2.5 text-while' placeholder='Lozinka'/>
            </div>
            <button type='submit' className='w-full font-medium rounded-lg text-base
            px-5 py-2.5 text-center text-white bg-primary hover:bg-primary/80'>
                Registruj se
            </button>
            <div className='text-sm font-medium text-gray-500'>
                Već imaš nalog?{" "}
                <a onClick={handleClick} href='#' className='text-primary hover:underline'>
                    Uloguj se
                </a>
            </div>
        </form>
    )
}
export default Signup;