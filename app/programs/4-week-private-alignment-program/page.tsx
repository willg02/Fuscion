import Link from 'next/link';

export default function FourWeekProgram() {
  return (
    <>
      {/* HEADER */}
      <section className="section bg-white pt-32">
        <div className="container-premium max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            4-Week Private Alignment Program
          </h1>
          <p className="text-xl text-gray-600">
            A 30-Day Precision Alignment Experience.
          </p>
        </div>
      </section>

      {/* PROGRAM DETAILS */}
      <section className="section bg-gray-50">
        <div className="container-premium max-w-5xl">
          <div className="bg-white p-10 md:p-12 border border-gray-100">
            <div className="mb-8">
              <span className="inline-block px-4 py-1 bg-black text-white text-sm font-medium mb-4">
                SIGNATURE PROGRAM
              </span>
              <h2 className="text-3xl font-semibold mb-6">You receive</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>4× 90-minute private sessions</li>
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
            </div>

            <div className="text-center">
              <Link href="/start" className="btn btn-primary text-lg">
                Apply to Begin →
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
            <Link href="/programs/1-1-micro-moment-mastery-sessions" className="btn btn-outline text-lg">
              1:1 Sessions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
