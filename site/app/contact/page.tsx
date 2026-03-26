export default function ContactPage() {
  return (
    <div>
      <section className="relative h-[320px]">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop"
          alt="Wide interior view of Tidal Ink Studio"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-deep-navy/70" />
        <div className="relative mx-auto flex h-full max-w-6xl items-center px-4 md:px-6">
          <h1 className="font-space text-4xl font-bold text-white md:text-5xl">Contact | Mount Maunganui Tattoo Studio</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl bg-warm-sand p-8">
            <h2 className="font-space text-2xl font-semibold text-deep-navy">Visit Us</h2>
            <p className="mt-4 text-slate-700">142 Marine Parade, Mount Maunganui, Bay of Plenty 3116</p>
            <p className="mt-2 text-slate-700">+64 7 574 8900</p>
            <p className="mt-2 text-slate-700">hello@tidalink.nz</p>
            <h3 className="mt-6 font-space text-xl font-semibold text-deep-navy">Hours</h3>
            <p className="mt-2 text-slate-700">Tuesday-Saturday: 10am-6pm</p>
            <p className="text-slate-700">Sunday: 11am-4pm</p>
            <p className="text-slate-700">Monday: Closed</p>
            <img
              src="https://images.unsplash.com/photo-1594736797933-d0f06ba42eb9?w=800&h=400&fit=crop"
              alt="Mount Maunganui waterfront near the studio location"
              className="mt-6 h-44 w-full rounded-xl object-cover"
            />
          </div>
          <img
            src="https://images.unsplash.com/photo-1594736797933-d0f06ba42eb9?w=800&h=400&fit=crop"
            alt="Map-style waterfront context for Mount Maunganui studio location"
            className="h-full min-h-[320px] w-full rounded-2xl object-cover"
          />
        </div>
      </section>
    </div>
  );
}
