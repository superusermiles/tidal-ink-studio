export default function BookingPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h1 className="font-space text-4xl font-bold text-deep-navy md:text-5xl">Booking | Mount Maunganui Tattoo Studio</h1>
      <p className="mt-4 max-w-3xl text-slate-700">Tell us about your idea, preferred artist, and timing. We will reply with availability, estimate guidance, and next steps.</p>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop"
          alt="Tattoo consultation area in a bright modern studio"
          className="h-80 w-full rounded-2xl object-cover"
        />
        <form className="space-y-4 rounded-2xl border border-ocean-teal/10 bg-white p-6 shadow-[0_4px_20px_rgba(42,123,136,0.08)]" action="#" method="post">
          <input className="w-full rounded-md border border-slate-300 p-3" name="name" placeholder="Full name" required />
          <input className="w-full rounded-md border border-slate-300 p-3" type="email" name="email" placeholder="Email" required />
          <input className="w-full rounded-md border border-slate-300 p-3" type="tel" name="phone" placeholder="Phone" />
          <select className="w-full rounded-md border border-slate-300 p-3" name="serviceType" defaultValue="">
            <option value="" disabled>Service type</option>
            <option value="tattoo">Tattoo</option>
            <option value="piercing">Piercing</option>
            <option value="consultation">Consultation</option>
          </select>
          <select className="w-full rounded-md border border-slate-300 p-3" name="preferredArtist" defaultValue="">
            <option value="" disabled>Preferred artist</option>
            <option value="sarah">Sarah Te Whare</option>
            <option value="marcus">Marcus Chen</option>
            <option value="jamie">Jamie Rivera</option>
            <option value="none">No preference</option>
          </select>
          <textarea className="w-full rounded-md border border-slate-300 p-3" name="description" rows={4} placeholder="Describe your idea, style, and placement" />
          <input className="w-full rounded-md border border-slate-300 p-3" type="file" name="references" multiple />
          <input className="w-full rounded-md border border-slate-300 p-3" type="datetime-local" name="preferredTime" />
          <input className="w-full rounded-md border border-slate-300 p-3" name="sizePlacement" placeholder="Size and body placement" />
          <input className="w-full rounded-md border border-slate-300 p-3" name="budget" placeholder="Budget range (NZD)" />
          <button className="w-full rounded-md bg-ocean-teal px-6 py-3 font-space font-semibold text-white transition hover:bg-deep-navy" type="submit">Send Request</button>
        </form>
      </div>
    </section>
  );
}
