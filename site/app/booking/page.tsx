export default function BookingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h1 className="font-space text-4xl font-bold text-deep-navy md:text-5xl">Book a Consultation</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop"
          alt="Tattoo consultation area in bright studio"
          className="h-80 w-full rounded-2xl object-cover"
        />
        <form className="space-y-4 rounded-2xl border border-slate-200 p-6 shadow-[0_4px_20px_rgba(42,123,136,0.08)]">
          <input className="w-full rounded-md border p-3" placeholder="Full name" required />
          <input className="w-full rounded-md border p-3" type="email" placeholder="Email" required />
          <input className="w-full rounded-md border p-3" type="tel" placeholder="Phone" />
          <select className="w-full rounded-md border p-3" defaultValue="">
            <option value="" disabled>Service type</option>
            <option>Tattoo</option>
            <option>Piercing</option>
            <option>Consultation</option>
          </select>
          <select className="w-full rounded-md border p-3" defaultValue="">
            <option value="" disabled>Preferred artist</option>
            <option>Sarah Te Whare</option>
            <option>Marcus Chen</option>
            <option>Jamie Rivera</option>
          </select>
          <textarea className="w-full rounded-md border p-3" rows={4} placeholder="Describe your idea" />
          <input className="w-full rounded-md border p-3" type="file" multiple />
          <button className="w-full rounded-md bg-ocean-teal px-6 py-3 font-space font-semibold text-white hover:bg-deep-navy" type="submit">Send Request</button>
        </form>
      </div>
    </section>
  );
}
