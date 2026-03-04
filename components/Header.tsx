"use client";

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { LanguageSelector } from "./LanguageSelector";
import { useLocale } from "@/app/providers/LocaleProvider";

const CV_PDF_ES = "/Guillermo_Enrique_Rodríguez_Galban_ES.pdf";
const CV_PDF_EN = "/Guillermo_Enrique_Rodríguez_Galban_EN.pdf";

const socialLinks = [
  { label: "GitHub", url: "https://github.com/guillerg01" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/guillerg01/" },
  { label: "Email", url: "mailto:guillerg0101@gmail.com" },
];

export const Header = () => {
  const {
    content: { header },
    locale,
  } = useLocale();

  const cvHref = locale === "es" ? CV_PDF_ES : CV_PDF_EN;

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-5 backdrop-blur-xl">
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2"
      >
        {socialLinks.map((item) => (
          <SocialIcon
            key={item.label}
            title={item.label}
            fgColor="#E5E7EB"
            bgColor="transparent"
            url={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 36, width: 36 }}
            className="transition hover:-translate-y-0.5"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-3"
      >
        <a
          href={cvHref}
          download
          className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-200 transition hover:border-[#F7AB0A] hover:bg-[#F7AB0A]/10 hover:text-[#F7AB0A] md:inline-flex"
        >
          {header.downloadCv}
        </a>
        <LanguageSelector />
        <button
          onClick={handleScrollToContact}
          className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-200 transition hover:border-[#F7AB0A] hover:bg-[#F7AB0A]/10 hover:text-[#F7AB0A] md:inline-flex"
        >
          {header.getInTouch}
        </button>
      </motion.div>
    </header>
  );
};
