export default function PresenceMethod() {
  return (
    <>
      {/* HEADER */}
      <section className="section bg-black text-white pt-32">
        <div className="container-premium max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">Presence Method™</h1>
          <p className="text-xl text-gray-300">Simple. Powerful. Transformational.</p>
        </div>
      </section>

      {/* STEPS */}
      <section className="section bg-black text-white">
        <div className="container-premium max-w-5xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-gray-700">1</div>
              <h3 className="text-3xl font-semibold">Notice</h3>
              <p className="text-lg text-gray-300">Become aware of the present moment and your internal state.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-gray-700">2</div>
              <h3 className="text-3xl font-semibold">Pause</h3>
              <p className="text-lg text-gray-300">Create space between stimulus and response. Break autopilot.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-6xl font-bold text-gray-700">3</div>
              <h3 className="text-3xl font-semibold">Choose</h3>
              <p className="text-lg text-gray-300">Select the aligned path. Act with intention, not reaction.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
