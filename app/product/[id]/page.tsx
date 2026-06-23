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
import { useState, ReactNode, use } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

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
    const swipeThreshold = 40; // Mobile responsiveness ke liye low threshold smooth chalega
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
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 hover:text-[#d4af37] transition-all bg-transparent border-none cursor-pointer"
          >
            <ArrowLeft size={12} /> <span className="hidden xs:inline">Back to</span> Collection
          </button>
          <span className="text-[10px] md:text-[12px] font-black tracking-[0.4em] md:tracking-[0.5em] text-[#d4af37] uppercase italic">Minal Footwear</span>
        </div>
      </nav>

      <div className="container mx-auto px-4 md:px-6 pt-20 md:pt-36">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20">

          {/* LEFT: SWIPABLE IMAGE GALLERY */}
          <div className="w-full lg:w-[55%] flex flex-col items-center">

            {/* Main Display Swipable Slider Container */}
            <div className="relative aspect-[4/3] sm:aspect-square w-full max-w-xl overflow-hidden rounded-2xl md:rounded-[3rem] bg-[#0a0a0a] border border-white/5 shadow-2xl p-4 md:p-6 mb-4 md:mb-8 group touch-none select-none">
              
              {/* Framer Motion Wrapper for Drag/Swipe */}
              <motion.div
                key={currentIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={handleDragEnd}
                className="relative w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
              >
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  priority
                  draggable={false}
                  className="object-contain p-2 md:p-4 transition-transform duration-500 group-hover:scale-102 select-none pointer-events-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Manual Navigation Arrows (Desktop Only) */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-[#d4af37] hover:border-[#d4af37]/40 hidden md:flex opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-[#d4af37] hover:border-[#d4af37]/40 hidden md:flex opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
              >
                <ChevronRight size={18} />
              </button>

              {/* Minimal Line Indicators bottom overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                {product.images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-5 bg-[#d4af37]" : "w-1.5 bg-white/20"}`}
                  />
                ))}
              </div>
            </div>

            {/* PRODUCT GALLERY THUMBNAILS - Swipable list on Mobile */}
            <div className="flex md:grid md:grid-cols-4 gap-3 w-full max-w-xl overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-thin scrollbar-thumb-white/10 no-scrollbar">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative aspect-square w-16 h-16 sm:w-20 sm:h-20 md:w-auto md:h-auto flex-shrink-0 rounded-xl overflow-hidden border bg-[#0a0a0a] cursor-pointer p-1.5 transition-all ${currentIndex === idx ? "border-[#d4af37] shadow-[0_0_10px_#d4af3722]" : "border-white/5 md:hover:border-[#d4af37]/30"
                    }`}
                >
                  <Image
                    src={img}
                    alt="thumbnail"
                    fill
                    className={`object-contain transition-opacity ${currentIndex === idx ? "opacity-100" : "opacity-50 md:hover:opacity-100"}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CONTENT & SELECTION */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-28 h-fit space-y-6 md:space-y-8 pt-2 md:pt-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20">
                <Zap size={9} className="text-[#d4af37]" fill="#d4af37" />
                <span className="text-[8px] font-black tracking-widest uppercase text-[#d4af37]">Limited Edition</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black italic tracking-tighter uppercase leading-[0.95] break-words">
                {product.name}
              </h1>

              {/* PRICE & DISCOUNT SECTION */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-3">
                  <span className="text-3xl md:text-4xl font-black text-white">
                    ₹{product.price.toLocaleString()}
                  </span>

                  <div className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-md">
                    <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">
                      10% OFF
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#d4af37]">
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em]">
                    You Save ₹{(product.price * 0.10).toFixed(0)} after purchase
                  </span>
                </div>
              </div>

              {/* ARTICLE & BADGE SECTION */}
              <div className="flex items-center justify-between py-3 border-y border-white/5 my-4 md:my-6">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black tracking-[0.3em] text-[#d4af37] uppercase mb-0.5">
                    Official Article
                  </span>
                  <p className="text-xs md:text-sm font-bold text-white tracking-widest">
                    # {product.article || `MNL-${product.id.slice(0, 5).toUpperCase()}`}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] font-black tracking-widest text-gray-400 uppercase">In Stock</span>
                </div>
              </div>
            </div>

            {/* COLOR VARIATION */}
            <div className="space-y-3">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">
                Color Variant: <span className="text-white uppercase">{selectedColor.name}</span>
              </p>
              <div className="flex flex-wrap gap-2.5">
                {availableColors.map((colorObj: any, i: number) => {
                  const variantImage = product.images[i] || product.images[0];
                  const isSelected = selectedColor.name === colorObj.name;

                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedColor(colorObj);
                        if (product.images[i]) {
                          setCurrentIndex(i);
                        }
                      }}
                      className={`relative w-12 h-12 rounded-xl overflow-hidden bg-[#0a0a0a] border p-1 transition-all ${isSelected
                          ? "border-[#d4af37] scale-105 shadow-[0_0_10px_#d4af3733] opacity-100"
                          : "border-white/5 opacity-60"
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
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">Select UK Size</p>
                  <button className="text-[8px] font-bold text-[#d4af37] underline underline-offset-4 uppercase tracking-widest">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-11 border rounded-xl flex items-center justify-center text-xs font-bold transition-all ${selectedSize === size
                        ? "bg-[#d4af37] border-[#d4af37] text-black shadow-[0_0_15px_#d4af3722]"
                        : "bg-[#0a0a0a] border-white/5 text-white"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* WHATSAPP BUTTON */}
            <div className="pt-2 space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#25D366] text-black w-full py-4 rounded-2xl font-black uppercase tracking-tight text-base shadow-lg hover:brightness-110 transition-all active:scale-98 group"
              >
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                Enquire on WhatsApp
              </a>
              {!selectedSize && (
                <p className="text-center text-[9px] text-[#d4af37] font-bold uppercase tracking-widest animate-pulse">
                  ↑ Please pick a size first
                </p>
              )}
            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 pt-6 border-t border-white/5">
              <TrustBadge icon={<Truck size={14} />} label="Fast Express Delivery" />
              <TrustBadge icon={<RotateCcw size={14} />} label="Easy 7 Day Exchange" />
              <TrustBadge icon={<ShieldCheck size={14} />} label="100% Genuine Product" />
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 md:mt-24 pt-12 border-t border-white/5">
            <div className="flex flex-col mb-6 md:mb-10">
              <span className="text-[9px] font-black tracking-[0.3em] text-[#d4af37] uppercase mb-1">
                Elevate Your Style
              </span>
              <h2 className="text-xl md:text-2xl font-black italic uppercase tracking-tight">
                More Suggestions For You
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relProduct) => (
                <Link
                  href={`/product/${relProduct.id}`}
                  key={relProduct.id}
                  className="group bg-[#0a0a0a] border border-white/5 rounded-2xl p-3 md:p-4 flex flex-col justify-between hover:border-[#d4af37]/30 transition-all duration-300"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#050505] border border-white/5 p-2 mb-3">
                    <Image
                      src={relProduct.images[0]}
                      alt={relProduct.name}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-[11px] md:text-xs font-black uppercase tracking-wider line-clamp-1 text-gray-200 group-hover:text-[#d4af37] transition-colors">
                      {relProduct.name}
                    </h3>
                    <p className="text-xs md:text-sm font-bold mt-0.5 text-white">
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
    <div className="flex items-center gap-2">
      <div className="text-[#d4af37] flex-shrink-0">{icon}</div>
      <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-gray-400 leading-tight">{label}</span>
    </div>
  );
}