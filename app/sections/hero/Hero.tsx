"use client";

import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useLocale } from "@/app/providers/LocaleProvider";
import { BackgroundCircles } from "./background-circles";
import { BackgroundDonuts } from "./background-donuts";

const avatarSrc = "/IMG_7106.jpeg";

export function HeroSection() {
  const {
    content: { profile, hero },
  } = useLocale();

  const navigationTargets = [
    { id: "about", label: hero.nav.about },
    { id: "experience", label: hero.nav.experience },
    { id: "skills", label: hero.nav.skills },
    { id: "projects", label: hero.nav.projects },
    { id: "contact", label: hero.nav.contact },
  ];

  const [currentText] = useTypewriter({
    words: hero.highlights,
    loop: true,
    delaySpeed: 2000,
  });

  const handleScroll = (targetId: string) => {
    const section = document.getElementById(targetId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex h-screen snap-start flex-col items-center justify-center gap-4 overflow-hidden px-6 text-center"
    >
      <BackgroundDonuts />
      <BackgroundCircles />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative flex h-[200px] w-[200px] items-center justify-center">
          <Image
            src={avatarSrc}
            alt={profile.name}
            width={140}
            height={140}
            priority
            className="absolute inset-0 mx-auto h-32 w-32 rounded-full object-cover shadow-2xl ring-2 ring-[#333333]/50 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="z-10 flex max-w-md flex-col items-center gap-3">
        <p className="text-xs uppercase tracking-[10px] text-gray-400">
          {profile.title}
        </p>
        <h1 className="text-3xl font-semibold sm:text-4xl">
          <span>{currentText}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <p className="text-sm text-gray-400">
          {profile.summary}
        </p>

        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {navigationTargets.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-wide text-gray-400 transition hover:border-[#F7AB0A] hover:text-[#F7AB0A]"
            >
              {label}
            </button>
          ))}
          <Link
            href="https://github.com/guillerg01"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#F7AB0A]/60 px-3 py-1.5 text-xs uppercase tracking-wide text-[#F7AB0A] transition hover:bg-[#F7AB0A]/10"
          >
            {hero.nav.github}
          </Link>
          <Link
            href="https://www.linkedin.com/in/guillerg01/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-wide text-gray-400 transition hover:border-[#F7AB0A] hover:text-[#F7AB0A]"
          >
            {hero.nav.linkedin}
          </Link>
          <a
            href="/Guillermo_Enrique_Rodríguez_Galban_ES.pdf"
            download
            className="rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-wide text-gray-400 transition hover:border-[#F7AB0A] hover:text-[#F7AB0A]"
          >
            CV (ES)
          </a>
          <a
            href="/Guillermo_Enrique_Rodríguez_Galban_EN.pdf"
            download
            className="rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-wide text-gray-400 transition hover:border-[#F7AB0A] hover:text-[#F7AB0A]"
          >
            CV (EN)
          </a>
        </div>
      </div>
    </section>
  );
}


