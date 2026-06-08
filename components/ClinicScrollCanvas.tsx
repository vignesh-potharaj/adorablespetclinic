"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, motion, AnimatePresence } from "framer-motion";

interface ClinicScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames: number;
  imageFolderPath: string;
}

export default function ClinicScrollCanvas({
  scrollYProgress,
  totalFrames,
  imageFolderPath,
}: ClinicScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Preload Images when path or frame count changes
  useEffect(() => {
    let active = true;
    const loadedImages: HTMLImageElement[] = [];
    let loaded = 0;

    setIsLoading(true);
    setLoadedCount(0);
    setImages([]);

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      // Format number to 3 digits (e.g. 001, 002... 300)
      const frameNum = String(i).padStart(3, "0");
      img.src = `${imageFolderPath}ezgif-frame-${frameNum}.png`;

      img.onload = () => {
        if (!active) return;
        loaded++;
        setLoadedCount(loaded);
        if (loaded === totalFrames) {
          setImages(loadedImages);
          setTimeout(() => {
            setIsLoading(false);
          }, 800);
        }
      };

      img.onerror = () => {
        if (!active) return;
        loaded++;
        setLoadedCount(loaded);
        if (loaded === totalFrames) {
          setImages(loadedImages);
          setTimeout(() => {
            setIsLoading(false);
          }, 800);
        }
      };

      loadedImages.push(img);
    }

    return () => {
      active = false;
    };
  }, [imageFolderPath, totalFrames]);

  // Draw Function
  const drawFrame = useRef<(index: number) => void>(() => {});

  drawFrame.current = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length < totalFrames) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    // Scale canvas buffer size for retina display sharpness
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Object-fit Cover calculations
    const imgWidth = img.naturalWidth || img.width;
    const imgHeight = img.naturalHeight || img.height;
    const canvasWidth = rect.width;
    const canvasHeight = rect.height;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image aspect ratio
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      // Canvas is taller than image aspect ratio
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Sync scrollYProgress to drawFrame updates
  useEffect(() => {
    if (images.length < totalFrames) return;

    const handleScrollChange = (latest: number) => {
      // Map scroll progress (0.0 to 1.0) to frame indices (0 to totalFrames - 1)
      const frameIndex = Math.min(
        Math.floor(latest * totalFrames),
        totalFrames - 1
      );
      drawFrame.current(frameIndex);
    };

    // Render first frame immediately
    handleScrollChange(scrollYProgress.get());

    const unsubscribe = scrollYProgress.on("change", handleScrollChange);
    return () => unsubscribe();
  }, [images, totalFrames, scrollYProgress]);

  // Handle Resize and redraw
  useEffect(() => {
    const handleResize = () => {
      if (images.length === totalFrames) {
        const frameIndex = Math.min(
          Math.floor(scrollYProgress.get() * totalFrames),
          totalFrames - 1
        );
        drawFrame.current(frameIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, totalFrames, scrollYProgress]);

  const progressPercent = Math.round((loadedCount / totalFrames) * 100) || 0;

  return (
    <div className="relative w-full h-full">
      {/* CANVAS ELEMENT */}
      <canvas
        ref={canvasRef}
        className="w-full h-screen block object-cover bg-neutral-950"
      />

      {/* AWARDS-GRADE GLASS PRELOADER */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-xl pointer-events-auto"
          >
            <div className="max-w-md w-full px-6 flex flex-col items-center text-center">
              {/* Pulse Glowing Heartbeat Paw Icon */}
              <div className="relative w-24 h-24 mb-8 flex items-center justify-center bg-clinic-green/10 rounded-full border border-clinic-green/30 animate-pulse-glow">
                <svg
                  className="w-12 h-12 text-clinic-green animate-heartbeat"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              {/* Clinic Branding */}
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight leading-none mb-1">
                ADORABLES
              </h2>
              <p className="font-sans text-xs font-bold tracking-widest text-clinic-green uppercase mb-6">
                Premium Veterinary Clinic
              </p>

              {/* Progress Percentage */}
              <span className="font-display text-4xl font-extrabold text-white mb-2 tracking-tighter">
                {progressPercent}%
              </span>

              {/* Progress Bar Container */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-4 border border-white/5">
                <motion.div
                  className="h-full bg-clinic-green shadow-[0_0_8px_#0d7c5f]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Reassuring loading text */}
              <p className="font-sans text-sm text-slate-400 font-medium">
                {progressPercent < 100
                  ? "Configuring clinical tour sequence..."
                  : "Ready to explore! Start scrolling."}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
