export function Hero() {
  return (
    <section className="w-full h-screen bg-[url('/dr-blake.jpg')] bg-cover bg-center flex items-center justify-center text-white">
      <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. Serena Blake</h1>
        <h2 className="text-xl md:text-2xl mb-6">Compassionate Therapy for a Healthier Mind</h2>
        <a href="#contact" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition">
          Book a Free Consult
        </a>
      </div>
    </section>
  );
}
