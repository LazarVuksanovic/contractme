import Image from 'next/image';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

type AboutCardProps = {
    
};

const AboutCard:React.FC<AboutCardProps> = () => {
    
    return (
        <div className='flex flex-col gap-4 border-2 shadow-lg px-8 py-5 justify-center items-center rounded-lg'>
            <Image src={'/avatar.png'} alt='slika' width={200} height={240} />
            <div className='border-t' />
            <div className='flex flex-col gap-2 items-center'>
                <p className='font-bold'>Lazar Cvijic</p>
                <p>MATF - 4. Godina</p>
            </div>
            <span className='flex gap-2 justify-center'>
                <AiFillGithub className="hover:text-primary text-lg" />
                <AiFillLinkedin className="hover:text-primary text-lg" />
            </span>
        </div>
    )
}
export default AboutCard;