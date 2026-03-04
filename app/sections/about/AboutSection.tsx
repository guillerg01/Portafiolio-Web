"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/app/providers/LocaleProvider";
import { AboutModel } from "./AboutModel";

export function AboutSection() {
  const {
    content: { about },
  } = useLocale();

  return (
    <section
      id="about"
      className="relative flex min-h-screen snap-center flex-col items-center justify-center overflow-hidden bg-transparent px-6 py-16"
    >
      <div className="pointer-events-none absolute top-16 h-64 w-64 rounded-full bg-[#F7AB0A]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 right-10 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <header className="absolute left-1/2 top-24 z-20 w-full -translate-x-1/2 text-center">
        <h2 className="text-3xl uppercase tracking-[18px] text-gray-500">
          {about.sectionTitle}
        </h2>
      </header>

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center gap-10 md:flex-row md:items-center md:gap-12">
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex w-full justify-center md:w-auto"
          >
            <AboutModel />
          </motion.div>

          <motion.div
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="z-10 max-w-3xl space-y-6 text-left text-gray-300"
          >
          <h3 className="text-2xl font-semibold text-white">{about.heading}</h3>
          <p className="leading-relaxed">{about.description}</p>
          <ul className="grid gap-3 text-sm leading-relaxed text-gray-300 sm:grid-cols-2">
            {about.bullets.map((highlight) => (
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
      </div>
    </section>
  );
}
