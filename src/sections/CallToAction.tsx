"use client"

import emojiStar from '@/assets/images/emojistar.png'
import helixImage from '@/assets/images/helix2.png'
import { useScroll, useTransform } from 'motion/react'
import Image from "next/image"
import { useRef } from 'react'
import { motion } from 'motion/react'

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end']
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section className="py-[72px] md:py-24 bg-black text-white overflow-x-clip" ref={sectionRef}>
      <div className="container max-w-xl md:px-0 relative">
        <motion.div className="absolute -top-[120px] right-[calc(100%+24px)] max-md:hidden" style={{
          translateY
        }}
        drag
        dragSnapToOrigin
        dragConstraints={sectionRef}
        >
          <Image src={emojiStar} alt="Pie Chart Image" height={200} width={200} className='max-w-none'
          draggable="false"
          />
        </motion.div>

        <motion.div className="absolute top-[50px] left-[calc(100%+36px)] max-md:hidden" style={{
          translateY
        }}
        drag
        dragSnapToOrigin
        dragConstraints={sectionRef}
        >
          <Image src={helixImage} alt="Cog Wheel Image" height={225} width={225} className='max-w-none'
          draggable="false"
          />
        </motion.div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-center tracking-tighter">Get instant access</h2>
        <p className="text-xl text-white/70 text-center mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>

        <form className="flex flex-col md:flex-row mt-10 gap-2.5 max-w-sm mx-auto">
          <input type="email" placeholder="your@email.com" className="py-3 bg-white/20 px-5 font-medium rounded-lg text-[#9CA3AF] flex-1"/>
          <button className="h-12 px-5 bg-white text-black font-medium rounded-lg flex-none">Get access</button>
        </form>
      </div>
    </section>
  )
}
