import React from 'react';
import { BiSearchAlt } from 'react-icons/bi'
import { GrLineChart } from 'react-icons/gr'

type HeaderProps = {
    
};

const Header:React.FC<HeaderProps> = () => {
    
    return (
        <header className='w-full h-[80vh] flex justify-between items-center'>
            <img src='/bg.jpg' className='absolute top-0 left-0 z-[-2] w-full h-full object-cover opacity-30' />
            <div className="absolute top-0 left-0 z-[-1] w-full h-full bg-gradient-to-t from-white to-transparent"/>
            <div className='flex flex-col gap-8 items-start'>
                <h1 className='subpixel-antialiased leading-relaxed text-5xl'>Pronađi pravog frilensera<br/>za tvoj problem!</h1>
                <div className='w-full flex flex-col gap-4'>
                    <div className='w-full flex gap-8 items-center'>
                        <div className='flex gap-2 items-center'>
                            <input type='text' placeholder='Pretraži uslugu...'
                                className='border-1 rounded-md px-3 py-2 text-lg w-[400px]'/>
                            <button className='border-1 bg-primary text-white rounded-md px-3 py-2.5 text-xl'>
                                <BiSearchAlt/>
                            </button>
                        </div>
                        <p className='italic text-xl'>ili</p>
                        <button className='border-1 bg-primary text-white rounded-md px-3 py-2 text-md'>Objavi posao</button>
                    </div>
                    <span className='flex gap-2 items-center'>
                        <GrLineChart className='text-lg mr-3'/>
                        <p className='tag hover:bg-primary hover:cursor-pointer hover:text-white hover:border-primary'>Logo</p>
                        <p className='tag hover:bg-primary hover:cursor-pointer hover:text-white hover:border-primary'>WordPress</p>
                        <p className='tag hover:bg-primary hover:cursor-pointer hover:text-white hover:border-primary'>Website</p>
                        <p className='tag hover:bg-primary hover:cursor-pointer hover:text-white hover:border-primary'>Privatni časovi</p>
                        <p className='tag hover:bg-primary hover:cursor-pointer hover:text-white hover:border-primary'>UI/UX</p>
                    </span>
                </div>
            </div>
        </header>
    );
}
export default Header;