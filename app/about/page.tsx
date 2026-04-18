"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Users,
  History,
  Gem,
  Target,
  Award,
  Zap,
  ArrowRight,
  ArrowDown,
  Sparkles
} from 'lucide-react';
import { useRef } from 'react';

export default function AboutPage() {
  const containerRef = useRef(null);
  
  // Parallax & Fade Effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const timeline = [
    {
      year: "2011",
      title: "The Humble Beginning",
      desc: "Minal Footwear started as a small corner shop with a big dream: to provide luxury comfort to every common man.",
    },
    {
      year: "2016",
      title: "Expansion Phase",
      desc: "We reached 5,000+ happy customers and introduced our first 'Handmade Leather' series which became an instant hit.",
    },
    {
      year: "2021",
      title: "Digital Revolution",
      desc: "Started our WhatsApp-first catalog system, making it easier for customers to shop from the comfort of their homes.",
    },
    {
      year: "2026",
      title: "The Luxury Era",
      desc: "Launched this digital showroom with our 'Black & Gold' identity, focusing on ultra-premium footwear.",
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#020202] text-white pb-10 overflow-x-hidden">
      
      {/* 1. CINEMATIC HERO SECTION (Matching Men/Women Pages) */}
      <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        
        {/* BACKGROUND IMAGE WITH PARALLAX */}
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1600" // Premium Craftsmanship Image
            alt="Minal Heritage"
            className="w-full h-full object-cover opacity-25 grayscale brightness-50 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] opacity-90" />
          
          {/* Subtle Golden Glows */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#d4af37]/5 blur-[120px] rounded-full animate-pulse" />
        </motion.div>

        {/* CONTENT LAYER */}
        <motion.div style={{ opacity, y }} className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-6">
               <div className="px-4 py-1 border border-[#d4af37]/30 rounded-full bg-[#d4af37]/5 backdrop-blur-md">
                 <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
                   <Sparkles size={12} /> Established 1993
                 </span>
               </div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black italic tracking-tighter leading-[0.8] mb-8">
              CRAFTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#fff] to-[#d4af37]">
                LEGENDS.
              </span>
            </h1>

            <div className="w-24 h-[1px] bg-[#d4af37] mx-auto mb-10 shadow-[0_0_20px_#d4af37]" />

            <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-xl font-medium uppercase tracking-[0.1em] leading-relaxed mb-12 px-4 italic">
              Minal Footwear is not just a brand; <br className="hidden md:block" /> 
              it is a commitment to excellence and timeless elegance.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="text-[8px] text-gray-500 uppercase tracking-[0.5em] font-bold">The Heritage</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[#d4af37]"
            >
                <ArrowDown size={18} />
            </motion.div>
        </div>
      </section>

      {/* 2. THE 10% STRATEGY SECTION */}
      <section className="py-24 md:py-40 container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
             <div className="absolute -inset-4 bg-[#d4af37]/10 rounded-[3rem] blur-2xl" />
             <div className="relative border border-white/10 p-3 rounded-[3rem] bg-[#050505]">
                <img 
                  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000" 
                  alt="Quality"
                  className="rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-[#d4af37] text-xs font-black tracking-[0.4em] uppercase mb-4">Our First Step Together</h2>
            <h3 className="text-4xl md:text-6xl font-black italic mb-8 tracking-tighter leading-tight uppercase">
              WHY WE GIVE <span className="text-white/20">10% OFF?</span>
            </h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                Hum jante hain ki trust ek din mein nahi banta. Isiliye hum chahte hain ki aap hamari quality ko bina kisi jhijhak ke test karein. Hamara <span className="text-white font-bold italic">10% Welcome Discount</span> sirf ek offer nahi, hamari taraf se ek invitation hai.
              </p>
              <p>
                Jab aap Minal Footwear ka pehla joota pehenenge, aapko fark mehsoos hoga—wo premium leather ki khushbu aur wo perfect stitching.
              </p>
              
              <div className="pt-6 flex flex-wrap gap-4">
                <div className="px-6 py-4 bg-white/5 border border-[#d4af37]/30 rounded-2xl">
                   <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Use Coupon Code</p>
                   <p className="text-[#d4af37] font-black text-xl italic tracking-tighter">FIRSTMINAL10</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-4">Our Core Philosophy</h2>
            <div className="w-12 h-1 bg-[#d4af37] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Uncompromising Quality", desc: "Hum sirf wahi material use karte hain jo saalon tak chale. No shortcuts." },
              { icon: <Users />, title: "Customer Obsession", desc: "Aapki thakan hamara dard hai. Hum footwear design karte hain aapki comfort ke liye." },
              { icon: <Gem />, title: "Luxury Aesthetics", desc: "Har design ek masterpiece hai, jo aapko bheed se alag dikhayega." },
              { icon: <Target />, title: "Precision Fit", desc: "Har size ko humne Indian feet ke hisaab se customize kiya hai." },
              { icon: <Award />, title: "Trusted Legacy", desc: "15 saalon ka vishwas aur hazaron happy customers hamari taqat hain." },
              { icon: <History />, title: "Sustainable Style", desc: "Hum fast fashion mein nahi, timeless style mein believe karte hain." }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-black border border-white/5 hover:border-[#d4af37]/30 transition-all group"
              >
                <div className="text-[#d4af37] mb-6 group-hover:scale-110 transition-transform duration-500">
                  {pillar.icon}
                </div>
                <h4 className="text-xl font-black italic mb-4 uppercase tracking-tighter">{pillar.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. JOURNEY TIMELINE */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black italic text-center mb-24 tracking-tighter">THE TIMELINE</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-24">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`relative flex flex-col ${i % 2 === 0 ? 'md:items-start' : 'md:items-end'} w-full`}
              >
                <div className={`w-full md:w-[45%] ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-6xl md:text-8xl font-black text-white/5 absolute -top-10 left-0 md:left-auto md:right-auto opacity-50">
                    {item.year}
                  </span>
                  <h4 className="text-2xl font-black text-[#d4af37] mb-4 italic uppercase">{item.title}</h4>
                  <p className="text-gray-500 text-lg font-light leading-relaxed">{item.desc}</p>
                </div>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 bg-[#d4af37] rounded-full -translate-x-1/2 shadow-[0_0_15px_#d4af37] hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL FOUNDER MESSAGE */}
      <section className="py-32 container mx-auto px-6">
        <div className="relative bg-gradient-to-b from-white/5 to-transparent p-12 md:p-24 rounded-[4rem] text-center border border-white/5">
           <h2 className="text-2xl md:text-4xl font-black italic mb-8 leading-tight max-w-4xl mx-auto uppercase tracking-tighter">
            "Hum jootey nahi bechte, hum wo <span className="text-[#d4af37]">'First Impression'</span> bechte hain jo aap kisi room mein enter karte hi chhodte hain."
          </h2>
          <div className="flex flex-col items-center">
             <div className="w-12 h-[1px] bg-[#d4af37] mb-4" />
             <p className="text-white font-bold tracking-[0.3em] uppercase text-xs">Minal Footwear Founder</p>
             <p className="text-gray-600 text-[10px] mt-1">Ahmedabad, Gujarat</p>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-20 text-center">
         <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-12 py-5 bg-[#d4af37] text-black font-black uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all"
          >
            Connect With Us <ArrowRight size={20} />
          </motion.a>
      </section>
    </main>
  );
}