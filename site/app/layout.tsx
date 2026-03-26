import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tidal Ink Studio | Mount Maunganui Tattoo Studio",
  description:
    "Coastal tattoo and piercing studio in Mount Maunganui. Custom tattooing, Tā Moko, geometric work, and professional aftercare in a welcoming waterfront space.",
  icons: {
    icon: "/favicon.svg",
  },
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/artists", label: "Artists" },
  { href: "/gallery", label: "Gallery" },
  { href: "/ta-moko", label: "Tā Moko" },
  { href: "/piercing", label: "Piercing" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-white text-slate-900 antialiased`}
      >
        <header className="sticky top-0 z-50 border-b border-teal-900/10 bg-[#2A7B88]/95 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
            <Link href="/" className="flex items-center gap-3" aria-label="Tidal Ink Studio home">
              <svg viewBox="0 0 120 40" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tidal Ink Studio logo">
                <path d="M5 25 Q15 15 25 25 T45 25 Q55 22 65 20 L75 18 Q85 16 95 12 L105 8 Q112 5 115 2" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <circle cx="115" cy="2" r="1" fill="#FFFFFF"/>
              </svg>
              <span className="font-[var(--font-space)] text-lg font-semibold text-white">Tidal Ink Studio</span>
            </Link>
            <nav aria-label="Main navigation" className="hidden gap-5 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-[var(--font-space)] text-sm font-medium text-white transition hover:text-[#E8D5B7]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <nav aria-label="Mobile navigation" className="border-t border-white/20 px-4 py-3 md:hidden">
            <div className="flex flex-wrap gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-16 bg-[#1B2838] text-white">
          <div className="mx-auto max-w-6xl px-4 py-10 text-center md:px-6">
            <p className="font-[var(--font-space)] text-xl font-semibold">Tidal Ink Studio</p>
            <p className="mt-2 text-sm text-slate-200">142 Marine Parade, Mount Maunganui, Bay of Plenty 3116</p>
            <p className="mt-1 text-sm text-slate-200">+64 7 574 8900 · hello@tidalink.nz</p>
            <p className="mt-4 text-xs text-slate-400">© {new Date().getFullYear()} Tidal Ink Studio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
