export default function TaMokoPage() {
  return (
    <div>
      <section className="relative h-[360px]">
        <img
          src="https://images.unsplash.com/photo-1520637836862-4d197d17c83a?w=1400&h=600&fit=crop"
          alt="Cultural imagery representing Māori heritage"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-teal/95 to-deep-navy/90" />
        <div className="relative mx-auto flex h-full max-w-6xl items-center px-4 md:px-6">
          <div>
            <h1 className="font-space text-4xl font-bold text-white md:text-5xl">Tā Moko</h1>
            <p className="mt-4 max-w-2xl text-white/90">Respectful, culturally informed tā moko guided by consultation, tikanga, and story.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-space text-3xl font-semibold text-deep-navy">Led by Sarah Te Whare</h2>
            <p className="mt-4 text-slate-700">Sarah works with clients and whānau to ensure each design reflects identity, ancestry, and intention. We approach every tā moko journey with care, education, and cultural responsibility.</p>
            <p className="mt-4 text-slate-700">If you are exploring tā moko for the first time, we offer extended consults to discuss meaning, placement, and process.</p>
          </div>
          <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&h=600&fit=crop" alt="Detailed traditional pattern artwork" className="h-80 w-full rounded-2xl object-cover" />
        </div>
      </section>
    </div>
  );
}
