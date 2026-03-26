"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled 
        ? "bg-black/90 backdrop-blur-md border-b border-white/5 py-2" 
        : "bg-transparent py-4"
      }`}
      style={{ fontFamily: "'Ubuntu', sans-serif" }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        
        {/* LEFT SECTION: LOGO + TEXT */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Logo Image */}
          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/images/footcare.png" 
              alt="Minal Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          
          {/* Brand Text */}
          <div className="flex items-center gap-1.5">
            <h1 className="text-2xl md:text-4xl font-black italic tracking-tighter text-[#FF8C00] leading-none">
              MINAL
            </h1>

            <div className="flex flex-col justify-center border-l border-white/20 pl-1.5">
              <span className="text-[12px] pb-2 md:text-lg font-black italic tracking-tighter text-[#4169E1] leading-none uppercase">
                Footwear
              </span>
              <span className="text-[5px] md:text-[20px] font-bold tracking-widest text-[#FF8C00] uppercase whitespace-nowrap">
                For Every Step Of Life
              </span>
            </div>
          </div>
        </Link>

        {/* CENTER: DESKTOP NAV */}
        <nav className="hidden xl:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-[#FF8C00] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#FF8C00] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* RIGHT SECTION: BUTTON & HAMBURGER */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <a 
              href="https://wa.me/7600727603"
              className="px-5 py-2 bg-[#FF8C00] text-black text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-[#e67e00] transition-all"
            >
              Connect
            </a>
          </div>

          {/* Hamburger Button */}
          <button 
            className="md:hidden text-[#FF8C00] p-1 z-[110]" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 bg-black z-[105] flex flex-col justify-center p-10 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="text-4xl font-black italic text-white uppercase tracking-tighter hover:text-[#FF8C00]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                href="tel:+917600727603"
                className="mt-10 inline-block text-[#FF8C00] font-bold tracking-widest text-sm border border-[#FF8C00] px-6 py-3 rounded-xl w-fit"
              >
                CALL NOW
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}