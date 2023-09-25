"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useStickyContext } from '../contexts/StickyContext';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

type NavbarProps = {
    
};


const Navbar:React.FC<NavbarProps> = () => {
  const {sticky, setSticky} = useStickyContext();
  const router = useRouter();
    const handleStickyNavbar = () => {
      if (window.scrollY >= 30) {
        setSticky!(true);
      } else {
        setSticky!(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleStickyNavbar);
    }, []);

    return (
      <nav className={`w-full h-[120px] z-40 top-0 left-0 flex bg-transparent justify-between items-center px-[10%] lg:px-[20%]
        ${sticky ? "!fixed !z-[99] h-[90px] !bg-white !bg-opacity-60 !transition backdrop-blur-sm shadow-lg" : "absolute"}`}>
        <div className='flex md:gap-12 xl:gap-28'>
          <Link href={'/'}>
            <Image src="/contractme-logo.png" alt='ContractMe' width={200} height={100} />
          </Link>
          <div className='md:flex hidden gap-8 items-center justify-center'>
            <Link href={'/explore'} className='font-bold'>Poslovi</Link>
            <Link href={'/about'}>O Nama</Link>
            <Link href={'/faq'}>FAQ</Link>
          </div>
        </div>
        <div className='md:flex hidden gap-4'>
          <button className='px-2 py-1 border-white rounded-md'>Log in</button>
          <button className='px-2 py-1 border-white rounded-md bg-primary text-white'>Sign in</button>
        </div>
        {/* <div className='md:hidden'>
                Menu
            </div> */}
        <Dropdown className='-translate-x-10'>
          <DropdownTrigger>
            <div className='md:hidden text-xl'>
              <AiOutlineMenu />
            </div>
          </DropdownTrigger>
          <DropdownMenu  onAction={(key:any) => router.push(key)}>
            <DropdownItem key={"/explore"} className='text-2xl'>
              <p className='text-2xl'>Poslovi</p>
            </DropdownItem>
            <DropdownItem key={"/about"} >
            <p className='text-2xl'>O Nama</p>
            </DropdownItem>
            <DropdownItem key={"/faq"} className='text-2xl'>
            <p className='text-2xl'>FAQ</p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </nav>
    );
}
export default Navbar;