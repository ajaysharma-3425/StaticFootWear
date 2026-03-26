"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight, Zap } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  subCategory?: string;
  isFeatured?: boolean;
}

interface ProductCardProps {
  product: Product;
  showWhatsAppButton?: boolean;
}

export default function ProductCard({ product, showWhatsAppButton = false }: ProductCardProps) {
  const whatsappLink = `https://wa.me/7600727603?text=${encodeURIComponent(
    `I'm interested in ${product.name} - ₹${product.price}. Please share more details.`
  )}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#080808] border border-white/5 rounded-[2rem] p-3 transition-all duration-500 hover:border-[#d4af37]/30"
    >
      {/* 1. IMAGE CONTAINER */}
      <div className="relative aspect-square overflow-hidden rounded-[1.6rem] bg-[#111]">
        <Link href={`/product/${product.id}`}>
          <Image 
            src={product.images[0]} 
            alt={product.name} 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
          />
        </Link>

        {/* Floating Badge */}
        {product.isFeatured && (
          <div className="absolute top-3 left-3 bg-[#d4af37] text-black text-[8px] font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <Zap size={10} fill="black" /> FEATURED
          </div>
        )}

        {/* Quick View Overlay (Desktop Only) */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none md:pointer-events-auto">
          <Link 
            href={`/product/${product.id}`}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#d4af37] transition-colors translate-y-4 group-hover:translate-y-0 duration-300"
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>

      {/* 2. PRODUCT DETAILS */}
      <div className="mt-5 px-2 pb-2">
        <div className="flex justify-between items-start mb-1">
          <Link href={`/product/${product.id}`}>
            <h3 className="text-white text-[11px] font-bold uppercase tracking-[0.2em] group-hover:text-[#d4af37] transition-colors leading-tight truncate max-w-[150px]">
              {product.name}
            </h3>
          </Link>
          <span className="text-[#d4af37] text-[10px] font-black tracking-widest italic">
            ₹{product.price.toLocaleString()}
          </span>
        </div>
        
        <p className="text-gray-600 text-[9px] font-bold uppercase tracking-[0.3em] mb-4">
          {product.subCategory || "Premium Edition"}
        </p>

        {/* 3. WHATSAPP ACTION */}
        {showWhatsAppButton && (
          <motion.a 
            whileTap={{ scale: 0.95 }}
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 hover:bg-[#25D366] hover:text-black hover:border-[#25D366] transition-all duration-300 group/btn"
          >
            <MessageCircle size={14} className="group-hover/btn:fill-black" />
            Enquire Now
          </motion.a>
        )}
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}