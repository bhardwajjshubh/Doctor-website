export function FAQ() {
  const faqs = [
    {
      question: 'What are your fees?',
      answer: 'My standard fee is $150 per 50-minute session. A sliding scale is available for those in need.',
    },
    {
      question: 'Do you take insurance?',
      answer: 'I do not bill insurance directly but can provide superbills for out-of-network reimbursement.',
    },
    {
      question: 'Do you provide online counseling?',
      answer: 'Yes, I offer secure telehealth sessions to clients located within the state.',
    },
    {
      question: 'What are your office hours?',
      answer: 'Monday–Friday, 9am–6pm (by appointment only).',
    },
    {
      question: 'What geographic areas do you serve?',
      answer: 'I serve clients throughout the state via telehealth and in-person in the downtown office.',
    },
    {
      question: 'What services do you offer?',
      answer: 'I provide individual therapy, couples counseling, and online therapy sessions.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-teal-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="divide-y divide-gray-300">
          {faqs.map((faq, index) => (
            <details key={index} className="py-4 group cursor-pointer">
              <summary className="flex justify-between items-center text-lg font-medium text-gray-800">
                <span>{faq.question}</span>
                <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-2 text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}