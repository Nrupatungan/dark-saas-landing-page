"use client"

import { twMerge } from 'tailwind-merge'
import PlusIcon from '@/assets/icons/plus.svg'
import MinusIcon from '@/assets/icons/minus.svg'
import { useState } from 'react';

const AccordionItem = ({question, answer}: {question:string; answer:string;}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-7 border-b border-white/30" onClick={() => setIsOpen(c => !c)}>
        <div className='flex items-center'>
        <span className='flex-1 font-bold text-lg'>{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>
        <div className={twMerge(isOpen ? "" : "hidden", "mt-4")}>{answer}</div>
    </div>
  )
}

export default AccordionItem