const artists = [
  {
    name: "Sarah Te Whare",
    specialty: "Tā Moko & Traditional Polynesian",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Māori artist focused on culturally authentic tā moko and custom stories anchored in whakapapa.",
    work: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&h=400&fit=crop",
  },
  {
    name: "Marcus Chen",
    specialty: "Neo-Traditional & Color Work",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Bold color palettes, crisp linework, and contemporary forms with classic tattoo foundations.",
    work: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&h=400&fit=crop",
  },
  {
    name: "Jamie Rivera",
    specialty: "Geometric & Fine Line",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=400&h=400&fit=crop",
    bio: "Precision geometry and delicate fine line tattoos designed for flow and longevity.",
    work: "https://images.unsplash.com/photo-1542727365-19732a80dcfd?w=600&h=400&fit=crop",
  },
];

export default function ArtistsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h1 className="font-space text-4xl font-bold text-deep-navy md:text-5xl">Our Artists</h1>
      <p className="mt-4 max-w-3xl text-slate-700">Each artist brings a distinct voice. Every piece is custom, collaborative, and crafted for your body.</p>
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {artists.map((artist) => (
          <article key={artist.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(42,123,136,0.08)] transition hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(42,123,136,0.12)]">
            <img src={artist.image} alt={`${artist.name} portrait`} className="h-64 w-full object-cover" />
            <div className="p-6">
              <h2 className="font-space text-2xl font-semibold text-deep-navy">{artist.name}</h2>
              <p className="mt-1 text-sm font-medium text-coral-accent">{artist.specialty}</p>
              <p className="mt-4 text-slate-700">{artist.bio}</p>
              <img src={artist.work} alt={`${artist.name} tattoo portfolio sample`} className="mt-4 h-40 w-full rounded-lg object-cover" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
