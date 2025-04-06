import XIcon from '@/assets/icons/x-social.svg'
import InstaIcon from '@/assets/icons/insta.svg'
import TikTokIcon from '@/assets/icons/tiktok.svg'
import YoutubeIcon from '@/assets/icons/youtube.svg'

export const Footer = () => {
  return (
    <footer className='bg-black text-white/60 py-5 border-t border-white/30'>
      <div className="container">
        <div className='flex flex-col md:flex-row justify-center md:justify-between'>
          <p>© 2024 Your Company, Inc. All rights reserved</p>
          <div className='flex gap-2.5 mt-4 md:mt-0 justify-center'>
            <XIcon className='hover:text-white transition cursor-pointer'/>
            <InstaIcon className='hover:text-white transition cursor-pointer'/>
            <TikTokIcon className='hover:text-white transition cursor-pointer'/>
            <YoutubeIcon className='hover:text-white transition cursor-pointer'/>
          </div>
        </div>
      </div>
    </footer>
  )
}

