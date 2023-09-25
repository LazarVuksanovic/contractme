import React from 'react';
import { BsInstagram, BsFacebook } from 'react-icons/bs'

type FooterProps = {
    
};

const Footer:React.FC<FooterProps> = () => {

    return (
        <footer>
            <div className='flex justify-between items-start bg-white pt-[20px]'>
                <div className='flex flex-col gap-3 items-start'>
                    <p className='font-bold'>Nalog</p>
                    <p>Sign in</p>
                    <p>Log in</p>
                    <p>Forgot password</p>
                </div>
                <div className='flex flex-col gap-3 items-start'>
                    <p className='font-bold'>Linkovi</p>
                    <p>Kontakt</p>
                    <p>O nama</p>
                    <p>FAQ</p>
                </div>
                <div className='flex flex-col gap-3 items-start'>
                    <p className='font-bold'>Još</p>
                    <p>Bezbednost poslovanja</p>
                    <p>Privatnost ličnih podataka</p>
                    <p>Privatnost računarskih podataka</p>
                </div>
            </div>
            <div className='flex gap-4 justify-center pt-3'>
                <BsInstagram className="hover:text-primary"/>
                <BsFacebook className="hover:text-primary"/>
            </div>
            <div className='flex justify-evenly items-center border-t py-3 mt-3 text-gray-400'>
                ©ContractMe 2023. Sva prava zadržana
            </div>
        </footer>
    )
}
export default Footer;