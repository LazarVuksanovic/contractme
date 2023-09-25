
"use client"
import React, { useState } from 'react';
import {Select, SelectItem} from "@nextui-org/select";
import { categories, locations } from '../data';
import {RadioGroup, Radio} from "@nextui-org/radio";    
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

type FilterProps = {
    
};

const Filter:React.FC<FilterProps> = () => {
    const [filtersVisibility, setFiltersVisibility] = useState<boolean>(false);
    return (
        <div onClick={() => setFiltersVisibility(prev => !prev)}
            className='shadow-lg my-5 w-full rounded-md flex flex-col flex-wrap gap-8 justify-between p-4'>
            <div className='flex items-center justify-between text-lg w-full'>
                <h2 className='text-lg'>Filteri</h2>
                {filtersVisibility ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {filtersVisibility && (
                <>
                    <div className='w-full flex flex-col md:flex-row gap-4'>
                        <Select
                            items={categories}
                            label="Kategorija"
                            labelPlacement="outside"
                            placeholder="Izaberi kategoriju"
                            className=""
                        >
                            {(category) => <SelectItem key={category.id}>{category.id}</SelectItem>}
                        </Select>
                        <Select
                            items={locations}
                            label="Lokacija"
                            labelPlacement="outside"
                            placeholder="Izaberi lokaciju"
                            className=""
                        >
                            {(location) => <SelectItem key={location.id}>{location.id}</SelectItem>}
                        </Select>
                    </div>
                    <div className='flex flex-col gap-4 md:flex-row md:items-end'>
                        <div className='flex justify-begin gap-28'>
                            <RadioGroup
                                label="Tip posla"
                                orientation="vertical"
                            >
                                <Radio value="online">Online</Radio>
                                <Radio value="uzivo">Uzivo</Radio>
                                <Radio value="svi">Svi</Radio>
                            </RadioGroup>
                            <RadioGroup
                                label="Uredi po ceni"
                                orientation="vertical"
                            >
                                <Radio value="rastuce">Rastuće</Radio>
                                <Radio value="opadajuce">Opadajuće</Radio>
                            </RadioGroup>
                        </div>
                        <div className='flex gap-1 w-fit h-fit ml-auto'>
                            <button className='px-2 py-1 border-white rounded-md bg-primary text-white'>Primeni filtere</button>
                            <button className='px-2 py-1 rounded-md bg-transparent'>Resetuj filtere</button>
                        </div>
                    </div>
                </>

            )}


        </div>
    )
}
export default Filter;