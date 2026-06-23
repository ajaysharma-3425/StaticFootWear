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
  ArrowLeft,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { useState, ReactNode, use, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const router = useRouter();
  const resolvedParams = use(params);
  const product = products.find(p => p.id === resolvedParams.id);

  if (!product) notFound();

  // Slider State management based on image indexes
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  const activeImage = product.images[currentIndex];

  // Selected Color Object State
  const [selectedColor, setSelectedColor] = useState<{ name: string; hex: string }>(
    product.colors?.[0] && typeof product.colors[0] === 'object'
      ? product.colors[0]
      : { name: 'Default', hex: '#000000' }
  );

  const availableColors = product.colors || [];

  // --- ARROW NAVIGATION HANDLERS ---
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  // --- DRAG/SWIPE LOGIC (Framer Motion) ---
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50; // Kitna swipe karne par image change ho (in pixels)
    if (info.offset.x > swipeThreshold) {
      handlePrev();
    } else if (info.offset.x < -swipeThreshold) {
      handleNext();
    }
  };

  // --- SMART FILTERING FOR RELATED PRODUCTS ---
  const relatedProducts = products
    .filter(p => {
      if (p.id === product.id) return false;
      if (product.category && p.category) {
        return p.category.toLowerCase() === product.category.toLowerCase();
      }
      const currentName = product.name.toLowerCase();
      const targetName = p.name.toLowerCase();
      if (currentName.includes('chappal') || currentName.includes('flat')) {
        return targetName.includes('chappal') || targetName.includes('flat');
      }
      if (currentName.includes('shoe') || currentName.includes('sneaker')) {
        return targetName.includes('shoe') || targetName.includes('sneaker');
      }
      return false;
    })
    .slice(0, 4);

  const whatsappLink = `https://wa.me/7600727603?text=${encodeURIComponent(
    `Hi Minal Footwear, I'm interested in:\n\nProduct: ${product.name}\nArticle: ${product.article || 'N/A'}\nPrice: ₹${product.price}\nSize: ${selectedSize || 'Not Selected'}\nColor: ${selectedColor.name}\n\nPlease share more details.`
  )}`;

  return (
    <main className="min-h-screen bg-[#050505] text-white pb-20">

      {/* Sleek Top Nav */}
      <nav className="fixed pt-24 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-[#d4af37] transition-all bg-transparent border-none cursor-pointer"
          >
            <ArrowLeft size={14} /> Back to Collection
          </button>
          <span className="text-[10px] font-black tracking-[0.5em] text-[#d4af37] uppercase italic">Minal Footwear</span>
        </div>
      </nav>

      {/* Mobile me pt-32 ya pt-36 karne se slider navbar ke niche shift ho jayega flawlessly */}
      <div className="container mx-auto px-6 pt-36 md:pt-40">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">

          {/* LEFT: SWIPABLE IMAGE GALLERY */}
          <div className="w-full lg:w-[60%] flex flex-col items-center">

            {/* Main Display Swipable Slider Container */}
            <div className="relative aspect-square w-full max-w-xl overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-[#0a0a0a] border border-white/5 shadow-2xl p-6 mb-8 group touch-none select-none">

              {/* Framer Motion Wrapper for Drag/Swipe */}
              <motion.div
                key={currentIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={handleDragEnd}
                className="relative w-full h-full cursor-grab active:cursor-grabbing"
              >
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  priority
                  draggable={false} // Prevents default browser image dragging
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-102 select-none pointer-events-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Manual Navigation Arrows (Visible on Hover Desktop / Always available) */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 border border-white/10 text-white/70 hover:text-[#d4af37] hover:border-[#d4af37]/40 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 border border-white/10 text-white/70 hover:text-[#d4af37] hover:border-[#d4af37]/40 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
              >
                <ChevronRight size={20} />
              </button>

              {/* Minimal Line Indicators bottom overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {product.images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-6 bg-[#d4af37]" : "w-1.5 bg-white/20"}`}
                  />
                ))}
              </div>
            </div>

            {/* PRODUCT GALLERY THUMBNAILS */}
            <div className="grid grid-cols-4 gap-4 w-full max-w-xl">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  onMouseEnter={() => setCurrentIndex(idx)}
                  className={`relative aspect-square rounded-2xl overflow-hidden border bg-[#0a0a0a] cursor-pointer p-2 transition-all ${currentIndex === idx ? "border-[#d4af37] shadow-[0_0_15px_#d4af3733]" : "border-white/5 hover:border-[#d4af37]/30"
                    }`}
                >
                  <Image
                    src={img}
                    alt="thumbnail"
                    fill
                    className={`object-contain transition-opacity ${currentIndex === idx ? "opacity-100" : "opacity-60 hover:opacity-100"}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CONTENT & SELECTION */}
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
                  <span className="text-4xl md:text-5xl font-black text-white">
                    ₹{product.price.toLocaleString()}
                  </span>

                  <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">
                      10% OFF
                    </span>
                  </div>
                </div>

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

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-black tracking-widest text-gray-400 uppercase">In Stock</span>
                </div>
              </div>
            </div>

            <div className="h-[1px] w-full bg-white/5" />

            {/* COLOR VARIATION */}
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                Color Variant: <span className="text-white uppercase">{selectedColor.name}</span>
              </p>
              <div className="flex gap-3">
                {availableColors.map((colorObj: any, i: number) => {
                  const variantImage = product.images[i] || product.images[0];
                  const isSelected = selectedColor.name === colorObj.name;

                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedColor(colorObj);
                        if (product.images[i]) {
                          setCurrentIndex(i); // Color variant selection updates index flawlessly
                        }
                      }}
                      className={`relative w-14 h-14 rounded-xl overflow-hidden bg-[#0a0a0a] border p-1 transition-all ${isSelected
                        ? "border-[#d4af37] scale-110 shadow-[0_0_15px_#d4af3744] opacity-100"
                        : "border-white/5 opacity-60 hover:opacity-100"
                        }`}
                    >
                      <Image
                        src={variantImage}
                        alt={colorObj.name}
                        fill
                        className="object-contain p-1"
                      />
                    </button>
                  );
                })}
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

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-white/5">
            <div className="flex flex-col mb-10">
              <span className="text-[10px] font-black tracking-[0.4em] text-[#d4af37] uppercase mb-2">
                Elevate Your Style
              </span>
              <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight">
                More Suggestions For You
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <Link
                  href={`/product/${relProduct.id}`}
                  key={relProduct.id}
                  className="group bg-[#0a0a0a] border border-white/5 rounded-2xl p-4 flex flex-col justify-between hover:border-[#d4af37]/30 transition-all duration-300"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#050505] border border-white/5 p-2 mb-4">
                    <Image
                      src={relProduct.images[0]}
                      alt={relProduct.name}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider line-clamp-1 text-gray-200 group-hover:text-[#d4af37] transition-colors">
                      {relProduct.name}
                    </h3>
                    <p className="text-sm font-bold mt-1 text-white">
                      ₹{relProduct.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function TrustBadge({ icon, label }: { icon: ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#d4af37]">{icon}</div>
      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 leading-tight">{label}</span>
    </div>
  );
}