/**
 * Shared champagne mesh + cherry-blossom motifs for the Zelvora brand system.
 */

export function ChampagneMesh({ className = '', pulse = true }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${pulse ? 'brand-mesh-breathe' : ''} ${className}`}
      style={{
        backgroundImage: [
          'radial-gradient(ellipse 55% 50% at 0% 0%, rgba(247,201,212,0.32), transparent 58%)',
          'radial-gradient(ellipse 50% 45% at 100% 0%, rgba(232,196,168,0.26), transparent 55%)',
          'radial-gradient(ellipse 55% 50% at 100% 100%, rgba(247,201,212,0.28), transparent 58%)',
          'radial-gradient(ellipse 50% 45% at 0% 100%, rgba(197,168,128,0.2), transparent 55%)',
          'radial-gradient(ellipse 40% 35% at 50% 50%, rgba(255,255,255,0.28), transparent 70%)',
        ].join(', '),
      }}
      aria-hidden="true"
    />
  )
}

export function FloralMotif({ className = '', idPrefix = 'floral' }) {
  const petalPink = `${idPrefix}-petalPink`
  const petalSoft = `${idPrefix}-petalSoft`
  const branchWarm = `${idPrefix}-branchWarm`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 380"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={petalPink} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7C9D4" />
          <stop offset="55%" stopColor="#E8A0B0" />
          <stop offset="100%" stopColor="#D48496" />
        </linearGradient>
        <linearGradient id={petalSoft} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBE4EA" />
          <stop offset="100%" stopColor="#EFB8C4" />
        </linearGradient>
        <linearGradient id={branchWarm} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C4A484" />
          <stop offset="100%" stopColor="#A8896A" />
        </linearGradient>
      </defs>

      <path
        d="M28 360C48 290 72 240 118 190C158 148 198 118 248 78C272 58 292 38 308 18"
        stroke={`url(#${branchWarm})`}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M62 340C78 280 108 232 152 188"
        stroke="#B8956A"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M148 200C178 168 208 148 238 122"
        stroke="#C4A484"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.65"
      />

      <ellipse
        cx="96"
        cy="248"
        rx="18"
        ry="8"
        transform="rotate(-42 96 248)"
        fill="#B8C9A8"
        fillOpacity="0.55"
        stroke="#8FA37F"
        strokeWidth="0.9"
      />
      <ellipse
        cx="132"
        cy="212"
        rx="15"
        ry="7"
        transform="rotate(-36 132 212)"
        fill="#C5D4B5"
        fillOpacity="0.5"
        stroke="#8FA37F"
        strokeWidth="0.85"
      />
      <ellipse
        cx="188"
        cy="152"
        rx="14"
        ry="6.5"
        transform="rotate(-48 188 152)"
        fill="#B8C9A8"
        fillOpacity="0.45"
        stroke="#8FA37F"
        strokeWidth="0.8"
      />

      <g transform="translate(248, 72)">
        <circle cx="0" cy="0" r="28" fill="#F7C9D4" fillOpacity="0.22" />
        <ellipse
          cx="0"
          cy="-16"
          rx="9"
          ry="14"
          fill={`url(#${petalPink})`}
          opacity="0.92"
        />
        <ellipse
          cx="15"
          cy="-5"
          rx="9"
          ry="14"
          transform="rotate(72)"
          fill={`url(#${petalSoft})`}
          opacity="0.9"
        />
        <ellipse
          cx="9"
          cy="13"
          rx="9"
          ry="14"
          transform="rotate(144)"
          fill={`url(#${petalPink})`}
          opacity="0.88"
        />
        <ellipse
          cx="-9"
          cy="13"
          rx="9"
          ry="14"
          transform="rotate(216)"
          fill={`url(#${petalSoft})`}
          opacity="0.9"
        />
        <ellipse
          cx="-15"
          cy="-5"
          rx="9"
          ry="14"
          transform="rotate(288)"
          fill={`url(#${petalPink})`}
          opacity="0.9"
        />
        <circle cx="0" cy="0" r="5" fill="#E8C47A" />
        <circle cx="0" cy="0" r="2.5" fill="#C5A880" />
      </g>

      <g transform="translate(168, 168)">
        <circle cx="0" cy="0" r="20" fill="#F7C9D4" fillOpacity="0.18" />
        <ellipse
          cx="0"
          cy="-12"
          rx="7"
          ry="11"
          fill={`url(#${petalSoft})`}
          opacity="0.9"
        />
        <ellipse
          cx="11"
          cy="-4"
          rx="7"
          ry="11"
          transform="rotate(72)"
          fill={`url(#${petalPink})`}
          opacity="0.88"
        />
        <ellipse
          cx="7"
          cy="10"
          rx="7"
          ry="11"
          transform="rotate(144)"
          fill={`url(#${petalSoft})`}
          opacity="0.86"
        />
        <ellipse
          cx="-7"
          cy="10"
          rx="7"
          ry="11"
          transform="rotate(216)"
          fill={`url(#${petalPink})`}
          opacity="0.88"
        />
        <ellipse
          cx="-11"
          cy="-4"
          rx="7"
          ry="11"
          transform="rotate(288)"
          fill={`url(#${petalSoft})`}
          opacity="0.9"
        />
        <circle cx="0" cy="0" r="3.5" fill="#E8C47A" />
      </g>

      <g transform="translate(98, 268)">
        <ellipse
          cx="0"
          cy="-9"
          rx="5.5"
          ry="8.5"
          fill={`url(#${petalPink})`}
          opacity="0.85"
        />
        <ellipse
          cx="8"
          cy="-3"
          rx="5.5"
          ry="8.5"
          transform="rotate(72)"
          fill={`url(#${petalSoft})`}
          opacity="0.82"
        />
        <ellipse
          cx="5"
          cy="7"
          rx="5.5"
          ry="8.5"
          transform="rotate(144)"
          fill={`url(#${petalPink})`}
          opacity="0.8"
        />
        <ellipse
          cx="-5"
          cy="7"
          rx="5.5"
          ry="8.5"
          transform="rotate(216)"
          fill={`url(#${petalSoft})`}
          opacity="0.82"
        />
        <ellipse
          cx="-8"
          cy="-3"
          rx="5.5"
          ry="8.5"
          transform="rotate(288)"
          fill={`url(#${petalPink})`}
          opacity="0.85"
        />
        <circle cx="0" cy="0" r="2.5" fill="#E8C47A" />
      </g>

      <ellipse
        cx="218"
        cy="118"
        rx="6"
        ry="4.5"
        transform="rotate(-28 218 118)"
        fill="#E8A0B0"
        fillOpacity="0.75"
        stroke="#D48496"
        strokeWidth="0.7"
      />
      <ellipse
        cx="142"
        cy="196"
        rx="5"
        ry="3.8"
        transform="rotate(18 142 196)"
        fill="#F0B8C4"
        fillOpacity="0.7"
        stroke="#D48496"
        strokeWidth="0.65"
      />
      <ellipse
        cx="278"
        cy="42"
        rx="5.5"
        ry="4"
        transform="rotate(-12 278 42)"
        fill="#EFB8C4"
        fillOpacity="0.8"
        stroke="#D48496"
        strokeWidth="0.7"
      />

      <ellipse
        cx="210"
        cy="210"
        rx="4"
        ry="2.5"
        transform="rotate(35 210 210)"
        fill="#F7C9D4"
        fillOpacity="0.55"
      />
      <ellipse
        cx="70"
        cy="300"
        rx="3.5"
        ry="2.2"
        transform="rotate(-20 70 300)"
        fill="#E8A0B0"
        fillOpacity="0.45"
      />
    </svg>
  )
}

/**
 * Corner floral frames.
 * `size="reveal"` for inauguration; `size="section"` for subtle store accents.
 * `placement`: "both" | "top" | "bottom"
 */
export function FloralCorners({
  idPrefix = 'brand',
  float = false,
  size = 'section',
  placement = 'both',
}) {
  const sizeClass =
    size === 'reveal'
      ? 'h-[42vh] w-auto max-w-[55vw] sm:h-[52vh] md:h-[58vh]'
      : 'h-20 w-20 opacity-55 md:h-36 md:w-36'

  const floatTop = float ? 'brand-floral-float' : ''
  const floatBottom = float ? 'brand-floral-float-mirror' : ''
  const showTop = placement === 'both' || placement === 'top'
  const showBottom = placement === 'both' || placement === 'bottom'

  return (
    <>
      {showTop ? (
        <div
          className={`pointer-events-none absolute -right-1 -top-1 z-[1] md:-right-2 md:-top-2 ${floatTop}`}
          aria-hidden="true"
        >
          <FloralMotif idPrefix={`${idPrefix}-tr`} className={sizeClass} />
        </div>
      ) : null}
      {showBottom ? (
        <div
          className={`pointer-events-none absolute -bottom-1 -left-1 z-[1] md:-bottom-2 md:-left-2 ${floatBottom}`}
          aria-hidden="true"
        >
          <FloralMotif
            idPrefix={`${idPrefix}-bl`}
            className={`${sizeClass} -scale-x-100 -scale-y-100`}
          />
        </div>
      ) : null}
    </>
  )
}
