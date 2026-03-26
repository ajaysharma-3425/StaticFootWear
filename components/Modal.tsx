"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductModal({ shoe, isOpen, onClose }: any) {
  if (!shoe) return null;

  const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=Hi, I want to know more about ${shoe.name}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* 1. Backdrop (Peeche ka andhera) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* 2. Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/10 hover:bg-black/20 p-2 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Left Side: Large Image */}
            <div className="w-full md:w-1/2 bg-gray-100 h-[300px] md:h-auto">
              <img src={shoe.image} alt={shoe.name} className="w-full h-full object-cover" />
            </div>

            {/* Right Side: Details */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">{shoe.category}</span>
              <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase italic">{shoe.name}</h2>
              <p className="text-gray-500 mb-8 leading-relaxed italic">"{shoe.description}"</p>
              
              <div className="flex items-center gap-4 mb-10">
                <span className="text-4xl font-black text-black">{shoe.price}</span>
                <span className="text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-lg">Available In Store</span>
              </div>

              <a 
                href={whatsappUrl}
                target="_blank"
                className="bg-[#25D366] text-white text-center py-5 rounded-2xl font-black uppercase tracking-tighter hover:shadow-xl hover:shadow-green-200 transition-all active:scale-95"
              >
                Buy via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}