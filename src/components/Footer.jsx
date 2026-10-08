import { INSTAGRAM_URL, WHATSAPP_CHANNEL_URL } from '../data/products'
import ContactPhone from './ContactPhone'
import { InstagramIcon } from './icons'
import { FloralCorners } from './BrandAtmosphere'
import krishayaLogo from '../assets/images/logo/final_logo.png'


export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#2C2C2C]/10 bg-[#F9F6F0]">
      {/* Subtle bottom-baseline floral accent only */}
      <FloralCorners idPrefix="footer" size="section" placement="bottom" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:items-start lg:gap-10 lg:px-8 lg:py-14">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <a href="#top" className="text-center">
            <img 
              src={krishayaLogo} 
              alt="KRISHAYÁ Logo" 
              className="w-36 h-auto md:w-48 object-contain filter drop-shadow-sm transition-all duration-300"
            />
          </a>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-[#2C2C2C]/70">
            Customer Care
          </p>
          <ContactPhone />
          {/* <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#2C2C2C]/45">
            Customer Care · Pan-India Expansion Underway
          </p> */}
        </div>

        <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-[#2C2C2C]/70">
            Follow
          </p>
          <div className="flex flex-col items-center gap-3 lg:items-end">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#2C2C2C]/55 transition-opacity duration-300 hover:opacity-55"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              @glow_glace13
            </a>
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#2C2C2C]/55 transition-opacity duration-300 hover:opacity-55"
            >
              WhatsApp Channel
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-[#2C2C2C]/8 px-4 py-5 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-7xl text-center text-xs uppercase tracking-widest text-[#2C2C2C]/45">
          Designed, Engineered &amp; Curated by Sangeeta Jaiswal | © 2026 <b className='uppercase font-normal'>Krishaviá</b>. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
