export default function PiercingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h1 className="font-space text-4xl font-bold text-deep-navy md:text-5xl">Piercing | Mount Maunganui Tattoo Studio</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
          alt="Clean modern piercing setup in a professional studio"
          className="h-80 w-full rounded-2xl object-cover"
        />
        <div>
          <p className="text-slate-700">Our piercing service pairs sterile clinical standards with personalized placement guidance to suit your anatomy, style, and healing goals.</p>
          <h2 className="mt-6 font-space text-2xl font-semibold text-deep-navy">Aftercare Focus</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Sterile saline cleaning protocol</li>
            <li>Jewelry material and sizing guidance</li>
            <li>Healing timeline and check-ins</li>
            <li>24-hour follow-up support</li>
          </ul>
          <img
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop"
            alt="Bright clean studio environment supporting safe aftercare"
            className="mt-6 h-44 w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
