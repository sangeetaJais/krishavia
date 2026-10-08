import { INSTAGRAM_URL } from '../data/products'
import ContactPhone from './ContactPhone'
import { InstagramIcon } from './icons'
import krishayaLogo from '../assets/images/logo/final_logo.png'

export default function Navbar({ onOpenLocation, checkoutUnlocked }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2C2C2C]/10 bg-[#F9F6F0]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#collection"
            className="hidden items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#2C2C2C]/70 transition hover:text-[#2C2C2C] sm:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0-5.25-5.25M19.5 12l-5.25 5.25"
              />
            </svg>
            Shop
          </a>
          {/* <button
            type="button"
            onClick={onOpenLocation}
            className="hidden items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#2C2C2C]/70 transition hover:text-[#2C2C2C] md:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            {checkoutUnlocked ? 'Area Set' : 'Delivery'}
          </button> */}
        </div>

        <div className="w-28 h-auto md:w-48">
        <a href="#top" className="text-center">
         <img 
            src={krishayaLogo} 
            alt="KRISHAYÁ Logo" 
            className="object-cover"
          />
        </a>
        </div>

        <div className="nav-logo-align flex items-center gap-2 sm:gap-4">
          <a
            href="#about"
            className="hidden items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#2C2C2C]/70 transition hover:text-[#2C2C2C] lg:flex"
          >
            About
          </a>

          <ContactPhone variant="navbar" />

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Krishaaya Lifestyle on Instagram @zelvora_lifestyle"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2C2C2C]/15 text-[#2C2C2C] transition hover:border-[#C5A880] hover:text-[#C5A880]"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
      </nav>
    </header>
  )
}
