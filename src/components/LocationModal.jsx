import { useEffect, useMemo, useState } from 'react'
import {
  ACTIVE_LOCATION_SUGGESTIONS,
  EXPANSION_WAITLIST_MESSAGE,
  verifyDeliveryLocation,
} from '../data/products'

export default function LocationModal({
  isOpen,
  onClose,
  onConfirm,
  onUnavailable,
  initialArea = '',
}) {
  const [query, setQuery] = useState(initialArea)
  const [error, setError] = useState('')
  const [draftKey, setDraftKey] = useState(0)

  // Remount input state cleanly when the modal opens
  const openToken = isOpen ? `${initialArea}:${draftKey}` : 'closed'

  const filteredSuggestions = useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    if (!trimmed) return ACTIVE_LOCATION_SUGGESTIONS
    return ACTIVE_LOCATION_SUGGESTIONS.filter(
      (item) =>
        item.label.toLowerCase().includes(trimmed) ||
        item.city.toLowerCase().includes(trimmed),
    )
  }, [query])

  useEffect(() => {
    if (!isOpen) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const resolveAndSubmit = (value) => {
    const result = verifyDeliveryLocation(value)

    if (result.reason === 'empty') {
      setError('Please enter your area name or pincode to unlock checkout.')
      return
    }

    if (!result.ok) {
      setError('')
      onUnavailable?.(EXPANSION_WAITLIST_MESSAGE)
      onClose()
      return
    }

    onConfirm({
      area: result.area,
      city: result.city,
      displayLabel: result.displayLabel,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    resolveAndSubmit(query)
  }

  const pickSuggestion = (item) => {
    setQuery(item.label)
    setError('')
    resolveAndSubmit(item.label)
  }

  const handleClose = () => {
    setDraftKey((key) => key + 1)
    setQuery(initialArea)
    setError('')
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-charcoal/45 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-modal-title"
      onClick={handleClose}
    >
      <div
        key={openToken}
        className="animate-slide-up w-full max-w-md border border-charcoal/10 bg-white shadow-2xl shadow-charcoal/20"
        onClick={(event) => event.stopPropagation()}
        onAnimationEnd={() => {
          if (query !== initialArea && !query) {
            setQuery(initialArea)
          }
        }}
      >
        <div className="border-b border-charcoal/8 px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
                Delivery Network
              </p>
              <h2
                id="location-modal-title"
                className="mt-2 font-serif text-2xl text-charcoal"
              >
                Check Delivery Availability
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                Enter your area or pincode to unlock WhatsApp checkout. We are
                expanding our launch circles across India.
              </p>
            </div>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close location modal"
              className="flex h-8 w-8 shrink-0 items-center justify-center text-charcoal/50 transition hover:text-charcoal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5">
          <label
            htmlFor="delivery-area"
            className="mb-2 block text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal/50"
          >
            Area or pincode
          </label>
          <input
            id="delivery-area"
            type="text"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setError('')
            }}
            placeholder="Enter your Area Name or Pincode"
            autoFocus
            className="w-full border border-charcoal/15 bg-cream/50 px-4 py-3 text-sm text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-gold focus:bg-white"
          />
          {error ? (
            <p className="mt-2 text-xs text-red-700/80" role="alert">
              {error}
            </p>
          ) : null}

          <ul className="mt-4 max-h-40 space-y-1 overflow-y-auto">
            {filteredSuggestions.map((item) => (
              <li key={`${item.city}-${item.label}`}>
                <button
                  type="button"
                  onClick={() => pickSuggestion(item)}
                  className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm text-charcoal/80 transition hover:bg-cream hover:text-charcoal"
                >
                  <span>
                    {item.label}
                    <span className="ml-2 text-[10px] uppercase tracking-[0.14em] text-charcoal/35">
                      {item.city}
                    </span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-3.5 w-3.5 text-gold"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <button
            type="submit"
            className="mt-5 w-full bg-charcoal py-3.5 text-xs font-medium uppercase tracking-[0.22em] text-white transition hover:bg-charcoal/90"
          >
            Unlock Checkout
          </button>
        </form>
      </div>
    </div>
  )
}
