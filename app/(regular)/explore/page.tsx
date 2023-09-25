import Filter from '@/app/components/Filter';
import JobsList from '@/app/components/JobsList';
import React from 'react';


type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return (
        <main className='pt-[150px]'>
            <h1 className='text-3xl'>Pretraga poslova</h1>
            <Filter />
            <JobsList/>
        </main>
    )
}
export default page;