"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '@/components/ProductCard';
import { Filter, Sparkles, Heart } from 'lucide-react';
import { useState } from 'react';

export default function WomenPage() {
  const [filter, setFilter] = useState('All');
  const womenProducts = products.filter(p => p.category === 'women');
  
  const subCategories = ['All', 'Heels', 'Flats', 'Sneakers', 'Ethnic'];
  
  const filteredProducts = filter === 'All' 
    ? womenProducts 
    : womenProducts.filter(p => p.subCategory === filter.toLowerCase());

  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-20">
      
      {/* 1. ELEGANT HEADER */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-4">
             <Sparkles className="text-[#d4af37] animate-pulse" size={20} />
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4">
            WOMEN <span className="text-[#d4af37] font-light">EDITION</span>
          </h1>
          <p className="text-gray-500 text-[11px] uppercase tracking-[0.4em] font-medium max-w-lg mx-auto leading-loose">
            Where comfort meets high-fashion. Discover our curated range of premium essentials.
          </p>
        </motion.div>
      </section>

      {/* 2. SOFT FILTERS (Balanced Spacing) */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {subCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                filter === cat 
                ? "bg-[#d4af37] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. REFINED PRODUCT GRID */}
      <section className="container mx-auto px-6">
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                {/* Fixed Roundedness & Improved Spacing */}
                <div className="bg-[#080808] border border-white/5 rounded-[1.8rem] overflow-hidden hover:border-[#d4af37]/40 transition-all duration-500 p-2">
                  <div className="relative rounded-[1.4rem] overflow-hidden bg-[#111]">
                    <ProductCard product={product} showWhatsAppButton />
                    
                    {/* Soft Overlay for Labels */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                       <span className="bg-black/60 backdrop-blur-md text-[#d4af37] text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter border border-white/10">
                         {product.subCategory || 'New'}
                       </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-40 border-t border-white/5 mt-20">
            <Heart className="mx-auto text-gray-800 mb-4" size={40} />
            <p className="text-gray-600 text-[10px] uppercase tracking-widest">Coming Soon to Minal Luxury</p>
          </div>
        )}
      </section>

      {/* 4. LUXURY EXPERIENCE BANNER */}
      <section className="container mx-auto px-6 mt-32">
        <div className="bg-gradient-to-r from-white/5 via-transparent to-white/5 border-y border-white/5 py-20 px-8 rounded-[3rem] text-center">
          <h2 className="text-2xl font-black italic text-[#d4af37] mb-4 uppercase tracking-tighter">The Perfect Fit</h2>
          <p className="text-gray-500 text-xs font-light max-w-2xl mx-auto leading-relaxed italic">
            "A shoe is not only a design, but it's a part of your body language. We craft each pair with the understanding that you deserve to walk with grace and strength."
          </p>
        </div>
      </section>

    </main>
  );
}