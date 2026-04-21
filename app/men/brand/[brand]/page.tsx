"use client";

import { useParams } from 'next/navigation';
import { products } from '../../../data/products';
import { brands } from '../../../data/brands';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Product } from '@/types';

export default function BrandCatalogPage() {
  const params = useParams();
  const brandSlug = (params?.brand as string) || "";

  const currentBrand = brands.find(b => b.id.toLowerCase() === brandSlug.toLowerCase());

  const brandProducts = currentBrand 
    ? products.filter(p => currentBrand.productIds.includes(p.id) && p.category === 'men')
    : [];

  // --- CUSTOM GROUPING LOGIC ---
  const groupedProducts = brandProducts.reduce((acc, product) => {
    const name = product.name.toLowerCase();
    let section = "OTHER COLLECTION";

    // Keywords ke basis par filter
    if (name.includes('shoe') || name.includes('sneaker') || name.includes('boot')) {
      section = "PREMIUM SHOES";
    } else if (name.includes('sandal')) {
      section = "STYLISH SANDALS";
    } else if (name.includes('chappal') || name.includes('flat') || name.includes('heel')) {
      section = "CASUAL CHAPPALS & FLATS";
    } else if (product.subCategory) {
      section = product.subCategory.toUpperCase();
    }

    if (!acc[section]) acc[section] = [];
    acc[section].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  if (!currentBrand) {
    return <div className="min-h-screen bg-[#020202] text-white flex items-center justify-center font-black">BRAND NOT FOUND</div>;
  }

  return (
    <main className="min-h-screen bg-[#020202] text-white pb-20 overflow-x-hidden">
      {/* Brand Header */}
      <section className="container mx-auto px-4 md:px-10 pt-20 pb-10">
        <Link href="/men" className="inline-flex items-center gap-2 text-[#d4af37] text-[10px] font-black uppercase tracking-[0.3em] mb-6 hover:opacity-70 transition-all">
          <ArrowLeft size={16} /> Back to Men's Section
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
              {currentBrand.name}<span className="text-[#d4af37]">.</span>
            </h1>
            <p className="text-gray-500 mt-4 uppercase tracking-[0.2em] text-xs max-w-md font-bold">
              {currentBrand.description}
            </p>
          </motion.div>
          <div className="text-right">
            <span className="text-[#d4af37] text-4xl font-black italic">{brandProducts.length}</span>
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Articles</p>
          </div>
        </div>
      </section>

      {/* Sections Based on Category */}
      <section className="container mx-auto px-4 md:px-10 space-y-24">
        {Object.keys(groupedProducts).length > 0 ? (
          Object.entries(groupedProducts).map(([sectionTitle, items]) => (
            <div key={sectionTitle} className="space-y-10">
              {/* Section Divider & Title */}
              <div className="flex items-center gap-6">
                <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white whitespace-nowrap">
                  {sectionTitle}
                </h2>
                <div className="h-[2px] w-full bg-gradient-to-r from-[#d4af37] to-transparent opacity-30" />
                <span className="text-[#d4af37] font-black text-xl italic">{items.length}</span>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                {items.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-[#d4af37]/5 rounded-[2.5rem] blur-xl group-hover:bg-[#d4af37]/10 transition-all duration-500" />
                      <div className="relative bg-[#080808] border border-white/5 rounded-[2.5rem] overflow-hidden group-hover:border-[#d4af37]/20 transition-all">
                        <ProductCard product={product} showWhatsAppButton />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="py-40 text-center">
            <p className="text-gray-600 uppercase tracking-[0.5em] text-[10px]">No inventory found.</p>
          </div>
        )}
      </section>
    </main>
  );
}