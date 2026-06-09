"use client";

import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
      onClick={() => {
        const el = document.getElementById("find-us");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      className="fixed bottom-3 right-6 z-40 bg-clinic-green hover:bg-clinic-green-dark text-white shadow-xl shadow-clinic-green/30 hover:shadow-clinic-green/50 px-5 py-3.5 md:px-6 md:py-4 rounded-full flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-white/20 select-none outline-none group"
    >
      {/* Glowing heartbeat pulse ring around the floating button */}
      <span className="absolute inset-0 rounded-full border-2 border-clinic-green-light/0 group-hover:animate-ping group-hover:border-clinic-green-light/30 transition-all duration-300" />

      {/* Calendar SVG Icon */}
      <svg className="w-4 h-4 md:w-4.5 md:h-4.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      
      {/* Label Text */}
      <span className="font-sans text-xs md:text-sm font-extrabold tracking-widest uppercase">
        Book Appointment
      </span>
    </motion.button>
  );
}
