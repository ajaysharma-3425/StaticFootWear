"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'Kids', href: '/kids' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
        ? "bg-black/95 backdrop-blur-xl border-b border-orange-600/20 py-2" 
        : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO SECTION - THE "BOARD" LAYOUT */}
        <Link href="/" className="group flex items-center gap-4">
          {/* Main Logo Image */}
          <div className="relative w-14 h-14 transition-transform group-hover:scale-105 duration-500">
            <Image 
              src="/images/footcare.png" 
              alt="Minal Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          
          {/* The Stacked Text Logic */}
          <div className="flex items-center gap-2">
            {/* 1. MINAL (Bada aur 2 line ki height ke barabar) */}
            <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter text-[#FF8C00] leading-none ">
              MINAL
            </h1>

            {/* 2. FOOTWEAR + TAGLINE (Side mein do lines mein) */}
            <div className="flex flex-col justify-center -space-y-0.5 border-l  border-white/10 pl-2">
              <span className="text-lg md:text-xl font-black italic tracking-tighter text-[#4169E1] leading-none uppercase pb-2">
                Footwear
              </span>
              <span className="text-[7px] md:text-[8px] font-bold tracking-[0.15em] text-[#FF8C00] uppercase whitespace-nowrap">
                For Every Step Of Life
              </span>
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#FF8C00] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF8C00] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* ACTION BUTTON */}
        <div className="hidden md:block">
          <a 
            href="https://wa.me/7600727603"
            className="px-6 py-2.5 bg-[#FF8C00] text-black text-[10px] font-black uppercase tracking-widest rounded-md hover:brightness-110 transition-all active:scale-95"
          >
            Connect Now
          </a>
        </div>

        {/* MOBILE MENU */}
        <button className="md:hidden text-[#FF8C00]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU CONTENT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-black z-50 flex flex-col p-8 pt-24 md:hidden"
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-5xl font-black italic text-white mb-6 uppercase tracking-tighter hover:text-[#FF8C00]">
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}