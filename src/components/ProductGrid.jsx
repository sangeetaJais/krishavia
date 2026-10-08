import { useMemo, useState } from 'react'
import { FILTER_TABS, products } from '../data/products'
// import { buildWhatsAppOrderUrl } from '../utils/whatsapp'
import qrImg from '../assets/images/logo/qr.jpg';

const INITIAL_VISIBLE = 8
const PAGE_SIZE = 8

function ProductCard({ product, checkoutUnlocked, locationArea, onRequireLocation, setActiveQrProduct,setCart, cart }) {
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden border border-[#2C2C2C]/12 bg-white">
      <div className="relative h-[200px] w-full shrink-0 overflow-hidden md:h-[320px]">
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {product.tag && (
          <span className="absolute right-2 top-2 bg-white/95 px-2 py-1 text-[8px] font-medium uppercase tracking-[0.18em] text-[#2C2C2C] md:right-3 md:top-3 md:px-2.5 md:text-[9px] md:tracking-[0.2em] shadow-sm">
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex flex-1 flex-col px-2.5 pt-3 md:px-4 md:pt-4">
          <p className="shrink-0 text-[9px] font-medium uppercase tracking-[0.18em] text-[#2C2C2C]/45 md:text-[10px] md:tracking-[0.2em]">
            {product.category}
          </p>
          <h3 className="mt-1 h-[40px] overflow-hidden font-serif text-sm leading-5 text-[#2C2C2C] line-clamp-2 md:mt-1.5 md:h-[48px] md:text-lg md:leading-6">
            {product.name}
          </h3>
          <div className="mt-1.5 flex shrink-0 items-baseline md:mt-2 mb-3">
            <span className="text-sm font-semibold tracking-wide text-[#2C2C2C] md:text-lg">
              {product.sellingPrice}
            </span>
            <span className="ml-1.5 text-xs text-gray-400 line-through md:ml-2 md:text-sm">
              {product.originalPrice}
            </span>
          </div>
        </div>

                {product.isAvailable ? (
          (() => {
            // 🎯 प्रॉप्स का झंझट ख़त्म! सीधे लोकल स्टोरेज से लाइव कार्ट रीड करेंगे ताकि डुप्लीकेट न हो
            const savedCartRaw = localStorage.getItem('krishavia_cart');
            const localCart = savedCartRaw ? JSON.parse(savedCartRaw) : [];
            const isAlreadyInCart = localCart.some(item => item.id === product.id);
            
            return isAlreadyInCart ? (
              /* State A: जब प्रोडक्ट पहले से शॉपिंग बैग में ऐड हो चुका हो */
              <button
                type="button"
                disabled
                className="mt-auto flex w-full shrink-0 items-center justify-center gap-1.5 bg-gray-400 text-white text-[10px] font-bold tracking-widest uppercase py-3 px-3 cursor-not-allowed border-t border-gray-300 md:py-3.5 md:text-xs"
              >
                ADDED TO BAG ✓ 
              </button>
            ) : (
              /* State B: जब प्रोडक्ट कार्ट में ऐड नहीं हुआ हो (Normal Active State) */
              <button
                type="button"
                onClick={() => {
                  setCart((prevCart) => {
                    // दोबारा री-चेक करेंगे ताकि 1% भी डुप्लीकेट ऐड न हो सके
                    const isExist = prevCart.find(item => item.id === product.id);
                    if (isExist) return prevCart;
                    
                    const newCart = [...prevCart, product];
                    localStorage.setItem('krishavia_cart', JSON.stringify(newCart));
                    return newCart;
                  });
                }}
                className="mt-auto flex w-full shrink-0 items-center justify-center gap-1.5 bg-[#232323] px-3 py-3 text-[10px] font-bold tracking-widest text-white uppercase transition-all duration-200 hover:bg-black active:scale-[0.99] md:py-3.5 md:text-xs"
              >
                ADD TO CART 
              </button>
            );
          })()
        ) : (
          /* State 2: Locked Disabled State (Sold Out View) */
          <div className="mt-auto flex w-full shrink-0 items-center justify-center gap-1.5 bg-gray-200/80 px-3 py-3 text-[10px] font-bold tracking-widest text-gray-500 uppercase select-none cursor-not-allowed border-t border-gray-300 md:py-3.5 md:text-xs">
            <span>🔒</span> SOLD OUT
          </div>
        )}



      </div>
    </article>
  )
}

export default function ProductGrid({ checkoutUnlocked, locationArea, onRequireLocation }) {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [itemsToShow, setItemsToShow] = useState(INITIAL_VISIBLE)
  const [revealFrom, setRevealFrom] = useState(0)
  // const [activeQrProduct, setActiveQrProduct] = useState(null)
 const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('krishavia_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
    // const [activeQrProduct, setActiveQrProduct] = useState(null)
  const [copiedNum, setCopiedNum] = useState(false)
  const [copiedMsg, setCopiedMsg] = useState(false)

   const rawNumber = "919131767938" 
  const displayWhatsAppNumber = "+91 9131767938"

    const filteredProducts = useMemo(() => {
    if (activeFilter === 'ALL') {
      return products;
    }

    // 🎯 यह जादुई लाइन स्पेलिंग के छोटे-बड़े अक्षरों (Case Mismatch) के झंझट को हमेशा के लिए ख़त्म कर देगी!
    return products.filter((item) => 
      item.category && item.category.trim().toUpperCase() === activeFilter.trim().toUpperCase()
    );
  }, [activeFilter])


  const visibleProducts = filteredProducts.slice(0, itemsToShow)
  const hasMore = filteredProducts.length > itemsToShow

    // Clipboard functions
  const handleCopyNumber = () => {
    navigator.clipboard.writeText(rawNumber)
    setCopiedNum(true)
    setTimeout(() => setCopiedNum(false), 2000) // 2 second baad 'Copied' text hat jayega
  }

  const handleCopyMessage = (msg) => {
    navigator.clipboard.writeText(msg)
    setCopiedMsg(true)
    setTimeout(() => setCopiedMsg(false), 2000)
  }

  // Jis product par user ne click kiya hai, uske naam aur price ke hisab se text generate hoga
const handleRemoveItem = (id) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter(item => item.id !== id);
      localStorage.setItem('krishavia_cart', JSON.stringify(newCart));
      return newCart;
    });
  };
const generatedMessage =  cart.length > 0 
  ? `Hello Team KRISHAVIÁ! 💎✨\n\nI really love your collection on the website and I want to secure my booking for:\n• Product: ${isCartOpen.name}\n• Price: ${isCartOpen.sellingPrice}\n\nHere are my delivery details for Drop 01:\n📌 My Name: \n📍 Address: \n📱 Alternative Contact Number:`
  : '';



  const handleFilterChange = (tab) => {
    setActiveFilter(tab)
    setItemsToShow(INITIAL_VISIBLE)
    setRevealFrom(0)
  }

  const handleLoadMore = () => {
    setRevealFrom(itemsToShow)
    setItemsToShow((prev) => Math.min(prev + PAGE_SIZE, filteredProducts.length))
  }

  return (
    <>
          {/* 🛒 आपका एस्थेटिक फ्लोटिंग शॉपिंग बैग */}
            {/* 🛒 आलीशान शैम्पेन गोल्ड ग्लो बॉर्डर वाला शॉपिंग बैग बटन */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#232323] text-white px-5 py-3.5 text-xs font-bold uppercase tracking-widest border border-[#C5A880] shadow-[0_0_15px_rgba(197,168,128,0.25)] hover:bg-black active:scale-95 transition-all duration-200"
        >
          <span>🛒 SHOPPING BAG</span>
          <span className="bg-white text-black px-2 py-0.5 text-[10px] font-extrabold rounded-none">
            {cart.length}
          </span>
        </button>
      </div>


      <section id="collection" className="border-y border-[#2C2C2C]/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mb-10 border-b border-[#2C2C2C]/10 pb-8 sm:mb-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div className="mx-auto w-full max-w-xl shrink-0 text-center lg:mx-0 lg:text-left">
                <h2 className="font-serif text-2xl uppercase text-[#2C2C2C] sm:text-3xl md:text-4xl" style={{ letterSpacing: '3px' }}>
                  The Inaugural Drop
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#2C2C2C]/60 sm:text-[15px]">
                  Explore a meticulously curated capsule collection of premium minimal chains, aesthetic Korean earrings, anti-tarnish hoops, statement drops, and luxury lifestyle accents handpicked to elevate your everyday outfit routine.
                </p>
              </div>
              <div className="-mx-4 min-w-0 lg:mx-0 lg:max-w-[36rem]">
                <div className="flex gap-2 overflow-x-auto px-4 pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 lg:justify-end" role="tablist">
                  {FILTER_TABS.map((tab) => {
                    const isActive = activeFilter === tab
                    return (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => handleFilterChange(tab)}
                        className={`shrink-0 border border-1 border-gray-200 px-3 py-2 text-[10px] font-semibold tracking-widest uppercase transition-all duration-200 ${
                          isActive 
                            ? 'bg-[#000000] text-white border-black' 
                            : 'bg-white text-black text-[#2C2C2C]/40 hover:text-[#2C2C2C] hover:border-gray-400'
                        }`}
                                          
                      >
                        {tab}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                checkoutUnlocked={checkoutUnlocked}
                locationArea={locationArea}
                onRequireLocation={onRequireLocation}
                // setActiveQrProduct={setActiveQrProduct}
                 setCart={setCart} 
              />
            ))}
          </div>

          {hasMore && (
            <div className="mt-12 flex justify-center sm:mt-16">
              <button
                onClick={handleLoadMore}
                className="border border-[#2C2C2C] bg-transparent px-6 py-3 text-xs font-semibold tracking-widest text-[#2C2C2C] uppercase transition-colors hover:bg-[#2C2C2C] hover:text-white"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

            {/* 🎯 USER PERSPECTIVE SMART POP-UP MODAL */}
     {/* 🎯 PREMIUM MINIMALIST POP-UP MODAL */}
{/* 🎯 KRISHAVIÁ PREMIUM MINIMAL POP-UP (RESPONSIVE & FIXED HEIGHT) */}
{isCartOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
    {/* 🎯 चौड़ाई को max-w-md कर दिया है ताकि लेआउट दबे नहीं और सुंदर दिखे */}
    <div className="bg-white p-5 rounded-none max-w-md w-full shadow-2xl relative border border-gray-100 font-sans md:p-6 animate-fadeIn">
      
      <div>
        {/* क्लोज बटन */}
        <button 
          onClick={() => setIsCartOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-sm p-1 transition-colors"
        >
          ✕
        </button>

        {/* मुख्य हेडर */}
        <h3 className="font-serif text-xs font-bold tracking-widest text-[#2C2C2C] text-center mb-4 uppercase">
          SECURE YOUR BOOKING 💎
        </h3>

        {/* 🎯 1. रिव्यू आइटम्स लिस्ट - यहाँ ऊपर एकदम साफ़ और मिनिमल ढंग से चमकेगी */}
        {cart.length > 0 && (
          <div className="mb-4">
            <span className="block text-[10px] font-bold tracking-widest text-[#232323] uppercase mb-2 text-left">
              🛍️ YOUR SHOPPING BAG (Tap ✕ to remove)
            </span>
            <div className="flex flex-col gap-1.5 max-h-[120px] overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-white border border-gray-100 p-2 text-[10px] font-medium text-gray-700 tracking-wide">
                  <span className="truncate pr-2">{item.name}</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-semibold">{item.sellingPrice}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-400 hover:text-red-600 font-bold px-1 transition-colors text-xs"
                      title="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 🎯 2. ऑर्डर टेम्पलेट टेक्स्ट बॉक्स - डबल div एरर पूरी तरह फ़िक्स कर दिया है */}
        <div className="mb-4">
          <span className="block text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-1 text-left">
            Order Summary Template
          </span>
          <div className="text-[11px] text-gray-600 bg-white p-2.5 rounded-none border border-gray-100 whitespace-pre-line text-left leading-relaxed max-h-[140px] overflow-y-auto font-medium tracking-wide">
            {cart.length === 0 ? (
              "Your shopping bag is currently empty! Please add some aesthetic pieces to start booking. 🛍️✨"
            ) : (
              `Hello Team KRISHAVIÁ! 💎✨\n\nI really love your collection on the website and I want to secure my booking for multiple items:\n` +
              cart.map((item, idx) => `${idx + 1}. ${item.name} - ${item.sellingPrice}`).join('\n') +
              `\n\nTotal Bill Amount: ₹ ${cart.reduce((total, item) => total + parseInt(item.sellingPrice.replace(/[^\d]/g, '') || 0), 0)} 📦\n\nHere are my delivery details for Drop 01:\n📌 My Name:\n📍 Full Address:\n📱 Alternative Contact Number:`
            )}
          </div>
        </div>

        {/* 🎯 3. नया सिंपल यूज़र-फ्रेंडली मैसेज गाइड - 'Step 3' टेक्स्ट पूरी तरह हटा दिया है */}
        <div className="mt-4 border-t border-gray-100 pt-3 text-left px-1">
          <p className="text-[11px] text-gray-600 leading-relaxed tracking-wide font-medium">
            ✨ To place your order, just copy these details using the button below and paste them to our official WhatsApp number:
            <span className="block font-mono font-extrabold text-sm text-black bg-gray-50 border border-gray-200 p-2.5 mt-2 text-center select-all cursor-pointer tracking-wider">
              9131767938
            </span>
          </p>
        </div>
      </div>

      {/* 🎯 नीचे के मुख्य एक्शन बटन्स - डेटा लॉस और फालतू लिंक एरर से 100% सुरक्षित */}
      <div className="flex flex-col gap-1.5 mt-4 shrink-0">
        <button 
          disabled={cart.length === 0}
          onClick={() => {
            // 1. पूरा कूरियर फॉर्म टेक्स्ट क्लिपबोर्ड में 100% पक्का कॉपी होगा
            navigator.clipboard.writeText(generatedMessage);
            setCopiedMsg(true);
            
            // 2. सिर्फ बटन का टेक्स्ट बदलेगा और पॉप-अप बंद होगा (कार्ट डेटा 100% सेफ़ रहेगा!)
            setTimeout(() => {
              setCopiedMsg(false);
              setIsCartOpen(false);
            }, 1200);
          }} 
          className={`w-full font-bold py-2.5 text-[10px] tracking-widest uppercase transition-all duration-200 border rounded-none ${
            cart.length === 0 
              ? 'bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-[#232323] text-white border-black hover:bg-black active:scale-[0.99]'
          }`}
        >
          {copiedMsg ? '✓ Copied to Clipboard' : '📋 Copy Details & Close'}
        </button>

        <button 
          onClick={() => {
            setCart([]);
            localStorage.removeItem('krishavia_cart');
            setIsCartOpen(false);
          }} 
          className="w-full bg-transparent text-red-500 hover:text-red-700 font-medium py-1 text-[9px] tracking-widest uppercase transition-all rounded-none mt-1 text-center"
        >
          Clear Entire Bag 🗑️
        </button>
      </div>

    </div>
  </div>
)}



    </>
  )
}


      {/* 🎯 आपका शुद्ध सफ़ेद पॉप-अप - बिना किसी लिंक या बटन के झंझट के */}
      {/* {activeQrProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white p-6 shadow-2xl text-center relative border border-gray-100">
            <button
              onClick={() => setActiveQrProduct(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-black font-bold text-sm tracking-widest uppercase"
            >
              ✕
            </button>

            <h3 className="text-xs font-bold uppercase tracking-widest text-[#232323] mb-1">✨ ORDER VIA WHATSAPP ✨</h3>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-4">Product: {activeQrProduct.name}</p>

            <div className="flex justify-center mb-4  p-3">
       
              <img src={qrImg} alt="WhatsApp QR Code" className="w-56 h-56 object-contain" />
            </div>

            <p className="text-xs font-semibold text-[#232323] uppercase tracking-widest leading-relaxed px-2">
  Please scan this QR Code with your phone <br />
  to place your order directly on WhatsApp! 🔮🔒
</p>
          </div>
        </div>
      )} */}
      
    