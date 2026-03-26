"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ShieldCheck,
  Truck,
  Star,
  Award,
  Users,
  History,
  Gem,
  Target,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { useRef } from 'react';

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
    <main ref={containerRef} className="min-h-screen bg-[#020202] text-white pt-20 md:pt-24 pb-10 overflow-x-hidden">
      {/* /* --- Updated About Hero Section with Background Image --- */}

      <section className="relative h-screen md:h-[90vh] flex items-center justify-center border-b border-white/5 overflow-hidden">

        {/* 1. BACKGROUND IMAGE LAYER */}
        <div className="absolute inset-0 z-0">
          {/* Low Opacity Shoe Image */}
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1500" // Aap yahan apni shoe image ka path daal sakte hain
            alt="Background Shoes"
            className="w-full h-full object-cover opacity-20 grayscale" // Opacity 20% rakhi hai taaki text bright dikhe
          />
          {/* Dark Gradient Overlay for extra text punch */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] opacity-80" />

          {/* Abstract Glow (Aapka purana glow bhi maintain kiya hai) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#d4af37]/10 blur-[120px] rounded-full" />
        </div>

        <motion.div
          style={{ opacity }}
          className="container mx-auto px-4 sm:px-6 relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#d4af37] text-[11px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-4 sm:mb-6 block drop-shadow-md">
              Our Legacy • Our Passion
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic tracking-tighter leading-[1.1] sm:leading-none mb-6 sm:mb-8 drop-shadow-2xl">
              CRAFTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#d4af37] via-[#f3cf7a] to-[#d4af37]">
                LEGENDS.
              </span>
            </h1>
            <div className="w-16 sm:w-24 h-[1px] bg-[#d4af37] mx-auto mb-8 sm:mb-12 shadow-[0_0_10px_#d4af37]" />

            {/* Is text ko humne pure white rakha hai for brightness */}
            <p className="max-w-3xl mx-auto text-white/90 sm:text-gray-300 text-base sm:text-lg md:text-2xl font-medium leading-relaxed uppercase tracking-tight px-4 drop-shadow-md">
              Minal Footwear is not a brand; it’s a commitment to excellence.
              Founded in the heart of Ahmedabad, we have redefined what it means to walk with confidence.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            Discover More
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-[#d4af37] to-transparent"
          />
        </div>
      </section>

      {/* 2. THE 10% OFF STRATEGY (The Hook) */}
      <section className="py-20 sm:py-32 container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-[#d4af37]/20 blur-3xl rounded-full" />
            <div className="relative border-2 border-[#d4af37]/30 rounded-[2rem] sm:rounded-[3rem] p-3 sm:p-4">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000"
                alt="Premium leather shoe craftsmanship"
                className="rounded-[1.5rem] sm:rounded-[2.5rem] w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-[#d4af37] text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-3 sm:mb-4">
              The First Step
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black italic mb-6 sm:mb-8 tracking-tighter">
              WHY WE GIVE <br className="hidden sm:block" /> 10% DISCOUNT?
            </h3>
            <div className="space-y-5 sm:space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed">
              <p>
                Hum jante hain ki trust ek din mein nahi banta. Isiliye hum chahte hain ki aap hamari quality ko bina kisi jhijhak ke test karein. Hamara **10% Welcome Discount** sirf ek offer nahi, hamari taraf se ek invitation hai.
              </p>
              <p>
                Jab aap Minal Footwear ka pehla joota pehenenge, aapko fark mehsoos hoga—wo premium leather ki khushbu, wo memory foam ka aaram, aur wo perfect stitching. Hum confident hain ki pehli kharidari ke baad aap hamesha ke liye hamare family member ban jayenge.
              </p>
              <ul className="space-y-3 sm:space-y-4 pt-4">
                <li className="flex items-center gap-3 text-white font-bold italic underline decoration-[#d4af37] decoration-2">
                  <Zap size={18} className="text-[#d4af37] flex-shrink-0" /> Use Code: FIRSTMINAL10
                </li>
                <li className="flex items-center gap-3 text-white font-bold italic underline decoration-[#d4af37] decoration-2">
                  <Zap size={18} className="text-[#d4af37] flex-shrink-0" /> Valid on All Premium Collections
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE VALUES (Grid of 6) */}
      <section className="py-20 sm:py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-black italic tracking-tighter mb-3 sm:mb-4 uppercase">
              Our Core Philosophy
            </h2>
            <p className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs">
              The 6 Pillars of Minal Footwear
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
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
                whileHover={{ y: -8, borderColor: "#d4af37" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-black border border-white/10 transition-all group"
              >
                <div className="text-[#d4af37] mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 w-8 h-8 sm:w-10 sm:h-10">
                  {pillar.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 italic tracking-tight">{pillar.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. JOURNEY TIMELINE (Vertical Layout - Fully Responsive) */}
      <section className="py-20 sm:py-32 container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic text-center mb-16 sm:mb-24 tracking-tighter">
          THE TIMELINE
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line - hidden on very small but visible from sm */}
          <div className="hidden sm:block absolute left-6 md:left-8 top-0 bottom-0 w-[1px] bg-[#d4af37]/30" />

          <div className="space-y-12 sm:space-y-20">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-8 sm:pl-16 md:pl-20"
              >
                {/* Dot marker */}
                <div className="absolute left-0 sm:left-[1.35rem] md:left-[1.85rem] top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#d4af37] shadow-[0_0_12px_#d4af37]" />

                {/* Year - responsive positioning */}
                <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white/10 absolute -top-6 sm:-top-8 left-8 sm:left-16 md:left-20">
                  {item.year}
                </span>

                <div className="pt-6 sm:pt-0">
                  <h4 className="text-xl sm:text-2xl font-bold text-[#d4af37] mb-2 sm:mb-4 italic uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE FOUNDER'S MESSAGE */}
      <section className="py-20 sm:py-32 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] md:rounded-[4rem] border border-[#d4af37]/20 relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
          <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-[#d4af37] rounded-tl-[2rem] sm:rounded-tl-[3rem] md:rounded-tl-[4rem]" />
          <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-r-2 border-[#d4af37] rounded-br-[2rem] sm:rounded-br-[3rem] md:rounded-br-[4rem]" />

          <h2 className="text-xl sm:text-2xl md:text-3xl font-black italic mb-6 sm:mb-8 leading-relaxed">
            "Hum jootey nahi bechte, hum wo 'First Impression' bechte hain jo aap kisi room mein enter karte hi chhodte hain."
          </h2>
          <p className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-2">
            — Minal Footwear Founder
          </p>
          <p className="text-gray-500 text-[10px] sm:text-xs italic">Ahmedabad, Gujarat</p>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="py-16 sm:py-20 text-center container mx-auto px-4 sm:px-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block w-full sm:w-auto p-[1.5px] rounded-full bg-gradient-to-r from-[#d4af37] via-white to-[#d4af37]"
        >
          <a
            href="/contact"
            className="block w-full sm:inline-flex px-8 sm:px-12 md:px-16 py-4 sm:py-5 bg-black rounded-full items-center justify-center gap-3 text-white font-black uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 hover:bg-black/90"
          >
            Connect With Us <ArrowRight size={18} className="text-[#d4af37]" />
          </a>
        </motion.div>
      </section>
    </main>
  );
}