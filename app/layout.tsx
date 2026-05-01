import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const editorial = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-editorial",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mono",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Aschheim Next — A Quarter for Living, Movement & Encounter",
  description:
    "Investorenpitch für ein Mixed-Use-Quartier in Aschheim. Wohnen, Padel, Topgolf, öffentliche Plätze. Steiner Architektur 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${editorial.variable} ${mono.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
