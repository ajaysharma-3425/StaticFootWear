"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '@/components/ProductCard';
import { Star, Rocket, Smile, Zap } from 'lucide-react';
import { useState } from 'react';

export default function KidsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const kidsProducts = products.filter(p => p.category === 'kids');
  
  const subCats = ['All', 'School', 'Sports', 'Party Wear', 'Sandals'];
  
  const filteredProducts = activeTab === 'All' 
    ? kidsProducts 
    : kidsProducts.filter(p => p.subCategory === activeTab.toLowerCase());

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 overflow-hidden">
      
      {/* 1. ANIMATED HERO BACKGROUND (Floating Stars) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-40 left-[10%] text-[#d4af37]/20"
        ><Star size={40} /></motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-40 right-[15%] text-blue-500/20"
        ><Rocket size={60} /></motion.div>
      </div>

      {/* 2. PLAYFUL HEADER */}
      <section className="container mx-auto px-6 mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-bold tracking-widest uppercase mb-6">
            <Smile size={14} /> Junior Luxury Series
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4 leading-none">
            LITTLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-yellow-200 to-[#d4af37]">LEGENDS</span>
          </h1>
          <p className="text-gray-500 text-[11px] uppercase tracking-[0.3em] max-w-md mx-auto leading-relaxed">
            Comfort for their first steps, style for their big dreams. 
          </p>
        </motion.div>
      </section>

      {/* 3. BOUNCY FILTERS */}
      <section className="container mx-auto px-6 mb-12 relative z-10">
        <div className="flex flex-wrap justify-center gap-3">
          {subCats.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeTab === cat 
                ? "bg-white text-black shadow-[0_10px_20px_rgba(255,255,255,0.2)]" 
                : "bg-white/5 text-gray-400 border border-white/5 hover:border-[#d4af37]/40"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* 4. PRODUCT GRID (With Pop Animation) */}
      <section className="container mx-auto px-6 relative z-10">
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ 
                  duration: 0.4,
                  delay: idx * 0.05,
                  type: "spring", 
                  damping: 12 
                }}
                className="group relative"
              >
                {/* Glow behind card */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#d4af37]/10 to-transparent rounded-[2.5rem] blur-2xl group-hover:bg-[#d4af37]/20 transition-all" />
                
                <div className="relative bg-[#0a0a0a] border border-white/5 rounded-[2.2rem] p-2 hover:border-[#d4af37]/50 transition-all duration-500 shadow-2xl overflow-hidden">
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
          <div className="text-center py-32">
            <p className="text-gray-700 text-xs uppercase tracking-[0.5em]">Adventure Awaits Soon...</p>
          </div>
        )}
      </section>

      {/* 5. FUN FOOTER BANNER */}
      <section className="container mx-auto px-6 mt-32">
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          className="bg-gradient-to-b from-[#111] to-transparent border-t border-white/5 p-16 rounded-[4rem] text-center"
        >
          <div className="w-16 h-16 bg-[#d4af37] rounded-3xl mx-auto mb-8 rotate-12 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)]">
             <Star className="text-black" size={30} fill="black" />
          </div>
          <h2 className="text-3xl font-black italic mb-4 uppercase tracking-tighter">Growth Starts Here</h2>
          <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.3em] max-w-sm mx-auto">
            Lightweight, durable, and ready for playtime. Shop Minal Kids.
          </p>
        </motion.div>
      </section>

    </main>
  );
}