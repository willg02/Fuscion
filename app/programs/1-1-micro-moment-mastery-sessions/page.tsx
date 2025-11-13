import Link from 'next/link';

export default function OneOnOneSessions() {
  return (
    <>
      {/* HEADER */}
      <section className="section bg-white pt-32">
        <div className="container-premium max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            1:1 Micro-Moment Mastery Sessions
          </h1>
          <p className="text-xl text-gray-600">
            One Hour. One Alignment Breakthrough.
          </p>
        </div>
      </section>

      {/* DETAILS */}
      <section className="section bg-gray-50">
        <div className="container-premium max-w-5xl">
          <div className="bg-white p-10 md:p-12 border border-gray-100">
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Perfect for individuals seeking precision guidance for:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
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
            <div className="text-center">
              <Link href="/start" className="btn btn-outline text-lg">
                Schedule a Session →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BACK LINKS */}
      <section className="section bg-white">
        <div className="container-premium max-w-3xl text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="btn btn-outline text-lg">
              All Programs
            </Link>
            <Link href="/programs/4-week-private-alignment-program" className="btn btn-outline text-lg">
              4-Week Program
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
