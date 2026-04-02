"use client";

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '@/components/ProductCard';
import { Star, Rocket, Smile, Zap, ArrowDown } from 'lucide-react';
import { useState, useRef } from 'react';

export default function KidsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const kidsProducts = products.filter(p => p.category === 'kids');
  
  // Parallax Logic
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const subCats = ['All', 'School', 'Sports', 'Party Wear', 'Sandals'];
  
  const filteredProducts = activeTab === 'All' 
    ? kidsProducts 
    : kidsProducts.filter(p => p.subCategory === activeTab.toLowerCase());

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] text-white pb-20 overflow-x-hidden">
      
      {/* 1. NEW PLAYFUL HERO SECTION */}
      <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        
        {/* BACKGROUND LAYER */}
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1600" // Playful Kids Shoes Background
            alt="Minal Kids Collection"
            className="w-full h-full object-cover opacity-30 grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-90" />
          
          {/* Floating Decorative Icons (Desktop Only for cleanliness) */}
          <div className="hidden md:block">
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/4 left-[15%] text-[#d4af37]/30"><Star size={40} /></motion.div>
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-1/4 right-[20%] text-blue-500/20"><Rocket size={50} /></motion.div>
          </div>
        </motion.div>

        {/* CONTENT LAYER */}
        <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-[10px] md:text-xs font-black tracking-widest uppercase mb-8 backdrop-blur-sm">
              <Smile size={16} /> Junior Luxury Series
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black italic tracking-tighter leading-[0.85] mb-8">
              LITTLE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-yellow-200 to-[#d4af37]">
                LEGENDS.
              </span>
            </h1>

            <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-lg font-bold uppercase tracking-[0.2em] leading-relaxed mb-10 px-4">
              Comfort for their first steps, <br className="hidden md:block"/> 
              style for their big dreams.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[#d4af37]"
            >
                <ArrowDown size={20} />
            </motion.div>
        </div>
      </section>

      {/* 2. BOUNCY FILTERS AREA */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="flex flex-col gap-12">
          
          {/* Category Pills - Better Mobile Scroll */}
          <div className="flex items-center overflow-x-auto pb-4 no-scrollbar gap-3 justify-start md:justify-center">
            {subCats.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                  activeTab === cat 
                  ? "bg-white text-black border-white shadow-[0_10px_30px_rgba(255,255,255,0.1)]" 
                  : "bg-white/5 text-gray-500 border-white/5 hover:border-[#d4af37]/40"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center justify-between border-b border-white/5 pb-8">
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
                <h2 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter">
                   {activeTab} <span className="text-gray-600">Gear</span>
                </h2>
             </div>
             <p className="text-[10px] font-bold text-[#d4af37] tracking-[0.3em] uppercase hidden sm:block">
                Minal Kids • 2026 Edition
             </p>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="container mx-auto px-4 md:px-6">
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10"
          >
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.5,
                  delay: idx * 0.05,
                  type: "spring", 
                  damping: 15 
                }}
                className="group relative"
              >
                {/* Playful Glow */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/10 via-[#d4af37]/10 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative bg-[#0a0a0a] border border-white/5 rounded-[2.2rem] p-2 hover:border-[#d4af37]/50 transition-all duration-500 overflow-hidden">
                  <ProductCard product={product} showWhatsAppButton />
                  
                  {/* Playful Badge */}
                  <div className="absolute top-5 left-5 bg-[#d4af37] text-black text-[8px] font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Zap size={10} fill="black" /> NEW HERO
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-40">
            <Rocket className="mx-auto text-gray-800 mb-4 animate-bounce" size={40} />
            <p className="text-gray-700 text-xs uppercase tracking-[0.5em]">Adventure Awaits Soon...</p>
          </div>
        )}
      </section>

      {/* 4. FUN FOOTER BANNER */}
      <section className="container mx-auto px-4 md:px-6 mt-32">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          className="bg-gradient-to-b from-white/5 to-transparent border-t border-white/5 p-12 md:p-20 rounded-[3rem] md:rounded-[5rem] text-center"
        >
          <div className="w-16 h-16 bg-[#d4af37] rounded-3xl mx-auto mb-8 rotate-12 flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.3)]">
             <Star className="text-black" size={30} fill="black" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black italic mb-6 uppercase tracking-tighter">Growth Starts Here</h2>
          <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-[0.3em] max-w-md mx-auto leading-loose">
            Lightweight, durable, and ready for playtime. <br/> Designed with love for the little ones.
          </p>
        </motion.div>
      </section>

    </main>
  );
}