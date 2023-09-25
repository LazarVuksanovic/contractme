import React from 'react';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return (
        <main className='pt-[150px] pb-20'>
            <div className='rounded-lg border border-gray-400'>
                <div className='border-b border-gray-400 flex md:flex-row flex-col items-center justify-center'>
                    <div className='md:w-1/3 flex flex-col gap-4 items-center md:border-r border-b md:border-b-0 border-gray-400 p-8'>
                        <img src='/avatar.png' className='w-[130px] h-[130px]' />
                        <h1 className='text-xl font-bold'>Lazar Vuksanovic</h1>
                        <p className='text-xl bold'>Prosečna ocena: 4.5/5 (65)</p>
                        <p className='text-gray-400 italic'>Datum registrovanja: 12.12.2023</p>
                    </div>
                    <div className='flex flex-col gap-4 md:w-2/3 p-10'>
                        <h2 className='text-lg font-bold'>Opis</h2>
                        <p className='indent-8 text-justify'>The key strengths are can handle the pressure and attention to detail.
                            I offer so many years of experience. I do troubleshooting computer hardware,network and software.
                            Setting-up Windows 10,11 and Office 365. Knowledgeable in ITSM, Azure, Exchange and Microsoft Intune.
                            I can configure freshdesk ticketing system, forticlient firewall, Active Directory ,DCHP for Windows Server,
                            Endpoint  Protection. I do network cabling for data, pbx telephone and ip camera.
                            I can also develop application using the following tools in MS Access
                            (VBA, Table, Query, Form, Reports, Module, and Macro) GoCanvas for Mobile Application.
                            I am peplink certified engineer. Verification Code : JgBGHgwhir.
                        </p>
                    </div>
                    
                </div>
                <div className='flex flex-col gap-4 p-10 border-b border-gray-400'>
                    <h2 className='text-lg font-bold'>Sposobnosti</h2>
                    <div className='flex flex-wrap text-md'>
                        <p className='text-sm px-2 py-[2px] rounded-full bg-primary text-white m-1'>C</p>
                        <p className='text-sm px-2 py-[2px] rounded-full bg-primary text-white m-1'>C++</p>
                        <p className='text-sm px-2 py-[2px] rounded-full bg-primary text-white m-1'>Java</p>
                        <p className='text-sm px-2 py-[2px] rounded-full bg-primary text-white m-1'>C#</p>
                        <p className='text-sm px-2 py-[2px] rounded-full bg-primary text-white m-1'>JavaScript</p>
                        <p className='text-sm px-2 py-[2px] rounded-full bg-primary text-white m-1'>TypeScript</p>
                        <p className='text-sm px-2 py-[2px] rounded-full bg-primary text-white m-1'>HTML</p>
                        <p className='text-sm px-2 py-[2px] rounded-full bg-primary text-white m-1'>CSS</p>
                        <p className='text-sm px-2 py-[2px] rounded-full bg-primary text-white m-1'>Next.js</p>
                        <p className='text-sm px-2 py-[2px] rounded-full bg-primary text-white m-1'>Firebase</p>
                        <p className='text-sm px-2 py-[2px] rounded-full bg-primary text-white m-1'>Tailwindcss</p>
                        <p className='text-sm px-2 py-[2px] rounded-full bg-primary text-white m-1'>Database</p>
                        <p className='text-sm px-2 py-[2px] rounded-full bg-primary text-white m-1'>OOP</p>
                    </div>
                </div>
                <div className='flex flex-col p-10'>
                    <h2 className='text-lg font-bold mb-4'>Istorija poslovanja</h2>
                    <div className='flex gap-4 bg-gray-100 p-2 rounded-t-xl w-fit'>
                        <button className='bg-transparent bg-white shadow-sm rounded-lg px-2 py-1.5'>
                            Završeni poslovi
                        </button>
                        <button className='rounded-lg px-2 py-1.5'>
                            Trenutni poslovi
                        </button>
                    </div>
                    <div className='flex flex-wrap text-md px-5 bg-gray-100 rounded-lg rounded-tl-none pb-5'>
                        <div className='flex flex-col gap-2 border-b w-full py-4'>
                            <p className='text-sky-700 text-md'>Potrebni su mi časovi iz C-a</p>
                            <p>11.02.2023 - 23.02.2023</p>
                            <p><span className='font-bold'>Ocena:</span> 4/5</p>
                            <p><span className='font-bold'>Komentar:</span> Casovi su super, jedino sto ne mozemo da se organizujemo za vreme</p>
                        </div>
                        <div className='flex flex-col gap-2 border-b border-t w-full py-4'>
                            <p className='text-sky-700 text-md'>Websajt za frilens u srbiji</p>
                            <p>12.02.2022 - 23.04.2022</p>
                            <p>Nema ocene</p>
                            <p><span className='font-bold'>Komentar:</span> Uradjeno sve po dogovoru, bez primedbi</p>
                        </div>
                        <div className='flex flex-col gap-2 border-b border-t w-full py-4'>
                            <p className='text-sky-700 text-md'>Profilna stranica websajta</p>
                            <p>22.02.2021 - 01.05.2021</p>
                            <p><span className='font-bold'>Ocena:</span> 3/5</p>
                            <p>Nema komentara</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default page;