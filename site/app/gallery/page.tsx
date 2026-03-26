const categories = ["All", "Traditional", "Neo-Traditional", "Geometric", "Tā Moko", "Color", "Black & Grey"];

const images = [
  "https://images.unsplash.com/photo-1565058739960-8d9ced8c0b51?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1596934386514-10814ad5bb98?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=600&fit=crop",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1475695752828-92e6d7b13ca5?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop",
];

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <h1 className="font-space text-4xl font-bold text-deep-navy md:text-5xl">Gallery</h1>
      <p className="mt-4 max-w-3xl text-slate-700">Explore recent work across traditional, geometric, tā moko, color, and black & grey styles.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <span key={category} className="rounded-full border border-ocean-teal/20 px-4 py-2 text-sm font-medium text-deep-navy">{category}</span>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <img key={image} src={image} alt={`Tattoo gallery artwork sample ${index + 1}`} className="h-56 w-full rounded-xl object-cover md:h-64" />
        ))}
      </div>
    </section>
  );
}
