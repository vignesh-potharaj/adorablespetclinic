"use client";

import { useEffect, useState } from "react";
import { MotionValue, motion, AnimatePresence } from "framer-motion";
import { HUD_PHASES } from "@/data/clinicData";

interface ClinicExperienceProps {
  scrollYProgress: MotionValue<number>;
}

interface FloatingPhrase {
  text: string;
  top: string;
  left: string;
  delay: number;
}

// Single prominent key phrase for each animal phase
const FLOATING_PHRASES: Record<number, FloatingPhrase> = {
  0: { text: "Welcome to Adorables Pet Clinic", top: "35%", left: "10%", delay: 0.1 },
  1: { text: "Advanced Diagnostics & Sterile Surgeries", top: "35%", left: "10%", delay: 0.1 },
  2: { text: "Luxurious Grooming & Custom Spas", top: "35%", left: "10%", delay: 0.1 },
  3: { text: "Spacious Cage-Free Boarding Suites", top: "35%", left: "10%", delay: 0.1 },
  4: { text: "Fully Stocked In-House Pharmacy", top: "35%", left: "10%", delay: 0.1 }
};

export default function ClinicExperience({ scrollYProgress }: ClinicExperienceProps) {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  // Sync scroll progress to active phase
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // 5 phases: 0 to 4
      let phase = Math.floor(latest * 5);
      if (phase > 4) phase = 4;
      if (phase < 0) phase = 0;
      setActivePhaseIndex(phase);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Helper to smooth scroll to a phase index
  const scrollToPhase = (index: number) => {
    const container = document.getElementById("scrollytelling-container");
    if (!container) return;

    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const scrollRange = containerHeight - window.innerHeight;

    // Scroll to the midpoint of the target phase's progress slice
    const targetProgress = index * 0.2 + 0.1;
    const targetScrollY = containerTop + targetProgress * scrollRange;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  };

  const phrase = FLOATING_PHRASES[activePhaseIndex] || FLOATING_PHRASES[0];

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* SINGLE FLOATING TEXT PHRASE */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={`phrase-container-${activePhaseIndex}`}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 25 }}
            transition={{
              duration: 0.7,
              delay: phrase.delay,
              ease: [0.16, 1, 0.3, 1] // Fluid bezier transition
            }}
            className="absolute pointer-events-none select-none max-w-sm md:max-w-md lg:max-w-lg"
            style={{
              top: phrase.top,
              left: phrase.left,
            }}
          >
            <div className="flex flex-col items-start">
              
              {/* Prominent Cinematic Floating Heading */}
              <h2 className="font-display font-black text-white text-2xl md:text-4xl lg:text-5xl leading-tight tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)]">
                {phrase.text}
              </h2>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT COLUMN: TELEMETRY DOT NAVIGATION */}
      <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-5 pointer-events-auto select-none z-30">
        {HUD_PHASES.map((phase, index) => {
          const isActive = index === activePhaseIndex;
          return (
            <button
              key={`hud-nav-${phase.id}`}
              onClick={() => scrollToPhase(index)}
              className="flex items-center justify-end gap-4 group cursor-pointer text-right outline-none"
            >
              {/* Animal name label, showing on hover or if active */}
              <span
                className={`font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 transform ${
                  isActive
                    ? "opacity-100 translate-x-0 text-clinic-green drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                    : "opacity-0 translate-x-2 group-hover:opacity-75 group-hover:translate-x-0 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                }`}
              >
                {phase.animal}
              </span>

              {/* Indicator Dot */}
              <div className="relative flex items-center justify-center w-6 h-6">
                {isActive && (
                  <motion.div
                    layoutId="activeGlowDot"
                    className="absolute inset-0 bg-clinic-green/35 rounded-full border border-clinic-green/60 animate-pulse"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-clinic-green scale-125 shadow-[0_0_8px_#0d7c5f]"
                      : "bg-white/45 group-hover:bg-white/95 group-hover:scale-110 shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
