import Link from 'next/link';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Lead from '../components/ui/Lead';

export default function About() {
  return (
    <>
      {/* HEADER */}
      <Section className="pt-32">
        <Container className="max-w-4xl text-center">
          <Heading as="h1" size="display1" align="center" className="mb-6" measure="tight">
            Meet Dr. Parag Dalsania
          </Heading>
        </Container>
      </Section>

      {/* BIO SECTION */}
      <Section variant="muted">
        <Container className="max-w-4xl">
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
        </Container>
      </Section>

      {/* APPROACH SECTION */}
      <Section>
        <Container className="max-w-4xl">
          <Heading align="center" className="mb-8">Why This Work Matters</Heading>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
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
        </Container>
      </Section>

      {/* CREDENTIALS */}
      <Section variant="muted">
        <Container className="max-w-4xl text-center">
          <Heading className="mb-8" align="center">Credentials & Training</Heading>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 text-left inline-block text-start">
            <li>Board Certified in Internal Medicine</li>
            <li>Board Certified in Lifestyle Medicine</li>
            <li>25+ years of clinical practice</li>
            <li>Founder of FUSCION Alignment Medicine</li>
          </ul>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <Container className="max-w-3xl text-center">
          <Heading align="center" size="display2" className="mb-8">Work With Dr. Dalsania</Heading>
          <p className="text-lg text-gray-300 mb-8">
            Experience personalized alignment medicine designed for your life.
          </p>
          <Link href="/start" className="btn text-lg bg-white text-black font-medium hover:bg-gray-100">
            Begin Your Alignment →
          </Link>
        </Container>
      </Section>
    </>
  );
}
