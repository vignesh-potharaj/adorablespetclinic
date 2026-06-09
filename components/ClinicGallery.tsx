"use client";

import { motion } from "framer-motion";

interface GalleryCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  colorClass: string;
  icon: React.ReactNode;
}

export default function ClinicGallery() {
  const cards: GalleryCard[] = [
    {
      id: 1,
      title: "Sterile Surgery Theatre",
      subtitle: "ISO-Class Hospital Grade",
      description: "Equipped with positive pressure ventilation, professional anaesthesia monitoring, and sterile medical layouts to ensure safety during complex procedures.",
      badge: "SURGICAL UNIT",
      colorClass: "from-emerald-500/10 to-clinic-green/20 border-emerald-500/20",
      icon: (
        <svg className="w-8 h-8 text-clinic-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Advanced Diagnostics Lab",
      subtitle: "30-Min Blood & Urine CBC",
      description: "In-house blood analysis, digital low-radiation radiography, and high-frequency ultrasound units for instant internal clinical detection.",
      badge: "DIAGNOSTIC LAB",
      colorClass: "from-blue-500/10 to-clinic-blue/20 border-blue-500/20",
      icon: (
        <svg className="w-8 h-8 text-clinic-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Luxury Grooming Spa",
      subtitle: "Organic Skin Therapy",
      description: "Custom grooming tables, deep warm-water therapeutic bathing tubs, and premium styling led by certified, gentle groomers.",
      badge: "SPA SANCTUARY",
      colorClass: "from-pink-500/10 to-purple-500/20 border-pink-500/20",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" strokeWidth={1} />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Cage-Free Boarding Suites",
      subtitle: "Climate Controlled & Homely",
      description: "Spacious play zones, soft bedding, customized dietary protocols, and 24/7 on-site veterinary nurse monitoring.",
      badge: "BOARDING STAY",
      colorClass: "from-amber-500/10 to-orange-500/20 border-amber-500/20",
      icon: (
        <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 lg:px-24 bg-soft-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-clinic-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-clinic-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs md:text-sm font-bold tracking-widest text-clinic-green uppercase mb-3 bg-clinic-green/10 px-4 py-1.5 rounded-full"
          >
            OUR SPATIAL GALLERY
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-neutral-900 tracking-tight max-w-2xl leading-none"
          >
            Inside Our State-Of-The-Art Facilities
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-neutral-500 font-medium max-w-xl mt-4 leading-relaxed"
          >
            Explore the hospital-grade architectural design of our veterinary compartments, engineered for ultimate safety, sterile requirements, and pet comfort.
          </motion.p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              className={`bg-gradient-to-br ${card.colorClass} border rounded-[2rem] p-8 shadow-sm flex flex-col gap-6 text-left group transition-all duration-300 bg-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full blur-2xl pointer-events-none group-hover:bg-white/10 transition-colors" />

              <div className="flex items-center justify-between">
                {/* Icon wrapper */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md border border-neutral-100 group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>
                
                <span className="font-sans text-[9px] font-extrabold tracking-widest text-neutral-400 bg-white/70 px-3 py-1 rounded-full border border-neutral-100 shadow-xs uppercase">
                  {card.badge}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-display font-extrabold text-xl text-neutral-900 group-hover:text-clinic-green transition-colors duration-300">
                  {card.title}
                </h3>
                <span className="font-sans text-xs font-semibold text-clinic-blue leading-none">
                  {card.subtitle}
                </span>
              </div>

              <p className="font-sans text-xs md:text-sm text-neutral-500 font-medium leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
