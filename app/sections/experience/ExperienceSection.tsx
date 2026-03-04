"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/app/providers/LocaleProvider";

export function ExperienceSection() {
  const {
    content: { experience },
  } = useLocale();

  return (
    <section
      id="experience"
      className="relative flex min-h-screen snap-center flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      <header className="absolute top-24 text-center">
        <h2 className="text-3xl uppercase tracking-[18px] text-gray-500">
          {experience.sectionTitle}
        </h2>
        <p className="mt-2 text-sm uppercase tracking-[6px] text-gray-400">
          {experience.subtitle}
        </p>
      </header>

      <div className="pointer-events-none absolute left-0 top-1/3 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#F7AB0A]/5 blur-3xl" />

      <div className="mt-40 flex w-full max-w-6xl flex-col gap-8">
        {experience.items.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition hover:border-[#F7AB0A]/50 hover:bg-white/10"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.role}
                </h3>
                <p className="text-sm text-gray-400">
                  {item.company}
                  {item.location ? ` • ${item.location}` : ""}
                </p>
              </div>
              <span className="text-sm font-medium uppercase tracking-widest text-[#F7AB0A]">
                {item.period}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              {item.summary}
            </p>
            <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-gray-200 md:grid-cols-2">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#F7AB0A]" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-gray-300">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
