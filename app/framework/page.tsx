import Link from 'next/link';

export default function Framework() {
  return (
    <>
      {/* HEADER */}
      <section className="section bg-white pt-32">
        <div className="container-premium max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            The Framework
          </h1>
          <p className="text-xl text-gray-600">
            The foundation of alignment medicine.
          </p>
        </div>
      </section>

      {/* SCIENCE + STORY */}
      <section className="section bg-gray-50">
        <div className="container-premium max-w-4xl">
          <h2 className="text-4xl font-semibold mb-8 text-center">
            Science + Story
          </h2>
          <div className="text-center text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Your biology and your lived experience move together.
            </p>
            <p className="text-2xl font-medium text-black pt-4">
              We reunite them into one clear, aligned picture.
            </p>
          </div>
        </div>
      </section>

      {/* ALIGNMENT ARCHITECTURE */}
      <section className="section bg-white">
        <div className="container-premium max-w-5xl">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            Alignment Architecture
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            The three forces we align:
          </p>
          
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

          <p className="text-2xl font-medium text-center mt-16">
            When these synchronize, life flows.
          </p>
        </div>
      </section>

      {/* PRESENCE METHOD */}
      <section className="section bg-black text-white">
        <div className="container-premium max-w-4xl">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            Presence Method™
          </h2>
          
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-premium max-w-3xl text-center">
          <h2 className="text-4xl font-semibold mb-8">
            Ready to Experience the Framework?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programs"
              className="btn btn-primary text-lg"
            >
              View Programs →
            </Link>
            <Link
              href="/start"
              className="btn btn-outline text-lg"
            >
              Start Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
