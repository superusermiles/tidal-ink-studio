import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-5 md:px-6 md:py-24">
          <div className="md:col-span-2">
            <p className="font-space text-sm uppercase tracking-[0.2em] text-ocean-teal">Mount Maunganui Waterfront</p>
            <h1 className="mt-4 font-space text-4xl font-bold leading-tight text-deep-navy md:text-6xl">Where the ocean meets the ink</h1>
            <p className="mt-6 text-lg text-slate-700">
              Tidal Ink Studio brings world-class tattooing, culturally grounded tā moko, and precision piercing to a bright, modern coastal space.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/booking" className="rounded-md bg-ocean-teal px-6 py-3 font-space font-semibold text-white hover:bg-deep-navy">
                Book Consultation
              </Link>
              <Link href="/gallery" className="rounded-md border border-ocean-teal px-6 py-3 font-space font-semibold text-ocean-teal hover:bg-warm-sand">
                View Gallery
              </Link>
            </div>
          </div>
          <div className="md:col-span-3">
            <img
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=800&fit=crop"
              alt="Modern bright tattoo studio interior overlooking the coast"
              className="h-[420px] w-full rounded-2xl object-cover shadow-[0_8px_32px_rgba(42,123,136,0.12)]"
            />
          </div>
        </div>
        <svg viewBox="0 0 1440 120" className="h-16 w-full text-warm-sand" preserveAspectRatio="none" aria-hidden>
          <path d="M0,96L60,90.7C120,85,240,75,360,74.7C480,75,600,85,720,90.7C840,96,960,96,1080,85.3C1200,75,1320,53,1380,42.7L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="currentColor" />
        </svg>
      </section>

      <section className="bg-warm-sand py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <img
            src="https://images.unsplash.com/photo-1594736797933-d0f06ba42eb9?w=800&h=600&fit=crop"
            alt="Ocean view near Mount Maunganui"
            className="h-80 w-full rounded-2xl object-cover"
          />
          <div>
            <h2 className="font-space text-3xl font-semibold text-deep-navy md:text-4xl">Coastal calm. Serious craft.</h2>
            <p className="mt-4 text-slate-700">
              We built Tidal Ink to feel different from the typical studio: open light, ocean energy, and artists who prioritize clean execution and custom design.
            </p>
            <p className="mt-4 text-slate-700">
              From first consult to final aftercare check-in, every step is transparent, respectful, and focused on long-term quality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
