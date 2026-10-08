import { ChampagneMesh, FloralCorners } from './BrandAtmosphere'
import krishayaLogo from '../assets/images/logo/final_logo.png'

const FEATURES = [
  { id: 'waterproof', label: 'Waterproof', icon: 'drop' },
  { id: 'anti-tarnish', label: 'Anti-Tarnish', icon: 'star' },
  { id: 'premium', label: 'Premium Finish', icon: 'gem' },
]

function FeatureIcon({ type }) {
  if (type === 'drop') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-3 w-3"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3.5C12 3.5 6.5 10.2 6.5 14a5.5 5.5 0 0 0 11 0c0-3.8-5.5-10.5-5.5-10.5Z"
        />
      </svg>
    )
  }

  if (type === 'star') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-3 w-3"
        aria-hidden="true"
      >
        <path d="M12 3.2 13.9 9h6.1l-4.9 3.6 1.9 5.9L12 15.9 6.9 18.5l1.9-5.9L3.9 9h6.1L12 3.2Z" />
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="h-3 w-3"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5 14.2 9.2 20 10l-4.2 4.1 1.2 5.9L12 17.2 6.9 20l1.2-5.9L4 10l5.8-.8L12 3.5Z"
      />
    </svg>
  )
}

export default function RevealPage() {
  return (
    <section
      aria-label="Launch reveal"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F4EFE6]"
    >
      <ChampagneMesh pulse />

      <div
        className="brand-accent-pulse pointer-events-none absolute left-1/2 top-1/2 h-[min(72vw,460px)] w-[min(72vw,460px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7C9D4]/25 blur-3xl"
        aria-hidden="true"
      />

      <FloralCorners idPrefix="reveal" float size="reveal" />

      {/* Stable centerpiece — no entrance motion for video shoot */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-28 text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[6px] text-gray-500">
          Est. 2026
        </p>

      <div className="flex justify-center items-center ">
        <img 
          src={krishayaLogo} 
          alt="KRISHAYÁ Logo" 
          className="w-48 h-auto md:w-72 object-contain filter drop-shadow-sm transition-all duration-300"
        />
      </div>
        {/* <h1 className="font-serif text-4xl font-bold uppercase tracking-[14px] text-[#2C2C2C] drop-shadow-sm filter md:text-6xl">
          KRISHAYÁ
        </h1>

        <p className="tracking-[6px] text-[10px] md:text-xs font-semibold text-gray-500 uppercase mt-2 text-center">
  LIFESTYLE COLLECTIVE
</p> */}


        <div
          className="mx-auto mt-7 h-px w-20 bg-gradient-to-r from-transparent via-[#2C2C2C]/30 to-transparent"
          aria-hidden="true"
        />

        <p className="mt-5 text-[10px] font-light uppercase tracking-[0.42em] text-[#2C2C2C]/55 sm:text-[11px]">
          Launched by Sangeeta Jaiswal
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-1 gap-y-3 sm:gap-x-2">
          {FEATURES.map((feature, index) => (
            <li
              key={feature.id}
              className="inline-flex items-center gap-x-1 sm:gap-x-2"
            >
              <span className="inline-flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.22em] text-[#2C2C2C]/55 sm:text-[10px]">
                <span className="text-[#C5A880]">
                  <FeatureIcon type={feature.icon} />
                </span>
                {feature.label}
              </span>
              {index < FEATURES.length - 1 ? (
                <span
                  className="pl-1 text-[9px] text-[#2C2C2C]/30 sm:pl-2 sm:text-[10px]"
                  aria-hidden="true"
                >
                  ·
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
