import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guillermo Rodriguez | Senior Frontend & Fullstack Engineer",
  description:
    "Portfolio for Guillermo Rodriguez, a senior frontend engineer specializing in data-intensive SaaS, Web3 integrations, and realtime platforms.",
  openGraph: {
    title: "Guillermo Rodriguez | Senior Frontend & Fullstack Engineer",
    description:
      "Frontend lead experienced in Next.js, Web3, payments, and healthcare-grade platforms.",
    url: "https://github.com/guillerg01",
    siteName: "Guillermo Rodriguez Portfolio",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://github.com/guillerg01"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[rgb(14,14,16)] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
