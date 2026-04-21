"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '@/components/ProductCard';
import { ArrowDown } from 'lucide-react';
import { useState, useRef, useMemo } from 'react';

export default function MenPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // 1. Men's products filter
  const mensProducts = products.filter(p => p.category === 'men');

  // 2. Section-wise Grouping Logic (Shoes, Sandals, Chappals)
  const groupedProducts = useMemo(() => {
    const filtered = activeFilter === 'All'
      ? mensProducts
      : mensProducts.filter(p => p.subCategory === activeFilter.toLowerCase());

    return filtered.reduce((acc, product) => {
      const name = product.name.toLowerCase();
      let section = "PREMIUM SHOES"; 

      if (name.includes('sandal')) {
        section = "STYLISH SANDALS";
      } else if (name.includes('chappal') || name.includes('flat') || name.includes('slipper')) {
        section = "CASUAL CHAPPALS";
      } else if (name.includes('boot')) {
        section = "LEATHER BOOTS";
      }

      if (!acc[section]) acc[section] = [];
      acc[section].push(product);
      return acc;
    }, {} as Record<string, typeof mensProducts>);
  }, [activeFilter, mensProducts]);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  const subCats = ['All', 'Formal', 'Sneakers', 'Boots', 'Casual'];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#020202] text-white pb-20 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600"
            alt="Men's Luxury Collection"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] opacity-90" />
        </motion.div>

        <motion.div style={{ opacity }} className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#d4af37] text-[10px] font-black tracking-[0.5em] uppercase mb-6 block">Elite Gentlemen's Choice</span>
            <h1 className="text-5xl md:text-[6rem] font-black italic tracking-tighter leading-none mb-8">
              STEP INTO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#d4af37] via-[#fff] to-[#d4af37]">POWER.</span>
            </h1>
          </motion.div>
        </motion.div>
      </section>

      {/* FILTERS SECTION */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
            {subCats.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                  activeFilter === cat ? "bg-[#d4af37] text-black border-[#d4af37]" : "border-white/10 text-gray-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="border-t border-white/5 pt-10">
             <h2 className="text-2xl md:text-3xl font-black italic uppercase">
                {activeFilter} COLLECTION
             </h2>
          </div>
        </div>
      </section>

      {/* PRODUCT CONTENT */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="space-y-20">
          {Object.entries(groupedProducts).length > 0 ? (
            Object.entries(groupedProducts).map(([sectionTitle, items]) => (
              <div key={sectionTitle} className="space-y-10">
                <div className="flex items-center gap-4">
                  <h3 className="text-3xl font-black italic text-[#d4af37] uppercase">{sectionTitle}</h3>
                  <div className="h-[1px] flex-1 bg-white/10" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {items.map((product) => (
                    <motion.div 
                      key={product.id} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-[#080808] border border-white/5 rounded-[2rem] overflow-hidden"
                    >
                      <ProductCard product={product} showWhatsAppButton />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 uppercase tracking-widest">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}