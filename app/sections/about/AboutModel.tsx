"use client";

import Image from "next/image";

const aboutImageSrc = "/IMG_7106.jpeg";

export function AboutModel() {
  return (
    <div className="flex w-full justify-center">
      <Image
        src={aboutImageSrc}
        alt="Guillermo"
        width={320}
        height={400}
        className="h-auto w-72 rounded-3xl object-cover shadow-2xl md:w-80"
        priority
      />
    </div>
  );
}
