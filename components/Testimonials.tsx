"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/clinicData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Visual accents */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-clinic-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-clinic-blue/5 rounded-full blur-3xl pointer-events-none" />

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
            PATIENT PARENT STORIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-neutral-900 tracking-tight max-w-2xl leading-none"
          >
            Loved By Pets, Trusted By Families
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-neutral-500 font-medium max-w-xl mt-4 leading-relaxed"
          >
            Discover the experiences of local pet parents who trust Adorables for routine health checkups, grooming, and life-saving critical procedures.
          </motion.p>
        </div>

        {/* TESTIMONIALS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-soft-white rounded-3xl p-8 border border-neutral-100 shadow-sm flex flex-col justify-between relative"
            >
              {/* Quote symbol */}
              <div className="absolute top-6 right-8 text-clinic-green/15 font-serif text-7xl select-none font-bold">
                “
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-xs md:text-sm text-neutral-600 font-medium leading-relaxed italic mb-6 relative z-10">
                  "{item.text}"
                </p>
              </div>

              {/* Doctor / Treatment Attribution */}
              <div className="mt-auto">
                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-clinic-green/5 border border-clinic-green/10 text-clinic-green font-sans text-[10px] font-bold uppercase tracking-wider">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  Treated By: {item.doctorMentioned}
                </div>

                <div className="w-full h-px bg-neutral-200/50 mb-4" />

                {/* Author Info */}
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-sm text-neutral-900 leading-none">
                    {item.name}
                  </span>
                  <span className="font-sans text-[10px] font-bold text-neutral-400 tracking-wider uppercase mt-1">
                    {item.petName}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
