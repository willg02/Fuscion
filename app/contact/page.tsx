import Link from 'next/link';

export default function Contact() {
  return (
    <>
      {/* HEADER */}
      <section className="section bg-white pt-32">
        <div className="container-premium max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Contact
          </h1>
          <p className="text-xl text-gray-600">
            We're here to answer your questions.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="section bg-gray-50">
        <div className="container-premium max-w-3xl">
          <div className="bg-white p-10 md:p-12 border border-gray-100 text-center space-y-8">
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
                className="btn btn-primary text-lg"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ REDIRECT */}
      <section className="section bg-white">
        <div className="container-premium max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Have Questions First?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Check out our frequently asked questions page for quick answers.
          </p>
          <Link
            href="/faq"
            className="btn btn-outline text-lg"
          >
            View FAQ →
          </Link>
        </div>
      </section>
    </>
  );
}
