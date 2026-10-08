import { BUSINESS_PHONE } from '../data/products'
import { PhoneIcon } from './icons'

const numberClass = 'text-sm font-medium tracking-wide text-[#2C2C2C]'

export default function ContactPhone({ variant = 'footer' }) {
  const telHref = `tel:${BUSINESS_PHONE.tel}`
  const callLabel = `Call ${BUSINESS_PHONE.display}`

  if (variant === 'navbar') {
    return (
      <>
        <a
          href={telHref}
          aria-label={callLabel}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2C2C2C]/15 text-[#2C2C2C] md:hidden"
        >
          <PhoneIcon className="h-3.5 w-3.5" />
        </a>
        <span className="hidden items-center gap-2 rounded-full border border-[#2C2C2C]/15 px-3 py-2 md:inline-flex">
          <PhoneIcon className="h-3.5 w-3.5 text-[#2C2C2C]" />
          <span className={numberClass}>{BUSINESS_PHONE.display}</span>
        </span>
      </>
    )
  }

  return (
    <>
      <a
        href={telHref}
        aria-label={callLabel}
        className="inline-flex items-center gap-2.5 md:hidden"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2C2C2C]/15 text-[#2C2C2C]">
          <PhoneIcon className="h-3.5 w-3.5" />
        </span>
        <span className={numberClass}>{BUSINESS_PHONE.display}</span>
      </a>
      <div className="hidden items-center gap-2.5 md:inline-flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2C2C2C]/15 text-[#2C2C2C]">
          <PhoneIcon className="h-3.5 w-3.5" />
        </span>
        <span className={numberClass}>{BUSINESS_PHONE.display}</span>
      </div>
    </>
  )
}
