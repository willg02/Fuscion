import Link from 'next/link';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Heading from '../components/ui/Heading';
import Lead from '../components/ui/Lead';

export default function Framework() {
  return (
    <>
      {/* HEADER */}
      <Section className="pt-32">
        <Container className="max-w-4xl text-center">
          <Heading as="h1" size="display1" align="center" measure="tight" className="mb-6">
            The Framework
          </Heading>
          <Lead align="center" className="text-gray-600 !text-xl">
            The foundation of alignment medicine.
          </Lead>
        </Container>
      </Section>

      {/* SCIENCE + STORY */}
      <Section variant="muted">
        <Container className="max-w-4xl">
          <Heading align="center" className="mb-8">Science + Story</Heading>
          <div className="text-center text-lg text-gray-700 leading-relaxed space-y-4">
            <p>Your biology and your lived experience move together.</p>
            <p className="text-2xl font-medium text-black pt-4">We reunite them into one clear, aligned picture.</p>
            <p>
              <Link href="/framework/science-and-story" className="inline-block mt-4 btn btn-outline text-base">Learn More →</Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* ALIGNMENT ARCHITECTURE */}
      <Section>
        <Container className="max-w-5xl">
          <Heading align="center" className="mb-12">Alignment Architecture</Heading>
          <p className="text-xl text-gray-600 text-center mb-12">The three forces we align:</p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full border-4 border-black flex items-center justify-center">
                <span className="text-3xl font-bold">B</span>
              </div>
              <h3 className="text-2xl font-semibold">Biology</h3>
              <p className="text-gray-600">
                Your body's rhythms, chemistry, and natural intelligence.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full border-4 border-black flex items-center justify-center">
                <span className="text-3xl font-bold">B</span>
              </div>
              <h3 className="text-2xl font-semibold">Behavior</h3>
              <p className="text-gray-600">
                Your daily patterns, micro-choices, and actions.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full border-4 border-black flex items-center justify-center">
                <span className="text-3xl font-bold">B</span>
              </div>
              <h3 className="text-2xl font-semibold">Belief</h3>
              <p className="text-gray-600">
                Your story, meaning, and internal narrative.
              </p>
            </div>
          </div>

          <p className="text-2xl font-medium text-center mt-16">When these synchronize, life flows.</p>
          <div className="text-center mt-6">
            <Link href="/framework/alignment-architecture" className="btn btn-outline text-base">Learn More →</Link>
          </div>
        </Container>
      </Section>

      {/* PRESENCE METHOD */}
      <Section variant="dark">
        <Container className="max-w-4xl">
          <Heading align="center" className="mb-12">Presence Method™</Heading>
          
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-gray-700">1</div>
              <h3 className="text-3xl font-semibold">Notice</h3>
              <p className="text-lg text-gray-300">
                Become aware of the present moment and your internal state.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-gray-700">2</div>
              <h3 className="text-3xl font-semibold">Pause</h3>
              <p className="text-lg text-gray-300">
                Create space between stimulus and response. Break autopilot.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-gray-700">3</div>
              <h3 className="text-3xl font-semibold">Choose</h3>
              <p className="text-lg text-gray-300">
                Select the aligned path. Act with intention, not reaction.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center space-y-4">
            <p className="text-2xl">Simple. Powerful. Transformational.</p>
            <Link href="/framework/presence-method" className="inline-block btn btn-outline text-base">Learn More →</Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container className="max-w-3xl text-center">
          <Heading align="center" className="mb-8">Ready to Experience the Framework?</Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="btn btn-primary text-lg">View Programs →</Link>
            <Link href="/start" className="btn btn-outline text-lg">Start Now →</Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
