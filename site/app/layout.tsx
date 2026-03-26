import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
    "Modern tattoo, tā moko, and piercing studio on the Mount Maunganui waterfront. Precision artistry in a clean, welcoming space.",
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

function Logo() {
  return (
    <svg viewBox="0 0 120 40" className="h-8 w-auto" aria-label="Tidal Ink Studio logo" role="img">
      <path
        d="M5 25 Q15 15 25 25 T45 25 Q55 22 65 20 L75 18 Q85 16 95 12 L105 8 Q112 5 115 2"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="115" cy="2" r="1" fill="currentColor" />
    </svg>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-white text-slate-900`}>
        <header className="sticky top-0 z-50 border-b border-ocean-teal/15 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
            <Link href="/" className="flex items-center gap-3 text-ocean-teal">
              <Logo />
              <span className="font-space text-lg font-semibold text-deep-navy">Tidal Ink Studio</span>
            </Link>
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-6">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="font-space text-sm font-medium text-deep-navy transition hover:text-coral-accent">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <nav aria-label="Mobile" className="border-t border-ocean-teal/10 md:hidden">
            <ul className="grid grid-cols-3 gap-2 px-4 py-3 text-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block rounded-md px-2 py-2 font-space text-xs font-medium text-deep-navy hover:bg-warm-sand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-16 bg-deep-navy text-white">
          <div className="mx-auto max-w-6xl px-4 py-10 text-center md:px-6">
            <p className="font-space text-xl">Tidal Ink Studio</p>
            <p className="mt-2 text-sm text-white/80">142 Marine Parade, Mount Maunganui, Bay of Plenty 3116</p>
            <p className="mt-1 text-sm text-white/80">Tue-Sat 10am-6pm · Sun 11am-4pm · Mon Closed</p>
            <div className="mt-4 flex justify-center gap-4 text-sm text-white/90">
              <a href="tel:+6475748900" className="hover:text-coral-accent">+64 7 574 8900</a>
              <a href="mailto:hello@tidalink.nz" className="hover:text-coral-accent">hello@tidalink.nz</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
