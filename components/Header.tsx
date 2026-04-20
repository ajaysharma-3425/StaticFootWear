"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Plus, Minus } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false); // Mobile ke liye alag state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Jab mobile menu band ho, toh brands accordion bhi reset ho jaye
  useEffect(() => {
    if (!isOpen) setMobileBrandsOpen(false);
  }, [isOpen]);

  const navLinks = [
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'Kids', href: '/kids' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Specific Brand IDs ke sath links
  const brandLinks = [
    { name: 'Men Brands', href: '/brands/men' }, // Ye aapke toggle logic par jayega
    { name: 'Women Brands', href: '/brands/women' },
    { name: 'Kids Brands', href: '/brands/kids' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/5 py-2"
          : "bg-transparent py-4"
      }`}
      style={{ fontFamily: "'Ubuntu', sans-serif" }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
          <div className="relative w-11 h-11 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105 shrink-0">
            <Image src="/images/footcare.png" alt="Minal Logo" fill className="object-contain" priority />
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <h1 className="text-2xl md:text-5xl font-[900] italic tracking-tighter text-[#FF8C00] leading-none drop-shadow-[0_2px_8px_rgba(255,140,0,0.4)] uppercase">
              MINAL
            </h1>
            <div className="flex flex-col justify-center border-l-2 border-white/20 pl-2 h-8 md:h-12">
              <span className="text-[12px] md:text-2xl font-black italic tracking-tighter text-[#4169E1] leading-none uppercase">Footwear</span>
              <span className="text-[5.5px] md:text-[14px] font-bold tracking-[0.05em] md:tracking-widest text-[#FF8C00] uppercase whitespace-nowrap mt-0.5">For Every Step Of Life</span>
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="relative" onMouseEnter={() => setIsBrandsOpen(true)} onMouseLeave={() => setIsBrandsOpen(false)}>
            <button className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-[#FF8C00] transition-colors group">
              Brands <ChevronDown size={12} className={`transition-transform duration-300 ${isBrandsOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isBrandsOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-48 bg-black/95 border border-white/10 backdrop-blur-xl rounded-xl overflow-hidden shadow-2xl">
                  {brandLinks.map((item) => (
                    <Link key={item.name} href={item.href} className="block px-6 py-3 text-[9px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#FF8C00] hover:bg-white/5 transition-all">
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-[#FF8C00] transition-colors relative group">
              {link.name} <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#FF8C00] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CONNECT & HAMBURGER */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <a href="https://wa.me/7600727603" className="px-5 py-2 bg-[#FF8C00] text-black text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-[#e67e00] transition-all shadow-lg shadow-[#FF8C00]/20">Connect</a>
          </div>
          <button className="lg:hidden text-[#FF8C00] p-1 z-[110]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 bg-black z-[105] flex flex-col pt-32 px-8 md:hidden h-screen"
          >
            <div className="flex flex-col space-y-4">
              {/* MOBILE BRANDS ACCORDION */}
              <div className="border-b border-white/5 pb-4">
                <button 
                  onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
                  className="flex items-center justify-between w-full text-3xl font-black italic text-white uppercase tracking-tighter"
                >
                  Brands
                  {mobileBrandsOpen ? <Minus className="text-[#FF8C00]" /> : <Plus className="text-[#FF8C00]" />}
                </button>
                
                <AnimatePresence>
                  {mobileBrandsOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-3 mt-4 pl-4"
                    >
                      {brandLinks.map((brand) => (
                        <Link 
                          key={brand.name} 
                          href={brand.href} 
                          onClick={() => setIsOpen(false)}
                          className="text-lg font-bold text-gray-400 uppercase tracking-widest hover:text-[#FF8C00]"
                        >
                          {brand.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* OTHER LINKS */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black italic text-white uppercase tracking-tighter border-b border-white/5 pb-4 hover:text-[#FF8C00]"
                >
                  {link.name}
                </Link>
              ))}

              <a href="tel:+917600727603" className="mt-8 text-center bg-[#FF8C00] text-black font-black tracking-widest text-sm py-5 rounded-2xl">
                CALL NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}