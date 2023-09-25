import React from 'react';

type SearchByCategoryProps = {
    
};

const SearchByCategory:React.FC<SearchByCategoryProps> = () => {
    
    return(
        <div className='py-24'>
            <h1 className='text-3xl'>Pretraži po kategoriji</h1>
            <div className='flex flex-wrap gap-8 pt-8'>
                <div className='bg-[url("/priv.png")] bg-cover rounded-xl w-[250px] h-[170px] border p-5 shadow-md hover:shadow-xl'>
                    <p className='text-xl font-bold '>Privatni časovi</p>
                </div>
                <div className='bg-[url("/marketing.png")] bg-cover rounded-xl w-[250px] h-[170px] border p-5 shadow-md hover:shadow-xl'>
                    <p className='text-xl font-bold'>Marketing</p>
                </div>
                <div className='bg-[url("/website.png")] bg-cover rounded-xl w-[250px] h-[170px] border p-5 shadow-md hover:shadow-xl'>
                    <p className='text-xl font-bold '>Izrada websajta</p>
                </div>
                <div className='rounded-xl w-[250px] h-[170px] border p-5 shadow-md hover:shadow-xl'>
                    <p className='text-xl font-bold '>Marketing</p>
                </div>
                <div className='rounded-xl w-[250px] h-[170px] border p-5 shadow-md hover:shadow-xl'>
                    <p className='text-xl font-bold '>Marketing</p>
                </div>
                <div className='rounded-xl w-[250px] h-[170px] border p-5 shadow-md hover:shadow-xl'>
                    <p className='text-xl font-bold '>Marketing</p>
                </div>
                <div className='rounded-xl w-[250px] h-[170px] border p-5 shadow-md hover:shadow-xl'>
                    <p className='text-xl font-bold '>Marketing</p>
                </div>
                <div className='rounded-xl w-[250px] h-[170px] border p-5 shadow-md hover:shadow-xl'>
                    <p className='text-xl font-bold '>Marketing</p>
                </div>
            </div>
        </div>
    )
}
export default SearchByCategory;