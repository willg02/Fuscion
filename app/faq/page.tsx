'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    question: "What makes FUSCION different from other wellness programs?",
    answer: "FUSCION is not a wellness program, coaching, or therapy. It's alignment medicine — a precision system that integrates medical science, behavioral intelligence, and your personal story into micro-moment strategies designed for your real life. We work 1:1, privately, with the expertise of a board-certified physician."
  },
  {
    question: "Who is this for?",
    answer: "FUSCION is designed for high-performing individuals — executives, physicians, entrepreneurs, leaders, and creators — who understand health but struggle with consistency. You're successful everywhere except your health habits, and you want a private, intelligent guide to close the knowing-doing gap."
  },
  {
    question: "Do I need to have lab work done?",
    answer: "Lab work is helpful but not required. If you have recent labs, we can interpret them as part of your alignment assessment. If not, we can guide you on what might be beneficial to explore."
  },
  {
    question: "How long does the program take?",
    answer: "The signature 4-Week Private Alignment Program includes four 90-minute sessions over 30 days. We also offer single 1:1 Micro-Moment Mastery Sessions for focused breakthroughs."
  },
  {
    question: "Is this done in person or virtually?",
    answer: "All sessions are conducted virtually via secure video, allowing for privacy, convenience, and geographic flexibility."
  },
  {
    question: "What is the Presence Method™?",
    answer: "The Presence Method™ is a 3-step practice we teach: Notice, Pause, Choose. It's the tool that allows you to interrupt autopilot reactions and select aligned actions in real time. It's simple, powerful, and transformational."
  },
  {
    question: "Will I be given a meal plan or workout routine?",
    answer: "We don't provide generic meal plans or workout templates. Instead, we create personalized micro-moment strategies based on your biology, behavior patterns, and life context. The goal is alignment, not compliance."
  },
  {
    question: "How do I get started?",
    answer: "Click 'Start' to schedule an initial conversation. We'll discuss your goals, assess fit, and determine the best path forward for your alignment journey."
  },
  {
    question: "What is the investment?",
    answer: "FUSCION is a premium, private service. Investment details are provided during your initial consultation based on the program that best fits your needs."
  },
  {
    question: "Is this covered by insurance?",
    answer: "FUSCION is a private-pay service and is not covered by insurance. We focus on personalized, precision guidance that goes beyond traditional medical care."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* HEADER */}
      <section className="section bg-white pt-32">
        <div className="container-premium max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about FUSCION.
          </p>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="section bg-white">
        <div className="container-premium max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg md:text-xl font-medium pr-8">{faq.question}</span>
                  <span className="text-2xl flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50">
        <div className="container-premium max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help. Reach out and we'll get back to you promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start"
              className="btn btn-primary text-lg"
            >
              Get Started →
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
