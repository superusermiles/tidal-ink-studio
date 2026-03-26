const artists = [
  {
    name: "Sarah Te Whare",
    specialty: "Tā Moko & Traditional Polynesian",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Māori artist specializing in culturally authentic tā moko and traditional Polynesian designs. Sarah brings deep cultural knowledge and respect to every piece.",
    portfolioImages: [
      "https://images.unsplash.com/photo-1520637836862-4d197d17c83a?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565058739960-8d9ced8c0b51?w=400&h=600&fit=crop",
    ],
  },
  {
    name: "Marcus Chen",
    specialty: "Neo-Traditional & Color Work",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Marcus blends classic tattoo foundations with modern color theory to create vibrant neo-traditional work that stays bold over time.",
    portfolioImages: [
      "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop",
    ],
  },
  {
    name: "Jamie Rivera",
    specialty: "Geometric & Fine Line",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=400&h=400&fit=crop",
    bio: "Jamie creates precise geometric compositions and fine line designs with meticulous attention to placement, symmetry, and skin flow.",
    portfolioImages: [
      "https://images.unsplash.com/photo-1596934386514-10814ad5bb98?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=600&fit=crop",
    ],
  },
];

export default function ArtistsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h1 className="font-space text-4xl font-bold text-deep-navy md:text-5xl">Artists | Mount Maunganui Tattoo Studio</h1>
      <p className="mt-4 max-w-3xl text-slate-700">
        Meet the artists behind Tidal Ink Studio. Every tattoo is custom-designed in consultation, with specialist expertise in tā moko, color, and geometric styles.
      </p>
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {artists.map((artist) => (
          <article key={artist.name} className="overflow-hidden rounded-2xl border border-ocean-teal/10 bg-white shadow-[0_4px_20px_rgba(42,123,136,0.08)] transition hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(42,123,136,0.12)]">
            <img src={artist.imageUrl} alt={`${artist.name} portrait`} className="h-64 w-full object-cover" />
            <div className="space-y-4 p-6">
              <div>
                <h2 className="font-space text-2xl font-semibold text-deep-navy">{artist.name}</h2>
                <p className="mt-1 text-sm font-medium text-coral-accent">{artist.specialty}</p>
              </div>
              <p className="text-slate-700">{artist.bio}</p>
              <div className="grid grid-cols-2 gap-3">
                {artist.portfolioImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${artist.name} portfolio sample ${index + 1}`}
                    className="h-32 w-full rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
