"use client";

import { memo, useMemo } from "react";

type DonutConfig = {
  id: number;
  size: number;
  blur: number;
  color: string;
  opacity: number;
  top: string;
  left: string;
  animationDelay: string;
};

const DONUTS: DonutConfig[] = [
  {
    id: 1,
    size: 420,
    blur: 140,
    color: "#F7AB0A",
    opacity: 0.14,
    top: "18%",
    left: "22%",
    animationDelay: "0s",
  },
  {
    id: 2,
    size: 520,
    blur: 180,
    color: "#7c3aed",
    opacity: 0.16,
    top: "58%",
    left: "74%",
    animationDelay: "1.8s",
  },
];

export const BackgroundDonuts = memo(function BackgroundDonuts() {
  const elements = useMemo(
    () =>
      DONUTS.map((donut) => (
        <div
          key={donut.id}
          className="absolute hidden rounded-full lg:block"
          style={{
            width: donut.size,
            height: donut.size,
            top: donut.top,
            left: donut.left,
            background: donut.color,
            opacity: donut.opacity,
            filter: `blur(${donut.blur}px)`,
            transform: "translate(-50%, -50%)",
            animation: `pulseDonut 14s ease-in-out infinite`,
            animationDelay: donut.animationDelay,
          }}
        />
      )),
    []
  );

  return (
    <>
      <style jsx>{`
        @keyframes pulseDonut {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.12;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.12);
            opacity: 0.22;
          }
        }
      `}</style>
      <div className="pointer-events-none absolute inset-0">{elements}</div>
    </>
  );
});
