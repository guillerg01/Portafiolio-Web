import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocaleProvider } from "@/app/providers/LocaleProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guillermo Rodriguez | Senior Frontend Engineer (React, Next.js)",
  description:
    "Portfolio of Guillermo Enrique Rodriguez Galban. 4+ years in software development, 3+ as Senior Frontend Engineer. SaaS, Web3, real-time UIs, checkout and subscription flows, multi-tenant dashboards.",
  openGraph: {
    title: "Guillermo Rodriguez | Senior Frontend Engineer (React, Next.js)",
    description:
      "Senior Frontend Engineer specializing in React, Next.js, SaaS, Web3, and real-time platforms. Loem Agency, AGL Tech.",
    url: "https://www.linkedin.com/in/guillerg01/",
    siteName: "Guillermo Rodriguez Portfolio",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://guillerg01.github.io/Portafiolio-Web"),
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
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
