import Link from 'next/link';

export default function Contact() {
  return (
    <>
      {/* HEADER */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Contact
          </h1>
          <p className="text-xl text-gray-600">
            We're here to answer your questions.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white p-12 text-center space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-3">General Inquiries</h2>
              <a 
                href="mailto:hello@fuscion.com" 
                className="text-lg text-gray-700 hover:text-black transition-colors"
              >
                hello@fuscion.com
              </a>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-3">Ready to Begin?</h2>
              <p className="text-gray-600 mb-6">
                Schedule your initial consultation and start your alignment journey.
              </p>
              <Link
                href="/start"
                className="inline-block px-8 py-4 bg-black text-white text-lg hover:bg-gray-800 transition-colors"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ REDIRECT */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Have Questions First?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Check out our frequently asked questions page for quick answers.
          </p>
          <Link
            href="/faq"
            className="inline-block px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
          >
            View FAQ →
          </Link>
        </div>
      </section>
    </>
  );
}
