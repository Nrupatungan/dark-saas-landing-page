import Image from "next/image";
import logoImage from '@/assets/images/logosaas.png'
import MenuIcon from '@/assets/icons/menu.svg'

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur"></div>
            <Image src={logoImage} alt="Logo Image" className="size-12 relative"/>
          </div>
          <div className="border border-white/30 size-10 rounded-lg inline-flex items-center justify-center md:hidden">
            <MenuIcon className='text-white'/>
          </div>
          <nav className="max-md:hidden flex items-center gap-6">
            <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition duration-300">About</a>
            <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition duration-300">Features</a>
            <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition duration-300">Updates</a>
            <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition duration-300">Help</a>
            <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition duration-300">Customers</a>
            <a href="#" className="bg-white h-10 px-4 rounded-lg w-fit text-black inline-flex items-center justify-center">
              Get for free
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

