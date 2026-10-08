import { FloralCorners } from './BrandAtmosphere'

export default function Hero({ onExplore, onVerifyLocation }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#2C2C2C]/10 bg-[#F9F6F0]"
    >
      {/* Subtle top-boundary floral accent only */}
      <FloralCorners idPrefix="hero" size="section" placement="top" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.4em] text-[#C5A880]">
          Limited Drop · Lifestyle Collective
        </p>

        <h1 className="font-serif text-4xl leading-[1.15] tracking-tight text-[#2C2C2C] sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Curated Elegance.
          <span className="mt-2 block italic text-[#2C2C2C]/85">
            Handpicked For You.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#2C2C2C]/65 sm:text-base">
          Daily studs, anti-tarnish hoops, and statement drops — curated for festive
          nights and everyday grace.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#collection"
            onClick={onExplore}
            className="group inline-flex items-center gap-2 bg-[#2C2C2C] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-white transition hover:bg-[#2C2C2C]/90"
          >
            Explore Collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              className="h-4 w-4 transition group-hover:translate-y-0.5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m0 0 5.25-5.25M12 19.5l-5.25-5.25"
              />
            </svg>
          </a>

          {/* <button
            type="button"
            onClick={onVerifyLocation}
            className="inline-flex items-center gap-2 border border-[#2C2C2C]/25 bg-white px-8 py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-[#2C2C2C] transition hover:border-[#C5A880] hover:text-[#C5A880]"
          >
            Check Delivery Availability
          </button> */}
        </div>
      </div>
    </section>
  )
}
