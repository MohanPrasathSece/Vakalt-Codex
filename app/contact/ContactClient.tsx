"use client";

import { useState } from "react";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
      <form
        className="space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div>
          <label className="text-xs uppercase tracking-wide text-charcoal">
            Full name
          </label>
          <input
            required
            className="mt-2 w-full border border-line px-4 py-3 text-sm focus:border-ink focus:outline-none"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-charcoal">
            Email address
          </label>
          <input
            type="email"
            required
            className="mt-2 w-full border border-line px-4 py-3 text-sm focus:border-ink focus:outline-none"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-charcoal">
            Practice area
          </label>
          <select className="mt-2 w-full border border-line px-4 py-3 text-sm focus:border-ink focus:outline-none">
            <option>Corporate Law</option>
            <option>Civil Litigation</option>
            <option>Criminal Law</option>
            <option>Property & Real Estate</option>
            <option>Family Law</option>
            <option>Intellectual Property</option>
          </select>
        </div>
        <div>
          <label className="text-xs uppercase tracking-wide text-charcoal">
            Message
          </label>
          <textarea
            rows={5}
            className="mt-2 w-full border border-line px-4 py-3 text-sm focus:border-ink focus:outline-none"
            placeholder="Briefly describe your legal need."
          />
        </div>
        <button
          type="submit"
          className="bg-ink px-8 py-3 text-xs uppercase tracking-wide text-white transition hover:bg-charcoal"
        >
          Request Consultation
        </button>
      </form>
      <div className="space-y-6 border-l border-line pl-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
            Contact
          </p>
          <p className="mt-3 text-lg text-ink">consult@vakalt.com</p>
          <p className="text-charcoal">+971 000 000 000</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
            WhatsApp
          </p>
          <p className="text-charcoal">Integration placeholder</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal">
            Offices
          </p>
          <p className="text-charcoal">Dubai • London • Singapore</p>
        </div>
        <div className="rounded-2xl border border-line bg-mist p-6 text-sm text-charcoal">
          {submitted ? (
            <p>
              Thank you. A VAKALT strategist will respond within 24 hours with a
              tailored action plan.
            </p>
          ) : (
            <p>
              Submit your consultation request and receive a confidential legal
              review.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
