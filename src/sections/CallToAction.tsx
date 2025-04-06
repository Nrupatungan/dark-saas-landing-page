import emojiStar from '@/assets/images/emojistar.png'
import helixImage from '@/assets/images/helix2.png'
import Image from "next/image"

export const CallToAction = () => {
  return (
    <section className="py-[72px] md:py-24 bg-black text-white">
      <div className="container max-w-xl md:px-0 relative">
        <Image src={emojiStar} alt="Pie Chart Image" height={200} width={200} className="absolute -top-[120px] right-[calc(100%+24px)]"/>
        <Image src={helixImage} alt="Cog Wheel Image" height={225} width={225} className="absolute top-6 left-[calc(100%+36px)]"/>
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
