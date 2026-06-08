"use client";

import { useEffect, useState } from "react";
import { MotionValue, motion, AnimatePresence } from "framer-motion";

interface ScrollDownIndicatorProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollDownIndicator({ scrollYProgress }: ScrollDownIndicatorProps) {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Hide when approaching the end of the sequence to transition to standard scrolling
      setIsVisible(latest < 0.94);

      // Determine active phase (0 to 4)
      let phase = Math.floor(latest * 5);
      if (phase > 4) phase = 4;
      if (phase < 0) phase = 0;
      setActivePhaseIndex(phase);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-2"
          >
            {/* Pulsing Container on Phase Change */}
            <motion.div
              key={activePhaseIndex}
              initial={{ scale: 1.25, filter: "drop-shadow(0 0 12px rgba(13, 124, 95, 0.8))" }}
              animate={{ scale: 1, filter: "drop-shadow(0 0 4px rgba(13, 124, 95, 0))" }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="flex flex-col items-center"
            >
              {/* Mouse Icon */}
              <div className="w-6 h-10 rounded-full border-2 border-white/80 flex justify-center p-1 bg-neutral-900/30 backdrop-blur-sm shadow-md">
                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-clinic-green"
                />
              </div>

              {/* Chevrons */}
              <div className="flex flex-col items-center -mt-1">
                <motion.svg
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    y: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-4 h-4 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </div>
            </motion.div>

            {/* Label */}
            <span className="font-sans text-[10px] font-extrabold tracking-widest text-white/70 uppercase select-none drop-shadow-sm">
              Scroll Down
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
