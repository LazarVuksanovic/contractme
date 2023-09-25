import React from 'react';
import AboutCard from '../../components/AboutCard';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return (
        <main className='pt-[150px]'>
            <div className='flex flex-col gap-8'>
                <h1 className='text-3xl'>O Nama</h1>
                <p className='leading-relaxed text-justify indent-8'>ContractMe je strastveni tim sačinjen od troje mladih ljudi posvećenih misiji da transformišu frilens tržište u Srbiji.
                    Prepoznali smo potrebu za pouzdanom i efikasnom platformom koja povezuje klijente i frilensere, i uz kombinovanje naših stručnosti iz oblasti programiranja, poslovnog razvoja i projektnog menadžmenta stvorili smo ContractMe.
                    Naše putovanje je počelo sa zajedničkom vizijom stvaranja besprekornog tržišta koje pojednostavljuje proces pronalaženja i zapošljavanja veštih frilensera. Verujemo u moć saradnje i ogroman značaj koji frilenseri donose klijentima.
                    Kroz ContractMe, cilj nam je da osnažimo klijente i frilensere, tako što ćemo im pružiti pouzdanu platformu koja uprošćuje i znatno ubrzava proces angažovanja frilensera i omogućuje duga i uspešna partnerstva.
                    Vođeni našom idejom, pažljivo smo dizajnirali ContractMe u svrhu najboljeg korisničkog iskustva.
                    Naša platforma je mesto za sve preduzetnike kao i frilensere iz svih industrija.
                    Posvećeni smo rastu i napretku preduzeća dok stvaramo prilike za dalji razvoj svim frilenserima.

                    Pridružite se ContractMe platformi i zajedno sa nama učestvujte u stvaranju novog i boljeg tržišta gde će firme i frilenseri imati neograničen prostor za napredak.
                </p>
            </div>
            <div className='py-16'>
                <h1 className='text-2xl pb-5 text-center'>Ko smo mi?</h1>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <AboutCard/>
                    <AboutCard/>
                    <AboutCard/>
                    <AboutCard/>
                </div>
            </div>
        </main>
    )
}
export default page;