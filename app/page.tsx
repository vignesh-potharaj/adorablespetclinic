"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import ClinicScrollCanvas from "@/components/ClinicScrollCanvas";
import ClinicExperience from "@/components/ClinicExperience";
import ScrollDownIndicator from "@/components/ScrollDownIndicator";
import ClinicServicesGrid from "@/components/ClinicServicesGrid";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagePath, setImagePath] = useState("/images/clinic-sequence-desktop/");
  const [totalFrames, setTotalFrames] = useState(300);
  const [isClient, setIsClient] = useState(false);

  // Bind useScroll to the 600vh tall spacer container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      // Switch paths and frame counts based on screen width
      if (window.innerWidth < 768) {
        setImagePath("/images/clinic-sequence-mobile/");
        setTotalFrames(272);
      } else {
        setImagePath("/images/clinic-sequence-desktop/");
        setTotalFrames(300);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="bg-soft-white relative min-h-screen">
      <Navbar />

      {/* SCROLL SEQUENCE SECTION (Locked for 600vh) */}
      <section
        id="scrollytelling-container"
        ref={containerRef}
        className="h-[600vh] relative"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-neutral-950">
          {isClient && (
            <>
              {/* Canvas background layer */}
              <ClinicScrollCanvas
                scrollYProgress={scrollYProgress}
                totalFrames={totalFrames}
                imageFolderPath={imagePath}
              />
              
              {/* HUD text overlay layer */}
              <ClinicExperience scrollYProgress={scrollYProgress} />
              
              {/* Scroll down mouse guides */}
              <ScrollDownIndicator scrollYProgress={scrollYProgress} />
            </>
          )}
        </div>
      </section>

      {/* NATURAL FOOTER AND INFO SECTIONS (Scrolls after sequence ends) */}
      <div className="relative z-20 bg-white shadow-[0_-10px_50px_rgba(15,23,42,0.15)] border-t border-neutral-100">
        <ClinicServicesGrid />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}

