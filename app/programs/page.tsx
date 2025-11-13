import Link from 'next/link';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Lead from '../components/ui/Lead';

export default function Programs() {
  return (
    <>
      {/* HEADER */}
      <Section className="pt-32">
        <Container className="max-w-4xl text-center">
          <Heading as="h1" size="display1" align="center" measure="tight" className="mb-6">
            Programs
          </Heading>
          <Lead align="center" className="text-gray-600 !text-xl">
            Premium, personalized paths to alignment.
          </Lead>
        </Container>
      </Section>

      {/* PROGRAM 1: 4-WEEK ALIGNMENT */}
      <Section variant="muted">
        <Container className="max-w-5xl">
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
        </Container>
      </Section>

      {/* PROGRAM 2: 1:1 SESSIONS */}
      <Section>
        <Container className="max-w-5xl">
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
        </Container>
      </Section>

      {/* CTA SECTION */}
      <Section variant="dark">
        <Container className="max-w-3xl text-center">
          <Heading align="center" size="display2" className="mb-6">
            Not Sure Which Program Is Right for You?
          </Heading>
          <p className="text-lg text-gray-300 mb-8">
            Let's talk. We'll help you find the best path to alignment.
          </p>
          <Link
            href="/start"
            className="btn text-lg bg-white text-black font-medium hover:bg-gray-100"
          >
            Get Started →
          </Link>
        </Container>
      </Section>
    </>
  );
}
