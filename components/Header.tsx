'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { socialLinks } from '@/app/data/profile';

export const Header = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
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
          <Link
            key={item.label}
            href={item.url}
            target={item.url.startsWith('http') ? '_blank' : undefined}
            rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="transition hover:-translate-y-0.5"
          >
            <SocialIcon
              title={item.label}
              fgColor="#E5E7EB"
              bgColor="transparent"
              url={item.url}
              style={{ height: 36, width: 36 }}
            />
          </Link>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-3"
      >
        <button
          onClick={handleScrollToContact}
          className="hidden rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-200 transition hover:border-[#F7AB0A] hover:bg-[#F7AB0A]/10 hover:text-[#F7AB0A] md:inline-flex"
        >
          Get in touch
        </button>
      </motion.div>
    </header>
  );
};