"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "@/data/clinicData";
import logoImg from "@/public/logo/adorables-logo-DJvvbTF0.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 px-4 md:px-8 bg-white/70 backdrop-blur-md shadow-sm border-b border-white/20"
          : "py-5 px-4 md:px-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative rounded-xl overflow-hidden border-2 border-clinic-green bg-white shadow-md p-1 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
            <Image
              src={logoImg}
              alt="Adorables Pet Clinic Logo"
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base md:text-lg tracking-tight leading-none text-neutral-900 group-hover:text-clinic-green transition-colors duration-300">
              ADORABLES
            </span>
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-widest text-clinic-green leading-none uppercase mt-0.5">
              Pet Clinic
            </span>
          </div>
        </Link>

        {/* NAVIGATION LINKS & CTAs */}
        <div className="flex items-center gap-2 md:gap-6">
          {/* Emergency Badge */}
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-red-50 border border-red-200 text-red-700 font-sans text-xs md:text-sm font-semibold hover:bg-red-100 transition-colors duration-300 group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="hidden sm:inline">Emergency: </span>
            <span className="font-extrabold tracking-wide group-hover:underline">
              {CONTACT_INFO.phone}
            </span>
          </a>

          {/* Book Appointment CTA */}
          <button
            onClick={() => {
              const footer = document.getElementById("footer");
              if (footer) {
                footer.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-clinic-green text-white font-sans text-xs md:text-sm font-bold shadow-md hover:bg-clinic-green-dark hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}
