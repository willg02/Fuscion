import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* HEADER */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Meet Dr. Parag Dalsania
          </h1>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Dr. Dalsania is a board-certified physician in <strong>Internal Medicine</strong> and{' '}
              <strong>Lifestyle Medicine</strong> with over 25 years of clinical experience.
            </p>
            <p>
              He is the founder and architect of <strong>FUSCION</strong> — a new, alignment-based approach 
              that unites modern medical science with human behavior and personal story.
            </p>
            <p>
              He helps high-performing individuals make better health decisions through personalized 
              micro-moment strategies that translate knowing into living.
            </p>
            <p className="text-xl font-medium text-black pt-4">
              This is the art and science of living in alignment.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Why This Work Matters
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              After decades in medicine, Dr. Dalsania recognized a pattern: his most successful patients 
              weren't lacking information — they were struggling with implementation.
            </p>
            <p>
              The gap between <em>knowing</em> and <em>doing</em> wasn't about willpower. It was about alignment.
            </p>
            <p>
              FUSCION was created to close that gap — through a precision system that integrates biology, 
              behavior, story, and real-time micro-decisions into one coherent path forward.
            </p>
            <p>
              It's not coaching. Not therapy. Not generic wellness.
            </p>
            <p className="font-medium">
              It's alignment medicine — bespoke, intelligent, private.
            </p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Credentials & Training
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              • Board Certified in Internal Medicine
            </p>
            <p>
              • Board Certified in Lifestyle Medicine
            </p>
            <p>
              • 25+ years of clinical practice
            </p>
            <p>
              • Founder of FUSCION Alignment Medicine
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-8">
            Work With Dr. Dalsania
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Experience personalized alignment medicine designed for your life.
          </p>
          <Link
            href="/start"
            className="inline-block px-10 py-4 bg-white text-black text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Begin Your Alignment →
          </Link>
        </div>
      </section>
    </>
  );
}
