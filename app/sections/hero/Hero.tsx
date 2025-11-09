"use client";

import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import avatar from "@/img/img.jpg";
import { heroHighlights, profile } from "@/app/data/profile";
import { BackgroundCircles } from "./background-circles";

const navigationTargets = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function HeroSection() {
  const [currentText] = useTypewriter({
    words: heroHighlights,
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
      className="relative flex h-screen snap-start flex-col items-center justify-center space-y-8 overflow-hidden text-center"
    >
      <BackgroundCircles />

      <Image
        priority
        src={avatar}
        alt={profile.name}
        width={160}
        height={160}
        className="relative mx-auto h-40 w-40 rounded-full object-cover shadow-2xl transition-transform duration-300 hover:-rotate-3 hover:scale-110"
      />

      <div className="z-10 flex max-w-xl flex-col items-center gap-4 px-6">
        <p className="text-sm uppercase tracking-[12px] text-gray-400">
          {profile.title}
        </p>
        <h1 className="text-4xl font-semibold sm:text-5xl">
          <span>{currentText}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <p className="text-base text-gray-300 sm:text-lg">
          {profile.summary}
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {navigationTargets.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="rounded-full border border-white/10 px-5 py-2 text-sm uppercase tracking-wide text-gray-300 transition hover:border-[#F7AB0A] hover:text-[#F7AB0A]"
            >
              {label}
            </button>
          ))}
          <Link
            href="https://github.com/guillerg01"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#F7AB0A]/60 px-5 py-2 text-sm uppercase tracking-wide text-[#F7AB0A] transition hover:border-[#F7AB0A] hover:bg-[#F7AB0A]/10"
          >
            View GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}


