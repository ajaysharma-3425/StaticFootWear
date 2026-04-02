"use client";

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '@/components/ProductCard';
import { Filter, Sparkles, Heart, ArrowDown, Star } from 'lucide-react';
import { useState, useRef } from 'react';

export default function WomenPage() {
  const [filter, setFilter] = useState('All');
  const womenProducts = products.filter(p => p.category === 'women');
  
  // Parallax logic
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 1.1]);

  const subCategories = ['All', 'Heels', 'Flats', 'Sneakers', 'Ethnic'];
  
  const filteredProducts = filter === 'All' 
    ? womenProducts 
    : womenProducts.filter(p => p.subCategory === filter.toLowerCase());

  return (
    <main ref={containerRef} className="min-h-screen bg-[#030303] text-white pb-20 overflow-x-hidden">
      
      {/* 1. NEW ELEGANT HERO SECTION */}
      <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
        
        {/* BACKGROUND IMAGE LAYER */}
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1600" // Premium Heels/Sandals Image
            alt="Women's Luxury Collection"
            className="w-full h-full object-cover opacity-25 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          {/* Soft Pinkish-Gold Glow for Feminine Touch */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] opacity-90" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#d4af37]/5 blur-[100px] rounded-full animate-pulse" />
        </motion.div>

        {/* CONTENT LAYER */}
        <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center mb-6">
               <Sparkles className="text-[#d4af37] animate-bounce" size={24} />
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black italic tracking-tighter leading-[0.8] mb-6">
              GRACE <br />
              <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#fff] to-[#d4af37]">
                IN EVERY STEP.
              </span>
            </h1>

            <div className="w-20 h-[1px] bg-[#d4af37] mx-auto mb-8 shadow-[0_0_15px_#d4af37]" />

            <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-lg font-medium uppercase tracking-[0.2em] leading-relaxed mb-10 px-4">
              Unleash your inner diva with our curated <br className="hidden md:block"/> 
              high-fashion essentials. Designed for the modern woman.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[8px] text-gray-500 uppercase tracking-[0.5em] font-bold">Discover Elegance</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown size={14} className="text-[#d4af37]" />
            </motion.div>
        </div>
      </section>

      {/* 2. SOFT FILTERS AREA */}
      <section className="container mx-auto px-6 mb-16 pt-10">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-wrap justify-center gap-3">
            {subCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 border ${
                  filter === cat 
                  ? "bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.2)]" 
                  : "bg-white/5 text-gray-500 border-white/5 hover:text-white hover:border-[#d4af37]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full flex items-center justify-between border-b border-white/5 pb-6">
            <h2 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter">
              Featured <span className="text-[#d4af37]">{filter}</span>
            </h2>
            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
              {filteredProducts.length} Articles Found
            </p>
          </div>
        </div>
      </section>

      {/* 3. REFINED PRODUCT GRID */}
      <section className="container mx-auto px-6">
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
          >
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative"
              >
                {/* Floating Glow on Hover */}
                <div className="absolute -inset-2 bg-[#d4af37]/5 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
                
                <div className="relative bg-[#080808] border border-white/5 rounded-[2.2rem] overflow-hidden hover:border-[#d4af37]/30 transition-all duration-500 p-2">
                  <div className="relative rounded-[1.8rem] overflow-hidden bg-[#0d0d0d]">
                    <ProductCard product={product} showWhatsAppButton />
                    <div className="absolute top-4 right-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-40">
            <Heart className="mx-auto text-gray-900 mb-4 animate-pulse" size={40} />
            <p className="text-gray-600 text-[10px] uppercase tracking-[0.4em]">Our new {filter} collection is on its way</p>
          </div>
        )}
      </section>

      {/* 4. LUXURY EXPERIENCE BANNER */}
      <section className="container mx-auto px-6 mt-32">
        <div className="bg-gradient-to-b from-white/[0.03] to-transparent border-t border-white/5 py-24 px-8 rounded-[4rem] text-center">
          <h2 className="text-3xl md:text-4xl font-black italic text-[#d4af37] mb-6 uppercase tracking-tighter">The Minal Grace</h2>
          <p className="text-gray-500 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed italic px-4">
            "A shoe is not only a design, but it's a part of your body language. We craft each pair with the understanding that you deserve to walk with grace and strength."
          </p>
          <div className="mt-8 flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} size={10} className="text-[#d4af37] fill-[#d4af37]" />)}
          </div>
        </div>
      </section>

    </main>
  );
}