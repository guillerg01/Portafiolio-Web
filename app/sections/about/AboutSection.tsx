"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import portrait from "@/img/img2.jpg";
import { coreHighlights, profile } from "@/app/data/profile";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen snap-center flex-col items-center justify-center overflow-hidden bg-transparent px-6 py-24 text-left md:flex-row md:items-start md:gap-12"
    >
      <div className="pointer-events-none absolute top-16 h-64 w-64 rounded-full bg-[#F7AB0A]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 right-10 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <header className="absolute top-24 text-center md:left-1/2 md:-translate-x-1/2">
        <h2 className="text-3xl uppercase tracking-[18px] text-gray-500">
          About
        </h2>
      </header>

      <motion.div
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-36 flex w-full justify-center md:mt-0 md:w-auto"
      >
        <Image
          src={portrait}
          alt={profile.name}
          width={320}
          height={420}
          className="h-80 w-64 rounded-3xl object-cover shadow-2xl md:h-[420px] md:w-80"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="z-10 mt-10 max-w-3xl space-y-6 text-gray-300 md:mt-24"
      >
        <h3 className="text-2xl font-semibold text-white">
          Crafting resilient experiences for high-impact products
        </h3>
        <p className="leading-relaxed">
          {profile.summary} I partner closely with product, design, and backend
          teams to ship reliable features, unlock new revenue flows, and keep
          user experiences fast and intuitive.
        </p>
        <ul className="grid gap-3 text-sm leading-relaxed text-gray-300 sm:grid-cols-2">
          {coreHighlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 rounded-lg border border-white/5 bg-white/5 p-3 backdrop-blur-md transition hover:border-[#F7AB0A]/60 hover:text-white"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-[#F7AB0A]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}


