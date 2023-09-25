import React from 'react';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return (
        <main className='pt-[150px]'>
            <div className="flex w-full flex-col gap-6 pb-10">
                <h1 className='text-2xl font-bold'>POLITIKA PRIVATNOSTI RAČUNARSKIH PODATAKA</h1>
                <p className='indent-8'>
                    Da bi aktivno učestvovali u analiziranju korisničkih navika i ukupnom poboljšanju sajta, ContractMe.rs koriste Google Analytics, web analitičku uslugu koju pruža Google, Inc. (Google).
                    Google Analytics koristi tekstualne fajlove (cookies) koji se smeštaju na računar korisnika, a uz pomoć kojih ContractMe.rs ima uvid u princip korišćenja sajta i načine na koji mu korisnici pristupaju. 
                </p>
                <p className='indent-8'>
                    Sve informacije koje se na ovaj način prikupljaju o vašem korišćenju sajta ContractMe.rs (uključujući i vašu IP adresu, ali bez vaših ličnih podataka) biće preneti i sačuvani kod Google-a na serverima koji je nalaze na teritoriji SAD-a. Google koristi ove informacije u svrhu analize upotrebe čitavog sajta, kreiranja izveštaja o aktivnostima na sajtu za potrebe ContractMe.rs, kao i za druge usluge u vezi sa aktivnostima na ContractMe.rs i upotrebom interneta.
                    Google će možda proslediti ove informacije trećim licima, u situacijama u kojima zakon tako nalaže ili kada pomenuta treća lica obrađuju gorepomenute podatke u ime Google-a. Google neće povezati vašu IP adresu sa bilo kojim drugim podacima koje poseduje. Google nikada neće dobiti vaše lične podatke. Možete isključiti upotrebu cookies-a odabirom odgovarajućih podešavanja u vašem web pretraživaču, ali treba napomenuti da na taj način nećete biti u mogućnosti da koristite sajt ContractMe.rs u njegovoj punoj funkcionalnosti. Korišćenjem ContractMe.rs pristajete na obradu svojih podataka preko Google-a, na opisani način i u gore navedene svrhe. 
                </p>
            </div>
        </main>
    )
}
export default page;