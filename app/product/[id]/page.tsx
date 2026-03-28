import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '../../data/products';
import {
  ShoppingBag,
  MessageCircle,
  Star,
  ShieldCheck,
  Zap,
  ArrowLeft,
  Truck,
  RotateCcw
} from 'lucide-react';
import Link from 'next/link';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  if (!product) notFound();

  const whatsappLink = `https://wa.me/7600727603?text=${encodeURIComponent(
    `Hi Minal Footwear, I'm interested in ${product.name} (₹${product.price}). Please share more details.`
  )}`;

  // Dummy colors agar aapke data mein nahi hain toh ye default dikhenge
  const availableColors = product.colors || ['#000000', '#4A3728', '#C0C0C0'];

  return (
    <main className="min-h-screen bg-[#050505] text-white pb-20">

      {/* 1. TOP NAVIGATION BAR (Sleek) */}
      {/* <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/men" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-[#d4af37] transition-all">
            <ArrowLeft size={14} /> Back to Collection
          </Link>
          <span className="text-[10px] font-black tracking-[0.5em] text-[#d4af37] uppercase italic">Minal Boutique</span>
        </div>
      </nav> */}

      <div className="container mx-auto px-6 pt-24 md:pt-32">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">

          {/* 2. LEFT: IMAGE GALLERY (Optimized for Mobile) */}
          <div className="w-full lg:w-[60%] space-y-4">
            <div className="relative aspect-[4/5] md:aspect-square w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-[#0a0a0a] border border-white/5 shadow-2xl group">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* THUMBNAILS (If multiple images exist) */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 hover:border-[#d4af37]/50 transition-all cursor-pointer">
                  <Image src={img} alt="thumbnail" fill className="object-cover opacity-60 hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* 3. RIGHT: CONTENT SIDEBAR (Sticky) */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-32 h-fit space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20">
                <Zap size={10} className="text-[#d4af37]" fill="#d4af37" />
                <span className="text-[9px] font-black tracking-widest uppercase text-[#d4af37]">Limited Edition</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter uppercase leading-[0.9]">
                {product.name}
              </h1>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-black text-white">₹{product.price.toLocaleString()}</span>
                <span className="text-gray-600 line-through text-lg font-light italic">₹{(product.price + 1500).toLocaleString()}</span>
              </div>

              {/* ARTICLE & BADGE SECTION */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-[0.5em] text-[#d4af37] uppercase mb-1">
                    Official Article
                  </span>
                  <p className="text-[11px] font-medium text-gray-500 tracking-[0.2em] mb-6">
                    STYLE CODE: <span className="text-white font-black">{product.article || `MNL-${product.id}`}</span>
                  </p>
                </div>

                {/* Stock Status Badge */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-black tracking-widest text-gray-400 uppercase">In Stock</span>
                </div>
              </div>
            </div>

            <div className="h-[1px] w-full bg-white/5" />

            {/* COLOR SELECTION */}
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Available Colors</p>
              <div className="flex gap-4">
                {availableColors.map((color, i) => (
                  <button
                    key={i}
                    style={{ backgroundColor: color }}
                    className={`w-8 h-8 rounded-full border-2 border-transparent hover:border-[#d4af37] transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-90`}
                    title={color}
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
                  {product.sizes.map(size => (
                    <button key={size} className="min-w-[56px] h-12 border border-white/5 rounded-xl flex items-center justify-center text-xs font-bold hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all bg-[#0a0a0a]">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* WHATSAPP CTA - THE HERO BUTTON */}
            <div className="pt-6 space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-black w-full py-5 rounded-2xl font-black uppercase tracking-tight text-lg shadow-[0_20px_50px_rgba(37,211,102,0.2)] hover:shadow-[0_25px_60px_rgba(37,211,102,0.4)] transition-all active:scale-95 group"
              >
                <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
                Inquiry on WhatsApp
              </a>
              <p className="text-center text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600">
                Guaranteed response within 10 minutes
              </p>
            </div>

            {/* LUXURY TRUST PROPS */}
            <div className="grid grid-cols-2 gap-y-6 pt-10 border-t border-white/5">
              <div className="flex items-center gap-3">
                <Truck size={16} className="text-[#d4af37]" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 leading-tight">Fast Express<br />Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw size={16} className="text-[#d4af37]" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 leading-tight">Easy 7 Day<br />Exchange</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={16} className="text-[#d4af37]" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 leading-tight">100% Genuine<br />Product</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return products.map(product => ({ id: product.id }));
}