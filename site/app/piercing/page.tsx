export default function PiercingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h1 className="font-space text-4xl font-bold text-deep-navy md:text-5xl">Piercing Services</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
          alt="Clean modern piercing setup in studio"
          className="h-80 w-full rounded-2xl object-cover"
        />
        <div>
          <p className="text-slate-700">Our piercing service combines sterile clinical standards with personalised placement advice to suit your anatomy and style.</p>
          <h2 className="mt-6 font-space text-2xl font-semibold text-deep-navy">Aftercare Focus</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            <li>Sterile saline cleaning protocol</li>
            <li>Jewellery material guidance</li>
            <li>Healing timeline and check-ins</li>
            <li>24-hour follow-up support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
