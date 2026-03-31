"use client";

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '@/components/ProductCard';
import { LayoutGrid, Star, ArrowDown } from 'lucide-react';
import { useState, useRef } from 'react';

export default function MenPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('products');
  const mensProducts = products.filter(p => p.category === 'men');

  // Parallax Effect ke liye ref aur scroll logic
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  const subCats = ['All', 'Formal', 'Sneakers', 'Boots', 'Casual'];
  const filteredProducts = activeFilter === 'All'
    ? mensProducts
    : mensProducts.filter(p => p.subCategory === activeFilter.toLowerCase());

  return (
    <main ref={containerRef} className="min-h-screen bg-[#020202] text-white pb-20 overflow-x-hidden">

      {/* 1. NEW LUXURY HERO SECTION (Inspired by About Page) */}
      <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden border-b border-white/5">

        {/* BACKGROUND LAYER */}
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600" // Yahan Men's specific shoe image (like Black Sneakers or Formals)
            alt="Men's Luxury Collection"
            className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] opacity-90" />
          {/* Accent Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] bg-[#d4af37]/10 blur-[120px] rounded-full" />
        </motion.div>

        {/* CONTENT LAYER */}
        <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#d4af37] text-[10px] md:text-xs font-black tracking-[0.5em] uppercase mb-6 block drop-shadow-md">
              Elite Gentlemen's Choice
            </span>
            <h1 className="text-6xl md:text-5xl lg:text-[6rem] font-black italic tracking-tighter leading-[0.85] mb-8">
              STEP INTO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#d4af37] via-[#fff] to-[#d4af37]">
                POWER.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-xl font-medium uppercase tracking-tight leading-relaxed mb-10 px-4">
              Curated for those who lead, not follow. <br className="hidden md:block" />
              Premium craftsmanship for the modern Indian man.
            </p>

            {/* Quick Stats Badge */}
            <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-left">
                <p className="text-[#d4af37] text-lg font-black leading-none">{mensProducts.length}+</p>
                <p className="text-[8px] text-gray-500 uppercase font-bold tracking-widest">Designs</p>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="text-left">
                <p className="text-[#d4af37] text-lg font-black leading-none">100%</p>
                <p className="text-[8px] text-gray-500 uppercase font-bold tracking-widest">Leather</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[9px] text-gray-500 uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-[#d4af37]" />
          </motion.div>
        </div>
      </section>

      {/* 2. FILTERS AREA (Ye thoda padding-top ke sath niche shift hoga) */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="flex flex-col gap-10">

          {/* Sub-Category Pills */}
          <div className="flex items-center justify-center md:justify-start overflow-x-auto pb-4 no-scrollbar gap-3">
            {subCats.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${activeFilter === cat
                    ? "bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    : "bg-transparent text-gray-500 border-white/10 hover:border-[#d4af37]/50 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Switcher */}
          <div className="flex items-center justify-between border-t border-white/5 pt-10">
            <h2 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter">
              {activeFilter} <span className="text-[#d4af37]">Collection</span>
            </h2>
            <div className="inline-flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/10">
              <button
                onClick={() => setViewMode('products')}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${viewMode === 'products' ? 'bg-[#d4af37] text-black' : 'text-gray-400 hover:text-white'
                  }`}
              >
                <LayoutGrid size={14} /> Grid
              </button>
              <button
                onClick={() => setViewMode('brands')}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${viewMode === 'brands' ? 'bg-[#d4af37] text-black' : 'text-gray-400 hover:text-white'
                  }`}
              >
                <Star size={14} /> Brands
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC GRID CONTENT (Wahi purana logic) */}
      <section className="container mx-auto px-4 md:px-6">

        <AnimatePresence mode="wait">

          {viewMode === 'products' ? (

            <motion.div

              key="products-grid"

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              exit={{ opacity: 0, y: -20 }}

              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10"

            >

              {filteredProducts.length > 0 ? (

                filteredProducts.map((product, idx) => (

                  <motion.div

                    key={product.id}

                    layout

                    initial={{ opacity: 0, scale: 0.95 }}

                    animate={{ opacity: 1, scale: 1 }}

                    transition={{ delay: idx * 0.03 }}

                    className="group relative"

                  >

                    <div className="absolute -inset-1 bg-gradient-to-b from-[#d4af37]/10 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative bg-[#080808] border border-white/5 rounded-[2rem] overflow-hidden">

                      <ProductCard product={product} showWhatsAppButton />

                      <div className="absolute top-4 left-4">

                        <div className="w-[2px] h-6 bg-[#d4af37]/30 rounded-full group-hover:bg-[#d4af37] transition-colors" />

                      </div>

                    </div>

                  </motion.div>

                ))

              ) : (

                <div className="col-span-full py-32 text-center">

                  <p className="text-gray-600 text-[10px] uppercase tracking-[0.4em]">No articles found in {activeFilter}</p>

                </div>

              )}

            </motion.div>

          ) : (

            <motion.div

              key="brands-grid"

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              exit={{ opacity: 0, y: -20 }}

              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"

            >

              {['Nike', 'Adidas', 'Bata', 'Puma', 'Reebok', 'Skechers'].map((brand) => (

                <motion.div

                  key={brand}

                  whileHover={{ scale: 1.02 }}

                  whileTap={{ scale: 0.98 }}

                  className="aspect-square bg-white/[0.03] border border-white/5 rounded-[2rem] flex flex-col items-center justify-center group cursor-pointer p-4"

                >

                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#d4af37]/10 rounded-full mb-3 flex items-center justify-center group-hover:bg-[#d4af37] transition-all duration-500">

                    <span className="text-white group-hover:text-black font-black text-lg md:text-xl italic">{brand[0]}</span>

                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors text-center">{brand}</p>

                </motion.div>

              ))}

            </motion.div>

          )}

        </AnimatePresence>

      </section>



      {/* 4. FOOTER PROMO */}

      <section className="container mx-auto px-4 md:px-6 mt-24 md:mt-32">

        <div className="bg-gradient-to-b from-white/[0.03] to-transparent border-t border-white/5 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] text-center">

          <h3 className="text-[9px] md:text-[10px] font-bold tracking-[0.5em] text-[#d4af37] uppercase mb-4">The Gentleman's Promise</h3>

          <p className="max-w-xl mx-auto text-gray-500 text-xs md:text-sm font-light italic leading-relaxed px-4">

            "Shoes make the man. We ensure every pair you choose reflects your ambition and taste for the finer things in life."

          </p>

        </div>

      </section>

    </main>
  );
}