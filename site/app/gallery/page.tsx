const categories = ["All", "Traditional", "Neo-Traditional", "Geometric", "Tā Moko", "Color", "Black & Grey"];

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1565058739960-8d9ced8c0b51?w=400&h=600&fit=crop", alt: "Traditional Polynesian tattoo design", artist: "Sarah Te Whare" },
  { url: "https://images.unsplash.com/photo-1596934386514-10814ad5bb98?w=600&h=400&fit=crop", alt: "Geometric mandala tattoo design", artist: "Jamie Rivera" },
  { url: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=600&fit=crop", alt: "Colorful neo-traditional tattoo", artist: "Marcus Chen" },
  { url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop", alt: "Black and grey portrait tattoo", artist: "Marcus Chen" },
  { url: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=600&fit=crop", alt: "Fine line geometric tattoo", artist: "Jamie Rivera" },
  { url: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop", alt: "Neo-traditional flower design", artist: "Marcus Chen" },
  { url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop", alt: "Colorful sleeve tattoo work", artist: "Marcus Chen" },
  { url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop", alt: "Detailed black and grey tattoo work", artist: "Sarah Te Whare" },
  { url: "https://images.unsplash.com/photo-1520637836862-4d197d17c83a?w=400&h=600&fit=crop", alt: "Traditional tā moko design", artist: "Sarah Te Whare" },
];

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h1 className="font-space text-4xl font-bold text-deep-navy md:text-5xl">Gallery | Mount Maunganui Tattoo Studio</h1>
      <p className="mt-4 max-w-3xl text-slate-700">Browse recent custom work across traditional, neo-traditional, geometric, tā moko, color, and black & grey styles.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <span key={category} className="rounded-full border border-ocean-teal/15 px-4 py-2 text-sm font-medium text-deep-navy">{category}</span>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <figure key={image.url} className="overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(42,123,136,0.08)]">
            <img src={image.url} alt={image.alt} className="h-56 w-full object-cover transition duration-300 hover:scale-105 md:h-64" />
            <figcaption className="px-3 py-2 text-xs text-slate-600">Artist: {image.artist}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
