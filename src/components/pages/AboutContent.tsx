"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { CallButton } from "@/components/ui/cta-buttons";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialGrid } from "@/components/sections/TestimonialGrid";
import { ABOUT } from "@/constants/about";
import { VALUES } from "@/constants/site";

export function AboutContent() {
  return (
    <>
      <section className="pt-32 pb-16 bg-electric-grid bg-[var(--bg-dark)]">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Northern Clean Energy
            </h1>
            <p className="text-sm text-[var(--charcoal-muted)] mb-8">
              {ABOUT.headline}
            </p>
            <p className="text-sm text-[var(--charcoal)] leading-relaxed mb-8">
              {ABOUT.story}
            </p>

            <h2 className="text-xl font-bold text-white mb-4">
              For you the customer it is important to know:
            </h2>
            <ul className="space-y-4 mb-12">
              {ABOUT.customerPoints.map((point, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="h-5 w-5 text-[var(--brand-primary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--charcoal)]">{point}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">
              {ABOUT.teamHeadline}
            </h2>
            <p className="text-[var(--charcoal-muted)] mb-6">{ABOUT.teamDesc}</p>
            <CallButton size="md" />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-electric-grid bg-[var(--bg-dark)]">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-[var(--border-subtle)] p-8 bg-[var(--bg-dark-card)]"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-[var(--charcoal-muted)]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialGrid limit={3} />
      <CTASection />
    </>
  );
}
