import Link from 'next/link';

export default function HowItWorks() {
  return (
    <>
      {/* INTRO */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            The Path to Alignment
          </h1>
          <p className="text-xl text-gray-600">
            We guide you through a simple, powerful process designed for clarity, precision, and lasting change.
          </p>
        </div>
      </section>

      {/* STEP 1: ALIGNMENT ASSESSMENT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="text-6xl font-bold text-gray-200 mb-4">01</div>
              <h2 className="text-3xl font-semibold">The Alignment Assessment</h2>
            </div>
            <div className="md:w-2/3 space-y-6">
              <p className="text-lg text-gray-700">We analyze:</p>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <ul className="space-y-2">
                  <li>• health patterns</li>
                  <li>• labs</li>
                  <li>• biology</li>
                  <li>• behaviors</li>
                </ul>
                <ul className="space-y-2">
                  <li>• stress loops</li>
                  <li>• cravings</li>
                  <li>• energy rhythms</li>
                  <li>• emotional triggers</li>
                  <li>• environmental factors</li>
                </ul>
              </div>
              <p className="text-lg font-medium pt-4">
                We create a single unified map of your health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2: PERSONALIZED PLAN */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="text-6xl font-bold text-gray-200 mb-4">02</div>
              <h2 className="text-3xl font-semibold">Your Personalized Plan</h2>
            </div>
            <div className="md:w-2/3 space-y-6">
              <p className="text-lg text-gray-700">Based on your assessment, we craft:</p>
              <ul className="space-y-3 text-gray-700">
                <li>• a 4-week alignment roadmap</li>
                <li>• micro-strategy sequences</li>
                <li>• daily alignment anchors</li>
                <li>• targeted lifestyle adjustments</li>
                <li>• story-context integration</li>
                <li>• habit replacement stacks</li>
              </ul>
              <p className="text-lg font-medium pt-4">
                Every strategy is designed to succeed in your real life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 3: PRESENCE METHOD */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="text-6xl font-bold text-gray-800 mb-4">03</div>
              <h2 className="text-3xl font-semibold">The Presence Method™</h2>
            </div>
            <div className="md:w-2/3 space-y-6">
              <p className="text-lg text-gray-300">This is your superpower.</p>
              <p className="text-lg text-gray-300">
                The 3-step practice that teaches you to:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>• notice the moment</li>
                <li>• interrupt autopilot</li>
                <li>• choose the aligned path</li>
              </ul>
              <p className="text-xl font-medium pt-4">
                This is where <span className="italic">reactivity</span> becomes <span className="italic">presence</span><br />
                and <span className="italic">presence</span> becomes <span className="italic">alignment</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 4: LIVE GUIDANCE */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="text-6xl font-bold text-gray-200 mb-4">04</div>
              <h2 className="text-3xl font-semibold">Live Guidance & Refinement</h2>
            </div>
            <div className="md:w-2/3 space-y-6">
              <p className="text-lg text-gray-700">
                Through weekly 1:1 sessions, we refine your plan in real time.
              </p>
              <p className="text-lg text-gray-700">
                You don't get "more information."
              </p>
              <p className="text-xl font-medium">
                You get a partner in your alignment — correcting, guiding, adjusting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-8">
            Ready to Begin Your Alignment Journey?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="inline-block px-8 py-4 bg-black text-white text-lg hover:bg-gray-800 transition-colors"
            >
              View Programs →
            </Link>
            <Link
              href="/start"
              className="inline-block px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              Start Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
