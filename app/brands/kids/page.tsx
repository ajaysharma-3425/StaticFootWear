"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { kidsBrands } from '../../data/kidsBrands';

export default function KidsBrandsListingPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="text-[#d4af37] text-xs font-black tracking-[0.5em] uppercase mb-4 block">Little Explorers</span>
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase">
            Kids' <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#d4af37]/60">Brands</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-4">
            Trusted brands for happy, active feet.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {kidsBrands.map((brand) => (
            <Link href={`/kids/brand/${brand.id}`} key={brand.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-white/[0.03] border border-white/5 rounded-[2rem] flex flex-col items-center justify-center group cursor-pointer p-4 hover:border-[#d4af37]/50 transition-all"
              >
                <div className="w-16 h-16 bg-[#d4af37]/10 rounded-full mb-3 flex items-center justify-center group-hover:bg-[#d4af37] transition-all duration-500">
                  <span className="text-white group-hover:text-black font-black text-xl italic">{brand.logoText}</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors text-center">
                  {brand.name}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}