import Link from 'next/link';

export default function Programs() {
  return (
    <>
      {/* HEADER */}
      <section className="section bg-white pt-32">
        <div className="container-premium max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Programs
          </h1>
          <p className="text-xl text-gray-600">
            Premium, personalized paths to alignment.
          </p>
        </div>
      </section>

      {/* PROGRAM 1: 4-WEEK ALIGNMENT */}
      <section className="section bg-gray-50">
        <div className="container-premium max-w-5xl">
          <div className="bg-white p-10 md:p-12 border border-gray-100">
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
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li className="flex items-start">
                  4× 90-minute private sessions
                </li>
                <li>Full alignment mapping</li>
                <li>Lab interpretation (bring your labs)</li>
                <li>Personalized micro-moment strategies</li>
                <li>Weekly alignment refinement</li>
              </ul>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Lifestyle architecture plan</li>
                <li>Daily check-ins (optional premium add-on)</li>
                <li>The Presence Method™ training</li>
                <li>All educational materials</li>
              </ul>
            </div>

            <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs/4-week-private-alignment-program" className="btn btn-outline text-lg">
                View Details →
              </Link>
              <Link href="/start" className="btn btn-primary text-lg">
                Apply to Begin →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM 2: 1:1 SESSIONS */}
      <section className="section bg-white">
        <div className="container-premium max-w-5xl">
          <div className="bg-gray-50 p-10 md:p-12 border border-gray-100">
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
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>cravings</li>
                <li>motivation</li>
                <li>stress patterns</li>
                <li>emotional overdrive</li>
              </ul>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>decision fatigue</li>
                <li>lifestyle redesign</li>
                <li>clarity and purpose</li>
                <li>habit mapping</li>
              </ul>
            </div>

            <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs/1-1-micro-moment-mastery-sessions" className="btn btn-outline text-lg">
                View Details →
              </Link>
              <Link href="/start" className="btn btn-primary text-lg">
                Schedule a Session →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section bg-black text-white">
        <div className="container-premium max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Not Sure Which Program Is Right for You?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's talk. We'll help you find the best path to alignment.
          </p>
          <Link
            href="/start"
            className="btn text-lg bg-white text-black font-medium hover:bg-gray-100"
          >
            Get Started →
          </Link>
        </div>
      </section>
    </>
  );
}
