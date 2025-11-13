import Link from 'next/link';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Lead from '../components/ui/Lead';

export default function HowItWorks() {
  return (
    <>
      {/* INTRO */}
      <Section className="pt-32">
        <Container className="max-w-4xl text-center">
          <Heading as="h1" size="display1" align="center" measure="tight" className="mb-6">
            The Path to Alignment
          </Heading>
          <Lead align="center" className="text-gray-600 !text-xl">
            We guide you through a simple, powerful process designed for clarity, precision, and lasting change.
          </Lead>
        </Container>
      </Section>

      {/* STEP 1: ALIGNMENT ASSESSMENT */}
      <Section variant="muted">
        <Container className="max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="text-6xl font-bold text-gray-200 mb-4">01</div>
              <h2 className="text-3xl font-semibold">The Alignment Assessment</h2>
            </div>
            <div className="md:w-2/3 space-y-6">
              <p className="text-lg text-gray-700">We analyze:</p>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <ul className="list-disc pl-6 space-y-2">
                  <li>health patterns</li>
                  <li>labs</li>
                  <li>biology</li>
                  <li>behaviors</li>
                </ul>
                <ul className="list-disc pl-6 space-y-2">
                  <li>stress loops</li>
                  <li>cravings</li>
                  <li>energy rhythms</li>
                  <li>emotional triggers</li>
                  <li>environmental factors</li>
                </ul>
              </div>
              <p className="text-lg font-medium pt-4">
                We create a single unified map of your health.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* STEP 2: PERSONALIZED PLAN */}
      <Section>
        <Container className="max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="text-6xl font-bold text-gray-200 mb-4">02</div>
              <h2 className="text-3xl font-semibold">Your Personalized Plan</h2>
            </div>
            <div className="md:w-2/3 space-y-6">
              <p className="text-lg text-gray-700">Based on your assessment, we craft:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>a 4-week alignment roadmap</li>
                <li>micro-strategy sequences</li>
                <li>daily alignment anchors</li>
                <li>targeted lifestyle adjustments</li>
                <li>story-context integration</li>
                <li>habit replacement stacks</li>
              </ul>
              <p className="text-lg font-medium pt-4">
                Every strategy is designed to succeed in your real life.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* STEP 3: PRESENCE METHOD */}
      <Section variant="dark">
        <Container className="max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="text-6xl font-bold text-gray-700 mb-4">03</div>
              <h2 className="text-3xl font-semibold">The Presence Method™</h2>
            </div>
            <div className="md:w-2/3 space-y-6">
              <p className="text-lg text-gray-300">This is your superpower.</p>
              <p className="text-lg text-gray-300">
                The 3-step practice that teaches you to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>notice the moment</li>
                <li>interrupt autopilot</li>
                <li>choose the aligned path</li>
              </ul>
              <p className="text-xl font-medium pt-4">
                This is where <span className="italic">reactivity</span> becomes <span className="italic">presence</span><br />
                and <span className="italic">presence</span> becomes <span className="italic">alignment</span>.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* STEP 4: LIVE GUIDANCE */}
      <Section>
        <Container className="max-w-5xl">
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
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="muted">
        <Container className="max-w-3xl text-center">
          <Heading align="center" className="mb-8">Ready to Begin Your Alignment Journey?</Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="btn btn-primary text-lg">View Programs →</Link>
            <Link href="/start" className="btn btn-outline text-lg">Start Now →</Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
