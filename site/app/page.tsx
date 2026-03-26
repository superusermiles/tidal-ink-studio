import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tidal Ink Studio | Mount Maunganui Tattoo Studio",
  description:
    "Coastal tattoo and piercing studio in Mount Maunganui offering custom tattoos, tā moko, and precise piercing in a bright, welcoming waterfront space.",
};

const artistPreview = [
  {
    name: "Sarah Te Whare",
    specialty: "Tā Moko & Traditional Polynesian",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
  },
  {
    name: "Marcus Chen",
    specialty: "Neo-Traditional & Color Work",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
  },
  {
    name: "Jamie Rivera",
    specialty: "Geometric & Fine Line",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=500&h=500&fit=crop",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-5 md:px-6 md:py-24">
          <div className="md:col-span-2">
            <p className="font-space text-sm uppercase tracking-[0.2em] text-ocean-teal">
              Mount Maunganui Waterfront
            </p>
            <h1 className="mt-4 font-space text-4xl font-bold leading-tight text-deep-navy md:text-6xl">
              Where the ocean meets the ink
            </h1>
            <p className="mt-6 text-lg text-slate-700">
              Tidal Ink Studio blends custom tattoo artistry, culturally grounded tā
              moko, and precision piercing in a bright, welcoming coastal studio.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="rounded-md bg-ocean-teal px-6 py-3 font-space font-semibold text-white transition hover:bg-deep-navy"
              >
                Book Consultation
              </Link>
              <Link
                href="/gallery"
                className="rounded-md border border-ocean-teal px-6 py-3 font-space font-semibold text-ocean-teal transition hover:bg-warm-sand"
              >
                View Gallery
              </Link>
            </div>
          </div>
          <div className="md:col-span-3">
            <img
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=800&fit=crop"
              alt="Modern bright tattoo studio interior with clean workstations"
              className="h-[420px] w-full rounded-2xl object-cover shadow-[0_8px_32px_rgba(42,123,136,0.12)] transition duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
        <svg
          viewBox="0 0 1440 120"
          className="h-16 w-full text-warm-sand"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,96L60,90.7C120,85,240,75,360,74.7C480,75,600,85,720,90.7C840,96,960,96,1080,85.3C1200,75,1320,53,1380,42.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            fill="currentColor"
          />
        </svg>
      </section>

      <section className="bg-warm-sand py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <img
            src="https://images.unsplash.com/photo-1594736797933-d0f06ba42eb9?w=800&h=600&fit=crop"
            alt="Ocean view over Mount Maunganui coastline"
            className="h-80 w-full rounded-2xl object-cover"
          />
          <div>
            <h2 className="font-space text-3xl font-semibold text-deep-navy md:text-4xl">
              Coastal calm. Serious craft.
            </h2>
            <p className="mt-4 text-slate-700">
              We built Tidal Ink to feel different from the typical tattoo shop:
              open light, calm atmosphere, and artists focused on safe, high-quality
              custom work.
            </p>
            <p className="mt-4 text-slate-700">
              From consultation to aftercare, every step is clear and collaborative
              so your tattoo or piercing experience is confident and well-supported.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-space text-3xl font-semibold text-deep-navy md:text-4xl">
              Featured Artists
            </h2>
            <p className="mt-3 max-w-2xl text-slate-700">
              Specialists in tā moko, neo-traditional color, and geometric fine line
              artistry.
            </p>
          </div>
          <Link
            href="/artists"
            className="text-sm font-semibold text-ocean-teal underline-offset-4 hover:underline"
          >
            Meet the full team
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {artistPreview.map((artist) => (
            <article
              key={artist.name}
              className="overflow-hidden rounded-2xl border border-ocean-teal/10 bg-white shadow-[0_4px_20px_rgba(42,123,136,0.08)] transition hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(42,123,136,0.12)]"
            >
              <img
                src={artist.image}
                alt={`${artist.name} portrait`}
                className="h-64 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-space text-2xl font-semibold text-deep-navy">
                  {artist.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-coral-accent">
                  {artist.specialty}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
