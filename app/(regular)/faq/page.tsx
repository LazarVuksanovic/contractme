"use client"
import Question from '@/app/components/Question';
import { questions } from '@/app/data';
import React, { useState } from 'react';


type pageProps = {
    
};

export type FAQState = {
    q1: boolean;
    q2: boolean;
    q3: boolean;
    q4: boolean;
    q5: boolean;
    q6: boolean;
    q7: boolean;
}

const page:React.FC<pageProps> = () => {
    const [activeQuestions, setActiveQuestions] = useState<FAQState>({
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
        q7: false,
    });

    

    const handleClick = (key: keyof FAQState) => {
        setActiveQuestions({ ...activeQuestions, [key]: !activeQuestions[key] });
    };

    return (
        <main className='pt-[150px]'>
            <h1 className='text-3xl'>FAQ - Često postavljena pitanja</h1>
            <div className='flex flex-col gap-2 py-8'>
                {questions.map((q, idx) => {
                    return (
                        <Question key={idx} id={('q' + idx.toString()) as keyof FAQState} que={q.que} ans={q.ans}
                        active={activeQuestions[('q' + idx.toString()) as keyof FAQState]} handleClick={handleClick} />
                    )
                })}
            </div>
        </main>
    )
}
export default page;