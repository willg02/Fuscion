export default function AlignmentArchitecture() {
  return (
    <>
      {/* HEADER */}
      <section className="section bg-white pt-32">
        <div className="container-premium max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">Alignment Architecture</h1>
          <p className="text-xl text-gray-600">The three forces we align.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-premium max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full border-4 border-black flex items-center justify-center">
                <span className="text-3xl font-bold">B</span>
              </div>
              <h3 className="text-2xl font-semibold">Biology</h3>
              <p className="text-gray-600">Your body's rhythms, chemistry, and natural intelligence.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full border-4 border-black flex items-center justify-center">
                <span className="text-3xl font-bold">B</span>
              </div>
              <h3 className="text-2xl font-semibold">Behavior</h3>
              <p className="text-gray-600">Your daily patterns, micro-choices, and actions.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto rounded-full border-4 border-black flex items-center justify-center">
                <span className="text-3xl font-bold">B</span>
              </div>
              <h3 className="text-2xl font-semibold">Belief</h3>
              <p className="text-gray-600">Your story, meaning, and internal narrative.</p>
            </div>
          </div>
          <p className="text-2xl font-medium text-center mt-16">When these synchronize, life flows.</p>
        </div>
      </section>
    </>
  );
}
