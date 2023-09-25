"use client"
import React from 'react';
import {Select, SelectItem} from "@nextui-org/select";
import {RadioGroup, Radio} from "@nextui-org/react";
import { categories, locations } from '@/app/data';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return (
        <main className='pt-[150px]'>
            <div className='flex flex-col gap-6 w-full pb-10'>
                <h1 className='text-2xl font-bold'>Dodaj novi oglas</h1>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='naslov'>Naslov oglasa</label>
                    <input type='text' id='naslov' placeholder='npr. Zapušena sudopera...' className='border-1 rounded-md px-3 py-2 text-lg ' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='opis'>Opis oglasa</label>
                    <textarea id='opis' placeholder='Opis posla...' className='border-1 rounded-md px-3 py-2 text-lg ' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='lokacija'>Lokacija</label>
                    <Select
                        id='lokacija'
                        items={locations}
                        labelPlacement="outside"
                        placeholder="Izaberi lokaciju"
                        className=""
                    >
                            {(location) => <SelectItem key={location.id}>{location.id}</SelectItem>}
                    </Select>
                </div>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='od'>Od</label>
                        <input type='text' id='od' placeholder='1000 rsd' className='border-1 rounded-md px-3 py-2 text-lg w-[150px]' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='do'>Do</label>
                        <input type='text' id='do' placeholder='1500 rsd' className='border-1 rounded-md px-3 py-2 text-lg w-[150px]' />
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor='napomena'>Napomena za plaćanje</label>
                        <input type='text' id='napomena' className='border-1 rounded-md px-3 py-2 text-lg ' />
                    </div>
                </div>
                <Select
                    items={categories}
                    label="Kategorija"
                    labelPlacement="outside"
                    placeholder="Izaberi kategoriju"
                    className="w-[400px]"
                >
                    {(category) => <SelectItem key={category.id}>{category.id}</SelectItem>}
                </Select>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='tip'>Tip posla</label>
                    <RadioGroup
                        id='tip'
                        color="primary"
                        defaultValue="neodredjeno"
                        orientation="horizontal"
                    >
                        <Radio value="neodredjeno">Neodredjeno</Radio>
                        <Radio value="online">Online</Radio>
                        <Radio value="uzivo">Uzivo</Radio>
                    </RadioGroup>
                </div>
            </div>
        </main>
    )
}
export default page;