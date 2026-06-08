"use client";

import { motion } from "framer-motion";
import { CLINIC_SERVICES } from "@/data/clinicData";

// Custom SVG Icon Components for maximum performance and portability
function ServiceIcon({ name }: { name: string }) {
  const baseClasses = "w-7 h-7 text-clinic-green";

  switch (name) {
    case "Stethoscope":
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m-3-2h6" />
        </svg>
      );
    case "Scissors":
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-4.879-4.879L21 12m-6.879 2.121l-3-3m0 0l-3 3m3-3V3m-6 18a3 3 0 100-6 3 3 0 000 6zm0 0h12a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      );
    case "Activity":
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "Sparkles":
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case "Home":
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case "PlusSquare":
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    default:
      return (
        <svg className={baseClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
  }
}

export default function ClinicServicesGrid() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-soft-white relative overflow-hidden">
      {/* Background soft decoration */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-clinic-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-clinic-blue/5 rounded-full blur-3xl pointer-events-none" />

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
            OUR CLINICAL DEPARTMENTS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-5xl text-neutral-900 tracking-tight max-w-2xl leading-none"
          >
            World-Class Care For Every Companion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-neutral-500 font-medium max-w-xl mt-4 leading-relaxed"
          >
            From emergency surgeries to luxurious spa treatments, our Banjara Hills hospital is fully equipped to cater to all your pet's healthcare needs.
          </motion.p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm transition-all duration-300 flex flex-col items-start text-left group"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-clinic-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-clinic-green group-hover:text-white transition-colors duration-300">
                <div className="group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-transform duration-300">
                  <ServiceIcon name={service.iconName} />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg md:text-xl text-neutral-900 mb-3 group-hover:text-clinic-green transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs md:text-sm text-neutral-500 font-medium leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More link */}
              <button
                onClick={() => {
                  const footer = document.getElementById("footer");
                  if (footer) {
                    footer.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="mt-auto font-sans text-xs font-bold text-clinic-green flex items-center gap-1 group/btn hover:underline cursor-pointer"
              >
                Learn More
                <svg
                  className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
