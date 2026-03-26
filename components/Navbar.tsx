"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.h1 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-2xl font-black tracking-tighter text-black"
        >
          MINAL <span className="text-blue-600">FOOTWEAR</span>
        </motion.h1>
        
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-black transition-colors">Home</a>
          <a href="#collection" className="hover:text-black transition-colors">Collection</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
        </div>

        <a 
          href="https://wa.me/91XXXXXXXXXX" 
          className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all"
        >
          Contact Shop
        </a>
      </div>
    </nav>
  );
}