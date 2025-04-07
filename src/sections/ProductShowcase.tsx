"use client"

import SectionHeader from "@/components/SectionHeader"
import Image from "next/image"
import productImage from '@/assets/images/app-screen.png'
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export const ProductShowcase = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section className="bg-black text-white py-[72px] md:py-24 bg-[linear-gradient(to_bottom,#000,#5D2CA8)]">
      <div className="container">
        <SectionHeader title="Intuitive interface" description="Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time." />
        <motion.div
          style={{
            opacity,
            rotateX,
            transformPerspective: "800px"
          }}
        >
          <Image src={productImage} alt="Product Image" className="mt-14 mx-auto"
          ref={imageRef}
          />
        </motion.div>
      </div>
    </section>
  )
}

