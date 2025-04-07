"use client"

import EcosystemIcon from '@/assets/icons/ecosystem.svg'
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { useEffect, useRef } from 'react';

const Feature = ({title, description}: {title: string; description: string;}) => {
  const borderRef = useRef<HTMLDivElement>(null);

  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`

  useEffect(() => {
    const updateMousePosition = (e:MouseEvent) => {
      if(!borderRef.current) return;
      const rect = borderRef.current.getBoundingClientRect()
      offsetX.set(e.x - rect.x);
      offsetY.set(e.y - rect.y);
    }

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    }
  }, [])

  return (
    <div className="py-10 px-5 max-w-[343px] text-center rounded-xl border border-white/30 md:flex-1 relative">
        <motion.div className='absolute inset-0 border-2 border-purple-400 rounded-xl -m-px' style={{
            maskImage
        }}
        ref={borderRef}
        ></motion.div>

        <div className='bg-white size-14 inline-flex items-center justify-center rounded-lg'>
        <EcosystemIcon className='text-black'/>
        </div>
        <h3 className='mt-6 font-bold'>{title}</h3>
        <p className='mt-2 text-white/70'>{description}</p>
    </div>
  )
}

export default Feature