"use client"

import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import { motion } from 'motion/react'

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];


export const LogoTicker = () => {
  return (
    <section className="py-[72px] md:py-24 bg-black">
      <div className="container">
        <h2 className="text-xl text-white/70 text-center">Trusted by the world&apos;s most innovative teams</h2>
        <div className="mt-9 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div className="flex flex-none gap-16 pr-16"
          initial = {{
            translateX: "0%"
          }}
          animate = {{
            translateX: "-50%"
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          >
            {[...images,...images].map((img, idx) => (
              <Image key={idx} src={img.src} alt={img.alt} height={32} className="max-w-full" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

