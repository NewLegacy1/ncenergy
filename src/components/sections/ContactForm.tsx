"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/cta-buttons";
import { FORM_SERVICES } from "@/constants/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  };

  const inputClass =
    "w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-dark-card)] px-4 py-3 text-[var(--charcoal)] placeholder:text-[var(--charcoal-muted)] focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[var(--brand-primary)]/20 outline-none transition";

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-[var(--brand-primary)]/20 border border-[var(--border-subtle)] p-8 text-center"
      >
        <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-[var(--charcoal-muted)]">
          We&apos;ve received your message and will get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--charcoal)] mb-2">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--charcoal)] mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[var(--charcoal)] mb-2">
            Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputClass}
            placeholder="(905) 555-0123"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-[var(--charcoal)] mb-2">
            Service
          </label>
          <select
            id="service"
            name="service"
            className={`${inputClass} cursor-pointer`}
          >
            <option value="">Select Service</option>
            {FORM_SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--charcoal)] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your heating or cooling needs..."
        />
      </div>

      <GradientButton type="submit" size="lg" className="w-full sm:w-auto">
        Send Message
      </GradientButton>
    </motion.form>
  );
}
