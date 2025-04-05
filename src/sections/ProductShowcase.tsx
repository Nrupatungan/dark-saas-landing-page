import SectionHeader from "@/components/SectionHeader"
import Image from "next/image"
import productImage from '@/assets/images/app-screen.png'


export const ProductShowcase = () => {
  return (
    <section className="bg-black text-white py-[72px] md:py-24 bg-[linear-gradient(to_bottom,#000,#5D2CA8)]">
      <div className="container">
        <SectionHeader title="Intuitive interface" description="Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time." />
        <Image src={productImage} alt="Product Image" className="mt-14 mx-auto"/>
      </div>
    </section>
  )
}

