"use client";

import { useParams } from 'next/navigation';
import { products } from '../../../data/products';
import { brands } from '../../../data/brands'; // Naya brands data
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BrandCatalogPage() {
  const params = useParams();
  const brandSlug = (params?.brand as string) || "";

  // 1. Pehle ye dhoondo ki is brand ke liye kaunsi IDs assigned hain
  const currentBrand = brands.find(b => b.id.toLowerCase() === brandSlug.toLowerCase());

  // 2. Agar brand mil gaya, toh products.ts se wahi products filter karo jo is brand ki IDs list mein hain
  const brandProducts = currentBrand 
    ? products.filter(p => currentBrand.productIds.includes(p.id) && p.category === 'men')
    : [];

  if (!currentBrand) {
    return <div className="min-h-screen bg-[#020202] text-white flex items-center justify-center font-bold">BRAND NOT FOUND</div>;
  }

  return (
    <main className="min-h-screen bg-[#020202] text-white pb-20">
      {/* Brand Header */}
      <section className="container mx-auto px-4 md:px-10 pt-20 pb-10">
        <Link href="/men" className="inline-flex items-center gap-2 text-[#d4af37] text-[10px] font-black uppercase tracking-[0.3em] mb-6 hover:opacity-70">
          <ArrowLeft size={16} /> Back to Men's Section
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-10">
          <div>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
              {currentBrand.name}<span className="text-[#d4af37]">.</span>
            </h1>
            <p className="text-gray-500 mt-4 uppercase tracking-[0.2em] text-xs max-w-md">
              {currentBrand.description}
            </p>
          </div>
          <div className="text-right">
            <span className="text-[#d4af37] text-4xl font-black italic">{brandProducts.length}</span>
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Articles Available</p>
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="container mx-auto px-4 md:px-10">
        {brandProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brandProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#080808] border border-white/5 rounded-[2.5rem] overflow-hidden"
              >
                <ProductCard product={product} showWhatsAppButton />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-40 text-center">
            <p className="text-gray-600 uppercase tracking-[0.5em] text-[10px]">No shoes assigned to {currentBrand.name} yet.</p>
          </div>
        )}
      </section>
    </main>
  );
}