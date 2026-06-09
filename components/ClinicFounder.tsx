"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ClinicFounder() {
  return (
    <section id="founder" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-clinic-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-clinic-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: VETERINARIAN PORTRAIT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-soft-white group">
              {/* Decorative border outline */}
              <div className="absolute inset-0 border-2 border-clinic-green/30 rounded-[2.3rem] z-10 pointer-events-none" />
              
              <Image
                src="/images/dr_srinivas_founder.png"
                alt="Dr. Mahesh Allaeni - Lead Veterinarian at Adorables Pet Clinic"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay doctor card */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/85 backdrop-blur-md rounded-2xl p-5 border border-white/10 z-20">
                <h4 className="font-display font-bold text-white text-base leading-none">
                  Dr. Mahesh Allaeni
                </h4>
                <p className="font-sans text-[10px] font-bold text-clinic-green tracking-wider uppercase mt-1.5 leading-none">
                  Lead Veterinarian
                </p>
                <p className="font-sans text-[9px] font-semibold text-slate-400 mt-1 leading-none">
                  BVSc & AH, PGDDUS (Ultrasound)
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: BIOGRAPHY & CLINIC PHILOSOPHY */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6 text-left"
          >
            <span className="font-sans text-xs md:text-sm font-bold tracking-widest text-clinic-green uppercase bg-clinic-green/10 px-4 py-1.5 rounded-full w-fit">
              LEAD VETERINARIAN
            </span>
            
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-neutral-900 tracking-tight leading-none">
              Dedicated To The Health & Happiness Of Your Pets
            </h2>
            
            <p className="font-sans text-xs md:text-sm font-semibold text-clinic-blue uppercase tracking-wider leading-none">
              Dr. Mahesh Allaeni • Ultrasound Specialist & Clinical Director
            </p>

            <div className="w-20 h-1 bg-clinic-green rounded-full" />

            {/* The provided copy paragraphs */}
            <div className="flex flex-col gap-5 font-sans text-xs md:text-sm text-neutral-600 font-medium leading-relaxed">
              <p>
                At Adorables Pet Clinic, we understand that your pets are an important part of your life. That's why we offer comprehensive services to meet all of their needs — from complete veterinary inpatient care to luxurious grooming and cage-free boarding.
              </p>
              <p>
                Established in 2021, ADORABLES has prioritized quality veterinary care for pets in Hyderabad, Telangana. Our comprehensive services include regular checkups, vaccinations, grooming, diagnostics, inpatient and boarding — a true one-stop shop for all your pet's healthcare needs.
              </p>
              <p>
                Our pet-friendly staff are committed to ensuring the health and happiness of your pets. From early-issue detection to the perfect spa day, every visit is built around your pet's comfort.
              </p>
            </div>

            {/* Ultrasound specialty badge */}
            <div className="mt-2 flex items-center gap-3 p-4 rounded-2xl bg-clinic-green/5 border border-clinic-green/15 text-clinic-green font-sans text-xs font-bold">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <span className="block text-[10px] text-neutral-400 font-bold uppercase tracking-wider leading-none">
                  Specialized Diagnostics
                </span>
                <span className="block text-neutral-700 mt-1">
                  Post-Graduate Diploma in Diagnostic Ultrasound (PGDDUS)
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
