import React from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { FAQState } from '../(regular)/faq/page';


type QuestionProps = {
    ans: string;
    que: string;
    active: boolean;
    handleClick: (key: keyof FAQState) => void;
    id: keyof FAQState;
};

const Question:React.FC<QuestionProps> = ({ans, que, active, handleClick, id}) => {
    
    return (
        <div className='flex flex-col gap-2 border border-gray-400 rounded-lg px-4 py-4' onClick={() => handleClick(id)}>
            <div className='flex justify-between items-center text-xl'>
                <h1 className='text-lg font-bold select-none'>{que}</h1>
                {active ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            <p className={`${active ? "block" : "hidden"} transition ease-in-out px-8 indent-8`}>
                {ans}
            </p>
        </div>
    )
}
export default Question;