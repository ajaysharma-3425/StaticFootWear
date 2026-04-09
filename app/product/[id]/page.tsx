"use client";

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '../../data/products'; // Make sure this path is correct
import {
  MessageCircle,
  Zap,
  Truck,
  RotateCcw,
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import { useState, ReactNode, use } from 'react';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const product = products.find(p => p.id === resolvedParams.id);

  if (!product) notFound();

  const [selectedSize, setSelectedSize] = useState("");
  // selectedColor ki state ko aise update karo
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string }>(
    product.colors?.[0] && typeof product.colors[0] === 'object'
      ? product.colors[0]
      : { name: 'Black', hex: '#000000' }
  );

  const availableColors = product.colors || ['#000000', '#4A3728', '#C0C0C0'];

  const whatsappLink = `https://wa.me/7600727603?text=${encodeURIComponent(
    `Hi Minal Footwear, I'm interested in:\n\nProduct: ${product.name}\nArticle: ${product.article || 'N/A'}\nPrice: ₹${product.price}\nSize: ${selectedSize || 'Not Selected'}\nColor: ${selectedColor.name}\n\nPlease share more details.`
  )}`;

  return (
    <main className="min-h-screen  bg-[#050505] text-white pb-20">

      {/* Sleek Top Nav */}
      <nav className="fixed pt-24 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/shop" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-[#d4af37] transition-all">
            <ArrowLeft size={14} /> Back to Collection
          </Link>
          <span className="text-[10px] font-black tracking-[0.5em] text-[#d4af37] uppercase italic">Minal Footwear</span>
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-28 md:pt-36">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">

          {/* LEFT: IMAGE GALLERY - FIXED SECTION */}
          <div className="w-full lg:w-[60%] flex flex-col items-center">

            {/* FIX 1: square aspect ratio (aspect-square) set kiya hai.
              FIX 2: Max width ko limit kiya hai (max-w-xl) taaki image bahot badi na dikhe.
              FIX 3: object-contain use kiya hai taaki transparent image katne ke bajaye container ke andar adjust ho jaye.
            */}
            <div className="relative aspect-square w-full max-w-xl overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-[#0a0a0a] border border-white/5 shadow-2xl p-6 mb-8 group">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-contain p-4 transition-transform duration-1000 group-hover:scale-105" // Object-contain is KEY here
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* THUMBNAILS - Perfectly Aligned */}
            <div className="grid grid-cols-4 gap-4 w-full max-w-xl">
              {product.images.map((img, idx) => (
                <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] hover:border-[#d4af37]/50 cursor-pointer p-2 transition-all">
                  <Image src={img} alt="thumbnail" fill className="object-contain opacity-70 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CONTENT & SELECTION - Remains unchanged */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-32 h-fit space-y-8 pt-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20">
                <Zap size={10} className="text-[#d4af37]" fill="#d4af37" />
                <span className="text-[9px] font-black tracking-widest uppercase text-[#d4af37]">Limited Edition</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter uppercase leading-[0.9]">
                {product.name}
              </h1>

              {/* PRICE & DISCOUNT SECTION */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  {/* Current Price */}
                  <span className="text-4xl md:text-5xl font-black text-white">
                    ₹{product.price.toLocaleString()}
                  </span>

                  {/* 10% Discount Tag (Pill Style) */}
                  <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">
                      10% OFF
                    </span>
                  </div>
                </div>

                {/* Dynamic Savings Calculation */}
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                    You Save ₹{(product.price * 0.10).toFixed(0)} after purchase
                  </span>
                </div>
              </div>

              {/* ARTICLE & BADGE SECTION */}
              <div className="flex items-center justify-between py-4 border-y border-white/5 my-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-[0.4em] text-[#d4af37] uppercase mb-1">
                    Official Article
                  </span>
                  <p className="text-sm font-bold text-white tracking-widest">
                    # {product.article || `MNL-${product.id.slice(0, 5).toUpperCase()}`}
                  </p>
                </div>

                {/* Status Tag */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-black tracking-widest text-gray-400 uppercase">In Stock</span>
                </div>
              </div>
            </div>

            <div className="h-[1px] w-full bg-white/5" />

            {/* COLOR SELECTION */}
            {/* COLOR SELECTION UI */}
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                Color: <span className="text-white uppercase">{selectedColor.name}</span>
              </p>
              <div className="flex gap-4">
                {availableColors.map((colorObj: any, i: number) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(colorObj)}
                    style={{ backgroundColor: colorObj.hex }}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor.hex === colorObj.hex
                        ? "border-[#d4af37] scale-125 shadow-[0_0_15px_#d4af3755]"
                        : "border-transparent opacity-40 hover:opacity-100"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* SIZE SELECTION */}
            {product.sizes && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Select UK Size</p>
                  <button className="text-[9px] font-bold text-[#d4af37] underline underline-offset-4 uppercase tracking-widest">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[56px] h-12 border rounded-xl flex items-center justify-center text-xs font-bold transition-all ${selectedSize === size
                        ? "bg-[#d4af37] border-[#d4af37] text-black shadow-[0_0_20px_#d4af3733]"
                        : "bg-[#0a0a0a] border-white/5 text-white hover:border-[#d4af37]/50"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* WHATSAPP BUTTON */}
            <div className="pt-6 space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-black w-full py-5 rounded-2xl font-black uppercase tracking-tight text-lg shadow-lg hover:brightness-110 transition-all active:scale-95 group"
              >
                <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
                Enquire on WhatsApp
              </a>
              {!selectedSize && (
                <p className="text-center text-[10px] text-[#d4af37] font-bold uppercase tracking-widest animate-pulse">
                  ↑ Please pick a size first
                </p>
              )}
            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-2 gap-y-6 pt-10 border-t border-white/5">
              <TrustBadge icon={<Truck size={16} />} label="Fast Express Delivery" />
              <TrustBadge icon={<RotateCcw size={16} />} label="Easy 7 Day Exchange" />
              <TrustBadge icon={<ShieldCheck size={16} />} label="100% Genuine Product" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Chhota helper component usi file mein
function TrustBadge({ icon, label }: { icon: ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#d4af37]">{icon}</div>
      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 leading-tight">{label}</span>
    </div>
  );
}