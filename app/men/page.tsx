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

      {/* HERO SECTION */}
      <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden border-b border-white/5">

        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600"
            alt="Men's Luxury Collection"
            className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] opacity-90" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] bg-[#d4af37]/10 blur-[120px] rounded-full" />
        </motion.div>

        <motion.div style={{ opacity }} className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#d4af37] text-[8px] sm:text-[10px] md:text-xs font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-4 sm:mb-6 block drop-shadow-md">
              Elite Gentlemen's Choice
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-[6rem] font-black italic tracking-tighter leading-[1.1] sm:leading-[0.85] mb-6 sm:mb-8">
              STEP INTO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#d4af37] via-[#fff] to-[#d4af37]">
                POWER.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-xs sm:text-sm md:text-xl font-medium uppercase tracking-tight leading-relaxed mb-8 sm:mb-10 px-4">
              Curated for those who lead, not follow. <br className="hidden md:block" />
              Premium craftsmanship for the modern Indian man.
            </p>

            <div className="inline-flex items-center gap-4 sm:gap-6 px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-left">
                <p className="text-[#d4af37] text-base sm:text-lg font-black leading-none">{mensProducts.length}+</p>
                <p className="text-[7px] sm:text-[8px] text-gray-500 uppercase font-bold tracking-widest">Designs</p>
              </div>
              <div className="w-[1px] h-6 sm:h-8 bg-white/10" />
              <div className="text-left">
                <p className="text-[#d4af37] text-base sm:text-lg font-black leading-none">100%</p>
                <p className="text-[7px] sm:text-[8px] text-gray-500 uppercase font-bold tracking-widest">Leather</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3">
          <span className="text-[8px] sm:text-[9px] text-gray-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-[#d4af37]" />
          </motion.div>
        </div>
      </section>

      {/* FILTERS AREA */}
      <section className="container mx-auto px-4 md:px-6 py-12 sm:py-16">
        <div className="flex flex-col gap-8 sm:gap-10">

          <div className="flex items-center justify-start overflow-x-auto pb-4 no-scrollbar gap-2 sm:gap-3 scrollbar-hide">
            {subCats.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap px-4 sm:px-8 py-2 sm:py-3 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all border ${
                  activeFilter === cat
                    ? "bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    : "bg-transparent text-gray-500 border-white/10 hover:border-[#d4af37]/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/5 pt-8 sm:pt-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black italic uppercase tracking-tighter">
              {activeFilter} <span className="text-[#d4af37]">Collection</span>
            </h2>
            <div className="inline-flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/10">
              <button
                onClick={() => setViewMode('products')}
                className={`flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all ${
                  viewMode === 'products' ? 'bg-[#d4af37] text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                <LayoutGrid size={14} /> Grid
              </button>
              <button
                onClick={() => setViewMode('brands')}
                className={`flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all ${
                  viewMode === 'brands' ? 'bg-[#d4af37] text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Star size={14} /> Brands
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC GRID CONTENT */}
      <section className="container mx-auto px-4 md:px-6">

        <AnimatePresence mode="wait">

          {viewMode === 'products' ? (

            <motion.div
              key="products-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10"
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
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4"
            >
              {['Nike', 'Adidas', 'Bata', 'Puma', 'Reebok', 'Skechers'].map((brand) => (
                <motion.div
                  key={brand}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="aspect-square bg-white/[0.03] border border-white/5 rounded-[2rem] flex flex-col items-center justify-center group cursor-pointer p-3 sm:p-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#d4af37]/10 rounded-full mb-2 sm:mb-3 flex items-center justify-center group-hover:bg-[#d4af37] transition-all duration-500">
                    <span className="text-white group-hover:text-black font-black text-base sm:text-lg md:text-xl italic">{brand[0]}</span>
                  </div>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors text-center">{brand}</p>
                </motion.div>
              ))}
            </motion.div>

          )}

        </AnimatePresence>

      </section>

      {/* FOOTER PROMO */}
      <section className="container mx-auto px-4 md:px-6 mt-20 sm:mt-24 md:mt-32">
        <div className="bg-gradient-to-b from-white/[0.03] to-transparent border-t border-white/5 p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] text-center">
          <h3 className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.3em] sm:tracking-[0.5em] text-[#d4af37] uppercase mb-3 sm:mb-4">The Gentleman's Promise</h3>
          <p className="max-w-xl mx-auto text-gray-500 text-xs sm:text-sm md:text-base font-light italic leading-relaxed px-2 sm:px-4">
            "Shoes make the man. We ensure every pair you choose reflects your ambition and taste for the finer things in life."
          </p>
        </div>
      </section>

    </main>
  );
}