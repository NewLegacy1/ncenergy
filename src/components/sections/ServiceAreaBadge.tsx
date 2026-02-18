"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SITE } from "@/constants/site";

export function ServiceAreaBadge() {
  return (
    <section className="section-padding bg-electric-grid bg-[var(--bg-dark)]">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Serving Hamilton & GTA
          </h2>
          <p className="text-[var(--charcoal-muted)] max-w-2xl mx-auto text-sm">
            We service homes and businesses across the Hamilton region and surrounding areas.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {SITE.serviceAreas.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-dark-card)] text-[var(--charcoal)] font-medium"
            >
              <Check className="h-4 w-4 text-[var(--brand-primary)] shrink-0" />
              {city}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
