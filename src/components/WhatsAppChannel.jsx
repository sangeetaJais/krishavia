import { WHATSAPP_CHANNEL_URL } from '../data/products'

function WhatsAppChannelIcon({ className = 'h-5 w-5' }) {
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

export default function WhatsAppChannel() {
  return (
    <section
      aria-labelledby="whatsapp-channel-heading"
      className="border-t border-[#2C2C2C]/10 bg-[#F9F6F0]"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="relative overflow-hidden border border-[#2C2C2C]/10 bg-white">
          <div className="relative flex flex-col items-start justify-between gap-8 px-6 py-8 sm:px-10 sm:py-10 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C5A880]">
  <svg 
  xmlns="http://w3.org" 
  viewBox="0 0 24 24" 
  fill="none" 
  className="w-6 h-6 md:w-7 md:h-7 inline-block align-middle mr-2"
  style={{ display: 'inline-flex' }}
>
  <defs>
  
    <linearGradient id="zelvora-original-floral" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F4A261" />  
      <stop offset="50%" stopColor="#E9C46A" />
      
      <stop offset="100%" stopColor="#E76F51" /> 
    </linearGradient>
  </defs>

  
  <path 
    d="M12 12C12 8.5 9.5 6 6.5 6C3.5 6 3.5 10.5 6.5 12C9.5 13.5 12 12 12 12ZM12 12C15.5 12 18 9.5 18 6.5C18 3.5 13.5 3.5 12 6.5C10.5 9.5 12 12 12 12ZM12 12C12 15.5 14.5 18 17.5 18C20.5 18 20.5 13.5 17.5 12C14.5 10.5 12 12 12 12ZM12 12C8.5 12 6 14.5 6 17.5C6 20.5 10.5 20.5 12 17.5C13.5 14.5 12 12 12 12Z" 
    fill="url(#zelvora-original-floral)" 
    stroke="#2C2C2C"
    strokeWidth="0.5"
  />
  
 
  <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
</svg>

                Style Circle
              </p>
              <h2
                id="whatsapp-channel-heading"
                className="mt-3 font-serif text-2xl leading-snug text-[#2C2C2C] sm:text-3xl text-balance"
              >
                Stay Ahead of the Trends
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#2C2C2C]/65 sm:text-base">
                Join our Exclusive Krishaviá  Style Circle on WhatsApp Channel for
                limited-drop alerts and secret discounts.
              </p>
            </div>

            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2.5 bg-[#2C2C2C] px-5 md:px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#2C2C2C]/90"
            >
              <WhatsAppChannelIcon className="h-4 w-4" />
              Join WhatsApp Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
