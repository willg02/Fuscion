'use client';

import { useState } from 'react';

export default function Start() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    programInterest: '',
    message: '',
    company: '' // honeypot
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Honeypot check: if filled, treat as spam and pretend success
    if (formData.company && formData.company.trim().length > 0) {
      setSubmitted(true);
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch('https://formspree.io/f/mwpanpnb', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          programInterest: formData.programInterest,
          message: formData.message,
          _subject: `New Start Inquiry — ${formData.firstName} ${formData.lastName}`,
          page: typeof window !== 'undefined' ? window.location.href : 'start-page'
        })
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.error || 'There was an issue sending your message. Please email hello@fuscion.com.');
      }
    } catch (err) {
      setError('Network error. Please try again or email hello@fuscion.com.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mb-8">
            <svg className="w-20 h-20 mx-auto text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-semibold mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-8">
            We've received your information and will be in touch within 24-48 hours to schedule your consultation.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-black hover:text-gray-600 underline"
          >
            Submit another inquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HEADER */}
      <section className="section bg-white pt-32">
        <div className="container-premium max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Start Your Alignment
          </h1>
          <p className="text-xl text-gray-600">
            Take the first step toward living in alignment. Fill out the form below and we'll schedule your initial consultation.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="section bg-white pt-0">
        <div className="container-premium max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Honeypot field */}
            <div className="hidden">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                autoComplete="off"
                tabIndex={-1}
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div>
              <label htmlFor="programInterest" className="block text-sm font-medium mb-2">
                Program Interest *
              </label>
              <select
                id="programInterest"
                name="programInterest"
                required
                value={formData.programInterest}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors bg-white"
              >
                <option value="">Select a program</option>
                <option value="4-week">4-Week Private Alignment Program</option>
                <option value="1-1-session">1:1 Micro-Moment Mastery Session</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Tell us about your goals (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="What challenges are you facing? What would alignment look like for you?"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full btn btn-primary text-lg disabled:opacity-60"
              >
                {submitting ? 'Sending…' : 'Submit Application →'}
              </button>
            </div>

            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}

            <p className="text-sm text-gray-500 text-center">
              By submitting this form, you agree to be contacted by FUSCION regarding your inquiry.
            </p>
          </form>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section bg-gray-50">
        <div className="container-premium max-w-4xl">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            What to Expect Next
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold text-gray-300">1</div>
              <h3 className="text-xl font-semibold">We Review</h3>
              <p className="text-gray-600">
                We carefully review your application and assess fit for the program.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold text-gray-300">2</div>
              <h3 className="text-xl font-semibold">We Connect</h3>
              <p className="text-gray-600">
                We'll reach out within 24-48 hours to schedule your initial consultation.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold text-gray-300">3</div>
              <h3 className="text-xl font-semibold">We Begin</h3>
              <p className="text-gray-600">
                Your alignment journey starts with clarity, precision, and partnership.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
