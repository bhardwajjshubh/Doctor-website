export function About() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Dr. Serena Blake</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              Finding time and opportunities to care for ourselves can be incredibly challenging in today’s busy and demanding world.
              I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice.
              Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being,
              recognizing that these aspects vary from person to person.
            </p>
            <p>
              I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion,
              and insights into behavioral patterns and tendencies. I hold a master’s degree in Clinical Psychology from the Michigan School
              of Psychology (2012) and a Ph.D. in Counseling Psychology from Western Michigan University (2018). My experience spans therapy
              and psychological assessment in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings.
            </p>
            <p>
              My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism,
              family systems theory, acceptance and commitment concepts, and mindfulness practices.
            </p>
          </div>
        </div>
        <div className="text-center">
          <img src="/dr-blake1.jpg" alt="Dr. Serena Blake" className="rounded-xl shadow-lg w-full max-w-sm mx-auto" />
        </div>
      </div>
    </section>
  );
}