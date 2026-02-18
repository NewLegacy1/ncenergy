"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { GradientOutlineButton } from "@/components/ui/cta-buttons";
import { SITE, WHY_CHOOSE } from "@/constants/site";

export function AboutPreview() {
  return (
    <section className="section-padding bg-electric-grid bg-[var(--bg-dark)]">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Northern Clean Energy
            </h2>
            <p className="text-[var(--charcoal-muted)] text-sm mb-6">
              We have the experience you are looking for. Serving Hamilton,
              Burlington, Oakville, Niagara and the surrounding area.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Over 15 years of expertise installing and repairing all makes and models of air conditioners and furnaces.",
                "Highly skilled technicians committed to meeting all your heating and cooling needs.",
                "Expert team with up-to-date knowledge in heating, cooling, and indoor air quality.",
                "Top-quality HVAC service at affordable prices, always with your best interests in mind.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="h-5 w-5 text-[var(--brand-primary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--charcoal)]">{item}</span>
                </li>
              ))}
            </ul>
            <GradientOutlineButton href="/about" showPhoneIcon={false} size="md">
              Learn More
            </GradientOutlineButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 border border-[var(--border-subtle)] bg-[var(--bg-dark-card)]"
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Why Choose Northern Clean Energy
            </h3>
            <p className="text-[var(--charcoal-muted)] mb-6">
              To guarantee you the best possible service or installation
              experience, all our technicians are certified and have undergone a
              complete background check.
            </p>
            <ul className="space-y-3">
              {WHY_CHOOSE.map((item) => (
                <li key={item} className="flex gap-3 items-center">
                  <Check className="h-5 w-5 text-[var(--brand-primary)] shrink-0" />
                  <span className="text-[var(--charcoal)] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
