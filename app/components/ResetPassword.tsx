"use client"
import React from 'react';

type ResetPasswordProps = {

};

const ResetPassword:React.FC<ResetPasswordProps> = () => {
    
    return (
        <form className='bg-white rounded-lg space-y-8 px-6 pt-8 sm:pb-6 xl:pb-8'>
            <h3 className='-mt-4 text-2xl font-medium'>Obnova lozinke</h3>
            <p className='text-sm'>
                Zaboravio si lozinku? Unesi svoju email adresu i mi ti šaljemo poruku preko koje ćeš moći da promeniš lozinku.
            </p>
            <div>
                <label htmlFor="email" className='text-base font-medium block mb-4'>Email</label>
                <input type='email' name='email' id='email' 
                className='border-2 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue
                block w-full p-2.5 text-while' placeholder='name@company.com'/>
            </div>
            <button type='submit' className='w-full font-medium rounded-lg text-base
            px-5 py-2.5 text-center text-white bg-primary hover:bg-primary/80'>
                Pošalji poruku
            </button>
        </form>
    )
}
export default ResetPassword;