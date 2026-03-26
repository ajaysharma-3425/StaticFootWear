"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  ShoppingBag 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Collections", links: [
      { name: "Men's Elite", href: "/men" },
      { name: "Women's Edition", href: "/women" },
      { name: "Junior Legends", href: "/kids" }
    ]},
    { title: "Company", links: [
      { name: "Our Story", href: "/about" },
      { name: "Contact Concierge", href: "/contact" },
      { name: "Privacy Policy", href: "#" }
    ]},
    { title: "Support", links: [
      { name: "Shipping Info", href: "#" },
      { name: "WhatsApp Support", href: "https://wa.me/91XXXXXXXXXX" },
      { name: "Store Locator", href: "/contact" }
    ]}
  ];

  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
      
      {/* Decorative Golden Glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* 1. BRAND IDENTITY (4 Columns) */}
          <div className="lg:col-span-4">
            <Link href="/" className="group flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#d4af37] rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <ShoppingBag size={24} className="text-black" />
              </div>
              <span className="text-3xl font-black tracking-tighter text-white uppercase italic">
                Minal <span className="text-[#d4af37] not-italic font-light">Footwear</span>
              </span>
            </Link>
            <p className="text-gray-500 text-xs font-medium leading-relaxed uppercase tracking-widest mb-8 max-w-sm">
              Redefining luxury footsteps since 2011. Every pair is a masterpiece crafted for your ultimate comfort and style.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, color: "#d4af37" }}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 border border-white/10 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2. QUICK LINKS (6 Columns) */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((group, i) => (
              <div key={i}>
                <h4 className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.3em] mb-6">{group.title}</h4>
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

          {/* 3. STORE INFO (3 Columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.3em] mb-6">Visit Our Showroom</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-[#d4af37] mt-1 shrink-0" />
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-loose">
                  123 Fashion Luxury Street,<br />Surat, Gujarat - 395001
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={16} className="text-[#d4af37] shrink-0" />
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">+91 98765 43210</p>
              </div>
              <div className="pt-4 border-t border-white/5">
                 <p className="text-[#d4af37] text-[9px] font-black uppercase tracking-[0.4em]">Get 10% Off</p>
                 <p className="text-gray-600 text-[9px] mt-1 font-bold uppercase tracking-widest italic">On your first in-store purchase</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[9px] font-bold uppercase tracking-[0.4em]">
            © {currentYear} Minal Footwear. Designed for Excellence.
          </p>
          <div className="flex items-center gap-8">
             <span className="text-gray-600 text-[9px] font-bold uppercase tracking-widest">Privacy</span>
             <span className="text-gray-600 text-[9px] font-bold uppercase tracking-widest">Terms</span>
             <span className="text-gray-600 text-[9px] font-bold uppercase tracking-widest">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}