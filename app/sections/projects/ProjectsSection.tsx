"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/app/providers/LocaleProvider";

export function ProjectsSection() {
  const {
    content: { projects },
  } = useLocale();

  return (
    <section
      id="projects"
      className="relative flex min-h-screen snap-center flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      <header className="absolute top-24 text-center">
        <h2 className="text-3xl uppercase tracking-[18px] text-gray-500">
          {projects.sectionTitle}
        </h2>
        <p className="mt-2 text-sm uppercase tracking-[6px] text-gray-400">
          {projects.subtitle}
        </p>
      </header>

      <div className="pointer-events-none absolute left-20 top-1/4 h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-3xl" />

      <div className="mt-40 flex w-full max-w-6xl snap-x snap-mandatory gap-8 overflow-x-auto pb-10">
        {projects.items.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex min-w-[320px] flex-1 snap-center flex-col rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition hover:border-[#F7AB0A]/60 hover:bg-white/10 lg:min-w-[360px]"
          >
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-400">{project.role}</p>
              </div>
              {project.period ? (
                <span className="text-xs font-semibold uppercase tracking-[4px] text-[#F7AB0A]">
                  {project.period}
                </span>
              ) : null}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              {project.description}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-200">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#F7AB0A]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-gray-300">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.links?.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#F7AB0A] underline-offset-4 transition hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
