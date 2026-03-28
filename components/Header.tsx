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
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/5 py-2"
          : "bg-transparent py-4"
        }`}
      style={{ fontFamily: "'Ubuntu', sans-serif" }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* LEFT SECTION: LOGO + TEXT (Improved Visibility for Mobile) */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
          {/* Logo Image - Mobile par thoda bada kiya */}
          <div className="relative w-11 h-11 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105 shrink-0">
            <Image
              src="/images/footcare.png"
              alt="Minal Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Brand Text - Mobile visibility fixed */}
          <div className="flex items-center gap-1.5 md:gap-2">
            <h1 className="text-2xl md:text-5xl font-[900] italic tracking-tighter text-[#FF8C00] leading-none drop-shadow-[0_2px_8px_rgba(255,140,0,0.4)] uppercase">
              MINAL
            </h1>

            {/* Vertical Line with consistent height */}
            <div className="flex flex-col justify-center border-l-2 border-white/20 pl-2 h-8 md:h-12">
              <span className="text-[12px] md:text-2xl font-black italic tracking-tighter text-[#4169E1] leading-none uppercase">
                Footwear
              </span>
              <span className="text-[5.5px] md:text-[14px] font-bold tracking-[0.05em] md:tracking-widest text-[#FF8C00] uppercase whitespace-nowrap mt-0.5">
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
              className="px-5 py-2 bg-[#FF8C00] text-black text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-[#e67e00] transition-all shadow-lg shadow-[#FF8C00]/20"
            >
              Connect
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-[#FF8C00] p-1 z-[110] outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU (Universal Access Fix) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black/98 backdrop-blur-xl z-[105] flex flex-col justify-center p-8 md:hidden h-screen w-screen"
          >
            {/* Background Abstract Glow */}
            <div className="absolute top-1/4 -right-20 w-64 h-64 bg-[#FF8C00]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col space-y-6 relative z-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black italic text-white uppercase tracking-tighter hover:text-[#FF8C00] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-10 flex flex-col gap-4"
              >
                <a
                  href="tel:+917600727603"
                  className="inline-block text-center bg-[#FF8C00] text-black font-black tracking-widest text-xs px-8 py-4 rounded-xl w-full"
                >
                  CALL NOW
                </a>
                <p className="text-[8px] text-center text-white/30 tracking-[0.5em] uppercase">
                  Ahmedabad's Premium Footwear
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}