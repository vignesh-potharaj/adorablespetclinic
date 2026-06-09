"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "@/data/clinicData";
import logoImg from "@/public/logo/adorables-logo-DJvvbTF0.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      // Handle transparent vs glass background based on scroll depth
      setIsScrolled(currentScrollY > 20);

      // Handle show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down past the header height - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up or at the very top - show navbar
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "py-3 px-4 md:px-8 bg-white/70 backdrop-blur-md shadow-sm border-b border-white/20"
          : "py-5 px-4 md:px-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center group">
          <div className="relative rounded-xl overflow-hidden border-2 border-clinic-green bg-white shadow-md p-1 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
            <Image
              src={logoImg}
              alt="Adorables Pet Clinic Logo"
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* MID NAVIGATION LINKS (Desktop only) */}
        <nav className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => {
              const el = document.getElementById("services");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-600 hover:text-clinic-green transition-colors duration-300 cursor-pointer outline-none"
          >
            Services
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("founder");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-600 hover:text-clinic-green transition-colors duration-300 cursor-pointer outline-none"
          >
            Our Founder
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("gallery");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-600 hover:text-clinic-green transition-colors duration-300 cursor-pointer outline-none"
          >
            Gallery
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("testimonials");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-600 hover:text-clinic-green transition-colors duration-300 cursor-pointer outline-none"
          >
            About Us
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("find-us");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-sans text-xs font-bold uppercase tracking-widest text-neutral-600 hover:text-clinic-green transition-colors duration-300 cursor-pointer outline-none"
          >
            Find Us
          </button>
        </nav>

        {/* NAVIGATION LINKS & CTAs */}
        <div className="flex items-center">
          {/* Book Now CTA */}
          <button
            onClick={() => {
              const footer = document.getElementById("find-us");
              if (footer) {
                footer.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-5 py-2 md:px-7 md:py-2.5 rounded-full bg-clinic-green text-white font-sans text-xs md:text-sm font-bold shadow-md hover:bg-clinic-green-dark hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}
