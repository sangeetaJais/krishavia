import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LocationModal from './components/LocationModal'
import ProductGrid from './components/ProductGrid'
import WhatsAppChannel from './components/WhatsAppChannel'
import About from './components/About'
import Footer from './components/Footer'
import TeaserPage from './components/TeaserPage'
import RevealPage from './components/RevealPage'

const isStoreLive = true

const STORAGE_KEY = 'zelvora_delivery_location'

function Toast({ title, message, onDismiss, variant = 'success' }) {
  useEffect(() => {
    const timer = window.setTimeout(onDismiss, variant === 'info' ? 6500 : 4200)
    return () => window.clearTimeout(timer)
  }, [onDismiss, variant])

  const isInfo = variant === 'info'

  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-toast-in fixed left-1/2 top-20 z-[90] w-[min(92vw,440px)] -translate-x-1/2 border border-gold/40 bg-white px-5 py-4 shadow-lg shadow-charcoal/10"
    >
      <div className="flex items-start gap-3">
        <span
          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream ${
            isInfo ? 'text-charcoal' : 'text-gold'
          }`}
        >
          {isInfo ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          )}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
            {title}
          </p>
          <p className="mt-1 text-sm leading-snug text-charcoal">{message}</p>
        </div>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss notification"
          className="text-charcoal/40 transition hover:text-charcoal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4"
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
  )
}

function Storefront() {
  const [locationArea, setLocationArea] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || ''
    } catch {
      return ''
    }
  })
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false)
  const [toast, setToast] = useState(null)

  const checkoutUnlocked = Boolean(locationArea)

  const openLocationModal = useCallback(() => {
    setIsLocationModalOpen(true)
  }, [])

  const closeLocationModal = useCallback(() => {
    setIsLocationModalOpen(false)
  }, [])

  const handleLocationConfirm = useCallback((result) => {
    const label = result.displayLabel || result.area
    setLocationArea(label)
    try {
      localStorage.setItem(STORAGE_KEY, label)
    } catch {
      /* ignore storage errors */
    }
    setIsLocationModalOpen(false)
    setToast({
      variant: 'success',
      title: 'Checkout Unlocked',
      message: `Delivering to ${label}. WhatsApp checkout is now unlocked for your order.`,
    })
  }, [])

  const handleLocationUnavailable = useCallback((message) => {
    setToast({
      variant: 'info',
      title: 'Coming Soon',
      message,
    })
  }, [])

  const dismissToast = useCallback(() => {
    setToast(null)
  }, [])

  const handleExplore = useCallback((event) => {
    event.preventDefault()
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar
        onOpenLocation={openLocationModal}
        checkoutUnlocked={checkoutUnlocked}
      />

      <main>
        <Hero onExplore={handleExplore} onVerifyLocation={openLocationModal} />

        <ProductGrid
          checkoutUnlocked={checkoutUnlocked}
          locationArea={locationArea}
          onRequireLocation={openLocationModal}
        />

        <About />
        <WhatsAppChannel />
      </main>

      <Footer />

      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={closeLocationModal}
        onConfirm={handleLocationConfirm}
        onUnavailable={handleLocationUnavailable}
        initialArea={locationArea}
      />

      {toast ? (
        <Toast
          title={toast.title}
          message={toast.message}
          variant={toast.variant}
          onDismiss={dismissToast}
        />
      ) : null}
    </div>
  )
}

export default function App() {
  if (!isStoreLive) {
    return <TeaserPage />
  }

  return (
    <>
      {/* <RevealPage /> */}
      <Storefront />

    </>
  )
}
