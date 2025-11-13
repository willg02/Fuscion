import Link from 'next/link';

export default function Programs() {
  return (
    <>
      {/* HEADER */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Programs
          </h1>
          <p className="text-xl text-gray-600">
            Premium, personalized paths to alignment.
          </p>
        </div>
      </section>

      {/* PROGRAM 1: 4-WEEK ALIGNMENT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white p-12 shadow-sm">
            <div className="mb-8">
              <span className="inline-block px-4 py-1 bg-black text-white text-sm font-medium mb-4">
                SIGNATURE PROGRAM
              </span>
              <h2 className="text-4xl font-semibold mb-4">
                The 4-Week Private Alignment Program
              </h2>
              <p className="text-xl text-gray-600">
                A 30-Day Precision Alignment Experience.
              </p>
            </div>

            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Our signature program for individuals ready for serious change.
              </p>
              <h3 className="text-xl font-semibold mb-4">You receive:</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>4× 90-minute private sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>Full alignment mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>Lab interpretation (bring your labs)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>Personalized micro-moment strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>Weekly alignment refinement</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>Lifestyle architecture plan</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>Daily check-ins (optional premium add-on)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>The Presence Method™ training</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">✓</span>
                  <span>All educational materials</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link
                href="/start"
                className="inline-block px-10 py-4 bg-black text-white text-lg hover:bg-gray-800 transition-colors"
              >
                Apply to Begin →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM 2: 1:1 SESSIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gray-50 p-12">
            <div className="mb-8">
              <h2 className="text-4xl font-semibold mb-4">
                1:1 Micro-Moment Mastery Sessions
              </h2>
              <p className="text-xl text-gray-600">
                One Hour. One Alignment Breakthrough.
              </p>
            </div>

            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Perfect for individuals seeking precision guidance for:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>cravings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>motivation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>stress patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>emotional overdrive</span>
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>decision fatigue</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>lifestyle redesign</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>clarity and purpose</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>habit mapping</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link
                href="/start"
                className="inline-block px-10 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
              >
                Schedule a Session →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Not Sure Which Program Is Right for You?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's talk. We'll help you find the best path to alignment.
          </p>
          <Link
            href="/start"
            className="inline-block px-10 py-4 bg-white text-black text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started →
          </Link>
        </div>
      </section>
    </>
  );
}
