import { INSTAGRAM_URL, WHATSAPP_CHANNEL_URL } from '../data/products'
import { InstagramIcon } from './icons'
import { FloralCorners } from './BrandAtmosphere'

const funnelBtnClass =
  'border border-[#2C2C2C] text-xs font-medium uppercase px-6 py-3 tracking-widest hover:bg-[#2C2C2C] hover:text-white transition-all duration-300'

function WhatsAppGlyph({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.15 6.36 2.15 11.72c0 1.92.54 3.79 1.57 5.44L2 22l5.02-1.63a10.1 10.1 0 0 0 5.02 1.35h.01c5.46 0 9.89-4.36 9.89-9.72C21.94 6.36 17.5 2 12.04 2Zm5.77 13.76c-.24.67-1.39 1.28-1.92 1.36-.49.08-1.12.11-1.81-.11-.42-.14-.96-.31-1.65-.61-2.9-1.25-4.79-4.18-4.93-4.37-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35h.55c.18 0 .42-.05.65.5.24.57.81 1.97.88 2.11.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.52 1.89 1.05.93 1.93 1.22 2.21 1.36.28.14.44.12.6-.07.17-.19.7-.81.89-1.09.19-.28.38-.23.64-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.69-.17 1.36Z" />
    </svg>
  )
}

export default function TeaserPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cream px-6 py-20">
      <FloralCorners idPrefix="teaser" size="section" placement="top" />

      <main className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <h1 className="mb-6 text-center font-serif text-4xl font-bold uppercase tracking-[8px] text-[#2C2C2C] md:text-6xl">
          Coming Soon
        </h1>

        <p className="max-w-md text-sm leading-relaxed text-[#2C2C2C]/70 sm:text-[15px] sm:leading-7">
          Curated fashion, minimal everyday essentials, and lifestyle drops
          engineered by a local female software developer. Shrouded in secrecy
          until the 1st Day of Navratri.
        </p>

        <div className="mt-12 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <a
            href={WHATSAPP_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2.5 ${funnelBtnClass}`}
          >
            <WhatsAppGlyph />
            Join the Secret Circle
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2.5 ${funnelBtnClass}`}
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            Follow the Design Journal
          </a>
        </div>
      </main>
    </div>
  )
}
