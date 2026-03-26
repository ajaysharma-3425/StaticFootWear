"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '@/components/ProductCard';
import { SlidersHorizontal, ChevronDown, LayoutGrid } from 'lucide-react';
import { useState } from 'react';

export default function MenPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const mensProducts = products.filter(p => p.category === 'men');
  
  // Sub-categories for Men
  const subCats = ['All', 'Formal', 'Sneakers', 'Boots', 'Casual'];
  
  const filteredProducts = activeFilter === 'All' 
    ? mensProducts 
    : mensProducts.filter(p => p.subCategory === activeFilter.toLowerCase());

  return (
    <main className="min-h-screen bg-[#020202] text-white pt-28 pb-20">
      
      {/* 1. MINIMALIST HEADER */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[#d4af37] text-[10px] font-bold tracking-[0.4em] uppercase mb-2 block">
              Premium Series
            </span>
            <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase">
              MEN'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f3cf7a]">FOOTWEAR</span>
            </h1>
          </motion.div>

          {/* Small & Sleek Stats */}
          <div className="flex gap-8 items-center text-[10px] font-bold tracking-widest text-gray-500 uppercase">
            <div>
              <p className="text-[#d4af37] mb-1">{mensProducts.length}</p>
              <p>Articles</p>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div>
              <p className="text-[#d4af37] mb-1">Handmade</p>
              <p>Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SMART FILTERS (Small Font Style) */}
      <section className="container mx-auto px-6 mb-16">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {subCats.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                  activeFilter === cat 
                  ? "bg-[#d4af37] text-black border-[#d4af37]" 
                  : "bg-transparent text-gray-400 border-white/10 hover:border-[#d4af37]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-white/10 px-4 py-2 rounded-lg hover:text-[#d4af37] transition-colors">
            <SlidersHorizontal size={14} /> Refine Search
          </button>
        </div>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="container mx-auto px-6">
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12"
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative"
                >
                  {/* Glowing Background Effect on Hover */}
                  <div className="absolute -inset-1 bg-gradient-to-b from-[#d4af37]/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-[#080808] border border-white/5 rounded-[2rem] overflow-hidden">
                    <ProductCard product={product} showWhatsAppButton />
                    
                    {/* Small Aesthetic Detail */}
                    <div className="absolute top-4 left-4">
                      <div className="w-1 h-8 bg-[#d4af37]/30 rounded-full group-hover:bg-[#d4af37] transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-32 text-center">
                <p className="text-gray-600 text-xs uppercase tracking-[0.4em]">No articles found in {activeFilter}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 4. FOOTER BANNER (Minor Promo) */}
      <section className="container mx-auto px-6 mt-32">
        <div className="bg-gradient-to-b from-white/5 to-transparent border-t border-white/5 p-12 rounded-[3rem] text-center">
          <h3 className="text-[10px] font-bold tracking-[0.5em] text-[#d4af37] uppercase mb-4">The Gentleman's Promise</h3>
          <p className="max-w-xl mx-auto text-gray-500 text-sm font-light italic leading-relaxed">
            "Shoes make the man. We ensure every pair you choose reflects your ambition and taste for the finer things in life."
          </p>
        </div>
      </section>

    </main>
  );
}