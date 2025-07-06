export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-blue-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact</h2>
        <form className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" name="name" required className="w-full mt-1 p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <input type="tel" name="phone" required className="w-full mt-1 p-2 border rounded" />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" required className="w-full mt-1 p-2 border rounded" />
          </div>

          <div>
            <label className="block text-gray-700">What brings you here?</label>
            <textarea name="reason" required className="w-full mt-1 p-2 border rounded" rows={4}></textarea>
          </div>

          <div>
            <label className="block text-gray-700">Preferred time to reach you</label>
            <input type="text" name="preferredTime" required className="w-full mt-1 p-2 border rounded" />
          </div>

          <div className="flex items-center">
            <input type="checkbox" name="consent" required className="mr-2" />
            <label className="text-gray-700">I agree to be contacted</label>
          </div>

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
        <div className="mt-8 text-center text-gray-700">
          <p>Phone: (323) 555-0192</p>
          <p>Email: <a href="mailto:serena@blakepsychology.com" className="text-blue-700 underline">serena@blakepsychology.com</a></p>
        </div>
      </div>
    </section>
  );
}
