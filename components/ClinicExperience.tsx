"use client";

import { useEffect, useState } from "react";
import { MotionValue, motion, AnimatePresence } from "framer-motion";
import { HUD_PHASES, PhaseData } from "@/data/clinicData";

interface ClinicExperienceProps {
  scrollYProgress: MotionValue<number>;
}

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

  const activePhase: PhaseData = HUD_PHASES[activePhaseIndex];

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

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-between px-6 md:px-12 lg:px-24">
      {/* LEFT COLUMN: FLOATING HUD GLASS CARD */}
      <div className="w-full max-w-sm md:max-w-md pointer-events-auto select-none">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel rounded-3xl p-6 md:p-8 shadow-2xl border border-white/30 backdrop-blur-lg flex flex-col gap-5 relative overflow-hidden"
        >
          {/* Subtle glowing corner highlight */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-clinic-green/10 rounded-bl-full blur-xl pointer-events-none" />

          {/* Tagline Category */}
          <AnimatePresence mode="wait">
            <motion.span
              key={`category-${activePhaseIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="font-sans text-[10px] md:text-xs font-bold tracking-widest text-clinic-green uppercase"
            >
              {activePhase.category}
            </motion.span>
          </AnimatePresence>

          {/* Heading */}
          <div className="flex flex-col gap-1.5">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${activePhaseIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="font-display font-extrabold text-2xl md:text-3xl text-neutral-900 tracking-tight leading-tight"
              >
                {activePhase.title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`subtitle-${activePhaseIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="font-sans text-xs md:text-sm font-semibold text-clinic-blue"
              >
                {activePhase.subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="w-full h-px bg-neutral-200/50" />

          {/* Description */}
          <div className="min-h-[90px] md:min-h-[110px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={`description-${activePhaseIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="font-sans text-xs md:text-sm text-neutral-600 font-medium leading-relaxed"
              >
                {activePhase.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Stats Segment */}
          <div className="grid grid-cols-2 gap-4 pt-1">
            {activePhase.stats.map((stat, sIdx) => (
              <div key={`stat-${activePhaseIndex}-${sIdx}`} className="flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`stat-val-${activePhaseIndex}-${sIdx}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="font-display font-extrabold text-xl md:text-2xl text-clinic-green leading-none"
                  >
                    {stat.value}
                  </motion.span>
                </AnimatePresence>
                <span className="font-sans text-[9px] md:text-[10px] font-bold text-neutral-400 tracking-wider uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Alert tag */}
          <div className="mt-2 flex items-center gap-2 px-3 py-2 rounded-xl bg-clinic-green/5 border border-clinic-green/10 text-clinic-green font-sans text-[10px] md:text-xs font-semibold">
            <span className="flex h-1.5 w-1.5 rounded-full bg-clinic-green animate-pulse" />
            <AnimatePresence mode="wait">
              <motion.span
                key={`highlight-${activePhaseIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activePhase.highlight}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: TELEMETRY DOT NAVIGATION */}
      <div className="hidden md:flex flex-col gap-5 pointer-events-auto select-none">
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
                    ? "opacity-100 translate-x-0 text-clinic-green"
                    : "opacity-0 translate-x-2 group-hover:opacity-75 group-hover:translate-x-0 text-white"
                }`}
              >
                {phase.animal}
              </span>

              {/* Indicator Dot */}
              <div className="relative flex items-center justify-center w-6 h-6">
                {isActive && (
                  <motion.div
                    layoutId="activeGlowDot"
                    className="absolute inset-0 bg-clinic-green/20 rounded-full border border-clinic-green/50 animate-pulse"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-clinic-green scale-125"
                      : "bg-white/40 group-hover:bg-white/90 group-hover:scale-110"
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
