"use client";

import { motion } from 'framer-motion';
import { products } from './data/products';
import ProductCard from '@/components/ProductCard';
import { ChevronRight, MapPin, Phone, Star, ArrowRight, Instagram, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isActionOpen, setIsActionOpen] = useState(false);
  const featuredProducts = products.filter(p => p.isFeatured);

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
    // Added 'font-ubuntu' and slightly adjusted base text
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden" style={{ fontFamily: "'Ubuntu', sans-serif" }}>

      {/* 1. LUXURY HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#d4af37]/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#d4af37]/10 blur-[100px] rounded-full" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37] text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                <Star size={12} fill="#d4af37" />
                Ahmedabad's Finest Footwear Since 1993
              </span>

              {/* Reduced size from 10rem to 4xl/6xl */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight uppercase">
                Redefining <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#d4af37] via-[#f9f9f9] to-[#d4af37]">
                  Urban Luxury
                </span>
              </h1>

              {/* Reduced from 2xl to base/lg */}
              <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Step into a world where premium craftsmanship meets modern aesthetics.
                Curating global luxury brands for the elite of Ahmedabad.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#collection"
                  className="w-full sm:w-auto px-8 py-4 bg-[#d4af37] text-black font-bold rounded-full uppercase text-xs tracking-widest shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={16} /> Shop Collection
                </motion.a>
                <motion.a
                  whileHover={{ backgroundColor: "rgba(212,175,55,0.1)" }}
                  href="#brands"
                  className="w-full sm:w-auto px-8 py-4 border border-[#d4af37]/30 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md transition-all text-[#d4af37]"
                >
                  Our Partners
                </motion.a>
              </div>
            </motion.div>
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

                {/* Logo Container: Size increased and rounded corner is larger */}

                <div className="relative w-44 h-22 md:w-56 md:h-28 flex items-center justify-center bg-[#d4af37]  backdrop-blur-sm rounded-[2rem] border border-white/5 transition-all duration-500 group-hover:bg-white group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]">

                  {/* Image Wrapper: Defines the maximum size the actual logo image can take */}

                  <div className="relative w-36 h-18 md:w-48 md:h-24">

                    <Image

                      src={brand.src}

                      alt={brand.name}

                      fill

                      className="object-contain transition-all duration-500"

                      sizes="(max-width: 768px) 150px, 200px"

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

      animation: scroll 35s linear infinite; /* Animation slow kar di taki bade logos clear dikhein */

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
            <Link key={idx} href={cat.link} className="group relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 block">
              <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div className="space-y-1">
                  <p className="text-[#d4af37] text-[10px] font-bold tracking-widest uppercase">{cat.count}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight uppercase">{cat.name}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transition-all group-hover:bg-[#d4af37]">
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      <section id="collection" className="container mx-auto px-4 md:px-10 py-20 bg-[#080808]/50 rounded-[3rem] border border-white/5">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 px-4">
          <div className="mb-4 md:mb-0 text-left">
            <span className="text-[#d4af37] font-bold text-[10px] uppercase tracking-[0.3em] block mb-1">Editor's Choice</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">Elite Collection</h2>
          </div>
          <motion.button
            className="flex items-center gap-2 text-white hover:text-[#d4af37] transition-all font-bold uppercase text-[10px] tracking-widest bg-white/5 px-6 py-3 rounded-full border border-white/10"
          >
            See All <ChevronRight size={14} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. PREMIUM CONTACT SECTION */}
      <section id="about" className="container mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-[#0a0a0a] to-[#050505] rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-bold text-white uppercase leading-tight">
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

      {/* Mobile Footer */}
      <div className="md:hidden fixed bottom-6 right-6 z-[60] flex flex-col items-center gap-3">

        {/* 1. Call Button (Hidden by default, slides up) */}
        <motion.a
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={isActionOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
          href="tel:7600727603"
          className={`w-12 h-12 bg-white text-black flex items-center justify-center rounded-full shadow-2xl border border-gray-200 ${!isActionOpen && 'pointer-events-none'}`}
        >
          <Phone size={20} />
        </motion.a>

        {/* 2. Map Button (Hidden by default, slides up) */}
        <motion.a
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={isActionOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
          transition={{ delay: 0.1 }}
          href="/contact"
          className={`w-12 h-12 bg-white text-black flex items-center justify-center rounded-full shadow-2xl border border-gray-200 ${!isActionOpen && 'pointer-events-none'}`}
        >
          <MapPin size={20} />
        </motion.a>

        {/* 3. Main Toggle Button (Jo hamesha dikhega) */}
        <button
          onClick={() => setIsActionOpen(!isActionOpen)}
          className="mb-10 w-14 h-14 bg-[#d4af37] text-black flex items-center justify-center rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] active:scale-90 transition-all z-10"
        >
          <motion.div
            animate={{ rotate: isActionOpen ? 45 : 0 }}
            className="flex items-center justify-center"
          >
            {/* Is icon ko aap 'Plus' ya 'Contact' icon jaisa rakh sakte hain */}
            <ArrowRight size={24} className="-rotate-90" />
          </motion.div>
        </button>

        {/* Note: Aapka WhatsApp icon iske thoda side mein ya niche reh sakta hai 
          lekin agar wo pehle se hi fixed hai, toh ye uske upar ek clean 'Contact Stack' ban jayega */}
      </div>
    </main>
  );
}

function Link({ href, children, className }: any) {
  return <a href={href} className={className}>{children}</a>;
}