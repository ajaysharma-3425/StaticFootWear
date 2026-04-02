"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
  ArrowDown,
  Sparkles
} from 'lucide-react';
import { useRef } from 'react';

export default function ContactPage() {
  const containerRef = useRef(null);
  const whatsappNumber = '7600727603';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Minal Footwear, I need assistance with your premium collection.')}`;

  // Parallax Effect for Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#020202] text-white pb-20 overflow-x-hidden">

      {/* ========================================================
          1. NEW CINEMATIC HERO SECTION (Responsive & Premium)
      ======================================================== */}
      <section className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden border-b border-white/5">

        {/* Background Image Layer */}
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600" // Replace with your image link
            alt="Minal Footwear Office"
            className="w-full h-full object-cover opacity-30 grayscale brightness-50"
          />
          {/* Overlays for Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] opacity-90" />
          <div className="absolute inset-0 bg-[#d4af37]/5 mix-blend-overlay" />
        </motion.div>

        {/* Text Content */}
        <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-[10px] font-black tracking-[0.4em] uppercase mb-8 backdrop-blur-md">
              <Sparkles size={14} /> Global Presence
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black italic tracking-tighter leading-[0.85] mb-8">
              GET IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3cf7a] to-[#d4af37]">
                TOUCH.
              </span>
            </h1>

            <div className="w-20 h-[2px] bg-[#d4af37] mx-auto mb-10 shadow-[0_0_20px_#d4af37]" />

            <p className="max-w-xl mx-auto text-gray-400 text-xs md:text-lg font-bold uppercase tracking-[0.2em] leading-relaxed mb-10 px-4">
              Premium Footwear, Personalized Service. <br className="hidden md:block" />
              We are here to assist you 24/7.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#d4af37]"
          >
            <ArrowDown size={20} />
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          2. CONTACT CONTENT (Your Original Layout - Untouched)
      ======================================================== */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 -mt-20 md:-mt-32">

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">

          {/* CONTACT INFO CARDS */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2.5rem] backdrop-blur-md"
            >
              <h2 className="text-[#d4af37] font-black italic text-2xl mb-8 uppercase tracking-tighter">Office & Showroom</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Our Location</p>
                    <p className="text-sm md:text-lg font-medium text-gray-200 leading-snug">105, Rajendra Park Rd, Purnima nagar, Ramrajya Nagar, Odhav, Ahmedabad, Gujarat 382415, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Call / WhatsApp</p>
                    <a href={whatsappLink} className="text-lg font-black text-white hover:text-[#d4af37] transition-colors tracking-tight">
                      +91 {whatsappNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Shop Timings</p>
                    <p className="text-sm md:text-lg font-medium text-gray-200">Mon - Sun: 9:00 AM - 09:30 PM</p>
                    <p className="text-[#d4af37] text-[10px] font-bold mt-1 tracking-widest underline underline-offset-4 uppercase">Open All Week</p>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-12 pt-8 border-t border-white/5 flex gap-4">
                <a href="https://www.instagram.com/minal_foot_wear?igsh=MTdzNno0cTNpY3B2" className="p-4 bg-white/5 rounded-2xl text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all"><Instagram size={20} /></a>
                <a href="#" className="p-4 bg-white/5 rounded-2xl text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all"><Facebook size={20} /></a>
                <a href={whatsappLink} className="p-4 bg-white/5 rounded-2xl text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all"><MessageCircle size={20} /></a>
              </div>
            </motion.div>

            {/* QUICK WHATSAPP CTA */}
            <motion.a
              href={whatsappLink}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full bg-[#25D366] text-black font-black text-center py-6 rounded-[2rem] shadow-[0_20px_40px_rgba(37,211,102,0.2)] uppercase tracking-tighter text-lg"
            >
              Start Instant WhatsApp Chat
            </motion.a>
          </div>

          {/* MODERN CONTACT FORM */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 border border-white/10 p-8 md:p-14 rounded-[3rem] backdrop-blur-md relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter mb-4 uppercase">SEND A <span className="text-[#d4af37]">MESSAGE.</span></h3>
                <p className="text-gray-500 mb-10 font-medium text-sm md:text-base">Have a specific requirement? Fill the form and our luxury concierge will contact you within 2 hours.</p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em] ml-2">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#d4af37] transition-all outline-none text-white placeholder:text-gray-700 font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em] ml-2">Email Address</label>
                      <input type="email" placeholder="john@luxury.com" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#d4af37] transition-all outline-none text-white placeholder:text-gray-700 font-medium" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.2em] ml-2">Your Message</label>
                    <textarea rows={5} placeholder="I'm interested in the premium formal collection..." className="w-full bg-black/40 border border-white/10 rounded-3xl px-6 py-4 focus:border-[#d4af37] transition-all outline-none text-white placeholder:text-gray-700 font-medium resize-none"></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-white text-black font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-[#d4af37] transition-all duration-500 shadow-xl shadow-white/5"
                  >
                    Submit Inquiry <Send size={16} />
                  </motion.button>
                </form>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>

        {/* 3. GOOGLE MAPS */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 h-[350px] md:h-[500px] w-full rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl shadow-black/50"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.252709335514!2d72.6383313!3d23.0148377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e865d101b992f%3A0xb177314d0000000!2sMINAL%20FOOTWEAR!5e0!3m2!1sen!2sin!4v1711450000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </main>
  );
}