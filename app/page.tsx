import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="section flex items-center justify-center relative overflow-hidden bg-white min-h-[70vh] md:min-h-[82vh]">
        {/* Subtle motion element */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] md:w-[820px] md:h-[820px] border border-black/70 rounded-full animate-pulse" 
               style={{ animationDuration: '5s' }} />
        </div>
        
        <div className="container-premium text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
            Master Better Health Decisions.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            One Intelligent Micro-Moment at a Time.
          </p>
          <Link
            href="/start"
            className="btn btn-primary text-lg"
          >
            Start Your Alignment™ →
          </Link>
        </div>
      </section>

      {/* SECTION 2 — WHAT IS FUSCION? */}
      <section className="section bg-gray-50">
        <div className="container-premium">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-center">
            Where Your Science and Your Story Become One.
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              FUSCION is a private, premium health alignment studio for individuals who want more than 
              information — they want transformation.
            </p>
            <p>
              We help you close the gap between <strong>what you know</strong> and <strong>how you live</strong>.
            </p>
            <p>
              Through personalized micro-moment strategies, we help you make better health decisions in real 
              time — decisions that create energy, clarity, consistency, and alignment.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="btn btn-outline"
            >
              Learn More About Our Approach →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY HIGH-END CLIENTS COME TO US */}
      <section className="section bg-white">
        <div className="container-premium">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">You Know… But Don't Do.</h3>
              <p className="text-gray-600 leading-relaxed">
                You understand health.
                <br />You've tried programs.
                <br />But consistency slips.
              </p>
              <p className="font-medium">We close the Knowing–Doing Gap.</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">You're Successful Everywhere Except Health.</h3>
              <p className="text-gray-600 leading-relaxed">
                Your career is aligned.
                <br />Your life is full.
                <br />But your habits don't match your goals.
              </p>
              <p className="font-medium">We realign your biology and behavior.</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">You Want a Private, Intelligent Guide.</h3>
              <p className="text-gray-600 leading-relaxed">
                You want precision, not trends.
                <br />A real expert, not a coach.
                <br />A partner who understands medicine, behavior, and meaning.
              </p>
              <p className="font-medium">We work 1:1, discreetly, with intention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE FUSCION DIFFERENCE */}
      <section className="section bg-black text-white">
        <div className="container-premium text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            The First Alignment-Based Health System.
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            We integrate three forms of intelligence:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-3">
              <h4 className="text-xl font-semibold">Health Intelligence</h4>
              <p className="text-gray-300">(biology, labs, physiology)</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-xl font-semibold">Healing Intelligence</h4>
              <p className="text-gray-300">(story, meaning, lived experience)</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-xl font-semibold">Behavioral Intelligence</h4>
              <p className="text-gray-300">(micro-choices that shape life)</p>
            </div>
          </div>

          <div className="mt-12 space-y-2 text-lg">
            <p>When these synchronize, clarity appears.</p>
            <p>Energy rises.</p>
            <p>Alignment begins.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS (TEASER) */}
      <section className="section bg-white">
        <div className="container-premium">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-gray-200">01</div>
              <h3 className="text-2xl font-semibold">The Alignment Assessment</h3>
              <p className="text-gray-600">
                We map your biology, patterns, blind spots, and goals into one clear picture.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl font-bold text-gray-200">02</div>
              <h3 className="text-2xl font-semibold">The Micro-Moment Strategies</h3>
              <p className="text-gray-600">
                You receive personalized, real-time decisions that move your life forward.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl font-bold text-gray-200">03</div>
              <h3 className="text-2xl font-semibold">The Presence Method™</h3>
              <p className="text-gray-600">
                You master the moment between impulse and action — where alignment lives.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="inline-block px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              See Full Process →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHO THIS IS FOR */}
      <section className="section bg-gray-50">
        <div className="container-premium max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center">
            Built for High-Performing Individuals Who Want More.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Executives</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Physicians</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Entrepreneurs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Leaders</span>
              </li>
            </ul>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Creators</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Individuals navigating stress, cravings, fatigue</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>People who want their life to reflect their potential</span>
              </li>
            </ul>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/start"
              className="btn btn-primary text-lg"
            >
              Start Your Alignment →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — THE PROMISE */}
      <section className="section bg-white">
        <div className="container-premium max-w-3xl text-center">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6">
            You Don't Need More Information.
          </h2>
          <h3 className="text-3xl md:text-5xl font-semibold mb-8 text-gray-600">
            You Need a Way to Live It.
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            FUSCION gives you the most intelligent form of accountability —<br />
            alignment, one moment at a time.
          </p>
        </div>
      </section>

      {/* SECTION 8 — CTA (Footer Hero) */}
      <section className="section bg-black text-white">
        <div className="container-premium max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12">
            Ready to Align Your Life?
          </h2>
          <Link
            href="/start"
            className="btn text-lg bg-white text-black hover:bg-gray-100 font-medium"
          >
            Begin Now →
          </Link>
        </div>
      </section>
    </>
  );
}
