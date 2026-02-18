"use client";

import { motion } from "framer-motion";
import { Sparkles, UserCheck, GraduationCap, DollarSign } from "lucide-react";
import { VALUES } from "@/constants/site";

const icons = [UserCheck, GraduationCap, DollarSign];

export function NCEDifference() {
  return (
    <section className="section-padding bg-electric-grid bg-[var(--bg-dark)]">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Homeowners Choose Us
          </h2>
          <p className="text-[var(--charcoal-muted)] max-w-2xl mx-auto text-sm">
            The difference is in the details — from the moment we arrive to the job
            well done.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {VALUES.map((value, i) => {
            const Icon = icons[i] ?? Sparkles;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-[var(--border-subtle)] p-8 bg-[var(--bg-dark-card)] hover:border-[var(--brand-primary)]/40 hover:shadow-[0_0_24px_var(--brand-primary-glow)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--brand-primary)]/20 flex items-center justify-center mb-6 border border-[var(--border-subtle)]">
                  <Icon className="h-7 w-7 text-[var(--brand-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-[var(--charcoal-muted)]">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
