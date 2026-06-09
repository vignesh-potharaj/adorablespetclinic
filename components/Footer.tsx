"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO } from "@/data/clinicData";
import logoImg from "@/public/logo/adorables-logo-DJvvbTF0.jpg";

export default function Footer() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <footer id="find-us" className="bg-clinic-blue-dark text-white pt-20 pb-10 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-clinic-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10 relative z-10">
        {/* LEFT COLUMN: BRAND INFO & CLINIC HOURS */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Link href="/" className="flex items-center">
            <div className="relative rounded-xl overflow-hidden border-2 border-clinic-green bg-white shadow-md p-1 flex items-center justify-center">
              <Image
                src={logoImg}
                alt="Adorables Pet Clinic Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          <p className="font-sans text-xs md:text-sm text-slate-400 font-medium leading-relaxed max-w-sm">
            Premium, compassionate, and advanced veterinary care for the Hyderabad pet community. Located conveniently in Banjara Hills.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {/* Address */}
            <div className="flex items-start gap-3 text-slate-300">
              <svg className="w-5 h-5 text-clinic-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-sans text-xs md:text-sm font-medium">
                {CONTACT_INFO.address}
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-slate-300">
              <svg className="w-5 h-5 text-clinic-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${CONTACT_INFO.email}`} className="font-sans text-xs md:text-sm font-medium hover:text-white transition-colors">
                {CONTACT_INFO.email}
              </a>
            </div>

            {/* Timings */}
            <div className="flex items-center gap-3 text-slate-300">
              <svg className="w-5 h-5 text-clinic-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-sans text-xs md:text-sm font-medium">
                {CONTACT_INFO.timings}
              </span>
            </div>
          </div>

          {/* EMERGENCY HIGHLIGHT */}
          <div className="p-5 rounded-2xl bg-red-950/40 border border-red-900/30 flex items-start gap-4 mt-2 max-w-sm">
            <span className="relative flex h-3 w-3 mt-1.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm text-red-400">
                24/7 MEDICAL EMERGENCY
              </span>
              <span className="font-sans text-xs text-slate-300 font-semibold mt-1">
                For trauma, breathing issues, or poisoning, call us immediately at{" "}
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`} className="text-white underline font-bold hover:text-clinic-green transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE APPOINTMENT FORM */}
        <div className="lg:col-span-7 bg-white/5 rounded-3xl p-6 md:p-8 border border-white/10 backdrop-blur-sm">
          <h3 className="font-display font-extrabold text-xl md:text-2xl text-white mb-2">
            Request An Appointment
          </h3>
          <p className="font-sans text-xs md:text-sm text-slate-400 font-semibold mb-6">
            Fill out the form below. Our care team will call you within 2 hours to confirm your schedule.
          </p>

          {formSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-clinic-green/20 rounded-full flex items-center justify-center border border-clinic-green text-clinic-green animate-bounce">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-display font-bold text-lg text-white">
                Request Submitted Successfully!
              </h4>
              <p className="font-sans text-xs md:text-sm text-slate-400 font-medium max-w-sm">
                Thank you for reaching out. A client support specialist from Adorables Pet Clinic will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Owner Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="owner-name" className="font-sans text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                    Owner Name
                  </label>
                  <input
                    type="text"
                    id="owner-name"
                    required
                    placeholder="Enter your full name"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-sans text-xs md:text-sm focus:outline-none focus:border-clinic-green transition-colors"
                  />
                </div>

                {/* Contact Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="font-sans text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="Enter your phone number"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-sans text-xs md:text-sm focus:outline-none focus:border-clinic-green transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pet Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="pet-name" className="font-sans text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                    Pet Name
                  </label>
                  <input
                    type="text"
                    id="pet-name"
                    required
                    placeholder="Enter your pet's name"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-sans text-xs md:text-sm focus:outline-none focus:border-clinic-green transition-colors"
                  />
                </div>

                {/* Pet Type */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="pet-type" className="font-sans text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                    Pet Category
                  </label>
                  <select
                    id="pet-type"
                    required
                    defaultValue=""
                    className="bg-neutral-900 border border-white/10 rounded-xl px-4 py-2.5 text-white font-sans text-xs md:text-sm focus:outline-none focus:border-clinic-green transition-colors"
                  >
                    <option value="" disabled>Select pet type</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Turtle">Turtle</option>
                    <option value="Bird">Bird</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="notes" className="font-sans text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                  Describe symptoms or groom preferences
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="E.g., Yearly vaccination, skin rash checkup, spa package"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white font-sans text-xs md:text-sm focus:outline-none focus:border-clinic-green transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-clinic-green hover:bg-clinic-green-dark text-white font-sans text-xs md:text-sm font-bold py-3 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting Request...
                  </>
                ) : (
                  "Book Appointment"
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FOOTER METADATA */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 font-sans text-[10px] md:text-xs font-semibold gap-4">
        <span>
          © {new Date().getFullYear()} Adorables Pet Clinic. All rights reserved.
        </span>
        <div className="flex gap-6">
          <Link href="#services" className="hover:text-slate-300 transition-colors">Services</Link>
          <Link href="#testimonials" className="hover:text-slate-300 transition-colors">Reviews</Link>
          <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
            Directions
          </a>
        </div>
        <span>
          Emergency Medical Facility | Banjara Hills, Hyderabad
        </span>
      </div>
    </footer>
  );
}
