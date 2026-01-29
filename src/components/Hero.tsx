export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-white animate-fade-in py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-6 leading-tight">
          Cooking has become cognitively expensive.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-secondary">
          Budi provides the infrastructure to make it easy.
        </p>
      </div>
    </section>
  );
}
