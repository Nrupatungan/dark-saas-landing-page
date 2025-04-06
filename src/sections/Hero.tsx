"use client"

import ArrowIcon from '@/assets/icons/arrow-w.svg'
import cursorImage from '@/assets/images/cursor.png'
import messageImage from '@/assets/images/message.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react';

export const Hero = () => {
  const sectionRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section className="bg-black text-white py-[72px] sm:py-24 bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative overflow-clip" ref={sectionRef}>

      {/*Gradient Arc*/}
      <div className='absolute left-1/2 -translate-x-1/2 top-[calc(100%-96px)] sm:top-[calc(100%-120px)] h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)]'></div>

      <div className="container relative">
        
        <div className="flex items-center justify-center">
          <a href="#" className="border border-white/30 px-2 py-1 rounded-lg inline-flex gap-3">
            <span className="bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] text-transparent bg-clip-text">Version 2.0 is here</span>
            <span className='inline-flex gap-1 items-center'>
              <span>Read More</span>
              <ArrowIcon className='font-bold'/>
            </span>
          </a>
        </div>
        
       <div className='flex justify-center mt-8'>
         <div className='inline-flex relative'>
            <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center  inline-flex'>One Task<br />at a Time</h1>
            <motion.div className='absolute top-[108px] left-[-156px] max-md:hidden'
            style={{
              translateY
            }}
            drag
            dragSnapToOrigin
            >
              <Image src={cursorImage} alt='Cursor Image' height={200} width={200} className='max-w-none'
              draggable="false"
              />
            </motion.div>
            
            <motion.div className='absolute top-[56px] left-[500px] max-md:hidden'
            style={{
              translateY
            }}
            drag
            dragSnapToOrigin
            >
              <Image src={messageImage} alt='Message Image' height={200} width={200} className='max-w-none'
              draggable="false"
              />

            </motion.div>
         </div>
       </div>
        
        <p className='text-xl text-center mt-8 max-w-md mx-auto'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
        
        <div className='flex justify-center items-center mt-8'>
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Get for free</button>
        </div>
      
      </div>

    </section>
  )
};
