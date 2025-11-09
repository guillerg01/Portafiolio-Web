"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/app/data/profile";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen snap-center flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      <header className="absolute top-24 text-center">
        <h2 className="text-3xl uppercase tracking-[18px] text-gray-500">
          Skills
        </h2>
        <p className="mt-2 text-sm uppercase tracking-[6px] text-gray-400">
          Tooling & specialties
        </p>
      </header>

      <div className="pointer-events-none absolute right-10 top-1/3 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-40 grid w-full max-w-5xl gap-6 md:grid-cols-2"
      >
        {skillCategories.map((category) => (
          <article
            key={category.title}
            className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-xl transition hover:border-[#F7AB0A]/60 hover:bg-white/10"
          >
            <h3 className="text-lg font-semibold text-white">
              {category.title}
            </h3>
            <ul className="mt-4 grid gap-2 text-sm text-gray-200">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F7AB0A]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </motion.div>
    </section>
  );
}


