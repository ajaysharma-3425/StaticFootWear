"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { products } from './data/products';
import ProductCard from '@/components/ProductCard';
import { ChevronRight, MapPin, Phone, Star, ArrowRight, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';

// Mixed-case attractive phrases with discount items
const TYPEWRITER_WORDS = [
  "10% Discount on Regular Items",
  "5% Discount on Brands",
  "Your Perfect Fit",
  "Step in Style",
  "Luxury Footwear"
];

export default function Home() {
  const [isActionOpen, setIsActionOpen] = useState(false);
  
  // Tab state control for categories: 'men' | 'women' | 'kids'
  const [activeTab, setActiveTab] = useState<'men' | 'women' | 'kids'>('men');

  // Filter products based on active categories tab and only show maximum 4 items
  const filteredCollection = products
    .filter(p => p.isFeatured && p.category?.toLowerCase() === activeTab)
    .slice(0, 4);

  // Dynamic route generation mapping based on selected tab control
  const viewAllLink = activeTab === 'men' ? '/men' : activeTab === 'women' ? '/women' : '/kids';

  const [wordIdx, setWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = TYPEWRITER_WORDS[wordIdx];
    
    if (currentText === fullWord) {
      timer = setTimeout(() => {
        setCurrentText("");
        setWordIdx((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
      }, 2000);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
      }, 80);
    }

    return () => clearTimeout(timer);
  }, [currentText, wordIdx]);

  const brandLogos = [
    { name: "Bata", src: "/images/Bata.png" },
    { name: "Nike", src: "/images/Nike.png" },
    { name: "Adidas", src: "/images/adidas.png" },
    { name: "Buckaroo", src: "/images/buckaroo.png" },
    { name: "Reebok", src: "/images/reebok.png" },
    { name: "Campus", src: "/images/campus.png" },
    { name: "Skechers", src: "/images/skechers.png" },
    { name: "Red Chief", src: "/images/red-chief.png" },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden" style={{ fontFamily: "'Ubuntu', sans-serif" }}>

      {/* 1. BRAND SPLIT HERO SECTION WITH UNDER-LOGO BRANDING */}
      <section className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#d4af37]/10 blur-[150px] rounded-full animate-pulse z-10" />
        <div className="absolute bottom-10 right-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#d4af37]/5 blur-[120px] rounded-full z-10" />

        <div className="container mx-auto px-6 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT SIDE: Image Frame + Brand Name directly underneath */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center order-1 gap-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] aspect-square bg-white/[0.01] p-6 sm:p-8 rounded-[2.5rem] border border-white/5 shadow-[0_0_40px_rgba(212,175,55,0.03)] flex items-center justify-center group"
              >
                <img
                  src="images/footcare.png"
                  alt="Minal Footwear Iconic Premium Logo"
                  className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] transform group-hover:scale-[1.02] transition-transform duration-500 select-none"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('public/')) {
                      target.src = 'images/footcare.png';
                    }
                  }}
                />
              </motion.div>

              {/* Perfectly Styled Brand Typography under the logo */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <h2 className="text-2xl sm:text-3xl font-black tracking-[0.25em] uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-white to-[#d4af37] drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
                  Minal Footwear
                </h2>
                <div className="w-12 h-[2px] bg-[#d4af37] mx-auto mt-2 opacity-60 rounded-full" />
              </motion.div>
            </div>

            {/* RIGHT SIDE: Store Info, Description & Discount Typewriter */}
            <div className="lg:col-span-7 text-center lg:text-left order-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {/* Badge */}
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 text-[#d4af37] text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase mb-4 backdrop-blur-sm">
                  <Star size={11} fill="#d4af37" />
                  Ahmedabad's Finest Footwear Since 1993
                </span>

                {/* Heading with refined typography */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4">
                  Redefining <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#d4af37] via-[#f9f9f9] to-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.1)] inline-block relative min-h-[36px] sm:min-h-[48px] md:min-h-[64px]">
                    {currentText}
                    <span className="inline-block w-[2.5px] h-[24px] sm:h-[36px] md:h-[48px] bg-[#d4af37] ml-1.5 animate-pulse align-middle" />
                  </span>
                </h1>

                {/* Subtitle description */}
                <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto lg:mx-0 font-light leading-relaxed mb-6">
                  Welcome to Minal Footwear—where rich heritage of premium craftsmanship meets elite urban style. 
                  We curate exceptional, authentic global brands ensuring comfort and prestige with every step you take.
                </p>

                {/* Action Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                  <a
                    href="#collection"
                    className="w-full sm:w-auto px-7 py-3.5 bg-[#d4af37] text-black font-bold rounded-full uppercase text-xs tracking-widest shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={14} /> Shop Collection
                  </a>
                  <a
                    href="#brands"
                    className="w-full sm:w-auto px-7 py-3.5 border border-[#d4af37]/30 hover:bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest transition-all text-[#d4af37] flex items-center justify-center"
                  >
                    Our Partners
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INFINITE BRAND SLIDER */}
      <section id="brands" className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-[#d4af37] font-bold">Authorized Retailer</p>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="flex whitespace-nowrap animate-scroll items-center py-6">
            {[...brandLogos, ...brandLogos].map((brand, i) => (
              <div key={i} className="flex items-center justify-center mx-6 md:mx-10 group">
                <div className="relative w-44 h-22 md:w-56 md:h-28 flex items-center justify-center bg-[#d4af37] backdrop-blur-sm rounded-[2rem] border border-white/5 transition-all duration-500 group-hover:bg-white group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]">
                  <div className="relative w-36 h-18 md:w-48 md:h-24">
                    <img
                      src={brand.src}
                      alt={brand.name}
                      className="w-full h-full object-contain transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 35s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* 3. ENHANCED CATEGORY GRID */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Men's Edit", link: "/men", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800", count: "120+ Products" },
            { name: "Women's Luxe", link: "/women", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800", count: "85+ Products" },
            { name: "Junior Style", link: "/kids", img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800", count: "50+ Products" }
          ].map((cat, idx) => (
            <a key={idx} href={cat.link} className="group relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 block">
              <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div className="space-y-1">
                  <p className="text-[#d4af37] text-[10px] font-bold tracking-widest uppercase">{cat.count}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase">{cat.name}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transition-all group-hover:bg-[#d4af37]">
                  <ArrowRight size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      <section id="collection" className="container mx-auto px-4 md:px-10 py-20 bg-[#080808]/50 rounded-[3rem] border border-white/5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 px-4 gap-6">
          
          <div className="mb-4 lg:mb-0 text-left">
            <span className="text-[#d4af37] font-bold text-[10px] uppercase tracking-[0.3em] block mb-1">Editor's Choice</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight uppercase">Elite Collection</h2>
            
            <div className="flex gap-2 mt-5 bg-black/60 p-1.5 rounded-full border border-white/5 max-w-max">
              {(['men', 'women', 'kids'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-[#d4af37] text-black shadow-md' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab === 'men' ? 'Gents' : tab === 'women' ? 'Ladies' : 'Kids'}
                </button>
              ))}
            </div>
          </div>

          <Link
            href={viewAllLink}
            className="flex items-center gap-2 text-white hover:text-[#d4af37] hover:border-[#d4af37]/40 transition-all font-bold uppercase text-[10px] tracking-widest bg-white/5 px-6 py-3.5 rounded-full border border-white/10 max-w-max h-max"
          >
            See All {activeTab === 'men' ? 'Gents' : activeTab === 'women' ? 'Ladies' : 'Kids'} Wear <ChevronRight size={14} /> 
          </Link>
        </div>

        {filteredCollection.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCollection.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500 text-sm tracking-wide">
            No featured products available for this category.
          </div>
        )}
      </section>

      {/* 5. PREMIUM CONTACT SECTION */}
      <section id="about" className="container mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-[#0a0a0a] to-[#050505] rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white uppercase leading-tight">
                Visit Our <br /><span className="text-[#d4af37]">Flagship Store</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-lg">
                Experience the heritage of quality at Ahmedabad's most premium footwear destination.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-white/[0.02] rounded-[1.5rem] border border-white/5 text-left">
                  <div className="w-10 h-10 bg-[#d4af37] rounded-xl flex items-center justify-center text-black mb-4">
                    <MapPin size={20} />
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Location</p>
                  <p className="text-md font-medium">Ahmedabad, Gujarat, India</p>
                </div>

                <div className="p-6 bg-white/[0.02] rounded-[1.5rem] border border-white/5 text-left">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white mb-4">
                    <Phone size={20} />
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Contact</p>
                  <p className="text-md font-medium">+91 7600727603</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative w-full h-[300px] md:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200"
                className="w-full h-full object-cover rounded-[2rem] opacity-70"
                alt="Showroom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FIXED MOBILE ACTIONS MENU --- */}
      <div className="md:hidden fixed bottom-20 right-4 z-[60] flex flex-col items-center gap-3">
        <AnimatePresence>
          {isActionOpen && (
            <>
              {/* Phone Icon/Link */}
              <motion.a
                href="tel:7600727603"
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="w-11 h-11 bg-white text-black flex items-center justify-center rounded-full shadow-xl border border-gray-100"
              >
                <Phone size={18} />
              </motion.a>

              {/* Location Icon/Link */}
              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 15, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.8 }}
                transition={{ duration: 0.2, delay: 0.05 }}
                className="w-11 h-11 bg-white text-black flex items-center justify-center rounded-full shadow-xl border border-gray-100"
              >
                <MapPin size={18} />
              </motion.a>
            </>
          )}
        </AnimatePresence>

        {/* Trigger Arrow/Chevron Button */}
        <button
          onClick={() => setIsActionOpen(!isActionOpen)}
          className="w-12 h-12 bg-[#d4af37] text-black flex items-center justify-center rounded-full shadow-lg active:scale-90 transition-all z-10"
        >
          <motion.div
            animate={{ rotate: isActionOpen ? 0 : -180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <ChevronRight size={24} className="rotate-90" />
          </motion.div>
        </button>
      </div>
    </main>
  );
}

function Link({ href, children, className }: any) {
  return <a href={href} className={className}>{children}</a>;
}