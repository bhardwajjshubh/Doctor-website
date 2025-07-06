export function Services() {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">How I Help</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-teal-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img src="/individual-therapy.jpg" alt="Individual Therapy" className="rounded-md mb-4 w-full h-52 object-cover" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Individual Therapy</h3>
            <p className="text-gray-700 mb-4">
              One-on-one sessions that provide a safe, confidential space to explore personal challenges such as anxiety, depression,
              grief, and self-esteem. My approach is tailored to your unique needs, empowering you to make meaningful changes and
              achieve emotional well-being.
            </p>
            <a href="#contact" className="inline-block border border-gray-700 text-gray-800 font-medium px-4 py-2 rounded hover:bg-white hover:shadow">
              Learn More
            </a>
          </div>

          <div className="bg-teal-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <img src="/couples-counseling.jpg" alt="Couples Counseling" className="rounded-md mb-4 w-full h-52 object-cover" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Couples Counseling</h3>
            <p className="text-gray-700 mb-4">
              Whether you're navigating conflict, rebuilding trust, or improving communication, couples counseling helps deepen your
              connection. I work collaboratively to support both partners in creating a stronger, more fulfilling relationship.
            </p>
            <a href="#contact" className="inline-block border border-gray-700 text-gray-800 font-medium px-4 py-2 rounded hover:bg-white hover:shadow">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
