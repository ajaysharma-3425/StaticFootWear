"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  ArrowUpRight,
} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Collections", links: [
        { name: "Men's Elite", href: "/men" },
        { name: "Women's Edition", href: "/women" },
        { name: "Junior Legends", href: "/kids" }
      ]
    },
    {
      title: "Company", links: [
        { name: "Our Story", href: "/about" },
        { name: "Contact Concierge", href: "/contact" },
      ]
    },
    {
      title: "Support", links: [
        { name: "Shipping Info", href: "#" },
        { name: "WhatsApp Support", href: "https://wa.me/917600727603" },
      ]
    }
  ];

  return (
    <footer
      className="bg-[#020202] border-t border-white/5 pt-16 pb-10 overflow-hidden relative"
      style={{ fontFamily: "'Ubuntu', sans-serif" }}
    >

      {/* Decorative Golden Glow */}
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">

          {/* 1. BRAND IDENTITY (Logo & Text Set) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
              <div className="relative w-11 h-11 md:w-14 md:h-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/footcare.png"
                  alt="Minal Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex items-center gap-1.5 md:gap-2">
                <h1 className="text-2xl md:text-4xl font-[900] italic tracking-tighter text-[#FF8C00] leading-none drop-shadow-[0_2px_8px_rgba(255,140,0,0.4)] uppercase">
                  MINAL
                </h1>
                <div className="flex flex-col justify-center border-l-2 border-white/20 pl-2 h-8 md:h-12">
                  <span className="text-[12px] md:text-xl font-black italic tracking-tighter text-[#4169E1] leading-none uppercase">
                    Footwear
                  </span>
                  <span className="text-[5.5px] md:text-[12px] font-bold tracking-[0.05em] md:tracking-widest text-[#FF8C00] uppercase whitespace-nowrap mt-0.5">
                    For Every Step Of Life
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-gray-500 text-[10px] md:text-xs font-medium leading-relaxed uppercase tracking-widest max-w-sm">
              Redefining luxury footsteps since 1993. Every pair is a masterpiece crafted for your ultimate comfort and style.
            </p>

            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3, color: "#FF8C00" }}
                  href="https://www.instagram.com/minal_foot_wear?igsh=MTdzNno0cTNpY3B2"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 border border-white/10 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. QUICK LINKS (Responsive Grid) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((group, i) => (
              <div key={i}>
                <h4 className="text-[#FF8C00] text-[10px] font-black uppercase tracking-[0.3em] mb-6">{group.title}</h4>
                <ul className="space-y-4">
                  {group.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className="text-gray-500 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        {link.name} <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 3. STORE INFO */}
          <div className="lg:col-span-3">
            <h4 className="text-[#FF8C00] text-[10px] font-black uppercase tracking-[0.3em] mb-6">Visit Showroom</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-[#FF8C00] mt-1 shrink-0" />
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-loose">
                  Ahmedabad, Gujarat - 395001,<br />India
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={16} className="text-[#FF8C00] shrink-0" />
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">+91 76007 27603</p>
              </div>
              <div className="pt-6 border-t border-white/5">
                <div className="bg-gradient-to-br from-white/[0.03] to-transparent p-5 rounded-[2rem] border border-white/10 w-full relative overflow-hidden group">
                  {/* Background Decorative Glow */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF8C00]/10 blur-xl rounded-full" />

                  <h5 className="text-[#FF8C00] text-[10px] font-black uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C00] animate-pulse" />
                    Exclusive Offers
                  </h5>

                  <div className="space-y-3">
                    {/* 10% Discount Row */}
                    <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-xl border border-white/5 transition-all hover:border-[#FF8C00]/30">
                      <p className="text-gray-300 text-[9px] font-bold uppercase tracking-widest">Storewide Off</p>
                      <span className="text-white text-xs font-black italic tracking-tighter bg-[#FF8C00] px-2 py-0.5 rounded-md text-black">10% OFF</span>
                    </div>

                    {/* 5% Discount Row for Brands */}
                    <div className="flex justify-between items-center bg-white/[0.02] p-2.5 rounded-xl border border-white/5 transition-all hover:border-[#4169E1]/30">
                      <div className="flex flex-col">
                        <p className="text-gray-400 text-[8px] font-bold uppercase tracking-widest leading-none">Global Brands</p>
                        <p className="text-[7px] text-gray-600 uppercase mt-1">Nike, Skechers, Reebok, Bata</p>
                      </div>
                      <span className="text-white text-xs font-black italic tracking-tighter bg-[#4169E1] px-2 py-0.5 rounded-md">5% OFF</span>
                    </div>
                  </div>

                  <p className="text-[7px] text-gray-700 font-bold uppercase tracking-[0.2em] mt-4 italic text-center">
                    *Conditions Apply | Available on every visit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.4em] text-center">
            © {currentYear} Minal Footwear. Excellence in Every Step.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-gray-600 text-[8px] md:text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Privacy</span>
            <span className="text-gray-600 text-[8px] md:text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}